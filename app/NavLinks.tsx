'use client'

export default function NavLinks() {
  return (
    <>
      <span className="font-display font-black uppercase text-white tracking-wide" style={{ fontSize: '2.2rem' }}>
        Neil Preston{' '}
        <a
          href="/music"
          className="hover:text-np-red transition-colors duration-200 cursor-pointer"
          style={{ cursor: 'pointer' }}
        >
          Music
        </a>
      </span>
      <span className="font-display font-bold uppercase tracking-widest" style={{ fontSize: '1.3rem' }}>
        <span className="text-np-red">Music </span>
        <a href="/video" className="text-np-red hover:text-white transition-colors duration-200">Video</a>
      </span>
    </>
  )
}
