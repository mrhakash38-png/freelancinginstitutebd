import { useState } from 'react'

export default function VideoEmbed({ videoId, title = 'Video' }) {
  const [active, setActive] = useState(false)
  const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  if (!active) {
    return (
      <div className="yt-thumb" onClick={() => setActive(true)} role="button" tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setActive(true)} aria-label={`Play: ${title}`}>
        <img src={thumb} alt={title} className="yt-thumb-img" loading="lazy" />
        <div className="yt-overlay" />
        <button className="yt-play-btn" aria-hidden="true">
          <svg viewBox="0 0 68 48" width="68" height="48">
            <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55
              C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26
              c0.78,2.93,2.49,5.41,5.42,6.19C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55
              c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"/>
            <path d="M 45,24 27,14 27,34" fill="#fff"/>
          </svg>
        </button>
        <div className="yt-title">{title}</div>
      </div>
    )
  }

  return (
    <div className="yt-embed">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
