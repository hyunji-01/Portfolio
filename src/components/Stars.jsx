import { useMemo } from 'react'

export default function Stars({ count = 150 }) {
  const seeded = (index, salt) => {
    const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453
    return value - Math.floor(value)
  }

  const stars = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: seeded(i, 1) * 100,
      top: seeded(i, 2) * 100,
      size: seeded(i, 3) * 1.8 + 0.4,
      dur: seeded(i, 4) * 4 + 2,
      del: seeded(i, 5) * 5,
    })), [count])

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      <style>{`@keyframes tw { from { opacity: 0.06; } to { opacity: 0.85; } }`}</style>
      {stars.map(s => (
        <span key={s.id} style={{
          position: 'absolute',
          left: `${s.left}%`,
          top: `${s.top}%`,
          width: `${s.size}px`,
          height: `${s.size}px`,
          borderRadius: '50%',
          background: '#fff',
          animation: `tw ${s.dur}s ${s.del}s ease-in-out infinite alternate`,
        }} />
      ))}
    </div>
  )
}
