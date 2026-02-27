import { useState } from 'react'
import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import { videos } from '../data/videos'
import { breadcrumbSchema } from '../data/schemas'
import { seoPages } from '../data/seo-config'
import AdvancedSEO from '../components/AdvancedSEO'
import Breadcrumb from '../components/Breadcrumb'
import { admissionSchema } from '../data/schemas'

const courses = [
  'Professional Graphic Design',
  'WordPress & Web Development',
  'Digital Marketing for Freelancers',
  'Content Writing & Copywriting',
  'eCommerce & Dropshipping',
  'Data Entry, Excel & Virtual Assistant',
]

const faqs = [
  { q: 'Do I need prior experience?', a: 'No. All our courses start from absolute zero. We assume no prior knowledge.' },
  { q: 'Are classes online or in-person?', a: 'Both options available. Live online via Zoom + optional in-person sessions at our Tangail, Dhaka center.' },
  { q: 'When does the next batch start?', a: 'New batches start every month. Apply now to reserve your seat.' },
  { q: 'Will I get a certificate?', a: 'Yes. Upon successful completion you receive a verified certificate from Freelancing Institute BD.' },
  { q: 'What if I miss a class?', a: 'All live classes are recorded and available in your student portal for 1 year.' },
  { q: 'Is there an installment option?', a: 'Yes. We offer easy 2–3 installment plans for all courses. Ask our team on application.' },
]

