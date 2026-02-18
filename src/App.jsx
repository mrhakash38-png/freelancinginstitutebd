import './App.css'

const courses = [
  {
    title: 'Professional Graphic Design',
    duration: '4 Months',
    level: 'Beginner to Advanced',
    topics: ['Adobe Photoshop', 'Adobe Illustrator', 'Brand Identity', 'Portfolio Creation'],
  },
  {
    title: 'WordPress & Web Development',
    duration: '5 Months',
    level: 'Beginner to Intermediate',
    topics: ['WordPress Customization', 'Elementor', 'Landing Pages', 'Client Project Workflow'],
  },
  {
    title: 'Digital Marketing for Freelancers',
    duration: '3 Months',
    level: 'Beginner',
    topics: ['Social Media Marketing', 'SEO Basics', 'Lead Generation', 'Freelance Gig Positioning'],
  },
  {
    title: 'Freelancing Career Accelerator',
    duration: '8 Weeks',
    level: 'All Levels',
    topics: ['Upwork Profile Setup', 'Fiverr Gig Optimization', 'Proposal Writing', 'Client Communication'],
  },
]

const highlights = [
  { value: '5,000+', label: 'Students Trained' },
  { value: '1,500+', label: 'Freelancers Earning' },
  { value: '120+', label: 'Live Batches Per Year' },
  { value: '24/7', label: 'Community Support' },
]

function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="container nav">
          <h1 className="logo">Freelancing Institute BD</h1>
          <a className="btn btn-sm" href="#admission">Apply Now</a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="tag">Build Skills. Get Clients. Earn Online.</p>
            <h2>Bangladesh-focused freelancing training platform</h2>
            <p className="lead">
              Learn practical freelancing skills with mentor support, live projects, and marketplace guidance
              for Upwork, Fiverr, and remote client work.
            </p>
            <div className="hero-actions">
              <a href="#courses" className="btn">Explore Courses</a>
              <a href="#why" className="btn btn-outline">Why Us</a>
            </div>
          </div>
          <div className="card hero-card">
            <h3>What you get</h3>
            <ul>
              <li>Structured learning path from zero to first client</li>
              <li>Profile setup + portfolio review with mentors</li>
              <li>Weekly live Q&A and accountability sessions</li>
              <li>Community support and career roadmap</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {highlights.map((item) => (
            <div className="card stat" key={item.label}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="courses" className="section">
        <div className="container">
          <h2 className="section-title">Popular Programs</h2>
          <p className="section-lead">
            Based on competitor research, high-demand tracks include design, WordPress, digital marketing,
            and freelancing profile optimization.
          </p>
          <div className="grid-2">
            {courses.map((course) => (
              <article className="card course" key={course.title}>
                <h3>{course.title}</h3>
                <p className="meta">{course.duration} • {course.level}</p>
                <ul>
                  {course.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="section alt">
        <div className="container">
          <h2 className="section-title">Why students choose us</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Practical Curriculum</h3>
              <p>Every track includes project work, not just theory videos.</p>
            </div>
            <div className="card">
              <h3>Marketplace Ready</h3>
              <p>We train around real platform workflows, pricing, and proposal strategy.</p>
            </div>
            <div className="card">
              <h3>Local + Global Support</h3>
              <p>Bangla-friendly mentoring with international freelancing standards.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="admission" className="section">
        <div className="container admission">
          <div>
            <h2>Admission Open - 2026 Intake</h2>
            <p>Fill out your details and our team will suggest the best track for your goals.</p>
          </div>
          <form className="card form" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Your full name" />
            <input placeholder="Phone number" />
            <select defaultValue="">
              <option value="" disabled>Select your interested course</option>
              {courses.map((c) => <option key={c.title}>{c.title}</option>)}
            </select>
            <button className="btn" type="submit">Request Callback</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Freelancing Institute BD • freelancinginstitutebd.com</p>
          <p>Email: hello@freelancinginstitutebd.com | Phone: +880 1XXX-XXXXXX</p>
        </div>
      </footer>
    </div>
  )
}

export default App
