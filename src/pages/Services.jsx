import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import { videos } from '../data/videos'
import AdvancedSEO from '../components/AdvancedSEO'
import Breadcrumb from '../components/Breadcrumb'
import { breadcrumbSchema, servicesSchema } from '../data/schemas'
import { seoPages } from '../data/seo-config'

const services = [
  {
    icon: '🎓', title: 'Freelancing Training', 
    desc: 'Structured 6–20 week courses taught by active freelancers with real marketplace experience. Live sessions, lifetime recordings, and weekly assignments designed to build job-ready skills. Choose from graphic design, WordPress development, digital marketing, content writing, eCommerce, and virtual assistant training.',
    features: ['Beginner to advanced tracks','Live class + recordings','Weekly mentor Q&A','Certificate on completion'],
    link: '/courses/',
  },
  {
    icon: '🧑‍💼', title: 'Career Mentorship', 
    desc: 'One-on-one guidance to plan your freelancing career, pick the right niche, and avoid costly beginner mistakes. Our mentors are earning freelancers who understand what clients want and how to position yourself for high-paying projects.',
    features: ['Personalized career roadmap','Niche & platform selection','Monthly check-in calls','Portfolio critique sessions'],
    link: '/admission/',
  },
  {
    icon: '🖥️', title: 'Profile Setup & Optimization', 
    desc: 'We build and optimize your Upwork, Fiverr, and LinkedIn profiles for maximum client visibility. Get professional bio writing, keyword optimization, portfolio setup, and gig creation that converts browsers into buyers. Stand out from the 10,000+ other Bangladeshi freelancers competing for the same clients.',
    features: ['Professional bio writing','Gig/service optimization','Keyword-ranked profiles','Profile photo guidance'],
    link: '/admission/',
  },
  {
    icon: '📁', title: 'Portfolio Development', 
    desc: 'We guide you to build a client-ready portfolio with real projects, case studies, and professional presentation. Whether you\'re a designer, developer, or marketer, we help you showcase work that proves you can deliver results — not just pretty mockups.',
    features: ['Real project assignments','Behance/Dribbble setup','Case study templates','Client-ready PDF portfolio'],
    link: '/admission/',
  },
  {
    icon: '🤝', title: 'Client Acquisition Support', 
    desc: 'Learn how to pitch, write proposals that win, price your services competitively, and close your first client confidently. We provide templates, scripts, and live feedback on your actual proposals so you land paying projects faster. Many students get their first client within 30 days of completing this module.',
    features: ['Proposal writing templates','Cold outreach scripts','Rate negotiation tactics','Contract & invoice basics'],
    link: '/admission/',
  },
  {
    icon: '🏢', title: 'Corporate Training', 
    desc: 'We offer tailored freelancing and digital skills training for organizations, NGOs, and government programs. Custom curriculum designed for your team\'s goals — upskill employees, empower communities, or launch workforce development initiatives. Proven track record with 3,000+ corporate trainees.',
    features: ['Custom curriculum design','On-site or online delivery','Bulk enrollment discounts','Official certificates issued'],
    link: '/admission/',
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
      <AdvancedSEO
        title={seoPages.services.title}
        description={seoPages.services.description}
        canonical={seoPages.services.canonical}
        keywords={seoPages.services.keywords}
        schema={[breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
        ]), servicesSchema]}
      />
      <div className="page-hero alt-section">
        <div className="container">
          <Breadcrumb items={[
            { name: 'Home', url: '/' },
            { name: 'Services' },
          ]} />
          <div className="center">
            <p className="pre-label">What We Offer</p>
            <h1>Our Services</h1>
            <p className="lead">Everything you need to go from zero to a full-time freelancing income. Explore our <Link to="/courses/" style={{color:'var(--primary)'}}>structured courses</Link> or <Link to="/admission/" style={{color:'var(--primary)'}}>apply for admission</Link>.</p>
          </div>
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
                <Link to={s.link} className="btn btn-ghost btn-sm" style={{ marginTop: '1rem' }}>
                  Learn More →
                </Link>
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
            <Link to="/videos/" className="btn btn-outline">All Videos →</Link>
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
          <Link to="/admission/" className="btn btn-lg btn-gold">Book Free Consultation</Link>
        </div>
      </section>
    </>
  )
}
