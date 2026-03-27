'use client'

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import type { CategoryScores } from '@/types'
import { CATEGORY_LABELS } from '@/types'

interface ResultRadarProps {
  scores: CategoryScores
}

export function ResultRadar({ scores }: ResultRadarProps) {
  const data = [
    { subject: CATEGORY_LABELS.knowledge, value: scores.knowledge, fullMark: 100 },
    { subject: CATEGORY_LABELS.practice,  value: scores.practice,  fullMark: 100 },
    { subject: CATEGORY_LABELS.ethics,    value: scores.ethics,    fullMark: 100 },
    { subject: CATEGORY_LABELS.future,    value: scores.future,    fullMark: 100 },
  ]

  return (
    <ResponsiveContainer width="100%" height={280}>
      <RadarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
        <PolarGrid
          stroke="#1f2937"
          strokeWidth={1}
        />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: '#9ca3af', fontSize: 12 }}
        />
        <Radar
          name="スコア"
          dataKey="value"
          stroke="#6366f1"
          strokeWidth={2}
          fill="#6366f1"
          fillOpacity={0.25}
          dot={{ fill: '#6366f1', strokeWidth: 0, r: 4 }}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
