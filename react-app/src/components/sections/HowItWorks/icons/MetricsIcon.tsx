const bars = [
  { height: '30%', alt: false },
  { height: '55%', alt: false },
  { height: '42%', alt: false },
  { height: '78%', alt: true  },
  { height: '60%', alt: false },
  { height: '90%', alt: true  },
  { height: '48%', alt: false },
  { height: '72%', alt: false },
  { height: '58%', alt: false },
  { height: '38%', alt: false },
]

export function MetricsIcon() {
  return (
    <div
      style={{
        marginTop: 32,
        height: 120,
        border: '1px solid var(--color-line)',
        position: 'relative',
        overflow: 'hidden',
        padding: 18,
        backgroundImage:
          'linear-gradient(rgba(10,10,10,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.045) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: 8,
          height: '100%',
        }}
      >
        {bars.map((bar, i) => (
          <span
            key={i}
            style={{
              flex: 1,
              height: bar.height,
              backgroundColor: bar.alt ? 'var(--color-orange)' : 'var(--color-ink)',
              display: 'block',
            }}
          />
        ))}
      </div>
    </div>
  )
}
