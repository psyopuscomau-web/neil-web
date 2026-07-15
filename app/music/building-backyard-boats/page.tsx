import Image from 'next/image'
import EraNav from '../EraNav'
import SmokeOverlay from '../../SmokeOverlay'
import FeaturedTrack from '../FeaturedTrack'

const photos = [
  { src: '/Neil Preston Images/Building Backyard Boats Era/20080731_APL0302.jpg', pos: '60% center', transform: undefined },
  { src: '/Neil Preston Images/Building Backyard Boats Era/Screenshot 2026-07-09 162826.png', pos: 'center 90%', transform: undefined },
  { src: '/Neil Preston Images/Building Backyard Boats Era/Screenshot 2026-07-09 162531.png', pos: 'center', transform: 'scale(0.85) translateY(15%)' },
  { src: '/Neil Preston Images/Building Backyard Boats Era/Dobro Neil Preston.jpg', pos: 'top', transform: undefined },
  { src: '/Neil Preston Images/Building Backyard Boats Era/20080731_APL0069.jpg', pos: 'top', transform: undefined },
  { src: '/Neil Preston Images/Building Backyard Boats Era/20080731_APL0331 solo.jpg', pos: 'right', transform: undefined },
]

const filter = 'brightness(0.55) sepia(1) saturate(2.5) hue-rotate(220deg) blur(1.5px)'

