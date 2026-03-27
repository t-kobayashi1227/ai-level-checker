import type { ScoreResult, ProfileType, Category } from '@/types'
import { CATEGORY_LABELS, LEVEL_CONFIG } from '@/types'

/**
 * スコアに基づく講評文を生成する
 * Phase 1: テンプレートベース（静的生成）
 * Phase 2 以降: Claude API で動的生成に切り替え可能
 */
export function generateCommentary(score: ScoreResult): string {
  const levelCfg  = LEVEL_CONFIG[score.level]
  const strongest = CATEGORY_LABELS[score.strongestCategory]
  const weakest   = CATEGORY_LABELS[score.weakestCategory]

  const intro     = buildIntro(score)
  const strength  = buildStrengthComment(score.strongestCategory, score.categories[score.strongestCategory])
  const growth    = buildGrowthComment(score.weakestCategory, score.categories[score.weakestCategory])
  const action    = buildActionStep(score.profileType, score.level)

  return [intro, strength, growth, action].join('\n\n')
}

// ─── 各パーツのビルダー ────────────────────────────────────────

function buildIntro(score: ScoreResult): string {
  const levelCfg = LEVEL_CONFIG[score.level]
  const messages: Record<ScoreResult['level'], string> = {
    beginner:     `総合スコアは${score.total}点。AIの世界への第一歩を踏み出したところです。ここからの成長がとても楽しみです！`,
    explorer:     `総合スコアは${score.total}点。AIへの関心と基礎が育ってきています。次のステップに進む準備ができています。`,
    practitioner: `総合スコアは${score.total}点。AIを実務で活用できる力が着実についています。多くのビジネスパーソンより一歩先を行っています。`,
    advisor:      `総合スコアは${score.total}点。AI活用の深い理解を持つ上位層です。周囲へのアドバイスや組織への貢献が期待できます。`,
    master:       `総合スコアは${score.total}点。AIリテラシーの最高水準に達しています。次世代のAI活用をリードする存在です。`,
  }
  return messages[score.level]
}

function buildStrengthComment(category: Category, catScore: number): string {
  const label = CATEGORY_LABELS[category]
  const comments: Record<Category, string[]> = {
    knowledge: [
      `特に「${label}」が${catScore}点と際立っています。AIの仕組みへの深い理解が、より高度な活用の土台になります。`,
      `「${label}」スコアが${catScore}点と高く、AIの基礎理論をしっかり押さえています。この知識は現場での判断力につながります。`,
    ],
    practice: [
      `「${label}」が${catScore}点と高く、AI活用の実践力が光ります。この経験値は組織内でのAIリード役として活きるでしょう。`,
      `「${label}」${catScore}点は素晴らしい。AIを道具として使いこなすセンスを持っています。`,
    ],
    ethics: [
      `「${label}」が${catScore}点と高く、AIのリスクと責任を正しく理解しています。この視点は組織のAIガバナンスに大きく貢献できます。`,
      `「${label}」${catScore}点。AIの恩恵だけでなくリスクも見据えた成熟した判断力があります。`,
    ],
    future: [
      `「${label}」が${catScore}点と高く、AI時代を見据えた前向きな姿勢が評価されます。変化をチャンスとして捉える力があります。`,
      `「${label}」${catScore}点。AI共存社会への準備ができており、組織変革をリードできる素養があります。`,
    ],
  }
  const pool = comments[category]
  return pool[Math.floor(Math.random() * pool.length)]
}

function buildGrowthComment(category: Category, catScore: number): string {
  const label = CATEGORY_LABELS[category]
  const growths: Record<Category, string> = {
    knowledge: `「${label}」（${catScore}点）が伸びしろです。AIの仕組みへの理解を深めることで、活用の幅が一気に広がります。まずはAI入門書1冊の読破がおすすめです。`,
    practice:  `「${label}」（${catScore}点）が成長の余地です。知識を行動に変えることが次のステップ。今週から1つの業務にAIを試してみましょう。`,
    ethics:    `「${label}」（${catScore}点）を伸ばすことで、さらに信頼されるAI活用者になれます。情報セキュリティポリシーとAI利用ガイドラインの確認から始めましょう。`,
    future:    `「${label}」（${catScore}点）は今後の重要テーマです。AIが変える業界動向を定期的にインプットし、長期的な視野を養うことをおすすめします。`,
  }
  return growths[category]
}

function buildActionStep(profileType: ProfileType, level: ScoreResult['level']): string {
  const actions: Record<ProfileType, string> = {
    theorist:         '知識を実践に変えるチャンスです。まずはChatGPTで日常業務の1つを試してみましょう。議事録の要約や企画書のたたき台作成から始めると効果的です。',
    practitioner:     '実践力が高い！次は基礎知識の補強でさらに飛躍できます。AIの仕組みを理解することで、プロンプトの質が格段に上がります。',
    ethicist:         'AIリスクへの意識が高い強みをぜひ組織に活かしてください。社内のAI利用ガイドライン策定や研修の担当者として貢献できます。',
    'future-oriented': '未来志向の強みを活かし、組織のAI戦略立案に積極的に参加してみましょう。具体的な活用事例を一つ作ることで、周囲を引っ張れます。',
    balanced:         'バランスが整っています。次のレベルへの近道は、最も興味のある1分野を深掘りすること。得意を伸ばす戦略が最も効果的です。',
  }
  return `【次のアクション】${actions[profileType]}`
}
