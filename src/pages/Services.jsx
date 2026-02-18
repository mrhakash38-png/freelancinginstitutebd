import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import { videos } from '../data/videos'
import SEO from '../components/SEO'

const services = [
  {
    icon: '🎓', title: 'Freelancing Training', desc: 'Structured 6–20 week courses taught by active freelancers. Live sessions, recordings, and weekly assignments.',
    features: ['Beginner to advanced tracks','Live class + recordings','Weekly mentor Q&A','Certificate on completion'],
  },
  {
    icon: '🧑‍💼', title: 'Career Mentorship', desc: 'One-on-one guidance to plan your freelancing career, pick the right niche, and avoid costly beginner mistakes.',
    features: ['Personalized career roadmap','Niche & platform selection','Monthly check-in calls','Portfolio critique sessions'],
  },
  {
    icon: '🖥️', title: 'Profile Setup & Optimization', desc: 'We build and optimize your Upwork, Fiverr, and LinkedIn profiles for maximum client visibility.',
    features: ['Professional bio writing','Gig/service optimization','Keyword-ranked profiles','Profile photo guidance'],
  },
  {
    icon: '📁', title: 'Portfolio Development', desc: 'We guide you to build a client-ready portfolio with real projects, case studies, and professional presentation.',
    features: ['Real project assignments','Behance/Dribbble setup','Case study templates','Client-ready PDF portfolio'],
  },
  {
    icon: '🤝', title: 'Client Acquisition Support', desc: 'Learn how to pitch, write proposals, price your services, and close your first client confidently.',
    features: ['Proposal writing templates','Cold outreach scripts','Rate negotiation tactics','Contract & invoice basics'],
  },
  {
    icon: '🏢', title: 'Corporate Training', desc: 'We offer tailored freelancing and digital skills training for organizations, NGOs, and government programs.',
    features: ['Custom curriculum design','On-site or online delivery','Bulk enrollment discounts','Official certificates issued'],
  },
]

const process = [
  { n: '01', t: 'Free Consultation', d: 'Book a free call — we understand your goals and recommend the right course.' },
  { n: '02', t: 'Enroll & Start', d: 'Complete enrollment, get access to the learning portal and batch WhatsApp group.' },
  { n: '03', t: 'Learn & Build', d: 'Attend live classes, complete projects, get feedback from instructors weekly.' },
  { n: '04', t: 'Launch & Earn', d: 'Set up your profile, apply to jobs, land your first client with our support.' },
]

export default function Services() {
  return (
    <>
      <SEO
        title="Freelancing Training Services in Bangladesh — FIBD"
        description="Comprehensive freelancing services: structured courses, career mentorship, Upwork & Fiverr profile setup, portfolio building, client acquisition support, and corporate training in Bangladesh."
        canonical="/services"
      />
      <div className="page-hero alt-section">
        <div className="container center">
          <p className="pre-label">What We Offer</p>
          <h1>Our Services</h1>
          <p className="lead">Everything you need to go from zero to a full-time freelancing income.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {services.map(s => (
              <div key={s.title} className="card service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="feature-list">
                  {s.features.map(f => <li key={f}>✅ {f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <p className="pre-label center">How It Works</p>
          <h2 className="center">Your Path to Freelancing Success</h2>
          <div className="process-row">
            {process.map(p => (
              <div key={p.n} className="process-step">
                <div className="process-num">{p.n}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Videos */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="pre-label">Free Tips from Our Instructor</p>
              <h2>Freelancing Tips — Watch Free</h2>
            </div>
            <Link to="/videos" className="btn btn-outline">All Videos →</Link>
          </div>
          <div className="grid-3">
            {videos.tips.map(v => (
              <VideoCard key={v.id} video={v} size="md" />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container center">
          <h2>Not Sure Which Service is Right for You?</h2>
          <p>Book a free 20-minute consultation — we'll guide you to the right path.</p>
          <Link to="/admission" className="btn btn-lg btn-gold">Book Free Consultation</Link>
        </div>
      </section>
    </>
  )
}
