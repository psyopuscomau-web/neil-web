'use client'

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-black flex items-center justify-between px-5 md:px-20"
      style={{ height: '72px', zIndex: 9999 }}
    >
      <a
        href="/"
        className="font-display font-black uppercase tracking-wide text-xl md:text-[2.2rem]"
        style={{ cursor: 'pointer', textDecoration: 'none', color: 'white' }}
      >
        Neil Preston Music
      </a>
      <span className="font-display font-bold uppercase tracking-widest" style={{ fontSize: '1.3rem' }}>
        <a href="/music" style={{ color: '#CC1100', cursor: 'pointer' }}>Music </a>
        <a href="#video" style={{ color: '#CC1100', cursor: 'pointer' }}>Video</a>
      </span>
    </nav>
  )
}
