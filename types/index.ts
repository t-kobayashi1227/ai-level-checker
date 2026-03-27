// ─── 問題・テンプレート ────────────────────────────────────────

export type Difficulty = 'easy' | 'medium' | 'hard'

export type QuizLevel = 'beginner' | 'intermediate'

export const QUIZ_LEVEL_CONFIG: Record<QuizLevel, { label: string; labelEn: string; desc: string }> = {
  beginner:     { label: '初心者編', labelEn: 'Beginner',     desc: 'AIって何？から始める入門クイズ' },
  intermediate: { label: '中級者編', labelEn: 'Intermediate', desc: 'AI活用スキルを測る実践クイズ' },
}

export type Category =
  | 'knowledge'   // 知識・理解
  | 'practice'    // 実践的活用
  | 'ethics'      // 倫理・リスク認識
  | 'future'      // 将来への姿勢

export const CATEGORY_LABELS: Record<Category, string> = {
  knowledge: '知識・理解',
  practice:  '実践的活用',
  ethics:    '倫理・リスク認識',
  future:    '将来への姿勢',
}

export const CATEGORY_WEIGHTS: Record<Category, number> = {
  knowledge: 0.25,
  practice:  0.30,
  ethics:    0.25,
  future:    0.20,
}

/** AI が生成した問題（DB 保存形式 / API レスポンス形式） */
export interface Question {
  id:            string       // テンプレートID + インデックス（例: "B-MID-001-0"）
  category:      Category
  difficulty:    Difficulty
  question:      string       // 問題文
  options:       string[]     // 選択肢（4択、シャッフル済み）
  correctIndex:  number       // 正解インデックス（0-3）
  explanation:   string       // 解説文
  templateId:    string       // 元テンプレートID
  industryUsed?: string       // 使用した業種（重複防止用）
}

/** AI 生成前のテンプレート定義 */
export interface QuestionTemplate {
  id:                   string
  level:                QuizLevel       // 初心者編 or 中級者編
  category:             Category
  difficulty:           Difficulty
  schema:               string          // 問題タイプの説明
  correctAnswerPattern: string          // 正答の方向性
  variableSlots: {
    industries: string[]
    roles:      string[]
    tasks:      string[]
  }
}

// ─── セッション ───────────────────────────────────────────────

export interface Session {
  id:             string       // UUID
  questionSet:    Question[]   // 12問
  industriesUsed: string[]     // 使用済み業種
  groupId?:       string       // 同時受験グループ
  createdAt:      string       // ISO string
  expiresAt:      string       // ISO string (created + 60min)
}

// ─── スコア・結果 ──────────────────────────────────────────────

export interface CategoryScores {
  knowledge: number   // 0-100
  practice:  number
  ethics:    number
  future:    number
}

export interface ScoreResult {
  total:           number        // 0-100 (重み付き合計)
  categories:      CategoryScores
  level:           Level
  profileType:     ProfileType
  strongestCategory:  Category
  weakestCategory:    Category
  percentile?:     number        // ユーザーデータ蓄積後に有効
}

export type Level =
  | 'beginner'      // AIビギナー    0-29
  | 'explorer'      // AIエクスプローラー  30-49
  | 'practitioner'  // AIプラクティショナー 50-69
  | 'advisor'       // AIアドバイザー  70-84
  | 'master'        // AIマスター   85-100

export const LEVEL_CONFIG: Record<Level, {
  label:    string
  labelEn:  string
  range:    [number, number]
  color:    string   // Tailwind color class
}> = {
  beginner:     { label: 'AIビギナー',          labelEn: 'AI Beginner',      range: [0,  29], color: 'gray'   },
  explorer:     { label: 'AIエクスプローラー',   labelEn: 'AI Explorer',      range: [30, 49], color: 'blue'   },
  practitioner: { label: 'AIプラクティショナー', labelEn: 'AI Practitioner',  range: [50, 69], color: 'teal'   },
  advisor:      { label: 'AIアドバイザー',       labelEn: 'AI Advisor',       range: [70, 84], color: 'indigo' },
  master:       { label: 'AIマスター',           labelEn: 'AI Master',        range: [85, 100], color: 'purple' },
}

export type ProfileType =
  | 'theorist'    // 理論派：知識 > 活用
  | 'practitioner'// 実践派：活用 > 知識
  | 'ethicist'    // 倫理重視型：倫理が突出
  | 'balanced'    // バランス型：均一
  | 'future-oriented' // 未来志向型：将来への姿勢が突出

export interface ResultRecord {
  id:         string
  sessionId:  string
  answers:    number[]   // 各問の回答インデックス
  score:      ScoreResult
  commentary: string
  createdAt:  string
}

// ─── API リクエスト / レスポンス ───────────────────────────────

export interface GenerateRequest {
  groupId?: string    // 同時受験グループID（省略可）
  level?:   QuizLevel // 初心者編 or 中級者編（省略時は intermediate）
}

export interface GenerateResponse {
  sessionId:   string
  questions:   Omit<Question, 'correctIndex'>[]   // correctIndex は含まない（セキュリティ）
  expiresAt:   string
}

export interface SubmitAnswersRequest {
  sessionId: string
  answers:   number[]   // 長さ12、各要素は 0-3
}

export interface SubmitAnswersResponse {
  resultId: string
  score:    ScoreResult
  commentary: string   // AI 生成またはテンプレート講評
}

// ─── ユーティリティ型 ──────────────────────────────────────────

export type ApiError = {
  error:   string
  code?:   string
  details?: string
}
