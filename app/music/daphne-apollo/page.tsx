import Image from 'next/image'
import EraNav from '../EraNav'
import SmokeOverlay from '../../SmokeOverlay'
import FeaturedTrack from '../FeaturedTrack'

const photos = [
  { src: '/Neil Preston Images/Daphne Apollo Era/d217726bm.JPG', pos: 'top' },
  { src: '/Neil Preston Images/Daphne Apollo Era/Beer Shot.JPG', pos: 'top' },
  { src: "/Neil Preston Images/Daphne Apollo Era/Neil's Foot.jpg", pos: 'center' },
  { src: '/Neil Preston Images/Daphne Apollo Era/d217726cm.JPG', pos: 'top' },
  { src: '/Neil Preston Images/Daphne Apollo Era/Screenshot 2026-07-07 184130.png', pos: 'top' },
  { src: '/Neil Preston Images/Daphne Apollo Era/Beer Shot.JPG', pos: 'top' },
]

const filter = 'brightness(0.35) sepia(1) saturate(1.5) hue-rotate(-10deg) blur(1.5px)'

export default function DaphneApolloPage() {
  return (
    <main className="bg-black">
      <section className="relative overflow-hidden" style={{ height: '100svh' }}>
        <div className="w-full h-full" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '3px' }}>
          {photos.map((photo, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image src={photo.src} alt="Neil Preston" fill className="object-cover"
                style={{ filter, objectPosition: photo.pos }} sizes="34vw" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        <SmokeOverlay />

        {/* ── PHONE ONLY (< 640px) ── */}
        <div className="sm:hidden absolute inset-0 flex flex-col overflow-y-auto"
          style={{ zIndex: 10, paddingTop: '72px' }}>

          {/* 1. Album name */}
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', color: 'white', fontSize: '1.8rem', lineHeight: 1.1, letterSpacing: '0.03em', textAlign: 'center', padding: '1.5rem 1.25rem 0.25rem' }}>
            Daphne and Apollo
          </h1>

          {/* 2. Year */}
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#CC1100', fontSize: '1.2rem', letterSpacing: '0.25em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1.25rem' }}>
            2005
          </p>

          {/* 3. Album cover */}
          <div style={{ position: 'relative', width: '60vw', height: '60vw', margin: '0 auto 1.5rem', flexShrink: 0 }}>
            <Image src="/Daphne and Apollo CD Images/Cover - DAA .jpg" alt="Daphne and Apollo cover"
              fill className="object-cover" style={{ borderRadius: '3px' }} sizes="60vw" />
          </div>

          {/* 4. Blurb */}
          <div style={{ padding: '0 1.25rem 1.25rem', color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, fontStyle: 'italic' }}>
            <p>After years of loud rock and roll in every conceivable alternative pub venue in Perth and my ears ringing with tinnitus from the fun of it all, I retreated in the winter of 2005 to make a purely solo acoustic album. The album was so quiet that I chose not to use a guitar pick in most of the recordings and if you listen really closely you can hear the sounds of cars as I attempted my first home recording.</p>
            <p style={{ marginTop: '0.75em' }}>I was obsessed with the myth of Daphne and Apollo. The classical story of the pursued and the pursuer and the warning that comes from not embracing the love on offer.</p>
            <p style={{ marginTop: '0.75em' }}>Close intimate vocals, warm acoustic guitars and steel sounding dobro's – it captured a time and space; just how all good albums should.</p>
            <p style={{ marginTop: '0.75em' }}>"This tale is true an ancient tale - as it is today of how love prevails ..."</p>
          </div>

          {/* 5. Featured Track */}
          <div style={{ padding: '0 1.25rem 1.25rem' }}>
            <FeaturedTrack title="For the Love of Thee" src="/audio/daphne-apollo/For the Love of Thee.mp3" />
          </div>

          {/* 6. Listen On */}
          <div style={{ padding: '0 1.25rem 1.5rem' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#CC1100', fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Listen On
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              <a href="https://music.youtube.com/playlist?list=OLAK5uy_mOIfcX_gXw2GvZPeoy6rVON9zvyvygi0E"
                target="_blank" rel="noopener noreferrer"
                className="font-display font-bold uppercase tracking-widest"
                style={{ color: 'white', fontSize: '0.9rem', textDecoration: 'none' }}>
                YouTube Music
              </a>
              <a href="https://open.spotify.com/album/2cjnWXttg6H2efFj43yLuU"
                target="_blank" rel="noopener noreferrer"
                className="font-display font-bold uppercase tracking-widest"
                style={{ color: 'white', fontSize: '0.9rem', textDecoration: 'none' }}>
                Spotify
              </a>
              <a href="https://music.apple.com/us/album/daphne-and-apollo/1191792807"
                target="_blank" rel="noopener noreferrer"
                className="font-display font-bold uppercase tracking-widest"
                style={{ color: 'white', fontSize: '0.9rem', textDecoration: 'none' }}>
                Apple Music
              </a>
            </div>
          </div>

          {/* 7. Other albums in red */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', padding: '1.25rem 1.25rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-end', textAlign: 'right' }}>
            <a href="/music/building-backyard-boats" className="font-display font-bold uppercase tracking-widest"
              style={{ color: '#CC1100', fontSize: '0.95rem', cursor: 'pointer', lineHeight: 1.2 }}>
              Building Backyard Boats
            </a>
            <a href="/music/two-faces" className="font-display font-bold uppercase tracking-widest"
              style={{ color: '#CC1100', fontSize: '0.95rem', cursor: 'pointer', lineHeight: 1.2 }}>
              Two Faces of Adam and Eve
            </a>
          </div>

          {/* 8. Return to home in white */}
          <div style={{ padding: '0 1.25rem 2.5rem', textAlign: 'right' }}>
            <a href="/" className="font-display font-black uppercase tracking-wide"
              style={{ color: 'white', fontSize: '0.95rem', cursor: 'pointer' }}>
              Neil Preston Music
            </a>
          </div>

        </div>

        {/* ── DESKTOP / TABLET (≥ 640px): original 3-panel layout ── */}
        <div className="hidden sm:grid absolute inset-0"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '3px', zIndex: 10, paddingTop: '72px' }}>

          {/* Panel 1 — title, cover, CD disc */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5vw', padding: '2vw' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', color: 'white', fontSize: 'clamp(1.6rem, 3.4vw, 4.2rem)', lineHeight: 1, letterSpacing: '0.03em', textAlign: 'center', width: '100%', whiteSpace: 'nowrap' }}>
              Daphne and Apollo
            </h1>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#CC1100', fontSize: 'clamp(1.2rem, 2vw, 2.2rem)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              2005
            </p>
            <div style={{ position: 'relative', width: 'clamp(120px, 17vw, 228px)', height: 'clamp(120px, 17vw, 228px)', flexShrink: 0 }}>
              <Image src="/Daphne and Apollo CD Images/Cover - DAA .jpg" alt="Daphne and Apollo cover"
                fill className="object-cover" style={{ borderRadius: '3px' }} sizes="228px" />
            </div>
            <div style={{ position: 'relative', width: 'clamp(108px, 14vw, 198px)', height: 'clamp(108px, 14vw, 198px)', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <Image src="/Daphne and Apollo CD Images/Daphne and Apollo CD 2 002.jpg" alt="Daphne and Apollo CD"
                fill className="object-cover" style={{ transform: 'scale(1.12)' }} sizes="198px" />
            </div>
          </div>

          {/* Panel 2 — featured track + streaming links */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2vw', padding: '2vw' }}>
            <FeaturedTrack
              title="For the Love of Thee"
              src="/audio/daphne-apollo/For the Love of Thee.mp3"
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#CC1100', fontSize: 'clamp(1rem, 1.6vw, 1.6rem)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Listen On
              </p>
              <a href="https://music.youtube.com/playlist?list=OLAK5uy_mOIfcX_gXw2GvZPeoy6rVON9zvyvygi0E"
                target="_blank" rel="noopener noreferrer"
                className="font-display font-bold uppercase tracking-widest hover:text-[#CC1100] transition-colors"
                style={{ color: 'white', fontSize: 'clamp(0.75rem, 1.1vw, 1.1rem)', textDecoration: 'none' }}>
                YouTube Music
              </a>
              <a href="https://open.spotify.com/album/2cjnWXttg6H2efFj43yLuU"
                target="_blank" rel="noopener noreferrer"
                className="font-display font-bold uppercase tracking-widest hover:text-[#CC1100] transition-colors"
                style={{ color: 'white', fontSize: 'clamp(0.75rem, 1.1vw, 1.1rem)', textDecoration: 'none' }}>
                Spotify
              </a>
              <a href="https://music.apple.com/us/album/daphne-and-apollo/1191792807"
                target="_blank" rel="noopener noreferrer"
                className="font-display font-bold uppercase tracking-widest hover:text-[#CC1100] transition-colors"
                style={{ color: 'white', fontSize: 'clamp(0.75rem, 1.1vw, 1.1rem)', textDecoration: 'none' }}>
                Apple Music
              </a>
            </div>
          </div>

          {/* Panel 3 — blurb */}
          <div style={{ padding: '2vw', paddingBottom: '10%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.7rem, 0.95vw, 0.95rem)', lineHeight: 1.75, fontStyle: 'italic' }}>
              After years of loud rock and roll in every conceivable alternative pub venue in Perth and my ears ringing with tinnitus from the fun of it all, I retreated in the winter of 2005 to make a purely solo acoustic album. The album was so quiet that I chose not to use a guitar pick in most of the recordings and if you listen really closely you can hear the sounds of cars as I attempted my first home recording.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.7rem, 0.95vw, 0.95rem)', lineHeight: 1.75, fontStyle: 'italic', marginTop: '1em' }}>
              I was obsessed with the myth of Daphne and Apollo. The classical story of the pursued and the pursuer and the warning that comes from not embracing the love on offer.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.7rem, 0.95vw, 0.95rem)', lineHeight: 1.75, fontStyle: 'italic', marginTop: '1em' }}>
              Close intimate vocals, warm acoustic guitars and steel sounding dobro's – it captured a time and space; just how all good albums should.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.7rem, 0.95vw, 0.95rem)', lineHeight: 1.75, fontStyle: 'italic', marginTop: '1em' }}>
              "This tale is true an ancient tale - as it is today of how love prevails ..."
            </p>
          </div>

        </div>

        {/* Era nav — desktop/tablet only */}
        <div className="hidden sm:block">
          <EraNav current="/music/daphne-apollo" />
        </div>
      </section>
    </main>
  )
}
