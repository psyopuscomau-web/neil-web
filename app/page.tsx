import Image from 'next/image'
import HeroSlideshow from './HeroSlideshow'

const eras = [
  {
    id: 'daphne-apollo',
    era: 'Era I',
    year: '2005',
    title: 'Daphne and Apollo',
    dark: true,
    cover: '/Daphne and Apollo CD Images/Cover - DAA .jpg',
    photos: [
      { src: '/Neil Preston Images/Daphne Apollo Era/d217726bm.JPG', alt: 'Neil Preston' },
      { src: '/Neil Preston Images/Daphne Apollo Era/Beer Shot.JPG', alt: 'Neil Preston' },
      { src: '/Daphne and Apollo CD Images/Back Tray - DAA .jpg', alt: 'Daphne and Apollo back tray' },
      { src: '/Neil Preston Images/Daphne Apollo Era/Monday Psalter.JPG', alt: 'Neil Preston' },
    ],
  },
  {
    id: 'building-backyard-boats',
    era: 'Era II',
    year: '2010',
    title: 'Building Backyard Boats',
    dark: false,
    cover: '/Building Backyard Boats CD Images/Front Cover - BBB.jpg',
    photos: [
      { src: '/Neil Preston Images/Building Backyard Boats Era/Neil Preston promo with Les Paul.jpg', alt: 'Neil Preston with Les Paul' },
      { src: '/Making of Backyard Boats/Pink Jacket.JPG', alt: 'Recording session' },
      { src: '/Building Backyard Boats CD Images/Back Cover - BBB.jpg', alt: 'Building Backyard Boats back cover' },
      { src: '/Neil Preston Images/Building Backyard Boats Era/Dobro Neil Preston.jpg', alt: 'Neil Preston with Dobro' },
    ],
  },
  {
    id: 'two-faces',
    era: 'Era III',
    year: '2016',
    title: 'Two Faces of Adam and Eve',
    dark: true,
    cover: '/Two Faces of Adam and Eve CD Images/Front Cover -TFAE.jpg',
    photos: [
      { src: '/Neil Preston Images/Two Faces of Adam and Eve Era/Neil Strat.jpg', alt: 'Neil Preston with Stratocaster' },
      { src: '/Neil Preston Images/Two Faces of Adam and Eve Era/Neil Terry Live.jpg', alt: 'Neil Preston live' },
      { src: '/Two Faces of Adam and Eve CD Images/Back Cover -TFAE.jpg', alt: 'Two Faces back cover' },
      { src: '/Neil Preston Images/Two Faces of Adam and Eve Era/Mojo gig 04_12_12.jpg', alt: 'Neil Preston at Mojo' },
    ],
  },
]

export default function Home() {
  return (
    <main>

      {/* ── Hero slideshow ── */}
      <HeroSlideshow />

      {/* ── Era sections ── */}
      {eras.map((era) => (
        <section
          key={era.id}
          id={era.id}
          className={`py-24 px-6 ${era.dark ? 'bg-np-black' : 'bg-cream'}`}
        >
          <div className="max-w-6xl mx-auto">
            <p className="font-display font-bold text-sm tracking-[0.3em] uppercase text-np-red mb-2">
              {era.era} · {era.year}
            </p>
            <h2
              className={`font-display font-black uppercase leading-none mb-12 ${era.dark ? 'text-cream' : 'text-np-black'}`}
              style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
            >
              {era.title}
            </h2>

            <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[200px_80px_1fr] gap-6 sm:gap-10 items-start">

              {/* Album cover */}
              <div className="relative aspect-square w-full">
                <Image
                  src={era.cover}
                  alt={`${era.title} cover`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 140px, 200px"
                />
              </div>

              {/* Year */}
              <span className="hidden sm:block font-display font-black text-np-red text-5xl leading-tight pt-1">
                {era.year}
              </span>

              {/* 2×2 photo grid */}
              <div className="grid grid-cols-2 gap-2">
                {era.photos.map((photo, i) => (
                  <div key={i} className="relative aspect-square w-full">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) calc(50vw - 1rem), 300px"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      ))}

    </main>
  )
}
