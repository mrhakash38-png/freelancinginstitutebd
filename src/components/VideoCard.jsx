import { useState } from 'react'

export default function VideoCard({ video, size = 'md' }) {
  const [active, setActive] = useState(false)
  const thumb = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`
  const hdThumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`

  if (active) {
    return (
      <div className={`vc-root vc-${size}`}>
        <div className="vc-embed">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.titleEn || video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="vc-info">
          <div className="vc-tag">{video.tag}</div>
          <h4 className="vc-title">{video.title}</h4>
          {video.titleEn && <p className="vc-title-en">{video.titleEn}</p>}
          <div className="vc-meta">{video.duration} · {video.views} views</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`vc-root vc-${size}`}>
      <button className="vc-thumb" onClick={() => setActive(true)} aria-label={`Play: ${video.titleEn || video.title}`}>
        <img src={hdThumb} alt={video.titleEn || video.title} className="vc-thumb-img" loading="lazy"
          onError={e => { e.target.src = thumb }} />
        <div className="vc-overlay" />
        <div className="vc-duration">{video.duration}</div>
        <div className="vc-play-btn">
          <svg viewBox="0 0 68 48" width="52" height="37">
            <path d="M66.52,7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13,34,0,34,0S12.21.13,6.9,1.55C3.97,2.33,2.27,4.81,1.48,7.74.06,13.05,0,24,0,24s.06,10.95,1.48,16.26c.78,2.93,2.49,5.41,5.42,6.19C12.21,47.87,34,48,34,48s21.79-.13,27.1-1.55c2.93-.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"/>
            <path d="M 45,24 27,14 27,34" fill="#fff"/>
          </svg>
        </div>
      </button>
      <div className="vc-info">
        {video.tag && <div className="vc-tag">{video.tag}</div>}
        <h4 className="vc-title">{video.title}</h4>
        {video.titleEn && <p className="vc-title-en">{video.titleEn}</p>}
        <div className="vc-meta">⏱ {video.duration} · 👁 {video.views} views</div>
      </div>
    </div>
  )
}
