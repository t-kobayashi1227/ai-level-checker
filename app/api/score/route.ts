import { NextRequest, NextResponse } from 'next/server'
import { getSession, saveResult } from '@/lib/supabase'
import { calcFullScore } from '@/lib/scoring'
import { generateCommentary } from '@/lib/commentary'
import type { SubmitAnswersRequest, SubmitAnswersResponse } from '@/types'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const body: SubmitAnswersRequest = await req.json()
    const { sessionId, answers } = body

    // バリデーション
    if (!sessionId || !Array.isArray(answers) || answers.length !== 12) {
      return NextResponse.json(
        { error: '不正なリクエストです。' },
        { status: 400 },
      )
    }

    // セッション取得
    const session = await getSession(sessionId)
    if (!session) {
      return NextResponse.json(
        { error: 'セッションが見つかりません。最初からやり直してください。' },
        { status: 404 },
      )
    }

    // セッション有効期限チェック
    if (new Date(session.expiresAt) < new Date()) {
      return NextResponse.json(
        { error: 'セッションの有効期限が切れています。最初からやり直してください。' },
        { status: 410 },
      )
    }

    // スコア計算（サーバーサイドで実施 → 不正防止）
    const score = calcFullScore(session.questionSet, answers)

    // 講評生成
    const commentary = generateCommentary(score)

    // 結果保存
    const resultId = await saveResult(sessionId, answers, score, commentary)

    const response: SubmitAnswersResponse = {
      resultId,
      score,
      commentary,
    }

    return NextResponse.json(response)
  } catch (err) {
    console.error('/api/score error:', err)
    return NextResponse.json(
      { error: 'スコアの計算に失敗しました。' },
      { status: 500 },
    )
  }
}
