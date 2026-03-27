'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { Level } from '@/types'
import { LEVEL_CONFIG } from '@/types'

interface ShareButtonsProps {
  resultId: string
  level:    Level
  total:    number
}

export function ShareButtons({ resultId, level, total }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const appUrl    = process.env.NEXT_PUBLIC_APP_URL ?? 'https://ai-level-checker.vercel.app'
  const resultUrl = `${appUrl}/result/${resultId}`
  const levelCfg  = LEVEL_CONFIG[level]

  const xText = encodeURIComponent(
    `AIリテラシー診断で「${levelCfg.label}」（${total}点）になりました！\n` +
    `あなたのAIレベルは？ #AIレベルチェック\n${resultUrl}`,
  )
  const xUrl    = `https://twitter.com/intent/tweet?text=${xText}`
  const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(`AIレベルチェック（${total}点・${levelCfg.label}）\n${resultUrl}`)}`

  async function handleCopy() {
    await navigator.clipboard.writeText(resultUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="text-xs text-gray-500 text-center mb-1">結果をシェアする</p>

      {/* X (Twitter) */}
      <a
        href={xUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl',
          'bg-gray-900 border border-gray-800',
          'text-sm font-medium text-gray-200',
          'hover:bg-gray-800 hover:border-gray-700 transition-colors duration-150',
        )}
      >
        <XIcon />
        Xでシェアする
      </a>

      {/* LINE */}
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl',
          'bg-[#06c755]/10 border border-[#06c755]/30',
          'text-sm font-medium text-[#06c755]',
          'hover:bg-[#06c755]/20 transition-colors duration-150',
        )}
      >
        <LineIcon />
        LINEで送る
      </a>

      {/* URLコピー */}
      <button
        onClick={handleCopy}
        className={cn(
          'flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl',
          'border border-gray-800 bg-gray-900',
          'text-sm font-medium transition-colors duration-150',
          copied
            ? 'text-green-400 border-green-800'
            : 'text-gray-400 hover:text-gray-200 hover:border-gray-700',
        )}
      >
        {copied ? (
          <>
            <CheckIcon />
            コピーしました！
          </>
        ) : (
          <>
            <CopyIcon />
            リンクをコピー
          </>
        )}
      </button>
    </div>
  )
}

// ─── アイコン（SVG）──────────────────────────────────────────────

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}

function LineIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}
