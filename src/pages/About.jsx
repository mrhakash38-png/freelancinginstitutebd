import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import VideoEmbed from '../components/VideoEmbed'
import { videos } from '../data/videos'

const team = [
  { init: 'R', name: 'Rakibul Hasan', role: 'Founder & CEO', bio: 'Top-rated Upwork freelancer. $200K+ earned. 8 years in digital services.' },
  { init: 'S', name: 'Sumaiya Akter', role: 'Head of Graphic Design', bio: 'Senior designer with 6 years of agency + freelancing experience.' },
  { init: 'T', name: 'Tanvir Ahmed', role: 'Lead Web Dev Instructor', bio: 'Full-stack developer, 150+ WordPress projects delivered.' },
  { init: 'N', name: 'Nadia Islam', role: 'Digital Marketing Lead', bio: 'Growth marketer managing $500K+ in ad spend for clients globally.' },
]

const milestones = [
  { year: '2019', event: 'Founded in Dhaka with 30 students and a single course.' },
  { year: '2020', event: 'Launched online platform — went fully remote during COVID.' },
  { year: '2021', event: 'Crossed 1,000 graduates. Opened eCommerce & VA tracks.' },
  { year: '2022', event: 'Student earnings crossed ৳1 crore/month for the first time.' },
  { year: '2023', event: 'Expanded to 6 courses. 3,000+ total alumni.' },
  { year: '2026', event: '5,000+ students trained. ৳2 crore+ student income/month.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero alt-section">
        <div className="container">
          <div className="about-hero-grid">
            <div>
              <p className="pre-label">Our Story</p>
              <h1>We teach people to fly — financially.</h1>
              <p className="lead" style={{marginTop:'1rem'}}>
                Freelancing Institute BD was born out of a simple frustration: Bangladesh has millions of
                talented people, but most never reach international clients. We bridge that gap —
                with practical training, real mentorship, and unwavering community support.
              </p>
              <Link to="/admission" className="btn btn-lg" style={{marginTop:'1.8rem'}}>Join Our Family →</Link>
            </div>
            <div className="about-stat-grid">
              {[
                {v:'5,000+', l:'Students Trained'},
                {v:'1,500+', l:'Active Earners'},
                {v:'৳2Cr+',  l:'Monthly Student Income'},
                {v:'97%',    l:'Would Recommend Us'},
              ].map(s => (
                <div key={s.l} className="about-stat">
                  <div className="val">{s.v}</div>
                  <div className="lbl">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Vision Goal */}
      <section className="section">
        <div className="container">
          <p className="pre-label center">Our Purpose</p>
          <h2 className="center">Mission, Vision & Goal</h2>
          <div className="mvg-grid">
            <div className="card mvg-card">
              <span className="mvg-icon">🎯</span>
              <h3>Our Mission</h3>
              <p>To empower every motivated Bangladeshi with practical digital skills, marketplace confidence, and income-earning ability — regardless of background or prior experience.</p>
            </div>
            <div className="card mvg-card">
              <span className="mvg-icon">🔭</span>
              <h3>Our Vision</h3>
              <p>A Bangladesh where 1 million families earn independently through digital work — reducing unemployment and increasing household income from the ground up.</p>
            </div>
            <div className="card mvg-card">
              <span className="mvg-icon">🏁</span>
              <h3>Our Goal</h3>
              <p>Train 50,000 freelancers by 2030. Build Bangladesh's largest alumni network of verified earners. Establish Freelancing Institute BD as the gold standard in digital skills education.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section alt-section">
        <div className="container">
          <p className="pre-label center">What We Stand For</p>
          <h2 className="center">Our Core Values</h2>
          <div className="grid-3" style={{marginTop:'2.5rem'}}>
            {[
              { icon:'💡', t:'Practicality First', d:'No fluff. Every lesson is tied to a real task you can invoice a client for.' },
              { icon:'🤗', t:'Radical Inclusion', d:'We welcome complete beginners. Your starting point does not define your endpoint.' },
              { icon:'🏆', t:'Results Over Certificates', d:'We measure success by your income, not just your attendance.' },
              { icon:'🔄', t:'Continuous Improvement', d:'Our curriculum updates quarterly to match what clients actually pay for today.' },
              { icon:'🤝', t:'Community Over Competition', d:'Students help each other. Our alumni network is a lifelong resource.' },
              { icon:'🇧🇩', t:'Local Roots, Global Standards', d:'Bangla instruction, international freelancing norms. Best of both worlds.' },
            ].map(v => (
              <div key={v.t} className="card why-card">
                <span className="why-icon">{v.icon}</span>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Video */}
      <section className="section">
        <div className="container">
          <div className="video-section">
            <div className="video-text">
              <p className="pre-label">Meet the Founder</p>
              <h2>Hamidur Rahman — Freelancer, Trainer, Mentor</h2>
              <p style={{ color: 'var(--muted)', marginTop: '1rem', lineHeight: 1.75 }}>
                Hamidur Rahman is a Top Rated freelancer with years of real marketplace experience.
                In this message, he shares why he started Freelancing Institute BD and what drives
                him to train the next generation of Bangladeshi freelancers.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <Link to="/videos" className="btn btn-outline">Watch All Free Videos →</Link>
                <Link to="/admission" className="btn">Join a Batch →</Link>
              </div>
            </div>
            <div className="video-wrap">
              <VideoEmbed videoId={videos.about.id} title={videos.about.titleEn} />
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Videos */}
      <section className="section alt-section">
        <div className="container">
          <p className="pre-label center">Watch & Get Inspired</p>
          <h2 className="center">Why Freelancing Changes Lives</h2>
          <div className="grid-3" style={{ marginTop: '2rem' }}>
            {videos.inspiration.map(v => (
              <VideoCard key={v.id} video={v} size="md" />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <p className="pre-label center">Our Journey</p>
          <h2 className="center">How We Got Here</h2>
          <div style={{maxWidth:640, margin:'2.5rem auto 0', display:'flex', flexDirection:'column', gap:'1.25rem'}}>
            {milestones.map(m => (
              <div key={m.year} className="card" style={{display:'flex', gap:'1.25rem', alignItems:'flex-start', padding:'1.25rem 1.5rem'}}>
                <div style={{
                  minWidth:60, textAlign:'center', fontWeight:900, fontSize:'0.88rem',
                  background:'var(--grad-brand)', WebkitBackgroundClip:'text',
                  WebkitTextFillColor:'transparent', backgroundClip:'text'
                }}>{m.year}</div>
                <p style={{margin:0, fontSize:'0.92rem', color:'var(--text-2)'}}>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section alt-section">
        <div className="container">
          <p className="pre-label center">The People Behind It</p>
          <h2 className="center">Meet the Team</h2>
          <div className="team-grid">
            {team.map(t => (
              <div key={t.name} className="card team-card">
                <div className="team-avatar">{t.init}</div>
                <h4>{t.name}</h4>
                <div className="role">{t.role}</div>
                <p className="bio">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container center">
          <h2>Become Part of Our Story</h2>
          <p>Join thousands of students who chose to invest in themselves.</p>
          <Link to="/admission" className="btn btn-lg btn-gold">Apply Today — Free Consultation</Link>
        </div>
      </section>
    </>
  )
}
