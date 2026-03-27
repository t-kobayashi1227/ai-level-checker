import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import { LEVEL_CONFIG } from '@/types'
import type { Level } from '@/types'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const level      = (searchParams.get('level') ?? 'practitioner') as Level
  const total      = searchParams.get('total') ?? '60'
  const knowledge  = searchParams.get('knowledge') ?? '60'
  const practice   = searchParams.get('practice') ?? '60'
  const ethics     = searchParams.get('ethics') ?? '60'
  const future     = searchParams.get('future') ?? '60'

  const levelCfg   = LEVEL_CONFIG[level] ?? LEVEL_CONFIG['practitioner']

  const colorMap: Record<string, string> = {
    gray:   '#5F5E5A',
    blue:   '#185FA5',
    teal:   '#0F6E56',
    indigo: '#312e81',
    purple: '#3C3489',
  }
  const accentColor = colorMap[levelCfg.color] ?? '#4f46e5'

  return new ImageResponse(
    (
      <div
        style={{
          width:           '100%',
          height:          '100%',
          display:         'flex',
          flexDirection:   'column',
          backgroundColor: '#0f0f11',
          padding:         '60px',
          fontFamily:      'sans-serif',
        }}
      >
        {/* 上部：サービス名 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <div
            style={{
              width:           '8px',
              height:          '40px',
              backgroundColor: accentColor,
              borderRadius:    '4px',
            }}
          />
          <span style={{ color: '#9ca3af', fontSize: '20px', fontWeight: 500 }}>
            AIレベルチェッカー
          </span>
        </div>

        {/* レベル名 */}
        <div
          style={{
            fontSize:    '72px',
            fontWeight:  900,
            color:       '#ffffff',
            lineHeight:  1.1,
            marginBottom: '8px',
          }}
        >
          {levelCfg.label}
        </div>
        <div style={{ fontSize: '28px', color: '#9ca3af', marginBottom: '48px' }}>
          {levelCfg.labelEn}
        </div>

        {/* スコア */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '48px' }}>
          <span style={{ fontSize: '96px', fontWeight: 900, color: accentColor, lineHeight: 1 }}>
            {total}
          </span>
          <span style={{ fontSize: '32px', color: '#6b7280' }}>/ 100点</span>
        </div>

        {/* カテゴリバー */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {[
            { label: '知識・理解', value: knowledge },
            { label: '実践的活用', value: practice },
            { label: '倫理・リスク認識', value: ethics },
            { label: '将来への姿勢', value: future },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ width: '160px', color: '#9ca3af', fontSize: '18px' }}>{item.label}</span>
              <div style={{ flex: 1, height: '8px', backgroundColor: '#1f2937', borderRadius: '4px', display: 'flex' }}>
                <div
                  style={{
                    width:           `${item.value}%`,
                    height:          '100%',
                    backgroundColor: accentColor,
                    borderRadius:    '4px',
                  }}
                />
              </div>
              <span style={{ width: '52px', color: '#e5e7eb', fontSize: '18px', fontWeight: 700, textAlign: 'right' }}>
                {item.value}点
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop:    'auto',
            paddingTop:   '32px',
            borderTop:    '1px solid #374151',
            color:        '#6b7280',
            fontSize:     '18px',
          }}
        >
          あなたのAIレベルを診断しよう → ai-level-checker.vercel.app
        </div>
      </div>
    ),
    {
      width:  1200,
      height: 630,
    },
  )
}
