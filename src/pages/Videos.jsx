import { useState } from 'react'
import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import { allVideos, videos, CHANNEL_URL } from '../data/videos'
import { FacebookPageEmbed, FB_URL } from '../components/FacebookWidget'

const TAGS = ['All', 'Success Story', 'Student Win', 'Student Earnings', 'Income Proof',
  'Beginner Tips', 'Common Mistakes', 'Advanced Tips', 'Fiverr Guide', 'New Platform',
  'Women in Freelancing', 'Class 01', 'Class 02', 'Roadmap 2025', 'Motivation',
  'Mindset', 'Opportunity', 'Special Offer', 'Course Launch', 'New Batch', 'Intro', 'About']

export default function Videos() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? allVideos : allVideos.filter(v => v.tag === active)

  return (
    <>
      <div className="page-hero alt-section">
        <div className="container center">
          <p className="pre-label">Our YouTube Channel</p>
          <h1>Free Video Lessons</h1>
          <p className="lead" style={{ margin: '0.75rem auto 0' }}>
            Watch all free lessons from our instructor <strong>Hamidur Rahman</strong> — freelancing tips,
            full course classes, success stories, and income guides. All in Bangla.
          </p>
          <a href={CHANNEL_URL} target="_blank" rel="noreferrer"
            className="btn btn-outline" style={{ marginTop: '1.5rem', display: 'inline-flex', gap: '0.5rem' }}>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M19.6 2.2A2.5 2.5 0 0017.8.4C16.3 0 10 0 10 0S3.7 0 2.2.4A2.5 2.5 0 00.4 2.2C0 3.7 0 7 0 7s0 3.3.4 4.8A2.5 2.5 0 002.2 13.6C3.7 14 10 14 10 14s6.3 0 7.8-.4a2.5 2.5 0 001.8-1.8C20 10.3 20 7 20 7s0-3.3-.4-4.8z" fill="#FF0000"/>
              <path d="M8 10l5-3-5-3v6z" fill="#fff"/>
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-bar">
        <div className="container stats-grid">
          {[
            { v: '30+', l: 'Free Videos' },
            { v: '12+', l: 'Course Class Videos' },
            { v: '4', l: 'Success Story Videos' },
            { v: '100%', l: 'Free to Watch' },
          ].map(s => (
            <div key={s.l} className="stat-item">
              <div className="stat-val">{s.v}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Featured */}
          <div className="vid-featured-row">
            <div className="vid-featured-main">
              <p className="pre-label" style={{ marginBottom: '0.75rem' }}>🔥 Most Popular</p>
              <VideoCard video={videos.successStories[0]} size="lg" />
            </div>
            <div className="vid-featured-side">
              <p className="pre-label" style={{ marginBottom: '0.75rem' }}>Latest Uploads</p>
              {videos.inspiration.map(v => (
                <VideoCard key={v.id} video={v} size="sm" />
              ))}
            </div>
          </div>

          {/* Filter tabs */}
          <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
            <p className="pre-label">Browse by Category</p>
            <div className="tag-filter-row">
              {['All','Success Story','Student Win','Beginner Tips','Common Mistakes',
                'Advanced Tips','Fiverr Guide','New Platform','Women in Freelancing',
                'Motivation','Mindset','Roadmap 2025','Special Offer'].map(tag => (
                <button key={tag}
                  className={`tag-filter-btn${active === tag ? ' active' : ''}`}
                  onClick={() => setActive(tag)}>
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Video grid */}
          <div className="video-hub-grid">
            {filtered.map(v => (
              <VideoCard key={v.id} video={v} size="md" />
            ))}
          </div>

          {/* Digital Marketing Series */}
          <div className="series-section">
            <div className="series-header">
              <div>
                <p className="pre-label">Free Course Series</p>
                <h2>Digital Marketing Full Course</h2>
                <p style={{ color: 'var(--muted)', marginTop: '0.4rem' }}>Complete tutorial series — watch free, enroll for mentorship.</p>
              </div>
              <Link to="/courses" className="btn btn-outline">Enroll for Full Course →</Link>
            </div>
            <div className="grid-3">
              {videos.digitalMarketing.map(v => <VideoCard key={v.id} video={v} size="md" />)}
            </div>
          </div>

          {/* YouTube Marketing Series */}
          <div className="series-section">
            <div className="series-header">
              <div>
                <p className="pre-label">Free Course Series</p>
                <h2>YouTube Marketing — Full Series (8 Classes)</h2>
                <p style={{ color: 'var(--muted)', marginTop: '0.4rem' }}>Complete YouTube monetisation course — free to watch.</p>
              </div>
              <Link to="/courses" className="btn btn-outline">Full Course Details →</Link>
            </div>
            <div className="grid-3">
              {videos.youtubeMarketing.map(v => <VideoCard key={v.id} video={v} size="md" />)}
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Follow */}
      <section className="section alt-section">
        <div className="container">
          <div className="fb-follow-grid">
            <div>
              <p className="pre-label">Stay in the Loop</p>
              <h2>Follow Hamidur Rahman on Facebook</h2>
              <p style={{ color: 'var(--muted)', marginTop: '0.75rem', lineHeight: 1.75 }}>
                Get daily freelancing tips, live Q&A announcements, student success highlights,
                and early course discount offers — all on his Facebook page.
              </p>
              <ul className="video-bullets" style={{ marginTop: '1.25rem' }}>
                <li>📢 Live sessions announced first on Facebook</li>
                <li>💬 Daily freelancing tips and advice</li>
                <li>🎉 Student earning celebrations posted regularly</li>
                <li>🔖 Course discounts shared exclusively to followers</li>
              </ul>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <a href={FB_URL} target="_blank" rel="noreferrer" className="btn" style={{ background: '#1877F2', boxShadow: '0 4px 14px rgba(24,119,242,0.35)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                  Follow on Facebook
                </a>
                <a href="https://m.me/freelancerhamidurrahman44" target="_blank" rel="noreferrer" className="btn btn-outline">
                  💬 Message on Messenger
                </a>
              </div>
            </div>
            <div>
              <FacebookPageEmbed width={400} height={480} tabs="timeline,videos" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container center">
          <h2>Enjoyed the Free Videos?</h2>
          <p>Join a live batch to get mentorship, assignments, and career support alongside the videos.</p>
          <Link to="/admission" className="btn btn-lg btn-gold">Apply for Live Mentorship →</Link>
        </div>
      </section>
    </>
  )
}
