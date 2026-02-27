import { Link } from 'react-router-dom'
import VideoEmbed from '../components/VideoEmbed'
import VideoCard from '../components/VideoCard'
import AdvancedSEO from '../components/AdvancedSEO'
import { homeSchema, localBusinessSchema, breadcrumbSchema } from '../data/schemas'
import { seoPages } from '../data/seo-config'
import { videos } from '../data/videos'

const stats = [
  { v: '5,000+', l: 'Students Trained' },
  { v: '1,500+', l: 'Active Earners' },
  { v: '৳ 2 Crore+', l: 'Student Earnings/Month' },
  { v: '97%', l: 'Satisfaction Rate' },
]

const courses = [
  {
    icon: '🎨', title: 'Graphic Design', desc: 'Adobe Photoshop, Illustrator, brand identity & client workflow.', weeks: '16 Weeks',
    img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80',
  },
  {
    icon: '💻', title: 'Web Development', desc: 'WordPress, Elementor, custom themes, client delivery.', weeks: '20 Weeks',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
  },
  {
    icon: '📈', title: 'Digital Marketing', desc: 'SEO, Meta Ads, Google Ads, content strategy.', weeks: '12 Weeks',
    img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80',
  },
  {
    icon: '✍️', title: 'Content Writing', desc: 'SEO writing, copywriting, Upwork profile building.', weeks: '8 Weeks',
    img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80',
  },
  {
    icon: '🛒', title: 'eCommerce & Dropshipping', desc: 'Shopify, Amazon FBA, product research, scaling.', weeks: '12 Weeks',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
  {
    icon: '📊', title: 'Data Entry & VA', desc: 'Virtual assistant skills, spreadsheets, remote work tools.', weeks: '6 Weeks',
    img: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&q=80',
  },
]

const why = [
  { icon: '🏆', t: 'Proven Results', d: 'Over 1,500 students now earning on Upwork, Fiverr & direct clients.' },
  { icon: '🎓', t: 'Expert Instructors', d: 'Taught by active freelancers with $100K+ in verified earnings.' },
  { icon: '🤝', t: 'Lifetime Mentorship', d: 'Get support even after graduation — batch groups, portfolio review.' },
  { icon: '📱', t: 'Live + Recorded', d: 'Classes are live with recordings available 24/7 for revision.' },
  { icon: '💼', t: 'Job Placement', d: 'We help with marketplace onboarding and first client acquisition.' },
  { icon: '🇧🇩', t: 'Bangla Medium', d: 'All instruction in Bangla so you learn faster, not slower.' },
]

const testimonials = [
  {
    name: 'Mehedi Hasan', loc: 'Sylhet', course: 'Graphic Design', income: '৳85K/mo',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    quote: 'I was a rickshaw driver\'s son with zero computer background. FIBD changed my entire life.',
  },
  {
    name: 'Rina Akter', loc: 'Chittagong', course: 'Digital Marketing', income: '৳65K/mo',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    quote: 'I studied at midnight while raising two kids. Now I have 3 retainer clients.',
  },
  {
    name: 'Jahangir Alam', loc: 'Rajshahi', course: 'WordPress Dev', income: '৳1.2L/mo',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    quote: 'Quit my government job after 6 months. My income is now 4x what I earned before.',
  },
]

const recentPosts = [
  {
    slug: 'how-to-start-freelancing-2026',
    title: 'How to Start Freelancing in Bangladesh in 2026',
    excerpt: 'A step-by-step guide for absolute beginners — choosing a skill, building a profile, and landing your first client.',
    date: 'Feb 10, 2026',
    tag: 'Beginner Guide',
    img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80',
  },
  {
    slug: 'upwork-vs-fiverr-bangladesh',
    title: 'Upwork vs Fiverr: Which is Better for Bangladeshi Freelancers?',
    excerpt: 'We break down earnings, competition, payment methods, and which platform suits which skills.',
    date: 'Feb 3, 2026',
    tag: 'Platform Guide',
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80',
  },
  {
    slug: 'top-5-freelancing-skills-2026',
    title: 'Top 5 Highest-Paying Freelancing Skills in 2026',
    excerpt: 'Based on real Upwork and Fiverr data — the skills that pay the most right now and how to learn them.',
    date: 'Jan 27, 2026',
    tag: 'Career Tips',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
  },
]

export default function Home() {
  return (
    <>
      <AdvancedSEO
        title={seoPages.home.title}
        description={seoPages.home.description}
        canonical={seoPages.home.canonical}
        keywords={seoPages.home.keywords}
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            homeSchema,
            localBusinessSchema,
            breadcrumbSchema([
              { name: 'Home', url: '/' },
            ]),
          ],
        }}
      />
      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="badge">🚀 2026 Batch Enrollment Open</span>
            <h1>Fly High. Earn Free.<br /><span className="grad-text">Start Freelancing Today.</span></h1>
            <p className="lead">
              Bangladesh's most trusted freelancing institute — practical skills, live mentorship,
              and real marketplace experience to land your first paying client.
            </p>
            <div className="cta-row">
              <Link to="/admission" className="btn btn-lg">Apply Now — Free Counseling</Link>
              <Link to="/courses" className="btn btn-outline btn-lg">Browse Courses</Link>
            </div>
            <div className="trust-row">
              <span>✅ No experience needed</span>
              <span>✅ Bangla medium</span>
              <span>✅ Job support</span>
              <a
                href="https://www.facebook.com/freelancerhamidurrahman44"
                target="_blank"
                rel="noreferrer"
                style={{ display:'inline-flex', alignItems:'center', gap:'0.35rem', color:'#1877F2', fontWeight:700, fontSize:'0.83rem', textDecoration:'none' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
                Follow on Facebook
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-img-card">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
                alt="Students learning freelancing"
                className="hero-img"
              />
              <div className="hero-img-badge">
                <span className="hib-icon">🎉</span>
                <div>
                  <div className="hib-val">1,500+</div>
                  <div className="hib-lbl">Earning This Month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <div className="stats-bar">
        <div className="container stats-grid">
          {stats.map(s => (
            <div key={s.l} className="stat-item">
              <div className="stat-val">{s.v}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Intro Video ─── */}
      <section className="section alt-section">
        <div className="container">
          <div className="video-section">
            <div className="video-text">
              <p className="pre-label">From Our Instructor</p>
              <h2>Watch: একটা স্কিলেই লাখ টাকা ইনকাম সম্ভব</h2>
              <p style={{ color: 'var(--muted)', marginTop: '1rem', fontSize: '1rem', lineHeight: 1.75 }}>
                Hamidur Rahman — our founder and lead instructor — explains how mastering a single
                freelancing skill can unlock a lakh-taka monthly income for anyone in Bangladesh,
                regardless of background.
              </p>
              <ul className="video-bullets">
                <li>🎬 Real income proof and strategy</li>
                <li>📍 Which skills pay the most right now</li>
                <li>💡 How to pick the right niche for you</li>
              </ul>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <Link to="/videos" className="btn btn-outline">Watch All Free Videos →</Link>
                <Link to="/success-stories" className="btn btn-ghost">Student Stories →</Link>
              </div>
            </div>
            <div className="video-wrap">
              <VideoEmbed videoId={videos.hero.id} title={videos.hero.titleEn} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Success Video Teasers ─── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="pre-label">Proof It Works</p>
              <h2>Student Earnings — In Their Own Words</h2>
            </div>
            <Link to="/videos" className="btn btn-outline">All Videos →</Link>
          </div>
          <div className="grid-3">
            {videos.successStories.slice(0, 3).map(v => (
              <VideoCard key={v.id} video={v} size="md" />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Courses ─── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="pre-label">What We Teach</p>
              <h2>Popular Course Tracks</h2>
            </div>
            <Link to="/courses" className="btn btn-outline">View All Courses →</Link>
          </div>
          <div className="grid-3">
            {courses.map(c => (
              <div key={c.title} className="card course-card-media">
                <div className="ccm-img-wrap">
                  <img src={c.img} alt={c.title} className="ccm-img" loading="lazy" />
                  <span className="ccm-icon">{c.icon}</span>
                </div>
                <div className="ccm-body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <span className="course-meta">{c.weeks}</span>
                    <Link to="/courses" className="btn btn-ghost btn-sm">Details →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Us ─── */}
      <section className="section alt-section">
        <div className="container">
          <p className="pre-label center">Why Choose Us</p>
          <h2 className="center">The Freelancing Institute BD Difference</h2>
          <div className="grid-3" style={{ marginTop: 32 }}>
            {why.map(w => (
              <div key={w.t} className="card why-card">
                <div className="why-icon">{w.icon}</div>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="section">
        <div className="container">
          <p className="pre-label center">Student Voices</p>
          <h2 className="center">What Our Graduates Say</h2>
          <div className="testimonial-grid">
            {testimonials.map(t => (
              <div key={t.name} className="card testimonial-card">
                <div className="tc-quote">"</div>
                <p className="tc-text">{t.quote}</p>
                <div className="tc-person">
                  <img src={t.img} alt={t.name} className="tc-avatar" loading="lazy" />
                  <div>
                    <div className="tc-name">{t.name}</div>
                    <div className="tc-meta">{t.course} · {t.loc}</div>
                    <div className="tc-income">{t.income}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: '2rem' }}>
            <Link to="/success-stories" className="btn btn-outline">See All 9 Stories →</Link>
          </div>
        </div>
      </section>

      {/* ─── Recent Blog Posts ─── */}
      <section className="section alt-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="pre-label">From Our Blog</p>
              <h2>Freelancing Tips & Guides</h2>
            </div>
            <Link to="/blog" className="btn btn-outline">All Articles →</Link>
          </div>
          <div className="grid-3">
            {recentPosts.map(p => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="card blog-card-link">
                <div className="blog-card">
                  <div className="bc-img-wrap">
                    <img src={p.img} alt={p.title} className="bc-img" loading="lazy" />
                    <span className="bc-tag">{p.tag}</span>
                  </div>
                  <div className="bc-body">
                    <div className="bc-date">{p.date}</div>
                    <h3 className="bc-title">{p.title}</h3>
                    <p className="bc-excerpt">{p.excerpt}</p>
                    <span className="bc-read">Read Article →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="cta-banner">
        <div className="container center">
          <h2>Ready to Start Your Freelancing Career?</h2>
          <p>Join 5,000+ students already on their journey to financial freedom.</p>
          <Link to="/admission" className="btn btn-lg btn-gold">Apply Now — It's Free to Consult</Link>
        </div>
      </section>
    </>
  )
}
