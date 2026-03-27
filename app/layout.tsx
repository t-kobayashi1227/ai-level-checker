import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AIレベルチェッカー | あなたのAIリテラシーを診断',
  description: '12問の選択式テストでAIリテラシー・活用レベルが数値と講評で分かる無料診断サービス。知識・実践・倫理・将来への姿勢の4領域を測定します。',
  openGraph: {
    title:       'AIレベルチェッカー',
    description: '12問でわかる あなたのAIリテラシー診断',
    type:        'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-950 text-gray-100 antialiased">
        {children}
      </body>
    </html>
  )
}