export default function BuildingBackyardBoatsPage() {
  return (
    <main className="bg-black">
      <section className="relative overflow-hidden" style={{ height: '100svh' }}>
        <div className="w-full h-full" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '3px' }}>
          {photos.map((photo, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image src={photo.src} alt="Neil Preston" fill className="object-cover"
                style={{ filter, objectPosition: photo.pos, transform: photo.transform }} sizes="34vw" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        <SmokeOverlay />

        {/* ── PHONE ONLY (< 640px) ── */}
        <div className="sm:hidden absolute inset-0 flex flex-col overflow-y-auto"
          style={{ zIndex: 10, paddingTop: '72px' }}>

          {/* 1. Album name */}
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', color: 'white', fontSize: '1.6rem', lineHeight: 1.1, letterSpacing: '0.03em', textAlign: 'center', padding: '1.5rem 1.25rem 0.25rem' }}>
            Building Backyard Boats
          </h1>

          {/* 2. Year */}
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#CC1100', fontSize: '1.2rem', letterSpacing: '0.25em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '1.25rem' }}>
            2010
          </p>

          {/* 3. Album cover */}
          <div style={{ position: 'relative', width: '60vw', height: '60vw', margin: '0 auto 1.5rem', flexShrink: 0 }}>
            <Image src="/Building Backyard Boats CD Images/Front Cover - BBB.jpg" alt="Building Backyard Boats cover"
              fill className="object-cover" style={{ borderRadius: '3px' }} sizes="60vw" />
          </div>

          {/* 4. Blurb */}
          <div style={{ padding: '0 1.25rem 1.25rem', color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, fontStyle: 'italic' }}>
            <p>Armed with more confidence in home recording and some fabulous muso friends I created Building Backyard Boats. Twin brother Terry did another knock out job on producing this one. This album features warm cello runs from Clare Tunney, beautiful backing vocals from Nicollie Hatch and driving bass work by Rob Findlay. I remember Juha Tolonen who I co-wrote Broken on the Sharp recording takes of this song while his young son slept. I think it was done in two or three takes.</p>
            <p style={{ marginTop: '0.75em' }}>This album is about our dreams that we never fully launch. I remember seeing a half-built boat at the front of a property heading up the Great Northern Highway in Western Australia – in the middle of nowhere; never finished never to feel the salt water.</p>
            <p style={{ marginTop: '0.75em' }}>"I'm just sailing my love by building backyard boats …"</p>
          </div>

          {/* 5. Featured Track */}
          <div style={{ padding: '0 1.25rem 1.25rem' }}>
            <FeaturedTrack title="Dublin Smile" src="/audio/building-backyard-boats/Dublin Smile.mp3" />
          </div>

          {/* 6. Listen On */}
          <div style={{ padding: '0 1.25rem 1.5rem' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#CC1100', fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Listen On
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              <a href="https://music.youtube.com/playlist?list=OLAK5uy_kunReCql-rVnUAqXmGHlwEtXRTGZL8pqI"
                target="_blank" rel="noopener noreferrer"
                className="font-display font-bold uppercase tracking-widest"
                style={{ color: 'white', fontSize: '0.9rem', textDecoration: 'none' }}>
                YouTube Music
              </a>
              <a href="https://music.apple.com/us/album/building-backyard-boats/1191792104"
                target="_blank" rel="noopener noreferrer"
                className="font-display font-bold uppercase tracking-widest"
                style={{ color: 'white', fontSize: '0.9rem', textDecoration: 'none' }}>
                Apple Music
              </a>
              <a href="https://open.spotify.com/album/743c4xfkBvVPfXYjePF0Zm"
                target="_blank" rel="noopener noreferrer"
                className="font-display font-bold uppercase tracking-widest"
                style={{ color: 'white', fontSize: '0.9rem', textDecoration: 'none' }}>
                Spotify
              </a>
            </div>
          </div>

          {/* 7. Other albums in red */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', padding: '1.25rem 1.25rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-end', textAlign: 'right' }}>
            <a href="/music/daphne-apollo" className="font-display font-bold uppercase tracking-widest"
              style={{ color: '#CC1100', fontSize: '0.95rem', cursor: 'pointer', lineHeight: 1.2 }}>
              Daphne and Apollo
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
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', color: 'white', fontSize: 'clamp(1.2rem, 2.4vw, 2.8rem)', lineHeight: 1, letterSpacing: '0.03em', textAlign: 'center', width: '100%', whiteSpace: 'nowrap' }}>
              Building Backyard Boats
            </h1>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#CC1100', fontSize: 'clamp(1.2rem, 2vw, 2.2rem)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              2010
            </p>
            <div style={{ position: 'relative', width: 'clamp(120px, 17vw, 228px)', height: 'clamp(120px, 17vw, 228px)', flexShrink: 0 }}>
              <Image src="/Building Backyard Boats CD Images/Front Cover - BBB.jpg" alt="Building Backyard Boats cover"
                fill className="object-cover" style={{ borderRadius: '3px' }} sizes="228px" />
            </div>
            <div style={{ position: 'relative', width: 'clamp(108px, 14vw, 198px)', height: 'clamp(108px, 14vw, 198px)', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <Image src="/Building Backyard Boats CD Images/CD - BBB.jpg" alt="Building Backyard Boats CD"
                fill className="object-cover" style={{ transform: 'scale(1.12)' }} sizes="198px" />
            </div>
          </div>

          {/* Panel 2 — featured track + streaming links */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2vw', padding: '2vw' }}>
            <FeaturedTrack
              title="Dublin Smile"
              src="/audio/building-backyard-boats/Dublin Smile.mp3"
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#CC1100', fontSize: 'clamp(1rem, 1.6vw, 1.6rem)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Listen On
              </p>
              <a href="https://music.youtube.com/playlist?list=OLAK5uy_kunReCql-rVnUAqXmGHlwEtXRTGZL8pqI"
                target="_blank" rel="noopener noreferrer"
                className="font-display font-bold uppercase tracking-widest hover:text-[#CC1100] transition-colors"
                style={{ color: 'white', fontSize: 'clamp(0.75rem, 1.1vw, 1.1rem)', textDecoration: 'none' }}>
                YouTube Music
              </a>
              <a href="https://music.apple.com/us/album/building-backyard-boats/1191792104"
                target="_blank" rel="noopener noreferrer"
                className="font-display font-bold uppercase tracking-widest hover:text-[#CC1100] transition-colors"
                style={{ color: 'white', fontSize: 'clamp(0.75rem, 1.1vw, 1.1rem)', textDecoration: 'none' }}>
                Apple Music
              </a>
              <a href="https://open.spotify.com/album/743c4xfkBvVPfXYjePF0Zm"
                target="_blank" rel="noopener noreferrer"
                className="font-display font-bold uppercase tracking-widest hover:text-[#CC1100] transition-colors"
                style={{ color: 'white', fontSize: 'clamp(0.75rem, 1.1vw, 1.1rem)', textDecoration: 'none' }}>
                Spotify
              </a>
            </div>
          </div>

          {/* Panel 3 — blurb */}
          <div className="era-blurb-panel" style={{ padding: '2vw', paddingBottom: '10%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.7rem, 0.95vw, 0.95rem)', lineHeight: 1.75, fontStyle: 'italic' }}>
              Armed with more confidence in home recording and some fabulous muso friends I created Building Backyard Boats. Twin brother Terry did another knock out job on producing this one. This album features warm cello runs from Clare Tunney, beautiful backing vocals from Nicollie Hatch and driving bass work by Rob Findlay. I remember Juha Tolonen who I co-wrote Broken on the Sharp recording takes of this song while his young son slept. I think it was done in two or three takes.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.7rem, 0.95vw, 0.95rem)', lineHeight: 1.75, fontStyle: 'italic', marginTop: '1em' }}>
              This album is about our dreams that we never fully launch. I remember seeing a half-built boat at the front of a property heading up the Great Northern Highway in Western Australia – in the middle of nowhere; never finished never to feel the salt water.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.7rem, 0.95vw, 0.95rem)', lineHeight: 1.75, fontStyle: 'italic', marginTop: '1em' }}>
              "I'm just sailing my love by building backyard boats …"
            </p>
          </div>

        </div>

        {/* Era nav — desktop/tablet only */}
        <div className="hidden sm:block">
          <EraNav current="/music/building-backyard-boats" />
        </div>
      </section>
    </main>
  )
}
