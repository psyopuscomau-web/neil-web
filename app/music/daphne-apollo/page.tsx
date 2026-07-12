import Image from 'next/image'
import EraNav from '../EraNav'
import SmokeOverlay from '../../SmokeOverlay'

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
        <EraNav current="/music/daphne-apollo" />
      </section>
    </main>
  )
}
