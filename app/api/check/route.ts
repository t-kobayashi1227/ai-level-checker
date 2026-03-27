import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/supabase'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { sessionId, questionIndex, selectedIndex } = body

    if (
      typeof sessionId !== 'string' ||
      typeof questionIndex !== 'number' ||
      typeof selectedIndex !== 'number'
    ) {
      return NextResponse.json({ error: '不正なリクエストです。' }, { status: 400 })
    }

    const session = await getSession(sessionId)
    if (!session) {
      return NextResponse.json({ error: 'セッションが見つかりません。' }, { status: 404 })
    }

    const question = session.questionSet[questionIndex]
    if (!question) {
      return NextResponse.json({ error: '問題が見つかりません。' }, { status: 404 })
    }

    return NextResponse.json({
      isCorrect:    selectedIndex === question.correctIndex,
      correctIndex: question.correctIndex,
    })
  } catch (err) {
    console.error('/api/check error:', err)
    return NextResponse.json({ error: '正誤確認に失敗しました。' }, { status: 500 })
  }
}
