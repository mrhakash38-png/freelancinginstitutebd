import { Link } from 'react-router-dom'
import AdvancedSEO from '../components/AdvancedSEO'
import Breadcrumb from '../components/Breadcrumb'
import { posts } from '../data/posts'

import { breadcrumbSchema } from '../data/schemas'
import { seoPages } from '../data/seo-config'
export default function Blog() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      <AdvancedSEO
        title={seoPages.blog.title}
        description={seoPages.blog.description}
        canonical={seoPages.blog.canonical}
        keywords={seoPages.blog.keywords}
        schema={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog/' },
        ])}
      />
      <div className="page-hero alt-section">
        <div className="container">
          <Breadcrumb items={[
            { name: 'Home', url: '/' },
            { name: 'Blog' },
          ]} />
          <div className="center">
            <p className="pre-label">Knowledge Hub</p>
            <h1>Freelancing Blog — Tips, Guides & Success Strategies for Bangladesh</h1>
            <p className="lead" style={{ margin: '0.75rem auto 0', maxWidth: '75ch' }}>
              Learn how to start freelancing in Bangladesh, master Upwork and Fiverr, and land high-paying clients with our expert guides. Written by active freelancers earning $2,000–$5,000/month, these articles cover everything from <Link to="/courses/" style={{color:'var(--primary)'}}>choosing the right skill to learn</Link> to scaling your freelance business. New to freelancing? <Link to="/admission/" style={{color:'var(--primary)'}}>Start with our beginner courses</Link> or <Link to="/videos/" style={{color:'var(--primary)'}}>watch free video lessons</Link>.
            </p>
          </div>
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

      {/* ─── Popular Posts Section ─── */}
      <section className="section alt-section">
        <div className="container">
          <p className="pre-label center">Most Read</p>
          <h2 className="center">Popular Freelancing Articles</h2>
          <p className="lead center" style={{ margin: '0.75rem auto 2rem', maxWidth: '75ch' }}>
            These are the guides our students read most before enrolling in <Link to="/courses/" style={{color:'var(--primary)'}}>our courses</Link>. They answer the most common questions about starting a freelancing career in Bangladesh.
          </p>
          <div className="grid-3">
            {posts.slice(0, 3).map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}/`} className="card blog-card-link">
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
          <Link to="/admission/" className="btn btn-lg btn-gold">Apply Now — Free Consultation</Link>
        </div>
      </section>
    </>
  )
}
