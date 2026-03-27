import { createClient } from '@supabase/supabase-js'
import type { Session, ResultRecord, ScoreResult } from '@/types'

// ─── クライアント初期化 ────────────────────────────────────────

/** ブラウザ用（anon key）*/
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)

/** サーバー用（service role key）- API Routes 内でのみ使用 */
export function createServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  )
}

// ─── セッション操作 ────────────────────────────────────────────

export async function saveSession(session: Session): Promise<void> {
  const db = createServerClient()
  const { error } = await db.from('sessions').insert({
    id:              session.id,
    question_set:    session.questionSet,
    industries_used: session.industriesUsed,
    group_id:        session.groupId ?? null,
    created_at:      session.createdAt,
    expires_at:      session.expiresAt,
  })
  if (error) throw new Error(`Failed to save session: ${error.message}`)
}

export async function getSession(sessionId: string): Promise<Session | null> {
  const db = createServerClient()
  const { data, error } = await db
    .from('sessions')
    .select('*')
    .eq('id', sessionId)
    .single()

  if (error || !data) return null

  return {
    id:             data.id,
    questionSet:    data.question_set,
    industriesUsed: data.industries_used,
    groupId:        data.group_id ?? undefined,
    createdAt:      data.created_at,
    expiresAt:      data.expires_at,
  }
}

/** グループ内で使用済みの業種を取得（同時受験の重複防止） */
export async function getUsedIndustriesInGroup(
  groupId: string,
): Promise<string[]> {
  const db = createServerClient()
  const { data } = await db
    .from('sessions')
    .select('industries_used')
    .eq('group_id', groupId)
    .gt('expires_at', new Date().toISOString())

  if (!data) return []
  return data.flatMap((row) => row.industries_used as string[])
}

// ─── 結果操作 ──────────────────────────────────────────────────

export async function saveResult(
  sessionId: string,
  answers:   number[],
  score:     ScoreResult,
  commentary: string,
): Promise<string> {
  const db = createServerClient()
  const { data, error } = await db
    .from('results')
    .insert({
      session_id:  sessionId,
      answers,
      scores:      score,
      level:       score.level,
      commentary,
    })
    .select('id')
    .single()

  if (error || !data) throw new Error(`Failed to save result: ${error?.message}`)
  return data.id
}

export async function getResult(resultId: string): Promise<ResultRecord | null> {
  const db = createServerClient()
  const { data, error } = await db
    .from('results')
    .select('*')
    .eq('id', resultId)
    .single()

  if (error || !data) return null

  return {
    id:         data.id,
    sessionId:  data.session_id,
    answers:    data.answers,
    score:      data.scores as ScoreResult,
    commentary: data.commentary,
    createdAt:  data.created_at,
  }
}
