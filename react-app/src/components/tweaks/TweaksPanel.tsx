import { useTheme } from '@/context/ThemeContext'
import type { Mood, Tempo } from '@/context/ThemeContext'

const moods: { value: Mood; label: string }[] = [
  { value: 'operational', label: 'Op.' },
  { value: 'editorial',   label: 'Ed.' },
  { value: 'night',       label: 'Gece' },
]

const tempos: { value: Tempo; label: string }[] = [
  { value: 'compact',     label: 'Sıkı' },
  { value: 'standard',    label: 'Std.' },
  { value: 'theatrical',  label: 'Sahne' },
]

const accentColors = ['#FF5E1A', '#22D3EE', '#C6F24E', '#0A0A0A']

export function TweaksPanel() {
  const { mood, tempo, accent, setMood, setTempo, setAccent } = useTheme()

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 999,
        backgroundColor: '#0A0A0A',
        border: '1px solid rgba(255,255,255,0.12)',
        padding: '16px 20px',
        width: 220,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: '#FAFAFA',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <div style={{ fontFamily: 'var(--font-label)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>
        Media270 — Tweaks
      </div>

      {/* Mood */}
      <div>
        <div style={{ marginBottom: 8, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Mood</div>
        <div style={{ display: 'flex', gap: 6 }}>
          {moods.map((m) => (
            <button
              key={m.value}
              onClick={() => setMood(m.value)}
              style={{
                flex: 1,
                padding: '6px 0',
                backgroundColor: mood === m.value ? '#FF5E1A' : 'rgba(255,255,255,0.08)',
                color: mood === m.value ? '#fff' : 'rgba(255,255,255,0.6)',
                border: 'none',
                borderRadius: 2,
                fontFamily: 'var(--font-label)',
                fontWeight: 600,
                fontSize: 10,
                textTransform: 'uppercase',
                letterSpacing: '0.10em',
                cursor: 'pointer',
              }}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accent */}
      <div>
        <div style={{ marginBottom: 8, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Aksan</div>
        <div style={{ display: 'flex', gap: 6 }}>
          {accentColors.map((c) => (
            <button
              key={c}
              onClick={() => setAccent(c)}
              title={c}
              style={{
                width: 28,
                height: 28,
                backgroundColor: c,
                border: accent === c ? '2px solid #fff' : '2px solid transparent',
                borderRadius: 2,
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>

      {/* Tempo */}
      <div>
        <div style={{ marginBottom: 8, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Tempo</div>
        <div style={{ display: 'flex', gap: 6 }}>
          {tempos.map((t) => (
            <button
              key={t.value}
              onClick={() => setTempo(t.value)}
              style={{
                flex: 1,
                padding: '6px 0',
                backgroundColor: tempo === t.value ? '#FF5E1A' : 'rgba(255,255,255,0.08)',
                color: tempo === t.value ? '#fff' : 'rgba(255,255,255,0.6)',
                border: 'none',
                borderRadius: 2,
                fontFamily: 'var(--font-label)',
                fontWeight: 600,
                fontSize: 10,
                textTransform: 'uppercase',
                letterSpacing: '0.10em',
                cursor: 'pointer',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