export default function Admission() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '', experience: '', message: '' })

  const webhookUrl = import.meta.env.VITE_ADMISSION_WEBHOOK_URL
  const whatsappNumber = '8801710001100'

  function handle(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function submit(e) {
    e.preventDefault()
    setError('')

    if (!webhookUrl) {
      const text = [
        'Hi, I want to apply for admission.',
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        form.email ? `Email: ${form.email}` : '',
        `Course: ${form.course}`,
        form.experience ? `Experience: ${form.experience}` : '',
        form.message ? `Message: ${form.message}` : '',
      ].filter(Boolean).join('\n')

      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
      setSubmitted(true)
      return
    }

    try {
      setSubmitting(true)
      const payload = {
        ...form,
        source: 'website-admission-form',
        submittedAt: new Date().toISOString(),
        page: '/admission',
      }

      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error(`Submission failed with status ${res.status}`)
      setSubmitted(true)
    } catch (err) {
      setError('Could not submit right now. Please try again or contact us on WhatsApp.')
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <AdvancedSEO
        title={seoPages.admission.title}
        description={seoPages.admission.description}
        canonical={seoPages.admission.canonical}
        keywords={seoPages.admission.keywords}
        schema={[breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Admission', url: '/admission/' },
        ]), admissionSchema]}
      />
      <div className="page-hero alt-section">
        <div className="container">
          <Breadcrumb items={[
            { name: 'Home', url: '/' },
            { name: 'Admission' },
          ]} />
          <div className="center">
            <p className="pre-label">Enroll Today</p>
            <h1>Admission 2026</h1>
            <p className="lead">Fill in your details below — our team will contact you within 24 hours for free counseling. View our <Link to="/courses/" style={{color:'var(--primary)'}}>course details</Link> or <Link to="/success-stories/" style={{color:'var(--primary)'}}>student success stories</Link>.</p>
          </div>
        </div>
      </div>

      {/* Why Apply Section */}
      <section className="section">
        <div className="container">
          <p className="pre-label center">Why Join FIBD?</p>
          <h2 className="center">What Makes Our Training Different</h2>
          <p className="lead center" style={{ margin: '0.75rem auto 2rem', maxWidth: '75ch' }}>
            We're not just another course platform. We're a complete freelancing career system — from beginner training to your first paying client. Here's what you get when you join FIBD.
          </p>
          <div className="grid-3">
            <div className="card why-card">
              <div className="why-icon">🎓</div>
              <h3>Marketplace-Ready Skills</h3>
              <p>Learn skills that clients actually pay for on Upwork, Fiverr, and LinkedIn. Our <Link to="/courses/" style={{color:'var(--primary)'}}>courses</Link> are designed by active freelancers, not academics.</p>
            </div>
            <div className="card why-card">
              <div className="why-icon">💼</div>
              <h3>Real Project Experience</h3>
              <p>Graduate with a portfolio of real work, not just practice files. We assign live projects so you have case studies to show clients from day one.</p>
            </div>
            <div className="card why-card">
              <div className="why-icon">🤝</div>
              <h3>Lifetime Mentorship</h3>
              <p>Get support even after graduation. Portfolio reviews, proposal feedback, client acquisition help — for life. Check our <Link to="/success-stories/" style={{color:'var(--primary)'}}>student success stories</Link>.</p>
            </div>
            <div className="card why-card">
              <div className="why-icon">📱</div>
              <h3>Live + Recorded Classes</h3>
              <p>Attend live sessions with your batch, then rewatch anytime for 1 year. Perfect for students, working professionals, and homemakers.</p>
            </div>
            <div className="card why-card">
              <div className="why-icon">🇧🇩</div>
              <h3>Bangla Medium Instruction</h3>
              <p>Learn in Bangla, earn in dollars. We explain everything in your native language so you learn faster, not slower.</p>
            </div>
            <div className="card why-card">
              <div className="why-icon">💰</div>
              <h3>Affordable + Installments</h3>
              <p>Course fees from ৳4,000–৳10,000. Flexible 2-3 installment plans available. Your investment pays back within 1-2 months of freelancing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container admission-layout">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="card success-msg">
                <div style={{fontSize:48}}>🎉</div>
                <h2>Application Received!</h2>
                <p>Thank you, <strong>{form.name}</strong>! Our team will call you at <strong>{form.phone}</strong> within 24 hours for your free counseling session.</p>
                <p style={{color:'var(--muted)'}}>In the meantime, join our WhatsApp community for updates.</p>
                <a href={`https://wa.me/${whatsappNumber}`} className="btn" target="_blank" rel="noreferrer">Join WhatsApp Group</a>
              </div>
            ) : (
              <form className="card admission-form" onSubmit={submit}>
                <h2 style={{marginTop:0}}>Apply Now — Free Counseling</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input name="name" required placeholder="Your full name" value={form.name} onChange={handle}/>
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input name="phone" required placeholder="+880 17XX-XXXXXX" value={form.phone} onChange={handle}/>
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handle}/>
                </div>
                <div className="form-group">
                  <label>Interested Course *</label>
                  <select name="course" required value={form.course} onChange={handle}>
                    <option value="">— Select a course —</option>
                    {courses.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Prior Experience</label>
                  <select name="experience" value={form.experience} onChange={handle}>
                    <option value="">— Select —</option>
                    <option>Complete beginner</option>
                    <option>Some self-learning</option>
                    <option>1–2 years experience</option>
                    <option>Already freelancing</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Anything else you'd like us to know?</label>
                  <textarea name="message" rows={3} placeholder="Goals, questions, schedule preference..." value={form.message} onChange={handle}/>
                </div>
                {error && (
                  <p style={{ color: '#dc2626', fontSize: '.9rem', marginBottom: 10 }}>{error}</p>
                )}
                <button type="submit" className="btn btn-lg" style={{width:'100%'}} disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
                <p style={{textAlign:'center',color:'var(--muted)',fontSize:'.85rem',marginTop:8}}>We never spam. Your info stays private.</p>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="adm-sidebar">
            <div className="card adm-info">
              <h3>📋 What Happens Next</h3>
              <div className="adm-steps">
                {['Submit application','Our team calls within 24h','Free counseling session','Enroll & join next batch'].map((s,i)=>(
                  <div key={i} className="adm-step"><div className="adm-num">{i+1}</div><span>{s}</span></div>
                ))}
              </div>
            </div>
            <div className="card adm-info">
              <h3>📞 Contact Directly</h3>
              <p>📱 WhatsApp: <a href={`https://wa.me/${whatsappNumber}`}>01710-001100</a></p>
              <p>📧 Email: <a href="mailto:hello@freelancinginstitutebd.com">hello@freelancinginstitutebd.com</a></p>
              <p>🕒 Office: Sat–Thu, 9am–8pm</p>
            </div>
            <div className="card adm-info">
              <h3>🎁 What You Get</h3>
              <ul className="feature-list">
                <li>✅ Live classes + lifetime recordings</li>
                <li>✅ Dedicated instructor support</li>
                <li>✅ Private WhatsApp batch group</li>
                <li>✅ Portfolio review before graduation</li>
                <li>✅ Certificate of completion</li>
                <li>✅ Alumni network access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="section alt-section">
        <div className="container">
          <p className="pre-label center">After You Apply</p>
          <h2 className="center">Your Next Steps to Becoming a Freelancer</h2>
          <div style={{ maxWidth: '75ch', margin: '2rem auto 0' }}>
            <div className="card" style={{ padding: '1.5rem', marginBottom: '1.25rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ minWidth: '48px', height: '48px', borderRadius: '50%', background: 'var(--grad-brand)', display: 'grid', placeItems: 'center', color: 'white', fontWeight: 900, fontSize: '1.25rem' }}>1</div>
              <div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Submit Your Application</h3>
                <p style={{ color: 'var(--text-2)', margin: 0 }}>Fill in the form above with your details and preferred course. It takes less than 2 minutes.</p>
              </div>
            </div>
            <div className="card" style={{ padding: '1.5rem', marginBottom: '1.25rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ minWidth: '48px', height: '48px', borderRadius: '50%', background: 'var(--grad-brand)', display: 'grid', placeItems: 'center', color: 'white', fontWeight: 900, fontSize: '1.25rem' }}>2</div>
              <div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Free Counseling Call (Within 24 Hours)</h3>
                <p style={{ color: 'var(--text-2)', margin: 0 }}>Our team will call you to understand your goals, recommend the right <Link to="/courses/" style={{color:'var(--primary)'}}>course track</Link>, and answer all your questions — completely free, no pressure.</p>
              </div>
            </div>
            <div className="card" style={{ padding: '1.5rem', marginBottom: '1.25rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ minWidth: '48px', height: '48px', borderRadius: '50%', background: 'var(--grad-brand)', display: 'grid', placeItems: 'center', color: 'white', fontWeight: 900, fontSize: '1.25rem' }}>3</div>
              <div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Enroll & Get Instant Access</h3>
                <p style={{ color: 'var(--text-2)', margin: 0 }}>Once you confirm, you'll get access to the student portal, batch WhatsApp group, and pre-course materials to start preparing.</p>
              </div>
            </div>
            <div className="card" style={{ padding: '1.5rem', marginBottom: '1.25rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ minWidth: '48px', height: '48px', borderRadius: '50%', background: 'var(--grad-brand)', display: 'grid', placeItems: 'center', color: 'white', fontWeight: 900, fontSize: '1.25rem' }}>4</div>
              <div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Start Learning & Building Your Portfolio</h3>
                <p style={{ color: 'var(--text-2)', margin: 0 }}>Attend live classes, work on real projects, get 1-on-1 feedback, and build a portfolio that lands clients. See how our graduates are <Link to="/success-stories/" style={{color:'var(--primary)'}}>earning ৳38K–৳1.2L/month</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Announcement Videos */}
      <section className="section">
        <div className="container">
          <p className="pre-label center">Batch Announcements</p>
          <h2 className="center">Upcoming Course Batches — Watch</h2>
          <p className="lead center" style={{ margin: '0.75rem auto 2rem' }}>
            Watch our latest batch announcement videos to see what's included and when the next intake starts.
          </p>
          <div className="grid-3">
            {videos.admission.map(v => (
              <VideoCard key={v.id} video={v} size="md" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <p className="pre-label center">Got Questions?</p>
          <h2 className="center">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map(f => (
              <div key={f.q} className="card faq-card">
                <h4>❓ {f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
