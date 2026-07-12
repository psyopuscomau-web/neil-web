'use client'

import { useEffect, useRef } from 'react'

export default function StaticOverlay() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Small canvas scaled up via CSS = authentic blocky grain
    const W = 240
    const H = 180
    canvas.width = W
    canvas.height = H

    let frame = 0
    let id: number

    const tick = () => {
      frame++
      // ~8fps static — slow shimmer
      if (frame % 8 === 0) {
        const img = ctx.createImageData(W, H)
        const d = img.data
        for (let i = 0; i < d.length; i += 4) {
          const v = (Math.random() * 255) | 0
          d[i] = d[i + 1] = d[i + 2] = v
          d[i + 3] = (Math.random() * 35) | 0
        }
        ctx.putImageData(img, 0, 0)
      }
      id = requestAnimationFrame(tick)
    }

    tick()
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 w-full h-full"
      style={{
        zIndex: 4,
        opacity: 0.25,
        mixBlendMode: 'screen',
        imageRendering: 'pixelated',
      }}
    />
  )
}
