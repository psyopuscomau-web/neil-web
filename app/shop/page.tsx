import Image from 'next/image'
import SmokeOverlay from '../SmokeOverlay'


const albums = [
  {
    title: 'Daphne and Apollo',
    year: '2005',
    cover: '/Daphne and Apollo CD Images/Cover - DAA .jpg',
    cd: '/Daphne and Apollo CD Images/Daphne and Apollo CD 2 002.jpg',
    cdTransform: 'scale(1.12)',
    bgPhotos: [
      { src: '/Neil Preston Images/Daphne Apollo Era/d217726bm.JPG', pos: 'top' },
      { src: '/Neil Preston Images/Daphne Apollo Era/Beer Shot.JPG', pos: 'top' },
    ],
    bgFilter: 'brightness(0.35) sepia(1) saturate(1.5) hue-rotate(-10deg) blur(1.5px)',
    href: 'https://neilpreston.bandcamp.com/album/daphne-and-apollo',
  },
  {
    title: 'Building Backyard Boats',
    year: '2010',
    cover: '/Building Backyard Boats CD Images/Front Cover - BBB.jpg',
    cd: '/Building Backyard Boats CD Images/CD - BBB.jpg',
    cdTransform: 'scale(1.12)',
    bgPhotos: [
      { src: '/Neil Preston Images/Building Backyard Boats Era/20080731_APL0302.jpg', pos: '60% center' },
      { src: '/Neil Preston Images/Building Backyard Boats Era/20080731_APL0069.jpg', pos: 'top' },
    ],
    bgFilter: 'brightness(0.45) sepia(1) saturate(2.5) hue-rotate(220deg) blur(1.5px)',
    href: 'https://neilpreston.bandcamp.com/album/building-backyard-boats',
  },
  {
    title: 'Two Faces of Adam and Eve',
    year: '2016',
    cover: '/Two Faces of Adam and Eve CD Images/Front Cover -TFAE.jpg',
    cd: '/Two Faces of Adam and Eve CD Images/CD -TFAE.jpg',
    cdTransform: 'scale(1.12) rotate(-12deg)',
    bgPhotos: [
      { src: '/Neil Preston Images/Two Faces of Adam and Eve Era/IMG_0116.jpg', pos: 'top' },
      { src: '/Neil Preston Images/Two Faces of Adam and Eve Era/Neil Strat.jpg', pos: 'top' },
    ],
    bgFilter: 'brightness(0.4) sepia(1) saturate(2.5) hue-rotate(185deg) blur(1.5px)',
    href: 'https://neilpreston.bandcamp.com/album/two-faces-of-adam-and-eve',
  },
]

export default function ShopPage() {
  return (
    <main className="bg-black">
      <section className="relative overflow-hidden" style={{ height: '100svh' }}>

        {/* ── Background: 3×2 photo grid, one era per column ── */}
        <div className="absolute inset-0" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '3px' }}>
          {[0, 1].flatMap((row) =>
            albums.map((album) => (
              <div key={`${album.title}-${row}`} className="relative overflow-hidden">
                <Image src={album.bgPhotos[row].src} alt="" fill className="object-cover"
                  style={{ filter: album.bgFilter, objectPosition: album.bgPhotos[row].pos }} sizes="34vw" />
              </div>
            ))
          )}
        </div>
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        <SmokeOverlay />

        {/* ── PHONE ONLY (< 640px) ── */}
        <div className="sm:hidden absolute inset-0 flex flex-col overflow-y-auto"
          style={{ zIndex: 10, paddingTop: '72px' }}>

          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', color: 'white', fontSize: '2rem', letterSpacing: '0.1em', textAlign: 'center', padding: '1.5rem 1.25rem 0.25rem' }}>
            Shop
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontStyle: 'italic', textAlign: 'center', marginBottom: '1.5rem' }}>
            Own the real thing
          </p>

          {albums.map((album) => (
            <div key={album.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1.25rem 2.5rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', color: 'white', fontSize: '1.3rem', lineHeight: 1.1, letterSpacing: '0.03em', textAlign: 'center', marginBottom: '0.25rem' }}>
                {album.title}
              </h2>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#CC1100', fontSize: '1rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {album.year}
              </p>
              <div style={{ position: 'relative', width: '55vw', height: '55vw', flexShrink: 0, marginBottom: '1rem' }}>
                <Image src={album.cover} alt={`${album.title} cover`} fill className="object-cover" style={{ borderRadius: '3px' }} sizes="55vw" />
              </div>
              <div style={{ position: 'relative', width: '45vw', height: '45vw', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, marginBottom: '1rem' }}>
                <div style={{ position: 'absolute', inset: 0, animation: 'spin-cd 5s linear infinite' }}>
                  <Image src={album.cd} alt={`${album.title} CD`} fill className="object-cover" sizes="45vw" />
                </div>
              </div>
              <a href={album.href} target="_blank" rel="noopener noreferrer" className="font-display font-bold uppercase tracking-widest hover:text-white transition-colors"
                style={{ color: '#CC1100', fontSize: '0.9rem', textDecoration: 'none' }}>
                Buy the real thing here
              </a>
            </div>
          ))}

          <div style={{ padding: '1.25rem 1.25rem 2.5rem', textAlign: 'right' }}>
            <a href="/" className="font-display font-black uppercase tracking-wide"
              style={{ color: 'white', fontSize: '0.95rem' }}>
              Neil Preston Music
            </a>
          </div>
        </div>

        {/* ── DESKTOP / TABLET (≥ 640px) ── */}
        <div className="hidden sm:grid absolute inset-0"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '3px', zIndex: 10, paddingTop: '72px' }}>

          {albums.map((album) => (
            <div key={album.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.2vw', padding: '2vw' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', color: 'white', fontSize: 'clamp(1rem, 1.8vw, 2.2rem)', lineHeight: 1, letterSpacing: '0.03em', textAlign: 'center' }}>
                {album.title}
              </h2>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#CC1100', fontSize: 'clamp(0.9rem, 1.5vw, 1.8rem)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                {album.year}
              </p>
              <div style={{ position: 'relative', width: 'clamp(120px, 17vw, 228px)', height: 'clamp(120px, 17vw, 228px)', flexShrink: 0 }}>
                <Image src={album.cover} alt={`${album.title} cover`} fill className="object-cover" style={{ borderRadius: '3px' }} sizes="228px" />
              </div>
              <div style={{ position: 'relative', width: 'clamp(108px, 14vw, 198px)', height: 'clamp(108px, 14vw, 198px)', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                <div style={{ position: 'absolute', inset: 0, animation: 'spin-cd 5s linear infinite' }}>
                  <Image src={album.cd} alt={`${album.title} CD`} fill className="object-cover" sizes="198px" />
                </div>
              </div>
              <a href={album.href} target="_blank" rel="noopener noreferrer" className="font-display font-bold uppercase tracking-widest hover:text-white transition-colors"
                style={{ color: '#CC1100', fontSize: 'clamp(0.7rem, 1vw, 1rem)', textDecoration: 'none' }}>
                Buy the real thing here
              </a>
            </div>
          ))}
        </div>

      </section>
    </main>
  )
}
