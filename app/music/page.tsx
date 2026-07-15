import Image from 'next/image'
import SmokeOverlay from '../SmokeOverlay'

const overviewPhotos = [
  '/Neil Preston Images/Two Faces of Adam and Eve Era/IMG_0116.jpg',
  '/Neil Preston Images/Two Faces of Adam and Eve Era/Screenshot 2026-07-11 172214.png',
  '/Neil Preston Images/Two Faces of Adam and Eve Era/IMG_0122.jpg',
  '/Neil Preston Images/Two Faces of Adam and Eve Era/Neil Terry Live.jpg',
  '/Neil Preston Images/Two Faces of Adam and Eve Era/Neil Strat.jpg',
  '/Neil Preston Images/Two Faces of Adam and Eve Era/Mojo gig 04_12_12.jpg',
  '/Neil Preston Images/Building Backyard Boats Era/Neil Preston promo with Les Paul 3.jpg',
  '/Neil Preston Images/Building Backyard Boats Era/Neil Preston promo with Les Paul.jpg',
  '/Neil Preston Images/Building Backyard Boats Era/Neil Preston promo with Les Paul 2.jpg',
  '/Neil Preston Images/Building Backyard Boats Era/Dobro Neil Preston.jpg',
  '/Neil Preston Images/Daphne Apollo Era/d217726bm.JPG',
  '/Neil Preston Images/Daphne Apollo Era/Beer Shot.JPG',
  '/Neil Preston Images/Daphne Apollo Era/d217726cm.JPG',
  '/Neil Preston Images/Daphne Apollo Era/Screenshot 2026-07-07 184130.png',
  '/Neil Preston Images/Two Faces of Adam and Eve Era/Neil Sitting 1.jpg',
]

export default function MusicPage() {
  return (
    <main className="bg-black">
      <section className="relative overflow-hidden" style={{ height: '100svh' }}>
        <div className="w-full h-full" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gap: '3px' }}>
          {overviewPhotos.map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image src={src} alt="Neil Preston" fill className="object-cover object-top"
                style={{ filter: 'brightness(0.4) grayscale(1) blur(1.5px)' }} sizes="20vw" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        <SmokeOverlay />

        {/* ── PHONE ONLY: title centered ── */}
        <div className="sm:hidden absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ zIndex: 10, paddingTop: '72px' }}>
          <h1 className="font-display font-black uppercase text-white leading-none text-center"
            style={{ fontSize: 'clamp(3rem, 13vw, 4.5rem)' }}>
            Neil Preston
          </h1>
        </div>

        {/* ── PHONE ONLY: album links right-justified at ~75% down ── */}
        <div className="sm:hidden absolute flex flex-col items-end"
          style={{ zIndex: 10, right: '5%', top: '73%', gap: '1rem', textAlign: 'right' }}>
          <a href="/music/daphne-apollo" className="font-display font-bold uppercase tracking-widest"
            style={{ color: '#CC1100', cursor: 'pointer', fontSize: '1.05rem', letterSpacing: '0.05em', lineHeight: 1.2 }}>
            Daphne and Apollo
          </a>
          <a href="/music/building-backyard-boats" className="font-display font-bold uppercase tracking-widest"
            style={{ color: '#CC1100', cursor: 'pointer', fontSize: '1.05rem', letterSpacing: '0.05em', lineHeight: 1.2 }}>
            Building Backyard Boats
          </a>
          <a href="/music/two-faces" className="font-display font-bold uppercase tracking-widest"
            style={{ color: '#CC1100', cursor: 'pointer', fontSize: '1.05rem', letterSpacing: '0.05em', lineHeight: 1.2 }}>
            Two Faces of Adam and Eve
          </a>
        </div>

        {/* ── DESKTOP / TABLET (≥ 640px): original layout ── */}
        <div className="hidden sm:flex absolute inset-0 items-center justify-center pointer-events-none">
          <h1 className="font-display font-black uppercase text-white leading-none text-center music-page-title">
            Neil Preston
          </h1>
        </div>
        <div className="hidden sm:flex absolute flex-col justify-center gap-8"
          style={{ right: '3%', top: '52%', transform: 'translateY(-50%)', zIndex: 10, textAlign: 'right' }}>
          <a href="/music/daphne-apollo" style={{ color: '#CC1100', cursor: 'pointer', fontSize: 'clamp(1rem, 1.8vw, 1.5rem)', fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1.2 }}>Daphne and Apollo</a>
          <a href="/music/building-backyard-boats" style={{ color: '#CC1100', cursor: 'pointer', fontSize: 'clamp(1rem, 1.8vw, 1.5rem)', fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1.2 }}>Building Backyard Boats</a>
          <a href="/music/two-faces" style={{ color: '#CC1100', cursor: 'pointer', fontSize: 'clamp(1rem, 1.8vw, 1.5rem)', fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1.2 }}>Two Faces of Adam and Eve</a>
        </div>
      </section>
    </main>
  )
}
