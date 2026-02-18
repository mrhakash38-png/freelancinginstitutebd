import { Outlet, NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/courses', label: 'Courses' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/success-stories', label: 'Success Stories' },
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
              <a href="#" className="social-btn">FB</a>
              <a href="#" className="social-btn">YT</a>
              <a href="#" className="social-btn">WA</a>
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
