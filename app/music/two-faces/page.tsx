import Image from 'next/image'
import EraNav from '../EraNav'
import SmokeOverlay from '../../SmokeOverlay'

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
        <EraNav current="/music/two-faces" />
      </section>
    </main>
  )
}
