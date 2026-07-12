import Image from 'next/image'
import EraNav from '../EraNav'
import SmokeOverlay from '../../SmokeOverlay'

const photos = [
  { src: '/Neil Preston Images/Building Backyard Boats Era/Neil Preston promo with Les Paul 3.jpg', pos: 'top' },
  { src: '/Neil Preston Images/Building Backyard Boats Era/Neil Preston promo with Les Paul.jpg', pos: 'top' },
  { src: '/Neil Preston Images/Building Backyard Boats Era/Neil Preston promo with Les Paul 2.jpg', pos: 'top' },
  { src: '/Neil Preston Images/Building Backyard Boats Era/Dobro Neil Preston.jpg', pos: 'top' },
  { src: '/Neil Preston Images/Building Backyard Boats Era/Neil Preston promo with Les Paul 3.jpg', pos: 'top' },
  { src: '/Neil Preston Images/Building Backyard Boats Era/Neil Preston promo with Les Paul.jpg', pos: 'top' },
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
                style={{ filter, objectPosition: photo.pos }} sizes="34vw" />
            </div>
          ))}
        </div>
        <SmokeOverlay />
        <EraNav current="/music/building-backyard-boats" />
      </section>
    </main>
  )
}
