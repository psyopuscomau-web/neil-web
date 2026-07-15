import Image from 'next/image'
import SmokeOverlay from '../SmokeOverlay'
import VideoPlayer from './VideoPlayer'

const photos = [
  { src: '/Neil Preston Images/Building Backyard Boats Era/20080731_APL0093.jpg', pos: 'top', transform: undefined },
  { src: '/Neil Preston Images/Building Backyard Boats Era/IMGP1421.JPG', pos: 'center', transform: 'translateY(30%) rotate(90deg) scale(1.3)' },
  { src: '/Neil Preston Images/Building Backyard Boats Era/Dobro Neil Preston.jpg', pos: 'top', transform: undefined },
  { src: '/Neil Preston Images/Two Faces of Adam and Eve Era/Neil Sitting with Hat 1.jpg', pos: 'top', transform: undefined },
  { src: '/Neil Preston Images/Building Backyard Boats Era/PB240239.JPG', pos: 'top', transform: undefined },
  { src: '/Neil Preston Images/Building Backyard Boats Era/Screenshot 2026-07-09 162846.png', pos: 'center', transform: undefined },
]

const filter = 'brightness(0.3) sepia(1) saturate(3) hue-rotate(325deg) blur(1.5px)'

const videos = [
  {
    id: 'nupYmKqBu10',
    title: 'Only But Try',
    era: 'Two Faces of Adam and Eve',
    eraHref: '/music/two-faces',
  },
  {
    id: 'FNwAhFzKBwk',
    title: "Steppin' on Your Dreams",
    era: 'Two Faces of Adam and Eve',
    eraHref: '/music/two-faces',
  },
  {
    id: 'aTbk04Ao8sg',
    title: 'Favourite Game',
    era: 'Two Faces of Adam and Eve',
    eraHref: '/music/two-faces',
  },
]

export default function VideoPage() {
  return (
    <main className="bg-black">
      <section className="relative overflow-hidden" style={{ height: '100svh' }}>

        {/* Background tile grid — darkened so player stands out */}
        <div className="absolute inset-0" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '3px' }}>
          {photos.map((photo, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image src={photo.src} alt="Neil Preston" fill className="object-cover"
                style={{ filter, objectPosition: photo.pos, transform: photo.transform }} sizes="34vw" />
            </div>
          ))}
        </div>

        {/* Extra darkening overlay */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />

        <SmokeOverlay />

        {/* Videos: row on desktop, column on phones */}
        <div className="absolute inset-0 flex flex-col items-stretch overflow-y-auto gap-8 sm:flex-row sm:items-center sm:overflow-hidden"
          style={{ zIndex: 5, paddingTop: '72px', paddingLeft: '4vw', paddingRight: '4vw', paddingBottom: '4vw' }}>
          <VideoPlayer videos={videos} />
        </div>

        {/* Bottom-right nav */}
        <div className="absolute bottom-0 right-0 flex flex-col items-end gap-3"
          style={{ padding: '0 3% 2.5% 0', zIndex: 10 }}>
          <a href="/music" className="font-display font-bold uppercase tracking-widest"
            style={{ color: '#CC1100', cursor: 'pointer', fontSize: 'clamp(0.9rem, 1.4vw, 1.2rem)', lineHeight: 1.2 }}>
            Music
          </a>
          <a href="/" className="font-display font-black uppercase tracking-wide"
            style={{ color: 'white', cursor: 'pointer', fontSize: 'clamp(0.9rem, 1.4vw, 1.2rem)', marginTop: '0.5rem' }}>
            Neil Preston Music
          </a>
        </div>

      </section>
    </main>
  )
}
