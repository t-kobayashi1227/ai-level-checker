import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getResult } from '@/lib/supabase'
import { LEVEL_CONFIG, CATEGORY_LABELS } from '@/types'
import { ResultRadar }  from '@/components/ResultRadar'
import { ShareButtons } from '@/components/ShareButtons'
import Link from 'next/link'

interface Props {
  params: Promise<{ resultId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { resultId } = await params
  const result = await getResult(resultId)
  if (!result) return {}

  const level   = LEVEL_CONFIG[result.score.level]
  const appUrl  = process.env.NEXT_PUBLIC_APP_URL ?? ''
  const ogUrl   = `${appUrl}/api/og?level=${result.score.level}&total=${result.score.total}` +
    `&knowledge=${result.score.categories.knowledge}` +
    `&practice=${result.score.categories.practice}` +
    `&ethics=${result.score.categories.ethics}` +
    `&future=${result.score.categories.future}`

  return {
    title: `${level.label}（${result.score.total}点） — AIレベルチェッカー`,
    openGraph: {
      title:       `${level.label}（${result.score.total}点）`,
      description: `AIリテラシー診断の結果をシェアしました！あなたも診断してみよう。`,
      images: [{ url: ogUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card:        'summary_large_image',
      title:       `${level.label}（${result.score.total}点）`,
      description: 'AIリテラシー診断の結果',
      images:      [ogUrl],
    },
  }
}

const LEVEL_BG: Record<string, string> = {
  gray:   'from-gray-900   to-gray-950',
  blue:   'from-blue-950   to-gray-950',
  teal:   'from-teal-950   to-gray-950',
  indigo: 'from-indigo-950 to-gray-950',
  purple: 'from-purple-950 to-gray-950',
}

const LEVEL_ACCENT: Record<string, string> = {
  gray:   'text-gray-300',
  blue:   'text-blue-400',
  teal:   'text-teal-400',
  indigo: 'text-indigo-400',
  purple: 'text-purple-400',
}

export default async function ResultPage({ params }: Props) {
  const { resultId } = await params
  const result = await getResult(resultId)
  if (!result) notFound()

  const { score, commentary } = result
  const levelCfg  = LEVEL_CONFIG[score.level]
  const bgClass   = LEVEL_BG[levelCfg.color]   ?? LEVEL_BG.indigo
  const accentCls = LEVEL_ACCENT[levelCfg.color] ?? LEVEL_ACCENT.indigo

  const categoryEntries = Object.entries(score.categories) as [
    keyof typeof score.categories, number
  ][]

  // 講評をパラグラフに分割
  const paragraphs = commentary.split('\n\n').filter(Boolean)

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-14">
      <div className="w-full max-w-xl">

        {/* ── レベルヒーロー ── */}
        <div className={`rounded-2xl bg-gradient-to-b ${bgClass} border border-white/5 p-8 mb-6 text-center animate-fade-up`}>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">あなたのAIレベル</p>
          <h1 className={`text-4xl font-bold mb-1 ${accentCls}`}>{levelCfg.label}</h1>
          <p className="text-sm text-gray-500 mb-6">{levelCfg.labelEn}</p>

          <div className="flex items-baseline justify-center gap-1 mb-1">
            <span className="text-6xl font-black text-white tabular-nums">{score.total}</span>
            <span className="text-xl text-gray-500">/ 100</span>
          </div>
          <p className="text-xs text-gray-600">総合スコア</p>
        </div>

        {/* ── レーダーチャート ── */}
        <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6 mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <p className="text-xs text-gray-500 mb-4 text-center uppercase tracking-widest">カテゴリ別スコア</p>
          <ResultRadar scores={score.categories} />

          {/* スコアバー */}
          <div className="mt-6 flex flex-col gap-3">
            {categoryEntries.map(([cat, val]) => (
              <div key={cat} className="flex items-center gap-3">
                <span className="text-xs text-gray-500 w-28 flex-shrink-0">
                  {CATEGORY_LABELS[cat]}
                </span>
                <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 rounded-full transition-all duration-700"
                    style={{ width: `${val}%` }}
                  />
                </div>
                <span className="text-xs text-gray-400 w-8 text-right tabular-nums">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 講評 ── */}
        <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6 mb-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
          <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest">診断コメント</p>
          <div className="flex flex-col gap-4">
            {paragraphs.map((para: string, i: number) => (
              <p key={i} className="text-sm text-gray-300 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* ── シェア ── */}
        <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6 mb-8 animate-fade-up" style={{ animationDelay: '300ms' }}>
          <ShareButtons resultId={resultId} level={score.level} total={score.total} />
        </div>

        {/* ── ナビゲーション ── */}
        <div className="flex flex-col items-center gap-4 animate-fade-up" style={{ animationDelay: '400ms' }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-6 py-3 text-sm text-gray-200 hover:bg-white/10 transition-colors"
          >
            ← トップへ戻る
          </Link>
          <Link
            href="/quiz"
            className="text-sm text-gray-500 hover:text-gray-300 underline underline-offset-4 transition-colors"
          >
            もう一度診断する（問題はランダムで変わります）
          </Link>
        </div>
      </div>
    </main>
  )
}
