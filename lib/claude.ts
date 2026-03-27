import Anthropic from '@anthropic-ai/sdk'
import type { Question, QuestionTemplate, Category, Difficulty, QuizLevel } from '@/types'
import { QUESTION_TEMPLATES, ALL_INDUSTRIES } from '@/lib/templates'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const MODEL = 'claude-sonnet-4-6'

// ─── 問題生成プロンプト ────────────────────────────────────────

function buildPrompt(
  template: QuestionTemplate,
  usedIndustries: string[],
): string {
  // 使用可能な業種を絞り込む
  const availableIndustries = template.variableSlots.industries.length > 1
    ? template.variableSlots.industries.filter((i) => !usedIndustries.includes(i))
    : template.variableSlots.industries

  const industry = availableIndustries.length > 0
    ? availableIndustries[Math.floor(Math.random() * availableIndustries.length)]
    : ALL_INDUSTRIES.find((i) => !usedIndustries.includes(i)) ?? '一般企業'

  const role = template.variableSlots.roles[
    Math.floor(Math.random() * template.variableSlots.roles.length)
  ]
  const task = template.variableSlots.tasks[
    Math.floor(Math.random() * template.variableSlots.tasks.length)
  ]

  const difficultyGuide: Record<Difficulty, string> = template.level === 'beginner'
    ? {
        easy:   '正答率90%以上を目標。AIをまったく知らない人でも答えられる超基礎問題。難しい言葉は使わない。',
        medium: '正答率70%前後を目標。AIに興味を持ち始めた人向けの問題。具体的なツール名や日常的な活用例を含む。',
        hard:   '正答率50%前後を目標。AIを少し使い始めた人向けの問題。用語や注意点についての理解を問う。',
      }
    : {
        easy:   '正答率85%以上を目標。AIを使い始めたばかりの初心者でも答えられる基礎知識問題。専門用語は使わない。',
        medium: '正答率60%前後を目標。AIを少し使ったことがある人向けの実践問題。具体的なツール名や使い方が含まれる。',
        hard:   '正答率40%前後を目標。AIをある程度使いこなしている人向けの応用問題。より深い活用法や注意点を問う。',
      }

  return `あなたはAIリテラシーテストの問題作成専門家です。
以下の仕様に従い、日本のビジネスパーソン向け問題を1問作成してください。

【仕様】
- カテゴリ: ${template.schema}
- 難易度: ${template.difficulty}（${difficultyGuide[template.difficulty]}）
- 業種シナリオ: ${industry}
- 職種: ${role}
- 業務タスク: ${task}
- 正答の方向性: ${template.correctAnswerPattern}

【制約】
- 問題文は80文字以内
- 選択肢は4択（各40文字以内）
- 正解以外の選択肢は「一見もっともらしいが誤り」であること
- 業務の具体的シナリオを含めてリアリティを持たせること
- 専門用語は文脈から意味が推測できる範囲で使用すること

【出力形式】
以下のJSONのみを出力すること（前置き・後置き・コードブロック記号は不要）:
{
  "question": "問題文",
  "options": ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
  "correctIndex": 正解のインデックス（0〜3の整数）,
  "explanation": "解説文（60文字以内）",
  "industryUsed": "${industry}"
}

【Few-shot 参考例】
{
  "question": "${industry}の${role}がAIチャットボットを顧客対応に導入する際、最も望ましいアプローチはどれですか？",
  "options": [
    "全問い合わせをAIで完結させ人件費を削減する",
    "定型FAQはAIが担当し複雑・感情的対応は人間にエスカレーションする",
    "AIは信頼性が低いため社内テスト専用とする",
    "AI回答を全て人間が事前承認してから送信する"
  ],
  "correctIndex": 1,
  "explanation": "AIと人間の役割分担が重要。定型業務はAI、判断・共感が必要な場面は人間が担う設計が最適。",
  "industryUsed": "${industry}"
}`
}

// ─── 単一問題の生成 ────────────────────────────────────────────

