import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'
import AdvancedSEO from '../components/AdvancedSEO'
import { blogPostSchema } from '../data/schemas'
import { breadcrumbSchema } from '../data/schemas'
import { seoPages } from '../data/seo-config'

function renderContent(text) {
  return text.trim().split('\n\n').map((block, i) => {
    if (block.startsWith('**') && block.endsWith('**') && block.split('\n').length === 1) {
      return <h3 key={i} style={{ marginTop: '1.8rem', marginBottom: '0.5rem' }}>{block.replace(/\*\*/g, '')}</h3>
    }
    return <p key={i} style={{ marginBottom: '1.1rem', color: 'var(--text-2)', lineHeight: 1.8 }}
      dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) return (
    <div className="section container center">
      <h2>Article not found</h2>
      <Link to="/blog/" className="btn" style={{ marginTop: '1rem' }}>← Back to Blog</Link>
    </div>
  )

  const related = posts.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <>
      <AdvancedSEO
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}/`}
        image={post.img}
        type="article"
        schema={blogPostSchema(post)}
      />
      {/* Hero */}
      <div className="post-hero" style={{ backgroundImage: `url(${post.img})` }}>
        <div className="post-hero-overlay" />
        <div className="container post-hero-content">
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="badge">{post.tag}</span>
          </div>
          <h1 style={{ color: 'white', maxWidth: '75ch', marginBottom: '1rem' }}>{post.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--grad-brand)', display: 'grid', placeItems: 'center', color: 'white', fontWeight: 800, fontSize: '0.9rem' }}>
                {post.author[0]}
              </div>
              <span style={{ fontWeight: 600 }}>{post.author}</span>
            </div>
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section">
        <div className="container post-layout">
          <article className="post-content">
            <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', lineHeight: 1.8, marginBottom: '2rem', borderLeft: '4px solid var(--indigo-400)', paddingLeft: '1rem' }}>
              {post.excerpt}
            </p>
            {renderContent(post.content)}
            
            {/* Article CTA */}
            <div className="card" style={{ padding: '2rem', marginTop: '3rem', background: 'var(--grad-dark)', border: 'none' }}>
              <h3 style={{ color: 'white', marginBottom: '0.75rem' }}>Ready to Start Your Freelancing Journey?</h3>
              <p style={{ color: 'rgba(199,210,254,0.75)', marginBottom: '1.5rem' }}>
                Stop reading and start earning. Join our <Link to="/courses/" style={{color:'#fbbf24', textDecoration:'underline'}}>structured freelancing courses</Link> and learn from active freelancers who are earning $2,000–$5,000/month.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/courses/" className="btn btn-gold">Browse Courses</Link>
                <Link to="/admission/" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Apply for Free Counseling</Link>
              </div>
            </div>

            {/* Related Posts */}
            <div style={{ marginTop: '3rem' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Related Articles</h3>
              <div className="grid-3" style={{ gap: '1.25rem' }}>
                {related.map(r => (
                  <Link key={r.slug} to={`/blog/${r.slug}/`} className="card blog-card-link" style={{ padding: 0 }}>
                    <div className="blog-card">
                      <div className="bc-img-wrap">
                        <img src={r.img} alt={r.title} className="bc-img" loading="lazy" />
                        <span className="bc-tag">{r.tag}</span>
                      </div>
                      <div className="bc-body">
                        <div className="bc-date">{r.readTime}</div>
                        <h4 className="bc-title" style={{ fontSize: '0.95rem' }}>{r.title}</h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          <aside className="post-sidebar">
            <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1rem' }}>📚 More Articles</h3>
              {related.slice(0, 3).map(r => (
                <Link key={r.slug} to={`/blog/${r.slug}/`} style={{ display: 'block', marginBottom: '1rem' }}>
                  <img src={r.img} alt={r.title} style={{ width: '100%', height: 80, objectFit: 'cover', borderRadius: 'var(--r-sm)', marginBottom: '0.4rem' }} loading="lazy" />
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.4 }}>{r.title}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.2rem' }}>{r.readTime}</div>
                </Link>
              ))}
            </div>
            <div className="card" style={{ padding: '1.5rem', background: 'var(--grad-dark)', border: 'none' }}>
              <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1rem' }}>🚀 Ready to Start?</h3>
              <p style={{ color: 'rgba(199,210,254,0.75)', fontSize: '0.85rem', marginBottom: '1rem' }}>Apply for free counseling and find the right course for your goals.</p>
              <Link to="/admission/" className="btn btn-gold btn-sm" style={{ width: '100%', textAlign: 'center', display: 'block' }}>Apply Now →</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
