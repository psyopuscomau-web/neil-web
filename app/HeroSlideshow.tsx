'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const slides = [
  {
    src: '/Neil Preston Images/Two Faces of Adam and Eve Era/IMG_0116.jpg',
    alt: 'Neil Preston live',
    glow: 'rgba(155, 10, 10, 0.65)',
  },
  {
    src: '/Neil Preston Images/Two Faces of Adam and Eve Era/Screenshot 2026-07-11 172214.png',
    alt: 'Neil Preston on stage',
    glow: 'rgba(185, 40, 190, 0.6)',
  },
  {
    src: '/Neil Preston Images/Two Faces of Adam and Eve Era/IMG_0122.jpg',
    alt: 'Neil Preston with Stratocaster',
    glow: 'rgba(155, 10, 10, 0.65)',
  },
  {
    src: '/Neil Preston Images/Building Backyard Boats Era/Neil Preston promo with Les Paul 3.jpg',
    alt: 'Neil Preston performing',
    glow: 'rgba(210, 80, 8, 0.65)',
  },
]

const W = 'min(100vw, calc(100svh * 1972 / 2936))'
const FONT = `calc(${W} / 5.4)`

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-svh bg-black overflow-hidden" style={{ pointerEvents: 'none' }}>
      {/* Full-bleed images — cross-fade */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Colour glow — inset vignette transitions with the slide */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow: `inset 0 0 200px 80px ${slides[current].glow}`,
          transition: 'box-shadow 1.2s ease-in-out',
          zIndex: 1,
        }}
      />

      {/* Top and bottom fades */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 20%, transparent 65%, rgba(0,0,0,0.75) 100%)',
          zIndex: 2,
        }}
      />

      {/* Name */}
      <h1
        className="absolute left-0 right-0 px-1 text-center font-display font-black uppercase text-white leading-none"
        style={{ bottom: '3%', fontSize: FONT, zIndex: 3 }}
      >
        Neil Preston
      </h1>
    </section>
  )
}
