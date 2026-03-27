import type { QuestionTemplate } from '@/types'

export const QUESTION_TEMPLATES: QuestionTemplate[] = [

  // ════════════════════════════════════════════════════════════════════
  // 【初心者編】カテゴリA：知識・理解
  // easy×12 / medium×10 / hard×4
  // ════════════════════════════════════════════════════════════════════

  // ── easy ─────────────────────────────────────────────────────────
  {
    id: 'BEG-A-EASY-001', level: 'beginner', category: 'knowledge', difficulty: 'easy',
    schema: 'ChatGPTとは何かを問う最基礎問題',
    correctAnswerPattern: 'ChatGPTはOpenAIが作ったAIチャットツール。テキストで話しかけると自然な文章で返してくれる',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI入門'] }
  },

  {
    id: 'BEG-A-EASY-002', level: 'beginner', category: 'knowledge', difficulty: 'easy',
    schema: '生成AIとは何かを問う基礎問題',
    correctAnswerPattern: '生成AIとは文章・画像・音声などを新しく作り出せるAIのこと。ChatGPTやClaudeが代表例',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI入門'] }
  },

  {
    id: 'BEG-A-EASY-003', level: 'beginner', category: 'knowledge', difficulty: 'easy',
    schema: 'ClaudeはどこのAIかを問う問題',
    correctAnswerPattern: 'ClaudeはAnthropicが開発したAIアシスタント。長い文章の読み書きや丁寧な対話が得意',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['ツール知識'] }
  },

  {
    id: 'BEG-A-EASY-004', level: 'beginner', category: 'knowledge', difficulty: 'easy',
    schema: 'GeminiはどこのAIかを問う問題',
    correctAnswerPattern: 'GeminiはGoogleが開発したAI。GoogleドキュメントやGmailと連携して使えるのが特徴',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['ツール知識'] }
  },

  {
    id: 'BEG-A-EASY-005', level: 'beginner', category: 'knowledge', difficulty: 'easy',
    schema: 'Microsoft Copilotとはどんなツールかを問う問題',
    correctAnswerPattern: 'Microsoft CopilotはMicrosoftが提供するAIアシスタント。WordやExcel・Outlookなどと連携して使える',
    variableSlots: { industries: ['ビジネス全般'], roles: ['会社員'], tasks: ['ツール知識'] }
  },

  {
    id: 'BEG-A-EASY-006', level: 'beginner', category: 'knowledge', difficulty: 'easy',
    schema: 'AIと普通のアプリ（電卓・カレンダー）の違いを問う問題',
    correctAnswerPattern: 'AIはデータから学習して応答を生成する。電卓のように決まったルールで動くプログラムとは異なる',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI入門'] }
  },

  {
    id: 'BEG-A-EASY-007', level: 'beginner', category: 'knowledge', difficulty: 'easy',
    schema: 'Midjourneyが得意なことを問う問題',
    correctAnswerPattern: 'Midjourneyはテキストを入力するだけで高品質な画像やイラストを生成できるAIツール',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['ツール知識'] }
  },

  {
    id: 'BEG-A-EASY-008', level: 'beginner', category: 'knowledge', difficulty: 'easy',
    schema: 'AIは何を使って学習しているかを問う基礎問題',
    correctAnswerPattern: 'AIはインターネット上の大量のテキスト・画像・動画などのデータを使って学習している',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI入門'] }
  },

  {
    id: 'BEG-A-EASY-009', level: 'beginner', category: 'knowledge', difficulty: 'easy',
    schema: 'SiriやGoogleアシスタントもAIかを問う問題',
    correctAnswerPattern: 'SiriやGoogleアシスタント・Alexaなどの音声アシスタントもAIの一種。音声を認識して指示に応える',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI入門'] }
  },

  {
    id: 'BEG-A-EASY-010', level: 'beginner', category: 'knowledge', difficulty: 'easy',
    schema: 'AIは感情や意識を持つかを問う問題',
    correctAnswerPattern: 'AIは感情や意識を持たず、データのパターンから回答を生成する。人間のような「考える」とは異なる',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI入門'] }
  },

  {
    id: 'BEG-A-EASY-011', level: 'beginner', category: 'knowledge', difficulty: 'easy',
    schema: 'ChatGPTは無料で使えるかを問う問題',
    correctAnswerPattern: 'ChatGPTは基本機能は無料で使える。より高性能な機能は有料プランが必要',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI入門'] }
  },

  {
    id: 'BEG-A-EASY-012', level: 'beginner', category: 'knowledge', difficulty: 'easy',
    schema: 'AIとロボットの違いを問う問題',
    correctAnswerPattern: 'AIはソフトウェア（プログラム）、ロボットは物理的な機械。AIがロボットを動かすこともある',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI入門'] }
  },

  {
    id: 'BEG-A-EASY-013', level: 'beginner', category: 'knowledge', difficulty: 'easy',
    schema: 'GammaはどんなAIツールかを問う問題',
    correctAnswerPattern: 'Gamma（ガンマ）はテキストを入力するだけでスライドを自動生成できるAIツール。無料から使えてプレゼン作成が劇的に速くなる',
    variableSlots: { industries: ['一般'], roles: ['初心者', '会社員'], tasks: ['ツール知識'] }
  },

  {
    id: 'BEG-A-EASY-014', level: 'beginner', category: 'knowledge', difficulty: 'easy',
    schema: 'Canvaとは何かを問う問題（AIデザインツール）',
    correctAnswerPattern: 'CanvaはデザインツールにAIが組み込まれたサービス。テンプレートを選んでAIにテキストや画像を生成させてデザインが作れる',
    variableSlots: { industries: ['一般', '広告', '小売'], roles: ['初心者', 'マーケター'], tasks: ['デザイン', 'SNS投稿'] }
  },

  {
    id: 'BEG-A-EASY-015', level: 'beginner', category: 'knowledge', difficulty: 'easy',
    schema: 'AIは日本語で使えるかを問う問題',
    correctAnswerPattern: 'ChatGPT・Claude・Geminiなど主要なAIは日本語で質問しても日本語で答えてくれる。英語が苦手でも問題なく使える',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI入門'] }
  },

  // ── medium ───────────────────────────────────────────────────────
  {
    id: 'BEG-A-MED-001', level: 'beginner', category: 'knowledge', difficulty: 'medium',
    schema: 'ChatGPT・Claude・Geminiの開発会社の識別',
    correctAnswerPattern: 'ChatGPT=OpenAI、Claude=Anthropic、Gemini=Google。それぞれ別の会社が開発している',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['ツール知識'] }
  },

  {
    id: 'BEG-A-MED-002', level: 'beginner', category: 'knowledge', difficulty: 'medium',
    schema: 'ChatGPTの無料版と有料版（Plus）の主な違い',
    correctAnswerPattern: '無料版はGPT-4oが使えるが利用回数に制限あり。有料版（Plus）は上限が緩く画像生成・ファイル読み込み・プラグインなど高機能が使いやすい',
    variableSlots: { industries: ['一般'], roles: ['一般ユーザー'], tasks: ['ツール選択'] }
  },

  {
    id: 'BEG-A-MED-003', level: 'beginner', category: 'knowledge', difficulty: 'medium',
    schema: 'AIがなぜ間違えることがあるのか（学習データの限界）',
    correctAnswerPattern: 'AIは過去のデータで学習しているため、最新情報や学習していない分野は間違えることがある',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI理解'] }
  },

  {
    id: 'BEG-A-MED-004', level: 'beginner', category: 'knowledge', difficulty: 'medium',
    schema: 'Perplexity AIの特徴（最新情報をWeb検索しながら回答）',
    correctAnswerPattern: 'Perplexity AIはリアルタイムでWebを検索しながら回答するため、最新情報を調べるのに向いている',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['情報収集'] }
  },

  {
    id: 'BEG-A-MED-005', level: 'beginner', category: 'knowledge', difficulty: 'medium',
    schema: 'テキスト生成AIと画像生成AIの使い分け',
    correctAnswerPattern: '文章・メール・企画書はChatGPT/Claude、画像・イラスト・デザインはMidjourney/DALL-Eを使う',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['ツール選択'] }
  },

  {
    id: 'BEG-A-MED-006', level: 'beginner', category: 'knowledge', difficulty: 'medium',
    schema: 'NotebookLM（Google）の特徴を問う問題',
    correctAnswerPattern: 'NotebookLMはPDFや文書をアップロードしてその内容についてAIと会話できるGoogleのツール',
    variableSlots: { industries: ['一般'], roles: ['学生', '社会人'], tasks: ['資料活用', '学習'] }
  },

  {
    id: 'BEG-A-MED-007', level: 'beginner', category: 'knowledge', difficulty: 'medium',
    schema: 'AIはリアルタイムのWeb情報を知っているかを問う問題',
    correctAnswerPattern: '通常のChatGPTなどは学習データの締め切り日があり、最新ニュースや今日の天気は知らない場合がある',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['情報収集'] }
  },

  {
    id: 'BEG-A-MED-008', level: 'beginner', category: 'knowledge', difficulty: 'medium',
    schema: 'DeepLとChatGPTの翻訳の違いを問う問題',
    correctAnswerPattern: 'DeepLは翻訳専門で高精度。ChatGPTは翻訳＋文体調整・ニュアンス追加などの応用が得意',
    variableSlots: { industries: ['ビジネス全般'], roles: ['会社員'], tasks: ['翻訳'] }
  },

  {
    id: 'BEG-A-MED-009', level: 'beginner', category: 'knowledge', difficulty: 'medium',
    schema: 'AIに同じ質問をしても毎回違う回答が出る理由を問う問題',
    correctAnswerPattern: 'AIは確率的に次の言葉を選んで生成するため、同じ質問でも毎回少し異なる回答が出ることがある',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI理解'] }
  },

  {
    id: 'BEG-A-MED-010', level: 'beginner', category: 'knowledge', difficulty: 'medium',
    schema: 'Microsoft CopilotはどのAIモデルをベースにしているか',
    correctAnswerPattern: 'Microsoft CopilotはOpenAIのGPTモデルをベースに使っている。WordやExcelに組み込まれている',
    variableSlots: { industries: ['ビジネス全般'], roles: ['会社員'], tasks: ['ツール知識'] }
  },

  // ── hard ─────────────────────────────────────────────────────────
  {
    id: 'BEG-A-HARD-001', level: 'beginner', category: 'knowledge', difficulty: 'medium',
    schema: 'LLM（大規模言語モデル）とは何かを問う問題',
    correctAnswerPattern: 'LLM（Large Language Model）とは大量のテキストデータで学習したAI。ChatGPTなどの基盤技術',
    variableSlots: { industries: ['一般'], roles: ['AI入門者'], tasks: ['用語理解'] }
  },

  {
    id: 'BEG-A-HARD-002', level: 'beginner', category: 'knowledge', difficulty: 'easy',
    schema: 'AIと検索エンジン（Google検索）の根本的な違い',
    correctAnswerPattern: '検索エンジンはWebページを探して表示するが、AIは質問に対して自分で文章を生成して回答する',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI入門'] }
  },

  {
    id: 'BEG-A-HARD-003', level: 'beginner', category: 'knowledge', difficulty: 'medium',
    schema: '「トークン」という単位がAIにとって何を意味するか',
    correctAnswerPattern: 'トークンはAIが文章を処理する最小単位。処理量・コストの計算に使われる単位で1トークンはおよそ1単語か数文字',
    variableSlots: { industries: ['一般'], roles: ['AI入門者'], tasks: ['用語理解'] }
  },

  {
    id: 'BEG-A-HARD-004', level: 'beginner', category: 'knowledge', difficulty: 'easy',
    schema: 'GPT・Gemini・Claudeなどのモデルがバージョンアップする理由',
    correctAnswerPattern: '新しいバージョンは精度向上・長文対応強化・最新データ追加などの改善が含まれている',
    variableSlots: { industries: ['一般'], roles: ['AI入門者'], tasks: ['ツール知識'] }
  },


  // ════════════════════════════════════════════════════════════════════
  // 【初心者編】カテゴリB：実践的活用
  // easy×11 / medium×10 / hard×4
  // ════════════════════════════════════════════════════════════════════

  // ── easy ─────────────────────────────────────────────────────────
  {
    id: 'BEG-B-EASY-001', level: 'beginner', category: 'practice', difficulty: 'easy',
    schema: 'AIへの指示文を「プロンプト」と呼ぶことの確認',
    correctAnswerPattern: 'AIへの指示文・質問文を「プロンプト」と呼ぶ。プロンプトが良いほどAIの回答も良くなる',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI入門'] }
  },

  {
    id: 'BEG-B-EASY-002', level: 'beginner', category: 'practice', difficulty: 'easy',
    schema: 'ChatGPTで今すぐできることの識別（文章作成・翻訳・質問）',
    correctAnswerPattern: 'ChatGPTはメール下書き・翻訳・料理レシピ・アイデア出しなど日常的なことにすぐ使える',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['日常活用'] }
  },

  {
    id: 'BEG-B-EASY-003', level: 'beginner', category: 'practice', difficulty: 'easy',
    schema: '英語メールを日本語に翻訳するのに向いているAI',
    correctAnswerPattern: 'ChatGPT・Claude・DeepLなど複数のAIが翻訳を得意としている',
    variableSlots: { industries: ['ビジネス全般'], roles: ['会社員'], tasks: ['翻訳'] }
  },

  {
    id: 'BEG-B-EASY-004', level: 'beginner', category: 'practice', difficulty: 'easy',
    schema: 'AIに料理レシピを考えてもらう方法を問う問題',
    correctAnswerPattern: '「冷蔵庫にある○○と△△で作れる夕食レシピを3つ教えて」のように具体的に聞くと良いレシピが出てくる',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['日常活用'] }
  },

  {
    id: 'BEG-B-EASY-005', level: 'beginner', category: 'practice', difficulty: 'easy',
    schema: 'AIを使って文章の誤字脱字チェックができるかを問う問題',
    correctAnswerPattern: 'AIに「この文章の誤字脱字を直してください」と入力するだけで校正してくれる',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['文章校正'] }
  },

  {
    id: 'BEG-B-EASY-006', level: 'beginner', category: 'practice', difficulty: 'easy',
    schema: 'AIに旅行の計画を立ててもらえるかを問う問題',
    correctAnswerPattern: '「3泊4日で京都旅行、予算5万円、子連れ」のように条件を伝えるとプランを作ってくれる',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['日常活用'] }
  },

  {
    id: 'BEG-B-EASY-007', level: 'beginner', category: 'practice', difficulty: 'easy',
    schema: 'AIに長い文章を「要約して」と頼む使い方',
    correctAnswerPattern: '長い文章やニュース記事をAIに貼り付けて「3行で要約して」と頼むと簡潔にまとめてくれる',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['要約'] }
  },

  {
    id: 'BEG-B-EASY-008', level: 'beginner', category: 'practice', difficulty: 'easy',
    schema: 'AIに謝罪メールの下書きを書いてもらう方法',
    correctAnswerPattern: '状況（誰に・何を謝るか）を具体的に伝えると、AIが丁寧な謝罪メールの下書きを作ってくれる',
    variableSlots: { industries: ['ビジネス全般'], roles: ['会社員'], tasks: ['メール作成'] }
  },

  {
    id: 'BEG-B-EASY-009', level: 'beginner', category: 'practice', difficulty: 'easy',
    schema: 'AIに「もっと短く」などと追加で指示できるかを問う問題',
    correctAnswerPattern: 'AIへの最初の回答が気に入らなければ「もっと短く」「別の書き方で」などと追加で指示できる',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['プロンプト改善'] }
  },

  {
    id: 'BEG-B-EASY-010', level: 'beginner', category: 'practice', difficulty: 'easy',
    schema: 'AIに誕生日メッセージを書いてもらう方法を問う問題',
    correctAnswerPattern: '「小学2年生の娘への誕生日メッセージを明るく楽しい文章で100字で」と伝えると書いてくれる',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['日常活用'] }
  },

  {
    id: 'BEG-B-EASY-011', level: 'beginner', category: 'practice', difficulty: 'easy',
    schema: 'AIはアドバイスを提供するが最終判断は誰がするかを問う問題',
    correctAnswerPattern: 'AIはアドバイス・アイデア・下書きを提供するが、最終的な判断・確認・責任は人間が持つ',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI活用の心構え'] }
  },

  {
    id: 'BEG-B-EASY-012', level: 'beginner', category: 'practice', difficulty: 'easy',
    schema: 'AIに「箇条書きで」「表で」など出力形式を指定する方法',
    correctAnswerPattern: '「箇条書きで教えて」「表にまとめて」と伝えるだけでAIが見やすい形式で出力してくれる',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['文章作成', '情報整理'] }
  },

  {
    id: 'BEG-B-EASY-013', level: 'beginner', category: 'practice', difficulty: 'easy',
    schema: 'AIを使って自己紹介文を作る方法',
    correctAnswerPattern: '名前・職業・趣味・アピールポイントをAIに伝えると、魅力的な自己紹介文を作ってくれる',
    variableSlots: { industries: ['一般'], roles: ['初心者', '学生', '転職希望者'], tasks: ['自己紹介', '就活'] }
  },

  // ── medium ───────────────────────────────────────────────────────
  {
    id: 'BEG-B-MED-001', level: 'beginner', category: 'practice', difficulty: 'medium',
    schema: 'AIへのより良い質問の仕方（具体的に伝える重要性）',
    correctAnswerPattern: '「メールを書いて」より「〇〇向けに丁寧な謝罪メールを200字で」と具体的に伝えるほうが良い回答が得られる',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['メール作成'] }
  },

  {
    id: 'BEG-B-MED-002', level: 'beginner', category: 'practice', difficulty: 'medium',
    schema: 'AIが苦手な作業の識別（リアルタイム情報・正確な計算）',
    correctAnswerPattern: 'AIは今日の天気・株価・最新ニュースのようなリアルタイム情報が苦手。そういう時は検索エンジンを使う',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['情報収集'] }
  },

  {
    id: 'BEG-B-MED-003', level: 'beginner', category: 'practice', difficulty: 'medium',
    schema: 'AIでスライド・プレゼン資料を作れるツールを問う問題',
    correctAnswerPattern: 'Gamma（ガンマ）・Canva AI・Microsoft Copilotなどはテキストを入力するだけでスライドを自動生成してくれるAIツール',
    variableSlots: { industries: ['ビジネス全般'], roles: ['会社員'], tasks: ['プレゼン作成'] }
  },

  {
    id: 'BEG-B-MED-004', level: 'beginner', category: 'practice', difficulty: 'medium',
    schema: 'SNS投稿文をAIに書いてもらう方法',
    correctAnswerPattern: '「Instagramに投稿する〇〇の紹介文を絵文字も使って100文字以内で」と具体的に伝えると良い文章が出る',
    variableSlots: { industries: ['一般', '小売', 'サービス業'], roles: ['店舗スタッフ', '個人事業主'], tasks: ['SNS投稿'] }
  },

  {
    id: 'BEG-B-MED-005', level: 'beginner', category: 'practice', difficulty: 'medium',
    schema: '難しい言葉を子どもにわかる言葉で説明するときのAI活用方法',
    correctAnswerPattern: '「〇〇を小学生にもわかる言葉で説明して」と指示すると簡単な言葉で説明してくれる',
    variableSlots: { industries: ['教育', '一般'], roles: ['保護者', '教員', '一般ユーザー'], tasks: ['学習支援'] }
  },

  {
    id: 'BEG-B-MED-006', level: 'beginner', category: 'practice', difficulty: 'medium',
    schema: 'AIで議事録を作成する方法を問う問題',
    correctAnswerPattern: '会議の会話テキスト（文字起こし）をAIに貼って「議事録形式にまとめて」と頼むと整理してくれる',
    variableSlots: { industries: ['ビジネス全般'], roles: ['会社員', 'アシスタント'], tasks: ['議事録作成'] }
  },

  {
    id: 'BEG-B-MED-007', level: 'beginner', category: 'practice', difficulty: 'medium',
    schema: '同じ内容を複数のバリエーションで出力させる方法',
    correctAnswerPattern: '「同じ内容でフォーマルな表現と柔らかい表現の2種類を作って」のように複数パターンを依頼できる',
    variableSlots: { industries: ['一般'], roles: ['初心者', '会社員'], tasks: ['文章作成', 'メール作成'] }
  },

  {
    id: 'BEG-B-MED-008', level: 'beginner', category: 'practice', difficulty: 'medium',
    schema: 'AIに画像のことを聞けるか（マルチモーダル機能）を問う問題',
    correctAnswerPattern: 'ChatGPT Plus・Claudeなど一部のAIは画像をアップロードして「これは何ですか」と聞くことができる',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI機能理解'] }
  },

  {
    id: 'BEG-B-MED-009', level: 'beginner', category: 'practice', difficulty: 'medium',
    schema: 'AIに「役割」を与える（ロールプレイ）とどうなるかを問う問題',
    correctAnswerPattern: '「あなたは優しい料理の先生です」などと役割を与えると、その視点から回答してくれる',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['プロンプト技法'] }
  },

  {
    id: 'BEG-B-MED-010', level: 'beginner', category: 'practice', difficulty: 'medium',
    schema: 'AIを使った英語学習の方法を問う問題',
    correctAnswerPattern: 'AIに英会話の練習相手になってもらったり、英文の間違いを直してもらったり、単語の例文を作ってもらえる',
    variableSlots: { industries: ['一般'], roles: ['学生', '英語学習者'], tasks: ['語学学習'] }
  },

  // ── hard ─────────────────────────────────────────────────────────
  {
    id: 'BEG-B-HARD-001', level: 'beginner', category: 'practice', difficulty: 'medium',
    schema: 'AIを使って動画や音声を文字に変換（文字起こし）できるかを問う問題',
    correctAnswerPattern: 'WhisperやNottaなどのAIツールを使うと会議・インタビュー・動画の音声を自動でテキスト化できる',
    variableSlots: { industries: ['一般'], roles: ['学生', '社会人'], tasks: ['資料活用', '学習'] }
  },

  {
    id: 'BEG-B-HARD-002', level: 'beginner', category: 'practice', difficulty: 'medium',
    schema: 'Copilot in ExcelでAIを使うとどんなことができるかを問う問題',
    correctAnswerPattern: 'Copilot in Excelはデータの分析・グラフ作成・関数提案などを自然言語で指示できる',
    variableSlots: { industries: ['ビジネス全般'], roles: ['会社員', '経理', '営業担当'], tasks: ['データ分析', '表計算'] }
  },

  {
    id: 'BEG-B-HARD-003', level: 'beginner', category: 'practice', difficulty: 'medium',
    schema: 'プロンプトを「テンプレート化」して繰り返し使う方法',
    correctAnswerPattern: 'うまくいった指示文を保存しておき、毎回同じ質で出力を得るためにテンプレートとして使い回すのが効率的',
    variableSlots: { industries: ['ビジネス全般'], roles: ['会社員'], tasks: ['業務効率化'] }
  },

  {
    id: 'BEG-B-HARD-004', level: 'beginner', category: 'practice', difficulty: 'medium',
    schema: 'AIに長い文書を読ませて要点を抜き出させる方法',
    correctAnswerPattern: 'PDFや長文テキストをAIに貼り付け「重要なポイントを5つ箇条書きで」と指示すると要点を抽出してくれる',
    variableSlots: { industries: ['ビジネス全般', '教育'], roles: ['会社員', '学生'], tasks: ['情報整理', '学習'] }
  },


  // ════════════════════════════════════════════════════════════════════
  // 【初心者編】カテゴリC：倫理・リスク認識
  // easy×8 / medium×7 / hard×4
  // ════════════════════════════════════════════════════════════════════

  // ── easy ─────────────────────────────────────────────────────────
  {
    id: 'BEG-C-EASY-001', level: 'beginner', category: 'ethics', difficulty: 'easy',
    schema: 'AIに入力してはいけない情報（個人情報・パスワード）',
    correctAnswerPattern: '自分や他人のパスワード・住所・マイナンバーなどの個人情報はAIに入力してはいけない',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['安全な利用'] }
  },

  {
    id: 'BEG-C-EASY-002', level: 'beginner', category: 'ethics', difficulty: 'easy',
    schema: 'AIの回答は常に正しいか？（ハルシネーションの基礎知識）',
    correctAnswerPattern: 'AIは間違った情報を自信満々に言うことがある（ハルシネーション）。大事なことは別の方法で必ず確認',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['情報リテラシー'] }
  },

  {
    id: 'BEG-C-EASY-003', level: 'beginner', category: 'ethics', difficulty: 'easy',
    schema: 'AIで作った文章を他人の文章として提出することの問題',
    correctAnswerPattern: 'AIが生成した文章を自分が書いたように偽るのは不正行為になる場合がある。レポート・論文では特に注意',
    variableSlots: { industries: ['教育', '一般'], roles: ['学生', '初心者'], tasks: ['倫理'] }
  },

  {
    id: 'BEG-C-EASY-004', level: 'beginner', category: 'ethics', difficulty: 'easy',
    schema: 'AIが生成した偽の情報（フェイクニュース）の見分け方',
    correctAnswerPattern: 'AIで生成された偽情報も本物そっくりになることがある。信頼できる情報源で事実確認することが大切',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['情報リテラシー'] }
  },

  {
    id: 'BEG-C-EASY-005', level: 'beginner', category: 'ethics', difficulty: 'easy',
    schema: '友人の個人情報をAIに入力することの問題',
    correctAnswerPattern: '本人の同意なく他人の個人情報（名前・電話番号・住所など）をAIに入力してはいけない',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['プライバシー保護'] }
  },

  {
    id: 'BEG-C-EASY-006', level: 'beginner', category: 'ethics', difficulty: 'easy',
    schema: 'AIに医療・法律・お金の相談をしていいかを問う問題',
    correctAnswerPattern: '参考程度に聞くのはOKだが、AIの回答をそのまま信じてはいけない。重要な判断は必ず専門家に相談する',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI活用判断'] }
  },

  {
    id: 'BEG-C-EASY-007', level: 'beginner', category: 'ethics', difficulty: 'easy',
    schema: 'AIが生成した文章に間違いが含まれている場合の対処法',
    correctAnswerPattern: 'AI生成の文章は必ず自分で読み直し、事実確認をしてから使う。誤情報をそのまま広めてはいけない',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['情報リテラシー'] }
  },

  {
    id: 'BEG-C-EASY-008', level: 'beginner', category: 'ethics', difficulty: 'easy',
    schema: '子どもがAIを使うときに気をつけることを問う問題',
    correctAnswerPattern: '子どもがAIを使う際は個人情報を入力しない・AIの回答を鵜呑みにしない・保護者と一緒に使うなどのルールが大切',
    variableSlots: { industries: ['教育', '一般'], roles: ['保護者', '教員', '学生'], tasks: ['安全な利用', 'AI教育'] }
  },

  // ── medium ───────────────────────────────────────────────────────
  {
    id: 'BEG-C-MED-001', level: 'beginner', category: 'ethics', difficulty: 'medium',
    schema: 'AIを使っていい場面・慎重に使うべき場面の識別',
    correctAnswerPattern: '文章下書きやアイデア出しは積極的に使ってOK。医療・法律・重要な事実確認は専門家に相談する',
    variableSlots: { industries: ['一般'], roles: ['一般ユーザー'], tasks: ['AI活用判断'] }
  },

  {
    id: 'BEG-C-MED-002', level: 'beginner', category: 'ethics', difficulty: 'medium',
    schema: 'AI生成コンテンツの著作権の基礎を問う問題',
    correctAnswerPattern: 'AI生成コンテンツの著作権は曖昧なため、商用利用する際は各ツールの利用規約を必ず確認する',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['コンテンツ活用'] }
  },

  {
    id: 'BEG-C-MED-003', level: 'beginner', category: 'ethics', difficulty: 'medium',
    schema: '無料版AIは入力内容が学習に使われる可能性があるかを問う問題',
    correctAnswerPattern: '無料版のAIは入力内容が学習データに使われる場合がある。設定で無効にするか機密情報は入力しない',
    variableSlots: { industries: ['一般'], roles: ['一般ユーザー'], tasks: ['プライバシー管理'] }
  },

  {
    id: 'BEG-C-MED-004', level: 'beginner', category: 'ethics', difficulty: 'medium',
    schema: 'AIが生成した画像で実在の人物を偽ることの問題',
    correctAnswerPattern: '実在の人物の偽画像（ディープフェイク）を作ることは法的・倫理的問題になりうる',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI倫理'] }
  },

  {
    id: 'BEG-C-MED-005', level: 'beginner', category: 'ethics', difficulty: 'medium',
    schema: 'AIの回答をそのまま信じて行動することのリスク',
    correctAnswerPattern: 'AIは間違いを犯すことがある。特に健康・法律・金融に関する判断はAIだけに頼らず専門家に確認する',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['情報リテラシー'] }
  },

  {
    id: 'BEG-C-MED-006', level: 'beginner', category: 'ethics', difficulty: 'medium',
    schema: '会社のパソコンで個人アカウントのAIを使うことの問題',
    correctAnswerPattern: '会社のデータを個人契約のAIサービスに入力すると情報漏洩リスクがある。会社の規定を確認する',
    variableSlots: { industries: ['ビジネス全般'], roles: ['会社員'], tasks: ['情報セキュリティ'] }
  },

  {
    id: 'BEG-C-MED-007', level: 'beginner', category: 'ethics', difficulty: 'medium',
    schema: 'AIが生成した文章をブログやSNSにそのまま投稿することの問題',
    correctAnswerPattern: 'AI生成の文章には誤情報・著作権問題・独自性の欠如などのリスクがある。必ず確認・修正してから公開する',
    variableSlots: { industries: ['一般', '広告', 'メディア'], roles: ['個人ブロガー', 'マーケター', '一般ユーザー'], tasks: ['コンテンツ作成', 'SNS投稿'] }
  },

  {
    id: 'BEG-C-MED-008', level: 'beginner', category: 'ethics', difficulty: 'medium',
    schema: 'AIを使って詐欺・フィッシングメールかどうかを見分ける方法',
    correctAnswerPattern: 'AIに怪しいメール文面を貼り付けて「詐欺メールの特徴がないか確認して」と聞くと判断の参考にできる',
    variableSlots: { industries: ['一般'], roles: ['初心者', '一般ユーザー'], tasks: ['情報リテラシー', '安全な利用'] }
  },

  {
    id: 'BEG-C-MED-009', level: 'beginner', category: 'ethics', difficulty: 'medium',
    schema: 'AIが作った文章かどうかを見分けることはできるかを問う問題',
    correctAnswerPattern: 'AI生成文章は自然な文体だが、独特の言い回しや具体性の薄さで気づくことがある。AIで確認するツールもあるが完全ではない',
    variableSlots: { industries: ['教育', '一般', 'メディア'], roles: ['教員', '編集者', '一般ユーザー'], tasks: ['情報リテラシー', 'コンテンツ確認'] }
  },

  {
    id: 'BEG-C-MED-010', level: 'beginner', category: 'ethics', difficulty: 'medium',
    schema: 'AIを使って作ったコンテンツを「自分が作った」と言っていいかを問う問題',
    correctAnswerPattern: 'AIを補助として使い自分がアイデア・判断・修正をしたなら問題ない場合が多いが、場面によっては開示が必要なことがある',
    variableSlots: { industries: ['教育', '一般', 'ビジネス全般'], roles: ['学生', '会社員', 'フリーランス'], tasks: ['コンテンツ制作', '倫理'] }
  },

  // ── hard（→ easy/medium に変換済み）─────────────────────────────
  {
    id: 'BEG-C-HARD-001', level: 'beginner', category: 'ethics', difficulty: 'medium',
    schema: 'AIが学習したデータの偏り（バイアス）とは何かを問う問題',
    correctAnswerPattern: 'AIは学習データに含まれる偏りを引き継ぐことがある。これをバイアスといい出力に偏った情報が混じる場合がある',
    variableSlots: { industries: ['一般'], roles: ['AI入門者'], tasks: ['AI理解'] }
  },

  {
    id: 'BEG-C-HARD-002', level: 'beginner', category: 'ethics', difficulty: 'easy',
    schema: 'AIを使って書いたレポートに出典を書く必要があるかを問う問題',
    correctAnswerPattern: 'AIが出力した内容をそのまま使う場合、AIを参照したことを明記する必要がある場合が多い',
    variableSlots: { industries: ['教育', '一般'], roles: ['学生'], tasks: ['学術'] }
  },

  {
    id: 'BEG-C-HARD-003', level: 'beginner', category: 'ethics', difficulty: 'easy',
    schema: 'AIを使って他人を傷つけるコンテンツを作ることの問題',
    correctAnswerPattern: '誹謗中傷・差別・脅迫などのコンテンツをAIで作ることは利用規約違反で法的問題になりうる',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI倫理'] }
  },

  {
    id: 'BEG-C-HARD-004', level: 'beginner', category: 'ethics', difficulty: 'easy',
    schema: 'AIが「わからない」と言わずに答えてしまう問題（ハルシネーション）',
    correctAnswerPattern: 'AIは知らないことでも自信満々に答えてしまうことがある（ハルシネーション）。重要な情報は必ず確認',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['情報リテラシー'] }
  },


  // ════════════════════════════════════════════════════════════════════
  // 【初心者編】カテゴリD：将来への姿勢
  // easy×7 / medium×7 / hard×4
  // ════════════════════════════════════════════════════════════════════

  // ── easy ─────────────────────────────────────────────────────────
  {
    id: 'BEG-D-EASY-008', level: 'beginner', category: 'future', difficulty: 'easy',
    schema: 'AIは無料で使い始められるかを問う問題',
    correctAnswerPattern: 'ChatGPT・Claude・Geminiはいずれも無料プランで始められる。まずは無料で試してから有料を検討すればよい',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI入門'] }
  },

  {
    id: 'BEG-D-EASY-009', level: 'beginner', category: 'future', difficulty: 'easy',
    schema: 'AIは24時間いつでも使えるかを問う問題',
    correctAnswerPattern: 'AIツールは基本的に24時間365日いつでも使える。深夜でも休日でも即座に回答してくれる',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI入門', '日常活用'] }
  },

  {
    id: 'BEG-D-EASY-010', level: 'beginner', category: 'future', difficulty: 'easy',
    schema: 'AIを英語が話せない人でも使えるかを問う問題',
    correctAnswerPattern: '日本語で入力すれば日本語で答えてくれる。英語ができなくてもAIは日本語のまま十分使える',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI入門'] }
  },

  {
    id: 'BEG-D-EASY-001', level: 'beginner', category: 'future', difficulty: 'easy',
    schema: 'AIを使うと便利になる日常の場面（初心者向け）',
    correctAnswerPattern: '文章の翻訳・料理レシピ相談・旅行プラン作成・勉強の質問など、日常の様々な場面でAIが役立つ',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['日常活用'] }
  },

  {
    id: 'BEG-D-EASY-002', level: 'beginner', category: 'future', difficulty: 'easy',
    schema: 'AIを怖いと感じる初心者に伝えるべきこと',
    correctAnswerPattern: 'AIに間違った指示をしても壊れない。失敗を恐れずどんどん試すことが一番の上達法',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI入門'] }
  },

  {
    id: 'BEG-D-EASY-003', level: 'beginner', category: 'future', difficulty: 'easy',
    schema: 'AIが普及した社会でどんな人が活躍しやすいか',
    correctAnswerPattern: 'AIをうまく使いこなして指示・判断・修正ができる人が活躍しやすい。ツールを使う力が重要になる',
    variableSlots: { industries: ['一般'], roles: ['学生', '会社員'], tasks: ['キャリア考察'] }
  },

  {
    id: 'BEG-D-EASY-004', level: 'beginner', category: 'future', difficulty: 'easy',
    schema: 'AIを使い始めるのに一番いい時期を問う問題',
    correctAnswerPattern: 'AI技術は急速に進歩しており、使い始めるのは早ければ早いほど経験が積める。今すぐ始めるのがベスト',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI入門'] }
  },

  {
    id: 'BEG-D-EASY-005', level: 'beginner', category: 'future', difficulty: 'easy',
    schema: '学生にとってAIをうまく使うメリットを問う問題',
    correctAnswerPattern: 'レポートのアイデア出し・英作文の添削・難しい概念の解説など、学習効率を大きく上げることができる',
    variableSlots: { industries: ['教育'], roles: ['学生'], tasks: ['学習支援', 'スキルアップ'] }
  },

  {
    id: 'BEG-D-EASY-006', level: 'beginner', category: 'future', difficulty: 'easy',
    schema: 'AIを毎日少しずつ使うことの効果を問う問題',
    correctAnswerPattern: '毎日少し使うだけで操作に慣れ、活用できる場面が増えていく。最初は小さなことから始めるのがコツ',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['スキルアップ'] }
  },

  {
    id: 'BEG-D-EASY-007', level: 'beginner', category: 'future', difficulty: 'easy',
    schema: 'AIはプログラミングを知らない人でも使えるかを問う問題',
    correctAnswerPattern: 'ChatGPTやClaudeはプログラミング知識ゼロでも日本語で話しかけるだけで使える',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI入門'] }
  },

  // ── medium ───────────────────────────────────────────────────────
  {
    id: 'BEG-D-MED-008', level: 'beginner', category: 'future', difficulty: 'medium',
    schema: 'AIを使って新しいスキルを独学で学ぶ方法を問う問題',
    correctAnswerPattern: '「Pythonを初心者向けに教えて」「簿記の基礎を説明して」などAIは何でも先生になってくれる。学習コストが大幅に下がる',
    variableSlots: { industries: ['一般'], roles: ['学生', '社会人', '初心者'], tasks: ['学習', 'スキルアップ'] }
  },

  {
    id: 'BEG-D-MED-009', level: 'beginner', category: 'future', difficulty: 'medium',
    schema: 'AIを活用することで節約・時短になる日常場面を問う問題',
    correctAnswerPattern: '文章作成・翻訳・調べもの・アイデア出しをAIに任せることで、数時間かかる作業が数分で終わることがある',
    variableSlots: { industries: ['一般'], roles: ['初心者', '会社員'], tasks: ['業務効率化', '日常活用'] }
  },

  {
    id: 'BEG-D-MED-001', level: 'beginner', category: 'future', difficulty: 'medium',
    schema: 'AIを上手に使い続けるための心構えを問う問題',
    correctAnswerPattern: 'まず気軽に試してみる→うまくいった指示を記録する→少しずつ活用範囲を広げるのが上達のコツ',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['スキルアップ'] }
  },

  {
    id: 'BEG-D-MED-002', level: 'beginner', category: 'future', difficulty: 'medium',
    schema: 'AIは仕事を奪うのか・一緒に使うものなのかを問う問題',
    correctAnswerPattern: 'AIは人間の仕事を全部奪うのではなく、得意なことをAIに任せて人間はより重要な判断や創造的な仕事に集中できる道具',
    variableSlots: { industries: ['一般'], roles: ['会社員', '学生'], tasks: ['キャリア考察'] }
  },

  {
    id: 'BEG-D-MED-003', level: 'beginner', category: 'future', difficulty: 'medium',
    schema: 'AIを使わない人とAIを使える人の差はどのくらい広がるかを問う問題',
    correctAnswerPattern: 'AIをうまく使える人は作業速度・品質が大きく向上する。使わないと差が広がる可能性がある',
    variableSlots: { industries: ['一般'], roles: ['会社員', '学生'], tasks: ['キャリア考察'] }
  },

  {
    id: 'BEG-D-MED-004', level: 'beginner', category: 'future', difficulty: 'medium',
    schema: 'AIが得意な仕事・人間が得意な仕事を問う問題',
    correctAnswerPattern: 'AIは大量データ処理・反復作業・文章生成が得意。人間は感情的共感・創造・倫理判断・複雑な対人関係が得意',
    variableSlots: { industries: ['一般'], roles: ['会社員', '学生'], tasks: ['キャリア考察'] }
  },

  {
    id: 'BEG-D-MED-005', level: 'beginner', category: 'future', difficulty: 'medium',
    schema: 'AIが進化していく中で大切にすべき人間のスキルを問う問題',
    correctAnswerPattern: 'AIへの指示力・批判的思考・コミュニケーション能力・創造性など、機械に任せられないスキルが重要になる',
    variableSlots: { industries: ['一般'], roles: ['学生', '会社員'], tasks: ['キャリア開発', 'スキルアップ'] }
  },

  {
    id: 'BEG-D-MED-006', level: 'beginner', category: 'future', difficulty: 'medium',
    schema: 'AIに対して肯定的な姿勢を持つことの大切さを問う問題',
    correctAnswerPattern: 'AIを拒絶せず「どう使えば自分に役立つか」を考える姿勢が、AI時代を生き抜く第一歩',
    variableSlots: { industries: ['一般'], roles: ['初心者'], tasks: ['AI入門', 'マインドセット'] }
  },

  {
    id: 'BEG-D-MED-007', level: 'beginner', category: 'future', difficulty: 'medium',
    schema: '家族や友人にAIを勧めるときのポイントを問う問題',
    correctAnswerPattern: '難しい言葉を使わず「翻訳・レシピ・旅行プラン」など身近な使い方から紹介するのが一番伝わりやすい',
    variableSlots: { industries: ['一般'], roles: ['AI入門者'], tasks: ['AI普及', 'コミュニケーション'] }
  },

  // ── hard ─────────────────────────────────────────────────────────
  {
    id: 'BEG-D-HARD-001', level: 'beginner', category: 'future', difficulty: 'medium',
    schema: 'AI技術の最新情報を追い続けるためのおすすめの方法',
    correctAnswerPattern: 'X（旧Twitter）やYouTubeでAI系インフルエンサーをフォローする・AIニュースサイトを読むのが効率的',
    variableSlots: { industries: ['一般'], roles: ['AI入門者'], tasks: ['情報収集', 'スキルアップ'] }
  },

  {
    id: 'BEG-D-HARD-002', level: 'beginner', category: 'future', difficulty: 'medium',
    schema: 'AIと上手に付き合うための「人間にしかできないこと」を問う問題',
    correctAnswerPattern: '感情的な共感・倫理的判断・責任を持つこと・新しいアイデアの発想力など人間固有の能力が今後より重要になる',
    variableSlots: { industries: ['一般'], roles: ['会社員', '学生'], tasks: ['キャリア考察'] }
  },

  {
    id: 'BEG-D-HARD-003', level: 'beginner', category: 'future', difficulty: 'medium',
    schema: '子どもへのAI教育で一番大切なことを問う問題',
    correctAnswerPattern: 'AIの使い方より「AIの出力を批判的に見る力」「情報を確認する習慣」を身につけることが最重要',
    variableSlots: { industries: ['教育', '一般'], roles: ['保護者', '教員'], tasks: ['AI教育'] }
  },

  {
    id: 'BEG-D-HARD-004', level: 'beginner', category: 'future', difficulty: 'medium',
    schema: 'AIを活用して自分のビジネスや副業に役立てる考え方を問う問題',
    correctAnswerPattern: 'ブログ・SNS発信・翻訳・デザインなど個人でできる仕事の多くをAIで効率化でき、少人数でも大きなアウトプットが可能になる',
    variableSlots: { industries: ['一般', 'フリーランス'], roles: ['個人事業主', '副業志望者'], tasks: ['ビジネス活用', 'スキルアップ'] }
  },


  // ════════════════════════════════════════════════════════════════════
  // 【中級者編】カテゴリA：知識・理解
  // easy×3 / medium×6 / hard×4
  // ════════════════════════════════════════════════════════════════════

  // ── easy ─────────────────────────────────────────────────────────
  {
    id: 'INT-A-EASY-001', level: 'intermediate', category: 'knowledge', difficulty: 'easy',
    schema: '「プロンプト」という用語の正確な意味',
    correctAnswerPattern: 'AIへの指示文・質問文のこと。プロンプトの質が出力の質を左右する',
    variableSlots: { industries: ['一般'], roles: ['一般ビジネスパーソン'], tasks: ['AI活用'] }
  },

  {
    id: 'INT-A-EASY-004', level: 'intermediate', category: 'knowledge', difficulty: 'easy',
    schema: 'Gamma AIとはどんなツールかを問う問題',
    correctAnswerPattern: 'GammaはURLやテキストを入力するだけで高品質なスライドを自動生成するAIツール。PowerPointより手軽に美しい資料が作れる',
    variableSlots: { industries: ['ビジネス全般'], roles: ['会社員', '企画担当', '営業担当'], tasks: ['プレゼン作成', '資料作成'] }
  },

  {
    id: 'INT-A-EASY-002', level: 'intermediate', category: 'knowledge', difficulty: 'easy',
    schema: '代表的なAIツール名の識別（ChatGPT・Claude・Geminiなど）',
    correctAnswerPattern: 'ChatGPT（OpenAI）、Claude（Anthropic）、Gemini（Google）が代表的な生成AIツール',
    variableSlots: { industries: ['一般'], roles: ['一般ビジネスパーソン'], tasks: ['ツール選択'] }
  },

  {
    id: 'INT-A-EASY-003', level: 'intermediate', category: 'knowledge', difficulty: 'easy',
    schema: '「ハルシネーション」という用語の意味を問う問題',
    correctAnswerPattern: 'AIが事実と異なる情報を自信満々に出力すること。重要情報は必ず別途確認が必要',
    variableSlots: { industries: ['一般'], roles: ['一般ビジネスパーソン'], tasks: ['情報収集', '調査'] }
  },

  // ── medium ───────────────────────────────────────────────────────
  {
    id: 'INT-A-MED-001', level: 'intermediate', category: 'knowledge', difficulty: 'medium',
    schema: 'プレゼン資料・スライド作成に特化したAIツールを問う問題',
    correctAnswerPattern: 'Gamma（ガンマ）はテキストからスライドを自動生成するAI。Canva AI・Microsoft Copilotも同様にスライド作成が得意',
    variableSlots: { industries: ['ビジネス全般'], roles: ['会社員', '営業担当', '企画担当'], tasks: ['プレゼン作成', '資料作成'] }
  },

  {
    id: 'INT-A-MED-002', level: 'intermediate', category: 'knowledge', difficulty: 'medium',
    schema: 'AIの「コンテキスト（文脈）」を活用した精度向上の方法',
    correctAnswerPattern: '背景情報・役割・目的をプロンプトに含めると、AIの回答精度が大幅に上がる',
    variableSlots: { industries: ['一般'], roles: ['一般ビジネスパーソン'], tasks: ['プロンプト設計'] }
  },

  {
    id: 'INT-A-MED-003', level: 'intermediate', category: 'knowledge', difficulty: 'medium',
    schema: '生成AIが「確率的に」回答を生成するとはどういう意味か',
    correctAnswerPattern: '生成AIは次に来る言葉を確率で選ぶため、毎回異なる回答が出ることがある。「temperature」で多様性を調整できる',
    variableSlots: { industries: ['IT', '一般'], roles: ['一般ビジネスパーソン'], tasks: ['AI理解'] }
  },

  {
    id: 'INT-A-MED-004', level: 'intermediate', category: 'knowledge', difficulty: 'medium',
    schema: 'マルチモーダルAIとは何かを問う問題',
    correctAnswerPattern: 'テキストだけでなく画像・音声・動画なども理解・生成できるAI。最新のGPT-4oやGeminiがこれに対応',
    variableSlots: { industries: ['広告', '医療', '製造', '一般企業'], roles: ['担当者', 'エンジニア'], tasks: ['ツール知識', '業務活用'] }
  },

  {
    id: 'INT-A-MED-005', level: 'intermediate', category: 'knowledge', difficulty: 'medium',
    schema: '「システムプロンプト」とは何かを問う問題',
    correctAnswerPattern: 'ユーザーの入力より前に設定するAIへの事前指示。AIの役割・制約・出力形式などをあらかじめ設定できる',
    variableSlots: { industries: ['IT', 'ビジネス全般'], roles: ['システム担当', 'AI活用担当'], tasks: ['プロンプト設計', 'AI導入'] }
  },

  {
    id: 'INT-A-MED-006', level: 'intermediate', category: 'knowledge', difficulty: 'medium',
    schema: 'AIの「コンテキストウィンドウ」とは何かを問う問題',
    correctAnswerPattern: 'AIが一度に処理できるテキストの上限のこと。会話が長くなると古い内容を忘れる原因になる',
    variableSlots: { industries: ['一般'], roles: ['一般ビジネスパーソン'], tasks: ['AI理解', 'ツール知識'] }
  },

  // ── hard ─────────────────────────────────────────────────────────
  {
    id: 'INT-A-HARD-001', level: 'intermediate', category: 'knowledge', difficulty: 'hard',
    schema: 'RAG（検索拡張生成）の仕組みと用途を問う問題',
    correctAnswerPattern: '外部の知識ベースを検索してコンテキストとして与えることで最新・専門情報を回答に使える手法',
    variableSlots: { industries: ['IT', '法律', '医療'], roles: ['システム担当', 'ナレッジマネージャー'], tasks: ['社内文書検索', '専門知識Q&A'] }
  },

  {
    id: 'INT-A-HARD-002', level: 'intermediate', category: 'knowledge', difficulty: 'hard',
    schema: 'ファインチューニングとは何かを問う問題',
    correctAnswerPattern: '既存のAIモデルに特定分野のデータを追加学習させることで、専門的な用途に特化させる手法',
    variableSlots: { industries: ['IT', '医療', '法律'], roles: ['システム担当', 'AI活用担当'], tasks: ['AI導入', 'カスタマイズ'] }
  },

  {
    id: 'INT-A-HARD-003', level: 'intermediate', category: 'knowledge', difficulty: 'hard',
    schema: '「エージェントAI」とは何かを問う問題',
    correctAnswerPattern: '与えられた目標に向けてAI自身が計画を立て、ツールを使いながら自律的にタスクを実行するAIの形態',
    variableSlots: { industries: ['IT', 'コンサル', '製造'], roles: ['システム担当', 'DX推進担当'], tasks: ['AI活用', '業務自動化'] }
  },

  {
    id: 'INT-A-HARD-004', level: 'intermediate', category: 'knowledge', difficulty: 'hard',
    schema: '「プロンプトインジェクション」とはどのようなリスクかを問う問題',
    correctAnswerPattern: '悪意ある入力でAIの動作を意図せず操作するサイバー攻撃の一種。AIを業務で使う際のセキュリティリスク',
    variableSlots: { industries: ['IT', '金融', '医療'], roles: ['システム担当', 'セキュリティ担当'], tasks: ['セキュリティ', 'AI導入'] }
  },


  // ════════════════════════════════════════════════════════════════════
  // 【中級者編】カテゴリB：実践的活用
  // easy×3 / medium×6 / hard×4
  // ════════════════════════════════════════════════════════════════════

  // ── easy ─────────────────────────────────────────────────────────
  {
    id: 'INT-B-EASY-001', level: 'intermediate', category: 'practice', difficulty: 'easy',
    schema: 'AIへの良い指示の出し方（具体的に伝えることの重要性）',
    correctAnswerPattern: '「具体的に・詳しく・条件を添えて」指示するほどAIの出力が良くなる',
    variableSlots: { industries: ['一般'], roles: ['初心者', '一般担当者'], tasks: ['メール作成', '文章作成', '資料作成'] }
  },

  {
    id: 'INT-B-EASY-002', level: 'intermediate', category: 'practice', difficulty: 'easy',
    schema: 'AIが得意な日常業務タスクの識別',
    correctAnswerPattern: '文章の要約・翻訳・メール下書き・アイデア出しはAIが特に得意な業務',
    variableSlots: { industries: ['一般企業'], roles: ['会社員', '一般担当者'], tasks: ['要約', '翻訳', 'メール作成', 'アイデア出し'] }
  },

  {
    id: 'INT-B-EASY-003', level: 'intermediate', category: 'practice', difficulty: 'easy',
    schema: 'ChatGPTとClaudeの特徴の違いを問う問題',
    correctAnswerPattern: 'ChatGPTはWeb検索・画像生成などツールが豊富。Claudeは長文読み込み・文章品質・安全性に強みがある',
    variableSlots: { industries: ['ビジネス全般'], roles: ['一般ビジネスパーソン'], tasks: ['ツール選択', '業務効率化'] }
  },

  // ── medium ───────────────────────────────────────────────────────
  {
    id: 'INT-B-MED-001', level: 'intermediate', category: 'practice', difficulty: 'medium',
    schema: 'AIにより深い分析・回答をさせるための指示方法',
    correctAnswerPattern: '「専門家として」「ステップごとに」「理由も添えて」などの指示でAIの分析が深まる',
    variableSlots: { industries: ['コンサル', '営業', '企画', 'マーケティング'], roles: ['担当者', 'マネージャー'], tasks: ['市場分析', '問題解決', '企画立案'] }
  },

  {
    id: 'INT-B-MED-002', level: 'intermediate', category: 'practice', difficulty: 'medium',
    schema: '用途別のAIツール選択（検索・作成・分析の使い分け）',
    correctAnswerPattern: '最新情報検索はPerplexity、文章作成はChatGPT/Claude、表計算分析はCopilot in Excelなど用途で使い分ける',
    variableSlots: { industries: ['ビジネス全般'], roles: ['一般ビジネスパーソン'], tasks: ['情報収集', 'データ分析', '文書作成'] }
  },

  {
    id: 'INT-B-MED-003', level: 'intermediate', category: 'practice', difficulty: 'medium',
    schema: 'AIの回答を改善するための追加指示（フォローアップ）の方法',
    correctAnswerPattern: '最初の回答に満足できない場合、「もっと具体的に」「別の視点で」「箇条書きで」などと追加指示できる',
    variableSlots: { industries: ['一般'], roles: ['一般担当者'], tasks: ['資料作成', '文章修正', 'アイデア出し'] }
  },

  {
    id: 'INT-B-MED-004', level: 'intermediate', category: 'practice', difficulty: 'medium',
    schema: 'Chain-of-Thought（思考の連鎖）プロンプトの活用方法',
    correctAnswerPattern: '「ステップバイステップで考えてください」と指示するとAIが思考過程を示しながら回答し、複雑な問題で精度が上がる',
    variableSlots: { industries: ['コンサル', 'IT', '法律'], roles: ['担当者', 'マネージャー'], tasks: ['問題解決', '分析', '企画立案'] }
  },

  {
    id: 'INT-B-MED-005', level: 'intermediate', category: 'practice', difficulty: 'medium',
    schema: 'AIを使った競合調査・市場分析の注意点を問う問題',
    correctAnswerPattern: 'AIは最新データを持たない場合があるため、競合調査には最新公開情報との照合が必須。方向性の整理には有効',
    variableSlots: { industries: ['マーケティング', 'コンサル', '営業', '経営企画'], roles: ['担当者', 'マネージャー'], tasks: ['市場調査', '競合分析', '戦略立案'] }
  },

  {
    id: 'INT-B-MED-006', level: 'intermediate', category: 'practice', difficulty: 'medium',
    schema: '会議の議事録をAIで自動生成する際のベストプラクティス',
    correctAnswerPattern: '文字起こしツール（Whisper等）でテキスト化しAIに貼り付け「決定事項・アクションアイテム別に整理して」と指示するのが効率的',
    variableSlots: { industries: ['ビジネス全般'], roles: ['会社員', 'マネージャー', 'アシスタント'], tasks: ['議事録作成', '業務効率化'] }
  },

  // ── hard ─────────────────────────────────────────────────────────
  {
    id: 'INT-B-HARD-001', level: 'intermediate', category: 'practice', difficulty: 'hard',
    schema: 'AIに役割を与える（ロールプレイ指示）の効果を問う問題',
    correctAnswerPattern: '「あなたはマーケティング専門家です」などと役割を与えると、専門的な視点の回答が得られる',
    variableSlots: { industries: ['マーケティング', 'コンサル', '人事', '法律'], roles: ['担当者', 'マネージャー'], tasks: ['戦略立案', '採用'] }
  },

  {
    id: 'INT-B-HARD-002', level: 'intermediate', category: 'practice', difficulty: 'hard',
    schema: 'AIへの出力形式指定（箇条書き・表・文字数制限など）の方法',
    correctAnswerPattern: '「箇条書きで」「表形式で」「200字以内で」など出力形式を指定すると使いやすい回答になる',
    variableSlots: { industries: ['一般企業'], roles: ['会社員', 'マネージャー'], tasks: ['報告書作成', 'まとめ資料作成', 'プレゼン準備'] }
  },

  {
    id: 'INT-B-HARD-003', level: 'intermediate', category: 'practice', difficulty: 'hard',
    schema: 'AIを活用して業務フローを設計・改善する方法を問う問題',
    correctAnswerPattern: '現在の業務フローをAIに説明し「ボトルネックと改善案を提案して」と指示することで業務改善のアイデアが得られる',
    variableSlots: { industries: ['製造', '物流', '金融', 'IT', '小売'], roles: ['業務改革担当', 'マネージャー', 'DX推進担当'], tasks: ['業務改善', 'プロセス設計', 'DX推進'] }
  },

  {
    id: 'INT-B-HARD-004', level: 'intermediate', category: 'practice', difficulty: 'hard',
    schema: 'AI出力を人間がレビューする「Human-in-the-loop」の重要性を問う問題',
    correctAnswerPattern: 'AIの出力を人間が確認・修正するプロセスを挟むことで品質・安全性・責任所在を担保できる',
    variableSlots: { industries: ['医療', '法律', '金融', '広告', '一般企業'], roles: ['マネージャー', '品質管理担当', 'コンプライアンス担当'], tasks: ['品質管理', 'AI導入', 'リスク管理'] }
  },


  // ════════════════════════════════════════════════════════════════════
  // 【中級者編】カテゴリC：倫理・リスク認識
  // easy×2 / medium×6 / hard×4
  // ════════════════════════════════════════════════════════════════════

  // ── easy ─────────────────────────────────────────────────────────
  {
    id: 'INT-C-EASY-001', level: 'intermediate', category: 'ethics', difficulty: 'easy',
    schema: '業務でAIに入力してはいけない情報（個人情報・機密情報）',
    correctAnswerPattern: '顧客の個人情報・社内の機密情報・パスワードなどをAIに入力してはいけない',
    variableSlots: { industries: ['一般企業'], roles: ['一般担当者'], tasks: ['文書作成', '情報整理'] }
  },

  {
    id: 'INT-C-EASY-002', level: 'intermediate', category: 'ethics', difficulty: 'easy',
    schema: 'AIの回答をそのまま報告書に使うことの問題を問う問題',
    correctAnswerPattern: 'AI生成の文章には誤情報・著作権リスクがある。必ず内容確認・事実検証・修正をしてから使う',
    variableSlots: { industries: ['一般企業'], roles: ['一般担当者', 'マネージャー'], tasks: ['報告書作成', '情報整理'] }
  },

  // ── medium ───────────────────────────────────────────────────────
  {
    id: 'INT-C-MED-001', level: 'intermediate', category: 'ethics', difficulty: 'medium',
    schema: 'AI生成コンテンツを仕事で使う際の注意点',
    correctAnswerPattern: 'AI生成の文章・画像をそのまま使わず、内容確認・修正・出典チェックをしてから使う',
    variableSlots: { industries: ['広告', '出版', '一般企業'], roles: ['マーケター', 'ライター', '担当者'], tasks: ['コンテンツ作成', '報告書作成'] }
  },

  {
    id: 'INT-C-MED-002', level: 'intermediate', category: 'ethics', difficulty: 'medium',
    schema: '会社のAI利用ルール・ポリシーに従う重要性を問う問題',
    correctAnswerPattern: '会社ごとにAIツールの利用可否や禁止事項が定められており、個人判断で使うと情報漏洩リスクがある',
    variableSlots: { industries: ['一般企業', '金融', '医療', '法律'], roles: ['一般担当者', 'マネージャー'], tasks: ['業務効率化', '情報管理'] }
  },

  {
    id: 'INT-C-MED-003', level: 'intermediate', category: 'ethics', difficulty: 'medium',
    schema: 'AIによる差別・偏見（バイアス）が業務に与える影響を問う問題',
    correctAnswerPattern: 'AIの学習データに含まれる偏りが採用・与信・診断などの業務判断に影響しうる。AIの出力は批判的に確認が必要',
    variableSlots: { industries: ['人事', '金融', '医療'], roles: ['採用担当', '審査担当'], tasks: ['採用', '与信評価', '診断支援'] }
  },

  {
    id: 'INT-C-MED-004', level: 'intermediate', category: 'ethics', difficulty: 'medium',
    schema: 'AIを使った業務でGDPR・個人情報保護法への対応を問う問題',
    correctAnswerPattern: '個人データをAIに入力する際は個人情報保護法・GDPRなどの規制を遵守し、必要な同意取得・匿名化処理が必要',
    variableSlots: { industries: ['IT', '金融', '医療', '小売'], roles: ['法務担当', 'システム担当', 'マネージャー'], tasks: ['コンプライアンス', 'AI導入', 'データ管理'] }
  },

  {
    id: 'INT-C-MED-005', level: 'intermediate', category: 'ethics', difficulty: 'medium',
    schema: 'AIを使って作成した成果物の責任は誰にあるかを問う問題',
    correctAnswerPattern: 'AIを使って作成した成果物の最終責任は使用した人間にある。AIを「責任転嫁の道具」にしてはいけない',
    variableSlots: { industries: ['一般企業', '広告', '医療', '法律'], roles: ['担当者', 'マネージャー'], tasks: ['コンテンツ作成', '意思決定'] }
  },

  {
    id: 'INT-C-MED-006', level: 'intermediate', category: 'ethics', difficulty: 'medium',
    schema: '無料版と有料版AIの使い分け基準を問う問題',
    correctAnswerPattern: '業務の重要な用途や機密性が高い場面では有料プランや企業契約版を使う。無料版は機能制限あり',
    variableSlots: { industries: ['一般企業'], roles: ['一般担当者', 'マネージャー'], tasks: ['ツール選定', 'コスト管理'] }
  },

  // ── hard ─────────────────────────────────────────────────────────
  {
    id: 'INT-C-HARD-001', level: 'intermediate', category: 'ethics', difficulty: 'hard',
    schema: 'AIが生成した文章の著作権について詳しく問う問題',
    correctAnswerPattern: 'AI生成コンテンツの著作権は曖昧な部分も多く、商用利用する場合は利用規約を確認する必要がある',
    variableSlots: { industries: ['広告', '出版', 'IT', '一般企業'], roles: ['クリエイター', 'マーケター', '担当者'], tasks: ['コンテンツ制作', '商用利用'] }
  },

  {
    id: 'INT-C-HARD-002', level: 'intermediate', category: 'ethics', difficulty: 'hard',
    schema: 'AIのサプライチェーンリスク（使用しているAIが安全かどうか）を問う問題',
    correctAnswerPattern: '導入するAIツールがどの国・企業のモデルを使っているか、データはどこに送られるかを確認することが重要',
    variableSlots: { industries: ['IT', '金融', '医療', '政府'], roles: ['CTO', '情報セキュリティ担当', '調達担当'], tasks: ['AI導入', 'セキュリティ', 'リスク管理'] }
  },

  {
    id: 'INT-C-HARD-003', level: 'intermediate', category: 'ethics', difficulty: 'hard',
    schema: 'AIを使ったフィッシング詐欺・ソーシャルエンジニアリングへの対策を問う問題',
    correctAnswerPattern: 'AIで生成した精巧な偽メール・偽音声・偽動画による詐欺が増加。送信元確認・電話での本人確認が有効な対策',
    variableSlots: { industries: ['金融', '一般企業', '官公庁'], roles: ['セキュリティ担当', '一般担当者', 'マネージャー'], tasks: ['セキュリティ', '情報保護', '危機対応'] }
  },

  {
    id: 'INT-C-HARD-004', level: 'intermediate', category: 'ethics', difficulty: 'hard',
    schema: 'AIガバナンスとは何か、なぜ組織に必要かを問う問題',
    correctAnswerPattern: 'AI利用ポリシー・リスク評価・倫理指針・モニタリング体制など、組織でAIを安全に活用するための管理体制のこと',
    variableSlots: { industries: ['大企業全般', '金融', '医療', 'IT'], roles: ['CTO', '法務部長', 'コンプライアンス担当'], tasks: ['AI戦略', 'リスク管理', 'コンプライアンス'] }
  },


  // ════════════════════════════════════════════════════════════════════
  // 【中級者編】カテゴリD：将来への姿勢
  // easy×2 / medium×5 / hard×4
  // ════════════════════════════════════════════════════════════════════

  // ── easy ─────────────────────────────────────────────────────────
  {
    id: 'INT-D-EASY-001', level: 'intermediate', category: 'future', difficulty: 'easy',
    schema: 'AIを使い続けて上達するコツを問う問題',
    correctAnswerPattern: '毎日少しずつ使ってみる・うまくいった指示を記録する・失敗を恐れず試すことが上達の近道',
    variableSlots: { industries: ['一般'], roles: ['AI初心者'], tasks: ['スキルアップ', '日常業務'] }
  },

  {
    id: 'INT-D-EASY-002', level: 'intermediate', category: 'future', difficulty: 'easy',
    schema: 'AIを活用できる人材が組織で評価される理由を問う問題',
    correctAnswerPattern: 'AIで業務効率を高め・品質を向上させる人は生産性が高く、組織の競争力向上に直接貢献できるため',
    variableSlots: { industries: ['一般企業'], roles: ['一般ビジネスパーソン'], tasks: ['キャリア開発', 'スキルアップ'] }
  },

  // ── medium ───────────────────────────────────────────────────────
  {
    id: 'INT-D-MED-001', level: 'intermediate', category: 'future', difficulty: 'medium',
    schema: 'AIに仕事を奪われないためのスキルを問う問題',
    correctAnswerPattern: 'AIへの指示力・判断力・コミュニケーション・創造性など人間ならではのスキルを磨くことが重要',
    variableSlots: { industries: ['一般'], roles: ['一般ビジネスパーソン'], tasks: ['キャリア開発', 'スキルアップ'] }
  },

  {
    id: 'INT-D-MED-002', level: 'intermediate', category: 'future', difficulty: 'medium',
    schema: 'AIと人間が協力して仕事をする場面の識別を問う問題',
    correctAnswerPattern: 'AIが下書きやデータ整理を担当し、人間が最終判断・確認・感情的対応を担うのが理想の分業',
    variableSlots: { industries: ['一般企業', '小売', '医療', 'サービス業'], roles: ['一般担当者', 'マネージャー'], tasks: ['業務効率化', '顧客対応', '企画立案'] }
  },

  {
    id: 'INT-D-MED-003', level: 'intermediate', category: 'future', difficulty: 'medium',
    schema: 'AI技術の急速な進化に対応するための学習姿勢を問う問題',
    correctAnswerPattern: '特定ツールの操作だけでなく「AIを使いこなす思考力」を磨くことで、新しいツールが出ても応用できる',
    variableSlots: { industries: ['一般'], roles: ['一般ビジネスパーソン'], tasks: ['スキルアップ', 'キャリア開発'] }
  },

  {
    id: 'INT-D-MED-004', level: 'intermediate', category: 'future', difficulty: 'medium',
    schema: 'AI活用における「人間の監督責任」の重要性を問う問題',
    correctAnswerPattern: 'AIは自律的に動いても最終判断・責任は人間が持つ。AI任せにせず定期的に出力を検証・監督する姿勢が必要',
    variableSlots: { industries: ['一般企業', '医療', '金融', '法律'], roles: ['マネージャー', '担当者'], tasks: ['AI導入', '品質管理', 'リスク管理'] }
  },

  {
    id: 'INT-D-MED-005', level: 'intermediate', category: 'future', difficulty: 'medium',
    schema: '自社・自部門でAIを活用するための第一歩を問う問題',
    correctAnswerPattern: 'まず小さな業務（メール下書き・要約など）でAIを試し、効果を計測して上司や同僚に共有するのが普及への近道',
    variableSlots: { industries: ['一般企業'], roles: ['一般担当者', '若手社員'], tasks: ['AI推進', '業務効率化', '組織変革'] }
  },

  // ── hard ─────────────────────────────────────────────────────────
  {
    id: 'INT-D-HARD-001', level: 'intermediate', category: 'future', difficulty: 'hard',
    schema: 'チームや職場にAI活用を広めるアプローチを問う問題',
    correctAnswerPattern: '成功事例を小さく共有し、ハードルが低いツールから試してもらい、効果を数字で見せることが普及のコツ',
    variableSlots: { industries: ['一般企業'], roles: ['マネージャー', 'DX推進担当', 'AI活用リーダー'], tasks: ['組織変革', 'AI推進', '研修'] }
  },

  {
    id: 'INT-D-HARD-002', level: 'intermediate', category: 'future', difficulty: 'hard',
    schema: 'AIツールの新機能・トレンドを追うための情報収集方法',
    correctAnswerPattern: '公式ブログ・X（旧Twitter）・YouTubeなど情報が早いメディアでAI最新情報をキャッチアップする',
    variableSlots: { industries: ['一般'], roles: ['一般ビジネスパーソン'], tasks: ['情報収集', 'スキルアップ'] }
  },

  {
    id: 'INT-D-HARD-003', level: 'intermediate', category: 'future', difficulty: 'hard',
    schema: 'AI戦略を経営レベルで考える際の重要な視点を問う問題',
    correctAnswerPattern: 'コスト削減・業務効率化だけでなく、新しいビジネスモデル創出・競争優位の構築の観点からAI投資を検討する必要がある',
    variableSlots: { industries: ['大企業全般'], roles: ['経営者', 'CTO', '経営企画担当'], tasks: ['AI戦略', '経営判断', 'DX推進'] }
  },

  {
    id: 'INT-D-HARD-004', level: 'intermediate', category: 'future', difficulty: 'hard',
    schema: 'AI時代のリスキリング（学び直し）で優先すべきスキルを問う問題',
    correctAnswerPattern: 'プロンプト設計・AI出力の批判的評価・データリテラシー・AIツールの業務適用力など「AIと協働する力」が最優先',
    variableSlots: { industries: ['一般'], roles: ['一般ビジネスパーソン', 'マネージャー'], tasks: ['キャリア開発', 'スキルアップ', '組織変革'] }
  },
]

