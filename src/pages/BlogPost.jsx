import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'
import SEO from '../components/SEO'
import { blogPostSchema } from '../data/schemas'

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
      <Link to="/blog" className="btn" style={{ marginTop: '1rem' }}>← Back to Blog</Link>
    </div>
  )

  const related = posts.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
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
          </article>

          <aside className="post-sidebar">
            <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1rem' }}>📚 More Articles</h3>
              {related.map(r => (
                <Link key={r.slug} to={`/blog/${r.slug}`} style={{ display: 'block', marginBottom: '1rem' }}>
                  <img src={r.img} alt={r.title} style={{ width: '100%', height: 80, objectFit: 'cover', borderRadius: 'var(--r-sm)', marginBottom: '0.4rem' }} loading="lazy" />
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.4 }}>{r.title}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.2rem' }}>{r.readTime}</div>
                </Link>
              ))}
            </div>
            <div className="card" style={{ padding: '1.5rem', background: 'var(--grad-dark)', border: 'none' }}>
              <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1rem' }}>🚀 Ready to Start?</h3>
              <p style={{ color: 'rgba(199,210,254,0.75)', fontSize: '0.85rem', marginBottom: '1rem' }}>Apply for free counseling and find the right course for your goals.</p>
              <Link to="/admission" className="btn btn-gold btn-sm" style={{ width: '100%', textAlign: 'center', display: 'block' }}>Apply Now →</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
