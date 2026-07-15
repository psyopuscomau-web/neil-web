'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

type Video = { id: string; title: string; era: string; eraHref: string }

export default function VideoPlayer({ videos }: { videos: Video[] }) {
  const players = useRef<any[]>([])

  useEffect(() => {
    const init = () => {
      players.current = videos.map((video, i) =>
        new window.YT.Player(`yt-${video.id}`, {
          videoId: video.id,
          playerVars: { rel: 0, modestbranding: 1, cc_load_policy: 0 },
          events: {
            onReady: (e: any) => {
              e.target.setOption('captions', 'track', {})
              e.target.unloadModule('captions')
            },
            onStateChange: (e: any) => {
              if (e.data === window.YT.PlayerState.PLAYING) {
                e.target.setOption('captions', 'track', {})
                e.target.unloadModule('captions')
                players.current.forEach((p, j) => {
                  if (j !== i && p?.pauseVideo) p.pauseVideo()
                })
              }
            },
          },
        })
      )
    }

    if (window.YT?.Player) {
      init()
    } else {
      const existing = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = () => {
        existing?.()
        init()
      }
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        document.head.appendChild(tag)
      }
    }

    return () => {
      players.current.forEach(p => p?.destroy?.())
    }
  }, [videos])

  return (
    <>
      {videos.map((video) => (
        <div key={video.id} className="video-item" style={{ width: '28vw', flexShrink: 0 }}>
          <a href={video.eraHref} className="font-display font-bold uppercase tracking-widest mb-1 block"
            style={{ color: '#CC1100', fontSize: 'clamp(0.6rem, 0.9vw, 0.85rem)', cursor: 'pointer' }}>
            {video.era}
          </a>
          <h2 className="font-display font-black uppercase text-white mb-2"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)', lineHeight: 1 }}>
            {video.title}
          </h2>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <div
              id={`yt-${video.id}`}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        </div>
      ))}
    </>
  )
}
