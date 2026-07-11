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

const H = 'min(100svh, calc(100vw * 2936 / 1972))'
const W = 'min(100vw, calc(100svh * 1972 / 2936))'
const FONT = `calc(${W} / 5.4)`

const maskStyle: React.CSSProperties = {
  maskImage: [
    'linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)',
    'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
  ].join(', '),
  maskComposite: 'intersect',
  WebkitMaskImage: [
    'linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)',
    'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
  ].join(', '),
  WebkitMaskComposite: 'destination-in' as React.CSSProperties['WebkitMaskComposite'],
}

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-svh bg-black flex items-center justify-center" style={{ pointerEvents: 'none' }}>
      {/* Glow — colour transitions with the slide */}
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: H,
          width: W,
          boxShadow: `0 0 90px 50px ${slides[current].glow}`,
          transition: 'box-shadow 1.2s ease-in-out',
          zIndex: 0,
        }}
      />

      {/* Portrait container with fade-edge mask */}
      <div
        className="relative overflow-hidden"
        style={{ zIndex: 1, height: H, width: W, ...maskStyle }}
      >
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
              sizes="(max-width: 768px) 100vw, 60vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Bottom gradient so text reads cleanly */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" style={{ zIndex: 2 }} />

        {/* Name */}
        <h1
          className="absolute left-0 right-0 px-1 text-center font-display font-black uppercase text-white leading-none"
          style={{ bottom: '3%', fontSize: FONT, zIndex: 3 }}
        >
          Neil Preston
        </h1>
      </div>
    </section>
  )
}
