'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  alpha: number
  decay: number
  grow: number
}

export default function SmokeOverlay() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    let W = 0, H = 0

    const resize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W
      canvas.height = H
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const particles: Particle[] = []

    const spawn = (startY?: number) => {
      particles.push({
        x: Math.random() * W,
        y: startY ?? H + 10,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -(Math.random() * 0.6 + 0.25),
        r: Math.random() * 40 + 20,
        alpha: Math.random() * 0.13 + 0.06,
        decay: Math.random() * 0.0006 + 0.0002,
        grow: Math.random() * 0.35 + 0.1,
      })
    }

    // Seed densely across the lower two-thirds
    for (let i = 0; i < 60; i++) spawn(H * 0.4 + Math.random() * H * 0.6)

    let t = 0
    let id: number

    const tick = () => {
      t++
      ctx.clearRect(0, 0, W, H)

      if (Math.random() < 0.6) spawn()

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx + Math.sin(t * 0.01 + i * 0.7) * 0.35
        p.y += p.vy
        p.r += p.grow
        p.alpha -= p.decay

        if (p.alpha <= 0 || p.y < -p.r * 2) {
          particles.splice(i, 1)
          continue
        }

        // Fade to nothing only in the top 8%
        const yFade = Math.max(0, Math.min(1, (p.y - H * 0.02) / (H * 0.06)))
        const drawAlpha = p.alpha * yFade
        if (drawAlpha <= 0) continue

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r)
        g.addColorStop(0, `rgba(200, 200, 200, ${drawAlpha})`)
        g.addColorStop(1, `rgba(200, 200, 200, 0)`)
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      id = requestAnimationFrame(tick)
    }

    tick()
    return () => {
      cancelAnimationFrame(id)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 w-full h-full"
      style={{ zIndex: 4, mixBlendMode: 'screen' }}
    />
  )
}