export async function generateQuestion(
  template: QuestionTemplate,
  usedIndustries: string[],
  retryCount = 0,
): Promise<Question | null> {
  try {
    const response = await client.messages.create({
      model:      MODEL,
      max_tokens: 800,
      messages: [
        {
          role:    'user',
          content: buildPrompt(template, usedIndustries),
        },
      ],
    })

    const text = response.content
      .filter((b) => b.type === 'text')
      .map((b) => b.text)
      .join('')
      .trim()

    // JSONパース
    const parsed = JSON.parse(text)

    // バリデーション
    if (
      typeof parsed.question !== 'string' ||
      !Array.isArray(parsed.options) ||
      parsed.options.length !== 4 ||
      typeof parsed.correctIndex !== 'number' ||
      parsed.correctIndex < 0 ||
      parsed.correctIndex > 3 ||
      typeof parsed.explanation !== 'string'
    ) {
      throw new Error('Invalid response structure')
    }

    // 選択肢シャッフル
    const shuffled = shuffleOptionsWithCorrect(parsed.options, parsed.correctIndex)

    return {
      id:           `${template.id}-${Date.now()}`,
      category:     template.category,
      difficulty:   template.difficulty,
      question:     parsed.question,
      options:      shuffled.options,
      correctIndex: shuffled.newCorrectIndex,
      explanation:  parsed.explanation,
      templateId:   template.id,
      industryUsed: parsed.industryUsed,
    }
  } catch (err: unknown) {
    const status = (err as { status?: number })?.status

    // 529 Overloaded / 529 系は待ってからリトライ（指数バックオフ）
    if (status === 529 || status === 529) {
      if (retryCount < 3) {
        const waitMs = 1000 * 2 ** retryCount   // 1s → 2s → 4s
        console.warn(`API overloaded. Retrying in ${waitMs}ms... (attempt ${retryCount + 1})`)
        await new Promise((resolve) => setTimeout(resolve, waitMs))
        return generateQuestion(template, usedIndustries, retryCount + 1)
      }
    }

    console.error(`Question generation failed (attempt ${retryCount + 1}):`, err)

    // その他エラーは最大2回リトライ
    if (retryCount < 2) {
      return generateQuestion(template, usedIndustries, retryCount + 1)
    }

    return null
  }
}

// ─── 12問を4カテゴリ並列生成 ──────────────────────────────────

/**
 * 12問セットを並列生成する
 * - 各カテゴリから easy×1, medium×1, hard×1 を選択
 * - 生成失敗時は fallbackQuestions から補完
 */
export async function generateQuestionSet(
  usedIndustries: string[] = [],
  level: QuizLevel = 'intermediate',
): Promise<{ questions: Question[]; industriesUsed: string[] }> {
  const categories: Array<Question['category']> = [
    'knowledge', 'practice', 'ethics', 'future',
  ]

  // 初心者編: easy×2 + medium×1（hard は出さない）
  // 中級者編: easy×1 + medium×1 + hard×1（全難易度から1問ずつ）
  const difficulties: Difficulty[] = level === 'beginner'
    ? ['easy', 'easy', 'medium']
    : ['easy', 'medium', 'hard']

  // 各カテゴリ × 難易度のテンプレートをランダムに選択（levelでフィルタ）
  const selectedTemplates = categories.flatMap((cat) =>
    difficulties.map((diff) => {
      const pool = QUESTION_TEMPLATES.filter(
        (t) => t.level === level && t.category === cat && t.difficulty === diff,
      )
      return pool[Math.floor(Math.random() * pool.length)]
    }),
  )

  // 並列生成（同時リクエスト数を4に制限して Overloaded を防ぐ）
  const CONCURRENCY = 4
  const results: (Question | null)[] = []
  for (let i = 0; i < selectedTemplates.length; i += CONCURRENCY) {
    const batch = selectedTemplates.slice(i, i + CONCURRENCY)
    const batchResults = await Promise.all(
      batch.map((tmpl) => generateQuestion(tmpl, usedIndustries)),
    )
    results.push(...batchResults)
  }

  // 生成失敗分をフォールバックで補完
  const questions: Question[] = results.map((q, i) => {
    if (q) return q
    // フォールバック：静的問題から補完
    return getFallbackQuestion(
      selectedTemplates[i].category,
      selectedTemplates[i].difficulty,
    )
  })

  const industriesUsed = questions
    .map((q) => q.industryUsed)
    .filter((i): i is string => Boolean(i))

  return { questions, industriesUsed }
}

