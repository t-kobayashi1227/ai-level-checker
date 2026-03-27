'use client'

import { cn } from '@/lib/utils'

interface ProgressBarProps {
  current: number   // 1始まり
  total:   number
  className?: string
}

export function ProgressBar({ current, total, className }: ProgressBarProps) {
  const pct = Math.round(((current - 1) / total) * 100)

  return (
    <div className={cn('w-full', className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-gray-500 tabular-nums" aria-hidden="true">
          {current} / {total}
        </span>
        <span className="text-xs text-gray-500" aria-hidden="true">{pct}%</span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label={`問題 ${current} / ${total}`}
        className="h-1 bg-gray-800 rounded-full overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="h-full bg-indigo-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
