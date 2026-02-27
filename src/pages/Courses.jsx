import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import { videos } from '../data/videos'
import AdvancedSEO from '../components/AdvancedSEO'
import Breadcrumb from '../components/Breadcrumb'
import { coursesSchema, breadcrumbSchema } from '../data/schemas'
import { seoPages } from '../data/seo-config'

const modules = [
  {
    icon: '🎨', title: 'Professional Graphic Design', duration: '16 Weeks', level: 'Beginner → Advanced',
    fee: '৳ 8,000', outcome: 'Fiverr/Upwork design gigs',
    curriculum: [
      'Week 1–3: Photoshop fundamentals, layers, selections, retouching',
      'Week 4–6: Adobe Illustrator, vector art, logo design',
      'Week 7–9: Brand identity, style guides, mockup presentations',
      'Week 10–12: Social media graphics, ad creatives, print design',
      'Week 13–14: Portfolio building, Behance setup, Dribbble',
      'Week 15–16: Fiverr gig creation, pricing strategy, first order',
    ],
    tools: ['Photoshop', 'Illustrator', 'Canva Pro', 'Figma Basics'],
  },
  {
    icon: '💻', title: 'WordPress & Web Development', duration: '20 Weeks', level: 'Beginner → Intermediate',
    fee: '৳ 10,000', outcome: 'Web dev projects on Upwork',
    curriculum: [
      'Week 1–3: HTML/CSS foundations, responsive design basics',
      'Week 4–7: WordPress installation, themes, plugins, security',
      'Week 8–11: Elementor Pro, page builder mastery, landing pages',
      'Week 12–14: WooCommerce, online store setup, payment gateways',
      'Week 15–17: Custom child themes, PHP basics, hooks & filters',
      'Week 18–20: Client project workflow, proposals, delivery & billing',
    ],
    tools: ['WordPress', 'Elementor', 'WooCommerce', 'cPanel', 'VS Code'],
  },
  {
    icon: '📈', title: 'Digital Marketing for Freelancers', duration: '12 Weeks', level: 'Beginner',
    fee: '৳ 7,500', outcome: 'Run paid ads & SEO for clients',
    curriculum: [
      'Week 1–2: Digital marketing overview, niche selection',
      'Week 3–4: SEO fundamentals, keyword research, on-page SEO',
      'Week 5–6: Content marketing, blogging, YouTube SEO',
      'Week 7–8: Facebook & Instagram Ads, audience targeting',
      'Week 9–10: Google Ads, search campaigns, conversion tracking',
      'Week 11–12: Reporting, analytics, client communication & upselling',
    ],
    tools: ['Google Analytics', 'Meta Ads Manager', 'SEMrush', 'Ahrefs', 'Mailchimp'],
  },
  {
    icon: '✍️', title: 'Content Writing & Copywriting', duration: '8 Weeks', level: 'Beginner',
    fee: '৳ 5,500', outcome: 'Writing gigs on Fiverr/direct clients',
    curriculum: [
      'Week 1: Writing for the web, SEO writing fundamentals',
      'Week 2: Blog writing, article structure, research skills',
      'Week 3: Copywriting principles, AIDA, PAS frameworks',
      'Week 4: Sales pages, email sequences, landing page copy',
      'Week 5: Social media copywriting, ad copy, hooks',
      'Week 6: Building a portfolio, niche selection',
      'Week 7: Fiverr/Upwork profile optimization for writers',
      'Week 8: First client pitch, proposal writing, rate setting',
    ],
    tools: ['Grammarly', 'SurferSEO', 'Jasper', 'Google Docs', 'Hemingway App'],
  },
  {
    icon: '🛒', title: 'eCommerce & Dropshipping', duration: '12 Weeks', level: 'Beginner → Intermediate',
    fee: '৳ 9,000', outcome: 'Run your own online store',
    curriculum: [
      'Week 1–2: eCommerce models, dropshipping vs. private label',
      'Week 3–4: Shopify store setup, product listing, branding',
      'Week 5–6: Supplier sourcing (AliExpress, CJ, local BD suppliers)',
      'Week 7–8: Facebook & TikTok Ads for product promotion',
      'Week 9–10: Order fulfillment, customer service, returns',
      'Week 11–12: Scaling winners, cutting losers, profit analysis',
    ],
    tools: ['Shopify', 'DSers', 'Facebook Ads', 'TikTok Ads', 'Canva'],
  },
  {
    icon: '📊', title: 'Data Entry, Excel & Virtual Assistant', duration: '6 Weeks', level: 'Beginner',
    fee: '৳ 4,000', outcome: 'Remote VA / data jobs',
    curriculum: [
      'Week 1: Advanced Excel, formulas, pivot tables, data cleaning',
      'Week 2: Google Sheets, automation with macros',
      'Week 3: Virtual assistant tasks — email, calendar, research',
      'Week 4: CRM tools (HubSpot basics), project management (Trello, Asana)',
      'Week 5: Upwork VA profile, proposal templates, test jobs',
      'Week 6: Client onboarding, SOPs, time tracking, communication',
    ],
    tools: ['Excel', 'Google Sheets', 'Trello', 'Notion', 'Slack', 'Zoom'],
  },
]