// ─── 選択肢シャッフル ─────────────────────────────────────────

function shuffleOptionsWithCorrect(
  options: string[],
  correctIndex: number,
): { options: string[]; newCorrectIndex: number } {
  const correctAnswer = options[correctIndex]
  const shuffled = [...options]

  // Fisher-Yates shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return {
    options:        shuffled,
    newCorrectIndex: shuffled.indexOf(correctAnswer),
  }
}

// ─── フォールバック問題（AI生成失敗時） ───────────────────────

function getFallbackQuestion(
  category: Category,
  difficulty: Difficulty,
): Question {
  // 静的に用意しておいた予備問題（最低限の品質保証）
  const FALLBACKS: Record<Category, Record<Difficulty, Omit<Question, 'id'>>> = {
    knowledge: {
      easy: {
        category:    'knowledge',
        difficulty:  'easy',
        question:    'AIに送る「指示文・質問文」のことを何と呼びますか？',
        options: [
          'スクリプト',
          'プロンプト',
          'コマンド',
          'クエリ',
        ],
        correctIndex: 1,
        explanation:  'AIへの指示文・質問文を「プロンプト」と呼びます。プロンプトの質が回答の質を左右します。',
        templateId:   'FALLBACK',
      },
      medium: {
        category:    'knowledge',
        difficulty:  'medium',
        question:    'パワーポイントのスライド作成を得意とするAIツールはどれですか？',
        options: [
          'ChatGPT（テキスト版）',
          'Microsoft Copilot / Canva AI',
          'Stable Diffusion',
          'Whisper',
        ],
        correctIndex: 1,
        explanation:  'Microsoft CopilotやCanva AIはスライド・プレゼン資料の自動生成が得意なAIツールです。',
        templateId:   'FALLBACK',
      },
      hard: {
        category:    'knowledge',
        difficulty:  'hard',
        question:    'AIが事実と異なる情報を自信満々に出力する現象を何と言いますか？',
        options: [
          'バグ',
          'ハルシネーション（幻覚）',
          'オーバーフィッティング',
          'ラグ',
        ],
        correctIndex: 1,
        explanation:  'ハルシネーションはAIが誤情報を正しいかのように出力する現象。重要情報は必ず確認が必要です。',
        templateId:   'FALLBACK',
      },
    },
    practice: {
      easy: {
        category:    'practice',
        difficulty:  'easy',
        question:    'AIにより良い回答をもらうために最も効果的な指示はどれですか？',
        options: [
          '「メールを書いて」',
          '「取引先への謝罪メールを丁寧な敬語で、原因と対策を含め200字程度で書いて」',
          '「良いメールを教えて」',
          '「メールとは何か教えて」',
        ],
        correctIndex: 1,
        explanation:  '目的・対象・形式・文字数を具体的に伝えるほどAIの出力品質が上がります。',
        templateId:   'FALLBACK',
      },
      medium: {
        category:    'practice',
        difficulty:  'medium',
        question:    'AIにより深い分析をしてもらうための指示として最も効果的なものはどれですか？',
        options: [
          '「分析して」',
          '「マーケティング専門家の視点で、理由を3つ挙げながら分析して」',
          '「詳しく教えて」',
          '「もっと考えて」',
        ],
        correctIndex: 1,
        explanation:  '役割指定（専門家として）＋構造指示（理由を3つ）でAIの分析精度が上がります。',
        templateId:   'FALLBACK',
      },
      hard: {
        category:    'practice',
        difficulty:  'hard',
        question:    'AIの最初の回答が物足りないとき、次にすべき最善の行動はどれですか？',
        options: [
          '諦めて別のAIツールを使う',
          '「もっと具体的に」「別の視点で」など追加指示を送る',
          '同じ質問をもう一度送る',
          'AIの回答をそのまま使う',
        ],
        correctIndex: 1,
        explanation:  'AIとの会話は続けられます。「より詳しく」「箇条書きで」など追加指示で回答を改善できます。',
        templateId:   'FALLBACK',
      },
    },
    ethics: {
      easy: {
        category:    'ethics',
        difficulty:  'easy',
        question:    'AIチャットツールを使う際に入力してはいけない情報はどれですか？',
        options: [
          '一般的な質問や相談',
          '顧客の個人情報や社内の機密情報',
          '公開されているニュースの要約依頼',
          'ビジネスメールの下書き依頼',
        ],
        correctIndex: 1,
        explanation:  '個人情報・機密情報を外部AIに入力すると情報漏洩につながります。会社のルールも確認しましょう。',
        templateId:   'FALLBACK',
      },
      medium: {
        category:    'ethics',
        difficulty:  'medium',
        question:    'AIが苦手とする業務として最も適切なものはどれですか？',
        options: [
          'メールの文章を要約する',
          '今日の株価や最新ニュースをリアルタイムで調べる',
          'アイデアをブレインストーミングする',
          '英文メールを日本語に翻訳する',
        ],
        correctIndex: 1,
        explanation:  'AIの知識には学習時点の制限があり、リアルタイム情報の取得は基本的に苦手です。',
        templateId:   'FALLBACK',
      },
      hard: {
        category:    'ethics',
        difficulty:  'hard',
        question:    'AIが作成した文章を仕事で使う際の正しい姿勢はどれですか？',
        options: [
          '完璧なので確認なしでそのまま提出する',
          '内容の正確性を確認し、必要に応じて修正してから使う',
          'AIが作ったと明示すれば確認は不要',
          'AIの文章は使ってはいけない',
        ],
        correctIndex: 1,
        explanation:  'AI出力は誤りを含む場合があります。内容確認・修正は人間の責任です。',
        templateId:   'FALLBACK',
      },
    },
    future: {
      easy: {
        category:    'future',
        difficulty:  'easy',
        question:    'AIを使ったことがない人が最初に試すのに最も適した活用法はどれですか？',
        options: [
          'AIでシステム開発をする',
          'ChatGPTに日常的な質問や文章の下書きを頼んでみる',
          'AIで株式投資の自動売買をする',
          'AIで会社の基幹システムを置き換える',
        ],
        correctIndex: 1,
        explanation:  'まずは日常の文章作成・質問・要約など身近な用途から試すのが上達の近道です。',
        templateId:   'FALLBACK',
      },
      medium: {
        category:    'future',
        difficulty:  'medium',
        question:    'AIと人間が上手に協力する仕事の分担として最も適切なものはどれですか？',
        options: [
          '全ての仕事をAIに任せる',
          'AIが下書き・整理を担当し、人間が確認・判断・最終決定を担う',
          '人間だけで全て行いAIは使わない',
          'AIの判断を必ず最優先にする',
        ],
        correctIndex: 1,
        explanation:  'AIは補助ツールです。下書きや情報整理はAIに任せ、最終判断は人間が行うのがベストです。',
        templateId:   'FALLBACK',
      },
      hard: {
        category:    'future',
        difficulty:  'hard',
        question:    '職場のメンバーにAIツールを広める際の最も効果的なアプローチはどれですか？',
        options: [
          '全員に一斉に難しいツールを導入する',
          '小さな成功事例を共有し、簡単なツールから試してもらう',
          'AI活用は個人の自由に任せ組織としては何もしない',
          'まず全員にAI研修を1週間受けさせてから使わせる',
        ],
        correctIndex: 1,
        explanation:  '小さな成功体験の共有と低ハードルのツールから始めることがAI普及の近道です。',
        templateId:   'FALLBACK',
      },
    },
  }

  const fallback = FALLBACKS[category][difficulty]
  return {
    ...fallback,
    id: `FALLBACK-${category}-${difficulty}-${Date.now()}`,
  }
}
