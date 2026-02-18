import { useState } from 'react'
import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import { videos } from '../data/videos'
import SEO from '../components/SEO'
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

  function handle(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function submit(e) {
    e.preventDefault()
    setError('')

    if (!webhookUrl) {
      setError('Admission endpoint is not configured yet. Please set VITE_ADMISSION_WEBHOOK_URL.')
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
      <SEO
        title="Admission 2026 — Apply for Freelancing Course in Bangladesh"
        description="Apply now for 2026 batch enrollment at Freelancing Institute BD. Free counseling, Bangla medium courses starting from ৳4,000. Limited seats per batch. Apply online today."
        canonical="/admission"
        schema={admissionSchema}
      />
      <div className="page-hero alt-section">
        <div className="container center">
          <p className="pre-label">Enroll Today</p>
          <h1>Admission 2026</h1>
          <p className="lead">Fill in your details below — our team will contact you within 24 hours for free counseling.</p>
        </div>
      </div>

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
                <a href="https://wa.me/8801710001100" className="btn" target="_blank" rel="noreferrer">Join WhatsApp Group</a>
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
              <p>📱 WhatsApp: <a href="https://wa.me/8801710001100">01710-001100</a></p>
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

      {/* Course Announcement Videos */}
      <section className="section alt-section">
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
