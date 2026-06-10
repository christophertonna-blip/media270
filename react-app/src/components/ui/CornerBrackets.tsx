interface CornerBracketsProps {
  size?:   number
  weight?: number
  color?:  string
}

export function CornerBrackets({ size = 18, weight = 1.5, color = 'var(--color-ink)' }: CornerBracketsProps) {
  const s = `${size}px`
  const shared: React.CSSProperties = {
    position: 'absolute',
    width: s,
    height: s,
    pointerEvents: 'none',
  }
  return (
    <>
      <span style={{ ...shared, top: 0, left: 0, borderTop: `${weight}px solid ${color}`, borderLeft: `${weight}px solid ${color}` }} />
      <span style={{ ...shared, top: 0, right: 0, borderTop: `${weight}px solid ${color}`, borderRight: `${weight}px solid ${color}` }} />
      <span style={{ ...shared, bottom: 0, left: 0, borderBottom: `${weight}px solid ${color}`, borderLeft: `${weight}px solid ${color}` }} />
      <span style={{ ...shared, bottom: 0, right: 0, borderBottom: `${weight}px solid ${color}`, borderRight: `${weight}px solid ${color}` }} />
    </>
  )
}
