import Image from 'next/image'
import EraNav from '../EraNav'
import SmokeOverlay from '../../SmokeOverlay'
import FeaturedTrack from '../FeaturedTrack'

const photos = [
  { src: '/Neil Preston Images/Two Faces of Adam and Eve Era/IMG_0116.jpg', pos: 'top' },
  { src: '/Neil Preston Images/Two Faces of Adam and Eve Era/Screenshot 2026-07-11 172214.png', pos: 'top' },
  { src: '/Neil Preston Images/Two Faces of Adam and Eve Era/IMG_0122.jpg', pos: 'top' },
  { src: '/Neil Preston Images/Two Faces of Adam and Eve Era/Neil Terry Live.jpg', pos: 'top' },
  { src: '/Neil Preston Images/Two Faces of Adam and Eve Era/Neil Strat.jpg', pos: 'top' },
  { src: '/Neil Preston Images/Two Faces of Adam and Eve Era/Mojo gig 04_12_12.jpg', pos: 'top' },
]

const filter = 'brightness(0.4) sepia(1) saturate(2.5) hue-rotate(185deg) blur(1.5px)'

export default function TwoFacesPage() {
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
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', color: 'white', fontSize: '1.5rem', lineHeight: 1.1, letterSpacing: '0.03em', textAlign: 'center', padding: '1.5rem 1.25rem 0.25rem' }}>
            Two Faces of Adam and Eve
          </h1>

          {/* 2. Year */}
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#CC1100', fontSize: '1.2rem', letterSpacing: '0.25em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1.25rem' }}>
            2016
          </p>

          {/* 3. Album cover */}
          <div style={{ position: 'relative', width: '60vw', height: '60vw', margin: '0 auto 1.5rem', flexShrink: 0 }}>
            <Image src="/Two Faces of Adam and Eve CD Images/Front Cover -TFAE.jpg" alt="Two Faces of Adam and Eve cover"
              fill className="object-cover" style={{ borderRadius: '3px' }} sizes="60vw" />
          </div>

          {/* 4. Blurb */}
          <div style={{ padding: '0 1.25rem 1.25rem', color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, fontStyle: 'italic' }}>
            <p>This album goes back to my power pop roots a little (see www.amonthofsunday.com.au) I wanted a band vibe to this recording so I got Terry and great mates Mark Ralph on keys and Abe Dunovits on bass. These Fremantle lads now how to make songs swing, they gave me the pop and white soul r&amp;b vibe I was looking for on this album, not to mention Terry Preston on drums – man can he hit those things.</p>
            <p style={{ marginTop: '0.75em' }}>Most of the bed tracks for this album were recorded in a rammed earth house somewhere near Margaret River. Terry and I asked for a place in the middle of nowhere so we can enjoy the peace and quiet and not be disturbed by anyone. The truth was over a long weekend we made one hell of a racket with full throated performances by the boys. The bed tracks went down together, guitars, keys, bass and drums – often in one or two takes – no nonsense old school approach to capturing a band capturing a moment. Some other tracks were recorded later with just Terry and I. Go to <a href="/video" style={{ color: '#CC1100', textDecoration: 'none', fontStyle: 'italic' }}>Video</a> to watch us build the song Favourite Game – one of my favourite tracks on the album.</p>
            <p style={{ marginTop: '0.75em' }}>"Tread where angels fear to go – a foolish soul …"</p>
          </div>

          {/* 5. Featured Track */}
          <div style={{ padding: '0 1.25rem 1.25rem' }}>
            <FeaturedTrack title="Windows" src="/audio/two-faces/Windows.mp3" />
          </div>

          {/* 6. Listen On */}
          <div style={{ padding: '0 1.25rem 1.5rem' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#CC1100', fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Listen On
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              <a href="https://music.youtube.com/playlist?list=OLAK5uy_mRvjLwuNJy9taZT6T8h3fn9jFblQlf9Cs"
                target="_blank" rel="noopener noreferrer"
                className="font-display font-bold uppercase tracking-widest"
                style={{ color: 'white', fontSize: '0.9rem', textDecoration: 'none' }}>
                YouTube Music
              </a>
              <a href="https://music.apple.com/us/artist/neil-preston-and-hopiates/1192160085"
                target="_blank" rel="noopener noreferrer"
                className="font-display font-bold uppercase tracking-widest"
                style={{ color: 'white', fontSize: '0.9rem', textDecoration: 'none' }}>
                Apple Music
              </a>
              <a href="https://open.spotify.com/artist/35OapGwXYixYbt2NiniO5N"
                target="_blank" rel="noopener noreferrer"
                className="font-display font-bold uppercase tracking-widest"
                style={{ color: 'white', fontSize: '0.9rem', textDecoration: 'none' }}>
                Spotify
              </a>
            </div>
          </div>

          {/* 7. Other albums in red */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', padding: '1.25rem 1.25rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="/music/daphne-apollo" className="font-display font-bold uppercase tracking-widest"
              style={{ color: '#CC1100', fontSize: '0.95rem', cursor: 'pointer', lineHeight: 1.2 }}>
              Daphne and Apollo
            </a>
            <a href="/music/building-backyard-boats" className="font-display font-bold uppercase tracking-widest"
              style={{ color: '#CC1100', fontSize: '0.95rem', cursor: 'pointer', lineHeight: 1.2 }}>
              Building Backyard Boats
            </a>
          </div>

          {/* 8. Return to home in white */}
          <div style={{ padding: '0 1.25rem 2.5rem' }}>
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
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', color: 'white', fontSize: 'clamp(1.2rem, 2.4vw, 2.8rem)', lineHeight: 1, letterSpacing: '0.03em', textAlign: 'center', width: '100%', whiteSpace: 'nowrap' }}>
              Two Faces of Adam and Eve
            </h1>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#CC1100', fontSize: 'clamp(1.2rem, 2vw, 2.2rem)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              2016
            </p>
            <div style={{ position: 'relative', width: 'clamp(120px, 17vw, 228px)', height: 'clamp(120px, 17vw, 228px)', flexShrink: 0 }}>
              <Image src="/Two Faces of Adam and Eve CD Images/Front Cover -TFAE.jpg" alt="Two Faces of Adam and Eve cover"
                fill className="object-cover" style={{ borderRadius: '3px' }} sizes="228px" />
            </div>
            <div style={{ position: 'relative', width: 'clamp(108px, 14vw, 198px)', height: 'clamp(108px, 14vw, 198px)', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <Image src="/Two Faces of Adam and Eve CD Images/CD -TFAE.jpg" alt="Two Faces of Adam and Eve CD"
                fill className="object-cover" style={{ transform: 'scale(1.12) rotate(-12deg)' }} sizes="198px" />
            </div>
          </div>

          {/* Panel 2 — featured track + streaming links */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2vw', padding: '2vw' }}>
            <FeaturedTrack
              title="Windows"
              src="/audio/two-faces/Windows.mp3"
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#CC1100', fontSize: 'clamp(1rem, 1.6vw, 1.6rem)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Listen On
              </p>
              <a href="https://music.youtube.com/playlist?list=OLAK5uy_mRvjLwuNJy9taZT6T8h3fn9jFblQlf9Cs"
                target="_blank" rel="noopener noreferrer"
                className="font-display font-bold uppercase tracking-widest hover:text-[#CC1100] transition-colors"
                style={{ color: 'white', fontSize: 'clamp(0.75rem, 1.1vw, 1.1rem)', textDecoration: 'none' }}>
                YouTube Music
              </a>
              <a href="https://music.apple.com/us/artist/neil-preston-and-hopiates/1192160085"
                target="_blank" rel="noopener noreferrer"
                className="font-display font-bold uppercase tracking-widest hover:text-[#CC1100] transition-colors"
                style={{ color: 'white', fontSize: 'clamp(0.75rem, 1.1vw, 1.1rem)', textDecoration: 'none' }}>
                Apple Music
              </a>
              <a href="https://open.spotify.com/artist/35OapGwXYixYbt2NiniO5N"
                target="_blank" rel="noopener noreferrer"
                className="font-display font-bold uppercase tracking-widest hover:text-[#CC1100] transition-colors"
                style={{ color: 'white', fontSize: 'clamp(0.75rem, 1.1vw, 1.1rem)', textDecoration: 'none' }}>
                Spotify
              </a>
            </div>
          </div>

          {/* Panel 3 — blurb */}
          <div style={{ padding: '2vw', paddingBottom: '10%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.7rem, 0.95vw, 0.95rem)', lineHeight: 1.75, fontStyle: 'italic' }}>
              This album goes back to my power pop roots a little (see www.amonthofsunday.com.au) I wanted a band vibe to this recording so I got Terry and great mates Mark Ralph on keys and Abe Dunovits on bass. These Fremantle lads now how to make songs swing, they gave me the pop and white soul r&b vibe I was looking for on this album, not to mention Terry Preston on drums – man can he hit those things.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.7rem, 0.95vw, 0.95rem)', lineHeight: 1.75, fontStyle: 'italic', marginTop: '1em' }}>
              Most of the bed tracks for this album were recorded in a rammed earth house somewhere near Margaret River. Terry and I asked for a place in the middle of nowhere so we can enjoy the peace and quiet and not be disturbed by anyone. The truth was over a long weekend we made one hell of racket with full throated performances by the boys. The bed tracks went down together, guitars, keys, bass and drums – often in one or two takes – no nonsense old school approach to capturing a band capturing a moment. Some other tracks were recorded later with just Terry and I. Go to <a href="/video" style={{ color: '#CC1100', textDecoration: 'none', fontStyle: 'italic' }} className="hover:underline">Video</a> to watch us build the song Favourite Game – one of my favourite tracks on the album.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.7rem, 0.95vw, 0.95rem)', lineHeight: 1.75, fontStyle: 'italic', marginTop: '1em' }}>
              "Tread where angels fear to go – a foolish soul …"
            </p>
          </div>

        </div>

        {/* Era nav — desktop/tablet only */}
        <div className="hidden sm:block">
          <EraNav current="/music/two-faces" />
        </div>
      </section>
    </main>
  )
}
