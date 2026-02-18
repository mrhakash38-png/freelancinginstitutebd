import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { posts } from '../data/posts'

export default function Blog() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      <SEO
        title="Freelancing Blog — Tips, Guides & Career Advice | FIBD"
        description="Practical freelancing guides for Bangladeshis: how to start on Upwork/Fiverr, top skills in 2026, writing winning proposals, getting paid via Bkash/Payoneer. Updated regularly."
        canonical="/blog"
      />
      <div className="page-hero alt-section">
        <div className="container center">
          <p className="pre-label">Knowledge Hub</p>
          <h1>Freelancing Blog</h1>
          <p className="lead" style={{ margin: '0.75rem auto 0' }}>
            Practical guides, platform tips, and success strategies — written by active freelancers.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Link to={`/blog/${featured.slug}`} className="blog-featured-link">
            <div className="card blog-featured">
              <div className="bf-img-wrap">
                <img src={featured.img} alt={featured.title} className="bf-img" />
              </div>
              <div className="bf-body">
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="chip">{featured.tag}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--muted)', alignSelf: 'center' }}>📅 {featured.date} · ⏱ {featured.readTime}</span>
                </div>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>{featured.title}</h2>
                <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '1rem' }}>{featured.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--grad-brand)', display: 'grid', placeItems: 'center', color: 'white', fontWeight: 800, fontSize: '0.9rem' }}>
                    {featured.author[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>{featured.author}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>FIBD Instructor</div>
                  </div>
                  <span className="btn btn-sm" style={{ marginLeft: 'auto' }}>Read Article →</span>
                </div>
              </div>
            </div>
          </Link>

          <div className="grid-3" style={{ marginTop: '2.5rem' }}>
            {rest.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="card blog-card-link">
                <div className="blog-card">
                  <div className="bc-img-wrap">
                    <img src={p.img} alt={p.title} className="bc-img" loading="lazy" />
                    <span className="bc-tag">{p.tag}</span>
                  </div>
                  <div className="bc-body">
                    <div className="bc-date">{p.date} · {p.readTime}</div>
                    <h3 className="bc-title">{p.title}</h3>
                    <p className="bc-excerpt">{p.excerpt}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem' }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--grad-brand)', display: 'grid', placeItems: 'center', color: 'white', fontWeight: 800, fontSize: '0.75rem', flexShrink: 0 }}>
                        {p.author[0]}
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-2)' }}>{p.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container center">
          <h2>Ready to Go from Reader to Earner?</h2>
          <p>Stop reading about freelancing. Start doing it with expert guidance.</p>
          <Link to="/admission" className="btn btn-lg btn-gold">Apply Now — Free Consultation</Link>
        </div>
      </section>
    </>
  )
}
