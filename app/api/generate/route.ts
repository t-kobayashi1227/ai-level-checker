import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { generateQuestionSet } from '@/lib/claude'
import { saveSession, getUsedIndustriesInGroup } from '@/lib/supabase'
import type { GenerateRequest, GenerateResponse, Session } from '@/types'

export const runtime = 'nodejs'
export const maxDuration = 30  // 問題生成に最大30秒

export async function POST(req: NextRequest) {
  try {
    const body: GenerateRequest = await req.json().catch(() => ({}))
    const { groupId, level = 'intermediate' } = body

    // グループ内の使用済み業種を取得（同時受験の重複防止）
    let usedIndustries: string[] = []
    if (groupId) {
      usedIndustries = await getUsedIndustriesInGroup(groupId)
    }

    // 12問を並列生成
    const { questions, industriesUsed } = await generateQuestionSet(usedIndustries, level)

    // セッション作成（有効期限60分）
    const now = new Date()
    const expiresAt = new Date(now.getTime() + 60 * 60 * 1000)

    const session: Session = {
      id:             randomUUID(),
      questionSet:    questions,
      industriesUsed,
      groupId,
      createdAt:  now.toISOString(),
      expiresAt:  expiresAt.toISOString(),
    }

    await saveSession(session)

    // correctIndex はクライアントに返さない（不正防止）、explanation は含める
    const safeQuestions = questions.map(({ correctIndex: _, ...q }) => q)

    const response: GenerateResponse = {
      sessionId:  session.id,
      questions:  safeQuestions,
      expiresAt:  session.expiresAt,
    }

    return NextResponse.json(response)
  } catch (err) {
    console.error('/api/generate error:', err)
    return NextResponse.json(
      { error: '問題の生成に失敗しました。しばらく経ってから再試行してください。' },
      { status: 500 },
    )
  }
}
