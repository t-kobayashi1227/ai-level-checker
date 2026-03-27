'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { Category, Difficulty } from '@/types'
import { CATEGORY_LABELS } from '@/types'

interface QuizCardProps {
  questionNumber: number
  total:          number
  category:       Category
  difficulty:     Difficulty
  question:       string
  options:        string[]
  explanation:    string
  sessionId:      string
  questionIndex:  number
  onAnswer:       (index: number) => void
}

type AnswerState =
  | { phase: 'idle' }
  | { phase: 'checking' }
  | { phase: 'answered'; selectedIdx: number; isCorrect: boolean; correctIdx: number }

const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  easy:   '基礎',
  medium: '応用',
  hard:   '発展',
}

const CATEGORY_COLOR: Record<Category, string> = {
  knowledge: 'text-blue-400  border-blue-800  bg-blue-950/40',
  practice:  'text-teal-400  border-teal-800  bg-teal-950/40',
  ethics:    'text-amber-400 border-amber-800 bg-amber-950/40',
  future:    'text-purple-400 border-purple-800 bg-purple-950/40',
}

const OPTION_LABELS = ['A', 'B', 'C', 'D']

export function QuizCard({
  questionNumber,
  total,
  category,
  difficulty,
  question,
  options,
  explanation,
  sessionId,
  questionIndex,
  onAnswer,
}: QuizCardProps) {
  const [state, setState] = useState<AnswerState>({ phase: 'idle' })

  async function handleSelect(idx: number) {
    if (state.phase !== 'idle') return
    setState({ phase: 'checking' })

    try {
      const res = await fetch('/api/check', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ sessionId, questionIndex, selectedIndex: idx }),
      })
      const data = await res.json()
      setState({
        phase:       'answered',
        selectedIdx: idx,
        isCorrect:   data.isCorrect,
        correctIdx:  data.correctIndex,
      })
    } catch {
      // チェックAPI失敗時はフォールバック（正誤不明のまま進める）
      setState({ phase: 'answered', selectedIdx: idx, isCorrect: false, correctIdx: -1 })
    }
  }

  function handleNext() {
    if (state.phase !== 'answered') return
    onAnswer(state.selectedIdx)
  }

  const isAnswered = state.phase === 'answered'
  const isChecking = state.phase === 'checking'
  const isLast     = questionNumber === total

  return (
    <div className="animate-fade-up w-full max-w-2xl mx-auto">
      {/* バッジ行 */}
      <div className="flex items-center gap-2 mb-5">
        <span className={cn('text-xs font-medium px-2.5 py-1 rounded-full border', CATEGORY_COLOR[category])}>
          {CATEGORY_LABELS[category]}
        </span>
        <span className="text-xs text-gray-600 border border-gray-800 px-2.5 py-1 rounded-full">
          {DIFFICULTY_LABEL[difficulty]}
        </span>
      </div>

      {/* 問題文 */}
      <p className="text-lg leading-relaxed text-gray-100 mb-8 font-medium">
        {question}
      </p>

      {/* 選択肢 */}
      <div className="flex flex-col gap-3 mb-5">
        {options.map((opt, idx) => {
          const isSelected   = isAnswered && state.selectedIdx === idx
          const isCorrectOpt = isAnswered && state.correctIdx === idx
          const isWrong      = isSelected && !state.isCorrect

          let buttonStyle = 'border-gray-800 bg-gray-900 hover:border-indigo-600 hover:bg-indigo-950/30 cursor-pointer'
          if (isAnswered) {
            if (isCorrectOpt) {
              buttonStyle = 'border-green-500 bg-green-950/40 cursor-default'
            } else if (isWrong) {
              buttonStyle = 'border-red-500 bg-red-950/40 cursor-default'
            } else {
              buttonStyle = 'border-gray-800 bg-gray-900 opacity-30 cursor-default'
            }
          }

          let labelStyle = 'bg-gray-800 text-gray-400 group-hover:bg-indigo-900 group-hover:text-indigo-300'
          if (isAnswered) {
            if (isCorrectOpt) labelStyle = 'bg-green-500 text-white'
            else if (isWrong) labelStyle = 'bg-red-500 text-white'
          }

          let textStyle = isSelected ? 'text-indigo-100' : 'text-gray-300'
          if (isAnswered) {
            if (isCorrectOpt) textStyle = 'text-green-100'
            else if (isWrong) textStyle = 'text-red-200'
          }

          return (
            <button
              key={idx}
              onClick={() => { void handleSelect(idx) }}
              disabled={isAnswered || isChecking}
              className={cn(
                'group flex items-start gap-4 w-full text-left rounded-xl border px-5 py-4 min-h-[48px]',
                'transition-colors duration-200',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
                buttonStyle,
              )}
            >
              <span className={cn(
                'flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors duration-200',
                labelStyle,
              )}>
                {OPTION_LABELS[idx]}
              </span>
              <span className={cn('text-sm leading-relaxed pt-0.5 flex-1 transition-colors duration-200', textStyle)}>
                {opt}
              </span>
              {/* 正解マーク */}
              {isAnswered && isCorrectOpt && (
                <span className="flex-shrink-0 text-green-400 text-lg font-bold pt-0.5" aria-hidden="true">○</span>
              )}
              {isAnswered && isWrong && (
                <span className="flex-shrink-0 text-red-400 text-lg font-bold pt-0.5" aria-hidden="true">✕</span>
              )}
            </button>
          )
        })}
      </div>

      {/* 確認中スピナー */}
      {isChecking && (
        <div role="status" aria-live="polite" className="flex items-center gap-2 mb-4 text-gray-500 text-sm">
          <div className="w-4 h-4 rounded-full border-2 border-gray-500 border-t-transparent animate-spin" aria-hidden="true" />
          確認中…
        </div>
      )}

      {/* 正誤バナー */}
      {isAnswered && (
        <div role="status" aria-live="polite" className="animate-fade-up mb-4">
          <div className={cn(
            'rounded-xl border px-5 py-3 flex items-center gap-3 mb-4',
            state.isCorrect
              ? 'border-green-700 bg-green-950/40'
              : 'border-red-700 bg-red-950/40',
          )}>
            <span className={cn('text-2xl font-bold', state.isCorrect ? 'text-green-400' : 'text-red-400')} aria-hidden="true">
              {state.isCorrect ? '○' : '✕'}
            </span>
            <span className={cn('font-semibold text-sm', state.isCorrect ? 'text-green-300' : 'text-red-300')}>
              {state.isCorrect ? '正解！' : '不正解'}
            </span>
          </div>

          {/* 解説 */}
          <div className="rounded-xl border border-indigo-900 bg-indigo-950/30 px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden="true">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
                <path d="M9 18h6M10 22h4"/>
              </svg>
              <span className="text-xs font-semibold text-indigo-300">解説</span>
            </div>
            <p className="text-sm text-indigo-100 leading-relaxed">{explanation}</p>
          </div>
        </div>
      )}

      {/* 次へボタン */}
      {isAnswered && (
        <div className="animate-fade-up">
          <button
            onClick={handleNext}
            className="w-full py-3.5 rounded-xl font-semibold text-sm bg-indigo-600 hover:bg-indigo-500 text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            {isLast ? '結果を見る →' : '次の問題へ →'}
          </button>
        </div>
      )}
    </div>
  )
}
