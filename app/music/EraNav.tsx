const allEras = [
  { label: 'Daphne and Apollo', href: '/music/daphne-apollo' },
  { label: 'Building Backyard Boats', href: '/music/building-backyard-boats' },
  { label: 'Two Faces of Adam and Eve', href: '/music/two-faces' },
]

export default function EraNav({ current }: { current: string }) {
  const others = allEras.filter((e) => e.href !== current)
  return (
    <div
      className="absolute bottom-0 right-0 flex flex-col items-end gap-3"
      style={{ padding: '0 3% 2.5% 0', zIndex: 10 }}
    >
      {others.map((era) => (
        <a key={era.href} href={era.href} className="font-display font-bold uppercase tracking-widest"
          style={{ color: '#CC1100', cursor: 'pointer', fontSize: 'clamp(0.9rem, 1.4vw, 1.2rem)', lineHeight: 1.2 }}>
          {era.label}
        </a>
      ))}
      <a href="/" className="font-display font-black uppercase tracking-wide"
        style={{ color: 'white', cursor: 'pointer', fontSize: 'clamp(0.9rem, 1.4vw, 1.2rem)', marginTop: '0.5rem' }}>
        Neil Preston Music
      </a>
    </div>
  )
}
