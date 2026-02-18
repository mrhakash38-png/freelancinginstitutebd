import { Outlet, NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import FloatingSocial from './FloatingSocial'
import { FB_URL } from './FacebookWidget'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/courses', label: 'Courses' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/success-stories', label: 'Success Stories' },
  { to: '/blog', label: 'Blog' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/videos', label: '▶ Videos' },
  { to: '/admission', label: 'Admission' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="topbar">
        <div className="container nav">
          <Link to="/" className="logo-wrap">
            <img src="/branding/logo-fibd.svg" alt="Freelancing Institute BD" className="logo-image" />
          </Link>
          <nav className={`nav-links${open ? ' open' : ''}`}>
            {navLinks.map(l => (
              <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/admission" className="btn btn-sm" onClick={() => setOpen(false)}>Apply Now</Link>
          </nav>
          <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </header>
      <main><Outlet /></main>
      <FloatingSocial />
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img src="/branding/logo-fibd.svg" alt="Freelancing Institute BD" style={{height:40,marginBottom:12}} />
            <p style={{color:'var(--muted)',fontSize:'.9rem',maxWidth:300}}>
              Bangladesh's premier freelancing training institute — empowering thousands to earn independently online.
            </p>
          </div>
          <div>
            <h4 className="footer-h">Quick Links</h4>
            {navLinks.map(l => <Link key={l.to} className="footer-link" to={l.to}>{l.label}</Link>)}
          </div>
          <div>
            <h4 className="footer-h">Contact</h4>
            <p className="footer-link">📧 hello@freelancinginstitutebd.com</p>
            <p className="footer-link">📞 +880 1700-000000</p>
            <p className="footer-link">📍 Dhaka, Bangladesh</p>
            <div className="social-row">
              <a href={FB_URL} target="_blank" rel="noreferrer" className="social-btn" title="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
              </a>
              <a href="https://www.youtube.com/@FreelancerHamidurRahman44" target="_blank" rel="noreferrer" className="social-btn" title="YouTube">
                <svg width="15" height="11" viewBox="0 0 20 14" fill="currentColor"><path d="M19.6 2.2A2.5 2.5 0 0017.8.4C16.3 0 10 0 10 0S3.7 0 2.2.4A2.5 2.5 0 00.4 2.2C0 3.7 0 7 0 7s0 3.3.4 4.8A2.5 2.5 0 002.2 13.6C3.7 14 10 14 10 14s6.3 0 7.8-.4a2.5 2.5 0 001.8-1.8C20 10.3 20 7 20 7s0-3.3-.4-4.8z"/><path d="M8 10l5-3-5-3v6z" fill="white"/></svg>
              </a>
              <a href="https://wa.me/8801700000000" target="_blank" rel="noreferrer" className="social-btn" title="WhatsApp">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="https://m.me/freelancerhamidurrahman44" target="_blank" rel="noreferrer" className="social-btn" title="Messenger">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.652V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.131 3.26L19.752 8.1l-6.561 6.863z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Freelancing Institute BD. All rights reserved. | freelancinginstitutebd.com</p>
        </div>
      </footer>
    </>
  )
}
