import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const albums = [
  {
    id: 'classroom',
    title: 'Live Classes',
    desc: 'Our instructors in action — real classroom moments.',
    cover: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    photos: [
      { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000&q=85', cap: 'Live session in progress' },
      { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1000&q=85', cap: 'Hands-on design workshop' },
      { src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1000&q=85', cap: 'Group coding session' },
      { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&q=85', cap: 'Student Q&A with instructor' },
      { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&q=85', cap: 'WordPress development class' },
      { src: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1000&q=85', cap: 'Digital marketing workshop' },
    ],
  },
  {
    id: 'graduation',
    title: 'Graduation & Certificates',
    desc: 'Celebrating our graduates and their achievements.',
    cover: 'https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&q=80',
    photos: [
      { src: 'https://images.unsplash.com/photo-1627556704302-624286467c65?w=1000&q=85', cap: 'Certificate ceremony — Batch 12' },
      { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000&q=85', cap: 'Graduation day group photo' },
      { src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1000&q=85', cap: 'Proud graduates with their certificates' },
      { src: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=1000&q=85', cap: 'First-time earners celebration' },
    ],
  },
  {
    id: 'students',
    title: 'Student Life',
    desc: 'Behind the scenes — learning, building, connecting.',
    cover: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    photos: [
      { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=85', cap: 'Team project collaboration' },
      { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&q=85', cap: 'Working on Fiverr gig setup' },
      { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&q=85', cap: 'Online learning session' },
      { src: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=1000&q=85', cap: 'Study group at the institute' },
      { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=85', cap: 'Marketing strategy session' },
      { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=85', cap: 'Remote work simulation' },
    ],
  },
  {
    id: 'events',
    title: 'Events & Workshops',
    desc: 'Freelancing bootcamps, seminars, and special events.',
    cover: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    photos: [
      { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&q=85', cap: 'Annual Freelancing Summit 2025' },
      { src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1000&q=85', cap: 'Guest speaker: Upwork Top Earner' },
      { src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1000&q=85', cap: 'Fiverr growth hacking workshop' },
      { src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1000&q=85', cap: 'Panel discussion: Future of Remote Work' },
    ],
  },
]

export default function Gallery() {
  const [activeAlbum, setActiveAlbum] = useState(null)
  const [lightbox, setLightbox] = useState(null)

  const album = albums.find(a => a.id === activeAlbum)

  return (
    <>
      <SEO
        title="Gallery — Classes, Graduation & Student Life | FIBD"
        description="Photo gallery of Freelancing Institute BD — live classes, graduation ceremonies, student life, and events. See our vibrant learning community in Dhaka, Bangladesh."
        canonical="/gallery"
      />
      <div className="page-hero alt-section">
        <div className="container center">
          <p className="pre-label">Our World in Photos</p>
          <h1>Photo Gallery</h1>
          <p className="lead" style={{ margin: '0.75rem auto 0' }}>
            A glimpse into our classrooms, events, and student life at Freelancing Institute BD.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {!activeAlbum ? (
            <>
              <div className="grid-2" style={{ gap: '1.5rem' }}>
                {albums.map(a => (
                  <button key={a.id} className="album-card" onClick={() => setActiveAlbum(a.id)}>
                    <div className="album-img-wrap">
                      <img src={a.cover} alt={a.title} className="album-img" loading="lazy" />
                      <div className="album-overlay">
                        <span className="album-count">{a.photos.length} Photos</span>
                        <span className="album-open">Open Album →</span>
                      </div>
                    </div>
                    <div className="album-info">
                      <h3>{a.title}</h3>
                      <p>{a.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button className="btn btn-outline btn-sm" onClick={() => setActiveAlbum(null)}>← All Albums</button>
                <div>
                  <h2 style={{ margin: 0 }}>{album.title}</h2>
                  <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.9rem' }}>{album.desc}</p>
                </div>
              </div>
              <div className="photo-grid">
                {album.photos.map((p, i) => (
                  <button key={i} className="photo-thumb" onClick={() => setLightbox({ photos: album.photos, idx: i })}>
                    <img src={p.src.replace('w=1000', 'w=500')} alt={p.cap} className="photo-thumb-img" loading="lazy" />
                    <div className="photo-thumb-overlay">
                      <span>🔍 {p.cap}</span>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lb-content" onClick={e => e.stopPropagation()}>
            <button className="lb-close" onClick={() => setLightbox(null)}>✕</button>
            <button className="lb-prev" onClick={() => setLightbox(l => ({ ...l, idx: (l.idx - 1 + l.photos.length) % l.photos.length }))}>‹</button>
            <img src={lightbox.photos[lightbox.idx].src} alt={lightbox.photos[lightbox.idx].cap} className="lb-img" />
            <button className="lb-next" onClick={() => setLightbox(l => ({ ...l, idx: (l.idx + 1) % l.photos.length }))}>›</button>
            <div className="lb-caption">{lightbox.photos[lightbox.idx].cap} · {lightbox.idx + 1} / {lightbox.photos.length}</div>
          </div>
        </div>
      )}

      <section className="cta-banner">
        <div className="container center">
          <h2>Want to Be in Our Next Gallery?</h2>
          <p>Enroll today — and join the community of learners, builders, and earners.</p>
          <Link to="/admission" className="btn btn-lg btn-gold">Apply Now</Link>
        </div>
      </section>
    </>
  )
}