export default function Courses() {
  return (
    <>
      <AdvancedSEO
        title={seoPages.courses.title}
        description={seoPages.courses.description}
        canonical={seoPages.courses.canonical}
        keywords={seoPages.courses.keywords}
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            coursesSchema,
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Courses', url: '/courses/' },
            ]),
          ],
        }}
      />
      <div className="page-hero alt-section">
        <div className="container">
          <Breadcrumb items={[
            { name: 'Home', url: '/' },
            { name: 'Courses' },
          ]} />
          <div className="center">
            <p className="pre-label">Our Curriculum</p>
            <h1>Freelancing Courses in Bangladesh — Learn High-Income Skills</h1>
            <p className="lead">Each structured freelancing course is designed by active freelancers — practical, marketplace-ready. From <strong>graphic design and WordPress development</strong> to <strong>digital marketing and content writing</strong>, we teach skills that pay. Explore our <Link to="/services/" style={{color:'var(--primary)'}}>training & mentorship services</Link> or <Link to="/admission/" style={{color:'var(--primary)'}}>apply now</Link>.</p>
          </div>
        </div>
      </div>

      {/* Free Class Videos */}
      <section className="section alt-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="pre-label">Free Preview Classes</p>
              <h2>Watch Before You Enroll</h2>
            </div>
            <Link to="/videos/" className="btn btn-outline">All Free Videos →</Link>
          </div>

          {/* Digital Marketing Series */}
          <h3 style={{ marginBottom: '1rem', marginTop: '0.5rem' }}>📈 Digital Marketing — Free Lessons</h3>
          <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
            {videos.digitalMarketing.map(v => (
              <VideoCard key={v.id} video={v} size="md" />
            ))}
          </div>

          {/* YouTube Series */}
          <h3 style={{ marginBottom: '1rem' }}>▶️ YouTube Marketing — Free Series (8 Classes)</h3>
          <div className="grid-3">
            {videos.youtubeMarketing.slice(0, 6).map(v => (
              <VideoCard key={v.id} video={v} size="md" />
            ))}
          </div>
          <div className="grid-3" style={{ marginTop: '1.25rem' }}>
            {videos.youtubeMarketing.slice(6).map(v => (
              <VideoCard key={v.id} video={v} size="md" />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Job-Ready Skills Section ─── */}
      <section className="section alt-section">
        <div className="container">
          <p className="pre-label center">Why Our Courses Work</p>
          <h2 className="center">Job-Ready Skills That Clients Actually Pay For</h2>
          <p className="lead center" style={{ margin: '0.75rem auto 2.5rem', maxWidth: '75ch' }}>
            Unlike generic online courses, every module is designed around <strong>real client projects</strong>. You don't just watch videos — you build portfolios, practice proposals, and learn the soft skills (pricing, communication, delivery) that separate hobbyists from earning freelancers. See <Link to="/success-stories/" style={{color:'var(--primary)'}}>how our graduates are earning</Link> ৳38K–৳1.2L per month on Upwork, Fiverr, and with direct clients.
          </p>
          <div className="grid-3" style={{ marginTop: '2rem' }}>
            <div className="card why-card">
              <div className="why-icon">💼</div>
              <h3>Live Projects</h3>
              <p>Work on real client scenarios during the course so you graduate with a portfolio clients trust.</p>
            </div>
            <div className="card why-card">
              <div className="why-icon">🎯</div>
              <h3>Marketplace Focus</h3>
              <p>Learn how to optimize your Upwork, Fiverr, and LinkedIn profiles to attract high-paying clients from day one.</p>
            </div>
            <div className="card why-card">
              <div className="why-icon">🤝</div>
              <h3>Lifetime Mentorship</h3>
              <p>Get ongoing support even after graduation — portfolio reviews, proposal feedback, and career guidance for life.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/admission/" className="btn btn-lg">Enroll in a Course Today →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="pre-label center">Detailed Course Breakdown</p>
          <h2 className="center">Choose Your Path to Freelancing Success</h2>
          <div className="courses-list">
            {modules.map((m) => (
              <div key={m.title} className="card course-detail">
                <div className="cd-header">
                  <div>
                    <span className="course-icon-lg">{m.icon}</span>
                    <h2>{m.title}</h2>
                    <div className="cd-meta-row">
                      <span className="chip">⏱ {m.duration}</span>
                      <span className="chip">📊 {m.level}</span>
                      <span className="chip green">💰 {m.fee}</span>
                      <span className="chip teal">🎯 {m.outcome}</span>
                    </div>
                  </div>
                </div>
                <div className="cd-body">
                  <div>
                    <h4>Weekly Curriculum</h4>
                    <ul className="curriculum-list">
                      {m.curriculum.map(c => <li key={c}>{c}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4>Tools You'll Master</h4>
                    <div className="tools-grid">
                      {m.tools.map(t => <span key={t} className="tool-tag">{t}</span>)}
                    </div>
                    <Link to="/admission/" className="btn" style={{marginTop:20,display:'block',textAlign:'center'}}>
                      Enroll in This Course →
                    </Link>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.75rem', textAlign: 'center' }}>
                      See <Link to="/success-stories/" style={{color:'var(--primary)'}}>student success stories</Link> from this course
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
