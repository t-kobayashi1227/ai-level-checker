'use client'

import { Suspense, useState, useEffect, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { QuizCard }    from '@/components/QuizCard'
import { ProgressBar } from '@/components/ProgressBar'
import type { GenerateResponse, QuizLevel } from '@/types'
import { QUIZ_LEVEL_CONFIG } from '@/types'

type Phase = 'loading' | 'quiz' | 'submitting' | 'error'

function QuizContent() {
  const router       = useRouter()
  const searchParams = useSearchParams()
  const level        = (searchParams.get('level') ?? 'intermediate') as QuizLevel

  const [phase,    setPhase]    = useState<Phase>('loading')
  const [session,  setSession]  = useState<GenerateResponse | null>(null)
  const [current,  setCurrent]  = useState(0)
  const [answers,  setAnswers]  = useState<number[]>([])
  const [errorMsg, setErrorMsg] = useState('')

  // ── スコア送信 ─────────────────────────────────────────────────
  const submitAnswers = useCallback(async (allAnswers: number[], sessionId: string) => {
    setPhase('submitting')
    try {
      const res = await fetch('/api/score', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ sessionId, answers: allAnswers }),
      })
      if (!res.ok) throw new Error()
      const data = await res.json()
      router.push(`/result/${data.resultId}`)
    } catch {
      setErrorMsg('スコアの送信に失敗しました。再試行してください。')
      setPhase('error')
    }
  }, [router])

  // ── 問題セット生成 ─────────────────────────────────────────────
  const generateSession = useCallback(async () => {
    setPhase('loading')
    setAnswers([])
    setCurrent(0)
    try {
      const res = await fetch('/api/generate', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ level }),
      })
      if (!res.ok) throw new Error('生成に失敗しました')
      const data: GenerateResponse = await res.json()
      setSession(data)
      setPhase('quiz')
    } catch {
      setErrorMsg('問題の読み込みに失敗しました。再試行してください。')
      setPhase('error')
    }
  }, [level])

  useEffect(() => {
    void generateSession()
  }, [generateSession])

  // ── 回答ハンドラ（同期） ───────────────────────────────────────
  const handleAnswer = useCallback(
    (idx: number) => {
      if (!session) return

      const newAnswers = [...answers, idx]
      setAnswers(newAnswers)

      const next = current + 1
      if (next < session.questions.length) {
        setCurrent(next)
        return
      }

      void submitAnswers(newAnswers, session.sessionId)
    },
    [answers, current, session, submitAnswers],
  )

  // ── Loading ────────────────────────────────────────────────────
  if (phase === 'loading') {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
        <div role="status" aria-live="polite" className="flex flex-col items-center gap-4 animate-fade-in">
          <div className="w-10 h-10 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin" aria-hidden="true" />
          <p className="text-gray-400 text-sm">問題を生成しています…</p>
          <p className="text-gray-600 text-xs">初回は10〜20秒かかる場合があります</p>
        </div>
      </main>
    )
  }

  // ── Submitting ─────────────────────────────────────────────────
  if (phase === 'submitting') {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <div role="status" aria-live="polite" className="flex flex-col items-center gap-4 animate-fade-in">
          <div className="w-10 h-10 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin" aria-hidden="true" />
          <p className="text-gray-400 text-sm">スコアを計算しています…</p>
        </div>
      </main>
    )
  }

  // ── Error ──────────────────────────────────────────────────────
  if (phase === 'error') {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
        <div role="alert" aria-live="assertive" className="text-center animate-fade-up">
          <p className="text-gray-300 mb-6">{errorMsg}</p>
          <button
            onClick={() => { void generateSession() }}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          >
            再試行する
          </button>
        </div>
      </main>
    )
  }

  // ── Quiz ───────────────────────────────────────────────────────
  if (!session) return null
  const q = session.questions[current]

  return (
    <main className="min-h-screen flex flex-col items-start px-4 py-12 max-w-2xl mx-auto">
      <h1 className="sr-only">AIレベルチェッカー — {QUIZ_LEVEL_CONFIG[level].label}</h1>

      {/* ヘッダー */}
      <div className="w-full mb-10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-gray-600 font-medium tracking-widest uppercase">
            AIレベルチェッカー
          </span>
          <span className="text-xs text-gray-700 border border-gray-800 px-2.5 py-1 rounded-full">
            {QUIZ_LEVEL_CONFIG[level].label}
          </span>
        </div>
        <ProgressBar current={current + 1} total={session.questions.length} />
      </div>

      {/* 設問カード */}
      <div className="w-full flex-1">
        <QuizCard
          key={current}
          questionNumber={current + 1}
          total={session.questions.length}
          category={q.category}
          difficulty={q.difficulty}
          question={q.question}
          options={q.options}
          explanation={q.explanation}
          sessionId={session.sessionId}
          questionIndex={current}
          onAnswer={handleAnswer}
        />
      </div>
    </main>
  )
}

export default function QuizPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
        <div role="status" aria-label="読み込み中" className="w-10 h-10 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin" />
      </main>
    }>
      <QuizContent />
    </Suspense>
  )
}
