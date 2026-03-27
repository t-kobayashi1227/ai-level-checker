import type {
  Question,
  CategoryScores,
  ScoreResult,
  Level,
  ProfileType,
  Category,
} from '@/types'
import { CATEGORY_WEIGHTS, LEVEL_CONFIG } from '@/types'

/**
 * カテゴリ別スコアを計算する
 * @param questions  出題された12問（correctIndex 含む）
 * @param answers    ユーザーの回答インデックス配列（長さ12）
 */
export function calcCategoryScores(
  questions: Question[],
  answers: number[],
): CategoryScores {
  const categories: Category[] = ['knowledge', 'practice', 'ethics', 'future']
  const result = {} as CategoryScores

  for (const cat of categories) {
    const qs = questions.filter((q) => q.category === cat)
    if (qs.length === 0) {
      result[cat] = 0
      continue
    }
    const correct = qs.filter((q, _) => {
      const idx = questions.indexOf(q)
      return answers[idx] === q.correctIndex
    }).length
    result[cat] = Math.round((correct / qs.length) * 100)
  }

  return result
}

/**
 * 総合スコアを算出する（重み付き加重平均）
 */
export function calcTotalScore(categories: CategoryScores): number {
  const total =
    categories.knowledge * CATEGORY_WEIGHTS.knowledge +
    categories.practice  * CATEGORY_WEIGHTS.practice +
    categories.ethics    * CATEGORY_WEIGHTS.ethics +
    categories.future    * CATEGORY_WEIGHTS.future

  return Math.round(total)
}

/**
 * スコアからレベルを判定する
 */
export function scoreToLevel(total: number): Level {
  for (const [level, cfg] of Object.entries(LEVEL_CONFIG) as [Level, typeof LEVEL_CONFIG[Level]][]) {
    if (total >= cfg.range[0] && total <= cfg.range[1]) return level
  }
  return 'beginner'
}

/**
 * カテゴリスコアからプロファイルタイプを判定する
 */
export function detectProfileType(scores: CategoryScores): ProfileType {
  const avg =
    (scores.knowledge + scores.practice + scores.ethics + scores.future) / 4

  const SPIKE_THRESHOLD = 15

  // 突出したカテゴリを検出
  if (scores.ethics - avg >= SPIKE_THRESHOLD) return 'ethicist'
  if (scores.future - avg >= SPIKE_THRESHOLD) return 'future-oriented'

  const knowledgePracticeGap = scores.knowledge - scores.practice
  if (knowledgePracticeGap >= SPIKE_THRESHOLD) return 'theorist'
  if (-knowledgePracticeGap >= SPIKE_THRESHOLD) return 'practitioner'

  return 'balanced'
}

/**
 * 最も高い・低いカテゴリを特定する
 */
export function findStrongestWeakest(scores: CategoryScores): {
  strongest: Category
  weakest:   Category
} {
  const entries = Object.entries(scores) as [Category, number][]
  entries.sort((a, b) => b[1] - a[1])
  return {
    strongest: entries[0][0],
    weakest:   entries[entries.length - 1][0],
  }
}

/**
 * すべてのスコア計算をまとめて実行する
 */
export function calcFullScore(
  questions: Question[],
  answers: number[],
): ScoreResult {
  const categories  = calcCategoryScores(questions, answers)
  const total       = calcTotalScore(categories)
  const level       = scoreToLevel(total)
  const profileType = detectProfileType(categories)
  const { strongest, weakest } = findStrongestWeakest(categories)

  return {
    total,
    categories,
    level,
    profileType,
    strongestCategory: strongest,
    weakestCategory:   weakest,
  }
}
