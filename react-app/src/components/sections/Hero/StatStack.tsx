import { CornerBrackets } from '@/components/ui/CornerBrackets'
import { LiveDot } from '@/components/ui/LiveDot'

interface Stat {
  number:      string
  unit:        string
  unitWide?:   boolean
  label:       string
  description: string
}

const stats: Stat[] = [
  {
    number:      '18',
    unit:        'M',
    label:       'Aylık İzlenim',
    description: 'İstanbul ana arterlerinde, GPS rotalarıyla doğrulanmış.',
  },
  {
    number:      '3',
    unit:        'EKRAN',
    unitWide:    true,
    label:       'Yayın Yüzeyi',
    description: 'Tek araç üzerinde, 3 yönde eş zamanlı yayın.',
  },
  {
    number:      '24',
    unit:        'H',
    label:       'Kampanya Lansmanı',
    description: 'Kreatif teslimden ilk yayına kadar.',
  },
]

export function StatStack() {
  return (
    <aside
      style={{
        border: '1px solid var(--color-line-strong)',
        backgroundColor: 'var(--color-bg)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <CornerBrackets />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '14px 20px',
          borderBottom: '1px solid var(--color-line)',
          color: 'var(--color-muted)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <LiveDot size={6} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em' }}>
            CANLI
          </span>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em' }}>
          IST-001
        </span>
      </div>

      {/* Stats */}
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          style={{
            padding: '36px 28px',
            borderBottom: i < stats.length - 1 ? '1px solid var(--color-line)' : 'none',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'end',
            gap: 12,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-title)',
              fontWeight: 800,
              fontSize: 88,
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
            }}
          >
            {stat.number}
            <span
              style={{
                color: 'var(--color-orange)',
                fontSize: stat.unitWide ? 36 : 56,
                marginLeft: 6,
                letterSpacing: stat.unitWide ? '0.02em' : undefined,
              }}
            >
              {stat.unit}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, textAlign: 'right', maxWidth: 180 }}>
            <span
              style={{
                fontFamily: 'var(--font-label)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                fontSize: 11,
                color: 'var(--color-muted)',
              }}
            >
              {stat.label}
            </span>
            <span style={{ fontSize: 14, lineHeight: 1.35 }}>
              {stat.description}
            </span>
          </div>
        </div>
      ))}
    </aside>
  )
}
