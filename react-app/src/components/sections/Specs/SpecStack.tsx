import { CornerBrackets } from '@/components/ui/CornerBrackets'
import { LiveDot } from '@/components/ui/LiveDot'

interface SpecValue {
  big?:  string
  unit?: string
  sep?:  boolean
  live?: boolean
}

interface SpecEntry {
  label:      string
  labelSuffix?: string
  values:     SpecValue[]
}

const specs: SpecEntry[] = [
  {
    label:        'Yan Ekran',
    labelSuffix:  '×2',
    values:       [{ big: '3840' }, { sep: true }, { big: '2240' }, { unit: 'mm' }],
  },
  {
    label:  'Arka Ekran',
    values: [{ big: '2400' }, { sep: true }, { big: '2240' }, { unit: 'mm' }],
  },
  {
    label:        'Çözünürlük',
    labelSuffix:  '/ Yan',
    values:       [{ big: '2480' }, { sep: true }, { big: '560' }, { unit: 'px' }],
  },
  {
    label:  'Parlaklık',
    values: [{ big: '6500' }, { unit: 'cd/m²' }],
  },
  {
    label:  'Operasyon',
    values: [{ big: '12' }, { unit: 'saat / gün' }, { unit: 'aktif', live: true }],
  },
]

export function SpecStack() {
  return (
    <aside
      style={{
        border: '1px solid var(--color-line-strong)',
        backgroundColor: 'var(--color-bg)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
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
        <span style={{ fontFamily: 'var(--font-label)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 12 }}>
          PH-3 / Outdoor
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>REV. 2024</span>
      </div>

      {/* Spec rows */}
      {specs.map((spec, i) => (
        <div
          key={spec.label}
          style={{
            padding: '30px 28px',
            borderBottom: i < specs.length - 1 ? '1px solid var(--color-line)' : 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'color-mix(in oklab, var(--color-ink) 72%, transparent)' }}>
            {spec.label}
            {spec.labelSuffix && (
              <em style={{ fontStyle: 'normal', color: 'var(--color-orange)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.02em', marginLeft: 6 }}>
                {spec.labelSuffix}
              </em>
            )}
          </span>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
            {spec.values.map((v, vi) => {
              if (v.sep) {
                return (
                  <span key={vi} style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: 36, lineHeight: 0.9, color: 'var(--color-muted)', margin: '0 -2px' }}>×</span>
                )
              }
              if (v.big) {
                return (
                  <span key={vi} style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: 60, lineHeight: 0.9, letterSpacing: '-0.01em' }}>
                    {v.big}
                  </span>
                )
              }
              if (v.unit) {
                return (
                  <span key={vi} style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--color-orange)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    {v.live && <LiveDot size={7} />}
                    {v.unit}
                  </span>
                )
              }
              return null
            })}
          </div>
        </div>
      ))}
    </aside>
  )
}
