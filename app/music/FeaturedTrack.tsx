'use client'

import { useRef, useState } from 'react'

export default function FeaturedTrack({ src, title }: { src: string; title: string }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    playing ? a.pause() : a.play()
    setPlaying(!playing)
  }

  const onTimeUpdate = () => {
    const a = audioRef.current
    if (!a?.duration) return
    setProgress((a.currentTime / a.duration) * 100)
  }

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = audioRef.current
    if (!a?.duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    a.currentTime = ((e.clientX - rect.left) / rect.width) * a.duration
  }

  return (
    <div>
      <audio ref={audioRef} src={src} onTimeUpdate={onTimeUpdate} onEnded={() => setPlaying(false)} />
      <p style={{ color: '#CC1100', fontSize: 'clamp(1rem, 1.6vw, 1.6rem)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.25rem', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
        Featured Track
      </p>
      <p style={{ color: 'white', fontSize: 'clamp(0.8rem, 1.1vw, 1rem)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem', lineHeight: 1 }}>
        {title}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <button
          onClick={toggle}
          style={{ width: '2rem', height: '2rem', borderRadius: '50%', border: '1.5px solid #CC1100', background: 'transparent', color: '#CC1100', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', flexShrink: 0 }}
        >
          {playing ? '❚❚' : '▶'}
        </button>
        <div
          onClick={seek}
          style={{ flex: 1, height: '2px', background: 'rgba(255,255,255,0.2)', borderRadius: '1px', cursor: 'pointer', position: 'relative' }}
        >
          <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${progress}%`, background: '#CC1100', borderRadius: '1px' }} />
        </div>
      </div>
    </div>
  )
}
