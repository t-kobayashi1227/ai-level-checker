import Link from 'next/link'

const CATEGORIES = [
  { icon: '◆', label: '知識・理解',       desc: 'AIの仕組みや基本概念',      color: 'border-blue-800 bg-blue-950/30 text-blue-300' },
  { icon: '◆', label: '実践的活用',       desc: 'ツール選択や使い方',          color: 'border-teal-800 bg-teal-950/30 text-teal-300' },
  { icon: '◆', label: '倫理・リスク認識', desc: '情報セキュリティや注意点',    color: 'border-amber-800 bg-amber-950/30 text-amber-300' },
  { icon: '◆', label: '将来への姿勢',     desc: 'AI時代のスキルとキャリア観', color: 'border-purple-800 bg-purple-950/30 text-purple-300' },
]

const LEVELS = [
  {
    level:    'beginner',
    label:    '初心者編',
    labelEn:  'Beginner',
    desc:     'AIって何？どんなツールがあるの？という方向け',
    tags:     ['ツール名を覚える', 'AI用語の基礎', '今日から使える活用法'],
    color:    'border-emerald-700 hover:border-emerald-500 bg-emerald-950/20 hover:bg-emerald-950/40',
    badge:    'bg-emerald-800/60 text-emerald-300',
    arrow:    'text-emerald-400',
  },
  {
    level:    'intermediate',
    label:    '中級者編',
    labelEn:  'Intermediate',
    desc:     'AIを使ったことがある方向け。活用力を測ります',
    tags:     ['ツールの使い分け', 'プロンプト技術', 'リスク管理'],
    color:    'border-indigo-700 hover:border-indigo-500 bg-indigo-950/20 hover:bg-indigo-950/40',
    badge:    'bg-indigo-800/60 text-indigo-300',
    arrow:    'text-indigo-400',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-16">
      {/* ヒーロー */}
      <div className="w-full max-w-xl text-center mb-14 animate-fade-up">
        <div className="inline-flex items-center gap-2 text-xs text-indigo-400 border border-indigo-900 bg-indigo-950/40 px-3 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          無料診断 — 登録不要
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5 tracking-tight">
          AIレベル<br />
          <span className="text-indigo-400">チェッカー</span>
        </h1>

        <p className="text-gray-400 text-base leading-relaxed">
          12問の選択式テストで<br className="sm:hidden" />
          あなたのAIリテラシーを数値化。<br />
          下からレベルを選んで診断を始めてください。
        </p>
      </div>

      {/* レベル選択 */}
      <div className="w-full max-w-xl flex flex-col gap-4 mb-12 animate-fade-up" style={{ animationDelay: '100ms' }}>
        <p className="text-xs text-gray-600 text-center uppercase tracking-widest mb-1">レベルを選択</p>

        {LEVELS.map((lv) => (
          <Link
            key={lv.level}
            href={`/quiz?level=${lv.level}`}
            className={`group rounded-2xl border p-6 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] ${lv.color}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${lv.badge}`}>
                    {lv.label}
                  </span>
                  <span className="text-xs text-gray-600">{lv.labelEn}</span>
                </div>
                <p className="text-sm text-gray-300 mb-4">{lv.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {lv.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-500 border border-gray-800 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <svg
                className={`flex-shrink-0 w-5 h-5 mt-1 ${lv.arrow} transition-transform group-hover:translate-x-1`}
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* カテゴリ説明 */}
      <div className="w-full max-w-xl animate-fade-up" style={{ animationDelay: '200ms' }}>
        <p className="text-xs text-gray-600 mb-4 text-center uppercase tracking-widest">測定する4領域</p>
        <div className="grid grid-cols-2 gap-3">
          {CATEGORIES.map((c) => (
            <div key={c.label} className={`rounded-xl border p-4 ${c.color}`}>
              <div className="text-xs font-semibold mb-1">{c.label}</div>
              <div className="text-xs opacity-70">{c.desc}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-700 text-center mt-6">所要時間：約3〜5分 / 全12問</p>
      </div>
    </main>
  )
}
