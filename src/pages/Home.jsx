import { Link } from 'react-router-dom'

const stats = [
  { v: '5,000+', l: 'Students Trained' },
  { v: '1,500+', l: 'Active Earners' },
  { v: '৳ 2 Crore+', l: 'Student Earnings/Month' },
  { v: '97%', l: 'Satisfaction Rate' },
]

const courses = [
  { icon: '🎨', title: 'Graphic Design', desc: 'Adobe Photoshop, Illustrator, brand identity & client workflow.', weeks: '16 Weeks' },
  { icon: '💻', title: 'Web Development', desc: 'WordPress, Elementor, custom themes, client delivery.', weeks: '20 Weeks' },
  { icon: '📈', title: 'Digital Marketing', desc: 'SEO, Meta Ads, Google Ads, content strategy.', weeks: '12 Weeks' },
  { icon: '✍️', title: 'Content Writing', desc: 'SEO writing, copywriting, Upwork profile building.', weeks: '8 Weeks' },
  { icon: '🛒', title: 'eCommerce & Dropshipping', desc: 'Shopify, Amazon FBA, product research, scaling.', weeks: '12 Weeks' },
  { icon: '📊', title: 'Data Entry & VA', desc: 'Virtual assistant skills, spreadsheets, remote work tools.', weeks: '6 Weeks' },
]

const why = [
  { icon: '🏆', t: 'Proven Results', d: 'Over 1,500 students now earning on Upwork, Fiverr & direct clients.' },
  { icon: '🎓', t: 'Expert Instructors', d: 'Taught by active freelancers with $100K+ in verified earnings.' },
  { icon: '🤝', t: 'Lifetime Mentorship', d: 'Get support even after graduation — batch groups, portfolio review.' },
  { icon: '📱', t: 'Live + Recorded', d: 'Classes are live with recordings available 24/7 for revision.' },
  { icon: '💼', t: 'Job Placement', d: 'We help with marketplace onboarding and first client acquisition.' },
  { icon: '🇧🇩', t: 'Bangla Medium', d: 'All instruction in Bangla so you learn faster, not slower.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
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
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card card">
              <div className="hc-header">Your journey in 4 steps</div>
              {['Enroll in a course','Learn from active freelancers','Build your portfolio','Land your first client 🎉'].map((s,i)=>(
                <div key={i} className="hc-step">
                  <div className="hc-num">{i+1}</div>
                  <span>{s}</span>
                </div>
              ))}
              <Link to="/admission" className="btn" style={{marginTop:12,width:'100%',textAlign:'center',display:'block'}}>Start Free →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="container stats-grid">
          {stats.map(s=>(
            <div key={s.l} className="stat-item">
              <div className="stat-val">{s.v}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses preview */}
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
            {courses.map(c=>(
              <div key={c.title} className="card course-card">
                <div className="course-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="course-meta">{c.weeks}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section alt-section">
        <div className="container">
          <p className="pre-label center">Why Choose Us</p>
          <h2 className="center">The Freelancing Institute BD Difference</h2>
          <div className="grid-3" style={{marginTop:32}}>
            {why.map(w=>(
              <div key={w.t} className="card why-card">
                <div className="why-icon">{w.icon}</div>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
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