// ── ヘルパー関数 ──────────────────────────────────────────────────────

export function getTemplatesByFilter(
  category: QuestionTemplate['category'],
  difficulty: QuestionTemplate['difficulty'],
): QuestionTemplate[] {
  return QUESTION_TEMPLATES.filter(
    t => t.category === category && t.difficulty === difficulty,
  )
}

export function getTemplatesByLevel(
  level: QuestionTemplate['level'],
  category?: QuestionTemplate['category'],
  difficulty?: QuestionTemplate['difficulty'],
): QuestionTemplate[] {
  return QUESTION_TEMPLATES.filter(
    t =>
      t.level === level &&
      (category ? t.category === category : true) &&
      (difficulty ? t.difficulty === difficulty : true),
  )
}

export const ALL_INDUSTRIES = [
  '製造', '小売', '金融', '医療', '法律', '不動産', '物流',
  '教育', '広告', '出版', 'IT', 'コンサル', 'エンタメ', '飲食',
  '農業', '建設', '人事', 'メディア', '通信', 'ECサイト',
]

export const TEMPLATE_STATS = {
  total: QUESTION_TEMPLATES.length,
  beginner: QUESTION_TEMPLATES.filter(t => t.level === 'beginner').length,
  intermediate: QUESTION_TEMPLATES.filter(t => t.level === 'intermediate').length,
}
