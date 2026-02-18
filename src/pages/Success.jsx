import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import { videos } from '../data/videos'
import SEO from '../components/SEO'
import { successSchema } from '../data/schemas'

const stories = [
  {
    init: 'M', name: 'Mehedi Hasan', location: 'Sylhet', course: 'Graphic Design',
    income: '৳ 85,000/month', platform: 'Fiverr Level 2',
    quote: "I was a rickshaw driver's son with no computer background. After 4 months at FIBD, I'm earning more than my entire family combined. This institute changed my life.",
    stars: 5,
  },
  {
    init: 'R', name: 'Rina Akter', location: 'Chittagong', course: 'Digital Marketing',
    income: '৳ 65,000/month', platform: 'Upwork Top Rated',
    quote: "I did this course while raising two kids. The recorded sessions meant I could study at midnight. Now I have 3 retainer clients and I've never been more confident.",
    stars: 5,
  },
  {
    init: 'J', name: 'Jahangir Alam', location: 'Rajshahi', course: 'WordPress Dev',
    income: '৳ 1,20,000/month', platform: 'Direct + Upwork',
    quote: "I quit my government job after 6 months of freelancing. My monthly income is now 4x what I earned before. Best investment I ever made was this course.",
    stars: 5,
  },
  {
    init: 'S', name: 'Sadia Islam', location: 'Dhaka', course: 'Content Writing',
    income: '৳ 45,000/month', platform: 'Fiverr + Direct',
    quote: "As a fresh graduate I had zero job offers. Now I'm earning from clients in the US and UK, working from home in my pajamas. FIBD gave me a skill that the job market couldn't.",
    stars: 5,
  },
  {
    init: 'K', name: 'Karim Uddin', location: 'Comilla', course: 'eCommerce',
    income: '৳ 95,000/month', platform: 'Shopify Store Owner',
    quote: "I had a small shop in Comilla. After learning dropshipping here, I closed the physical shop and went fully online. Revenue tripled in 3 months.",
    stars: 5,
  },
  {
    init: 'F', name: 'Fatema Begum', location: 'Barishal', course: 'Data Entry & VA',
    income: '৳ 38,000/month', platform: 'Upwork Rising Talent',
    quote: "I'm a housewife and I earn ৳38,000 every month working only 4 hours a day. My husband still can't believe it. FIBD made me financially independent for the first time.",
    stars: 5,
  },
  {
    init: 'A', name: 'Arif Hossain', location: 'Khulna', course: 'Graphic Design',
    income: '৳ 1,10,000/month', platform: 'Fiverr Pro',
    quote: "I reached Fiverr Pro status within 18 months of graduating. The portfolio guidance and profile strategy they taught made all the difference in landing premium clients.",
    stars: 5,
  },
  {
    init: 'P', name: 'Priya Das', location: 'Mymensingh', course: 'Digital Marketing',
    income: '৳ 72,000/month', platform: 'Agency Owner',
    quote: "I didn't just get freelance clients — I started my own mini-agency with 3 juniors. The business mindset they build alongside the skills is what separates FIBD from others.",
    stars: 5,
  },
  {
    init: 'N', name: 'Nafis Rahman', location: 'Dhaka', course: 'WordPress Dev',
    income: '৳ 90,000/month', platform: 'Upwork Top Rated Plus',
    quote: "20 years old, earning ৳90K/month. My university professors are shocked. The live projects during the course meant I had real case studies to show clients from day one.",
    stars: 5,
  },
]

const totals = [
  { v: '৳ 2Cr+', l: 'Student Earnings Per Month' },
  { v: '1,500+', l: 'Students Actively Earning' },
  { v: '50+',    l: 'Countries Reached' },
  { v: '4.9★',   l: 'Average Course Rating' },
]

export default function Success() {
  return (
    <>
      <SEO
        title="Student Success Stories — Freelancing Institute BD"
        description="Read real success stories from 1,500+ graduates of Freelancing Institute BD. Students earning ৳38,000–৳1,20,000/month on Upwork, Fiverr and direct clients."
        canonical="/success-stories"
        schema={successSchema}
      />
      <div className="page-hero alt-section">
        <div className="container center">
          <p className="pre-label">Real Results, Real People</p>
          <h1>Success Stories</h1>
          <p className="lead" style={{margin:'0.75rem auto 0'}}>
            These aren't testimonials we wrote — these are students who trusted the process and transformed their lives.
          </p>
        </div>
      </div>

      {/* Totals bar */}
      <div className="stats-bar">
        <div className="container stats-grid">
          {totals.map(t => (
            <div key={t.l} className="stat-item">
              <div className="stat-val">{t.v}</div>
              <div className="stat-label">{t.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Video success stories */}
      <section className="section">
        <div className="container">
          <p className="pre-label center">Watch the Proof</p>
          <h2 className="center">Success Stories — On Video</h2>
          <p className="lead center" style={{ margin: '0.75rem auto 1.5rem' }}>
            Real students, real earnings — watch their stories in their own words.
          </p>
          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {videos.successStories.map(v => (
              <VideoCard key={v.id} video={v} size="lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Stories grid */}
      <section className="section">
        <div className="container">
          <p className="pre-label center">Written Testimonials</p>
          <h2 className="center" style={{ marginBottom: '2.5rem' }}>What Our Graduates Say</h2>
          <div className="story-grid">
            {stories.map(s => (
              <div key={s.name} className="card story-card">
                <div className="story-avatar">{s.init}</div>
                <div className="stars">{'★'.repeat(s.stars)}</div>
                <div className="story-name">{s.name}</div>
                <div className="story-course">{s.course} Graduate · {s.location}</div>
                <div className="story-income">📈 {s.income} · {s.platform}</div>
                <p className="story-quote">"{s.quote}"</p>
              </div>
            ))}
          </div>

          {/* Earnings milestone banner */}
          <div className="income-banner">
            <h3>🎉 Combined student earnings exceeded ৳2 Crore/month in 2026</h3>
            <p>That's real money, in real families, changing real lives — every single month.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container center">
          <h2>Your Success Story Starts Here</h2>
          <p>Join thousands who made the decision to invest in a skill that pays forever.</p>
          <Link to="/admission" className="btn btn-lg btn-gold">Apply Now — Free Counseling</Link>
        </div>
      </section>
    </>
  )
}
