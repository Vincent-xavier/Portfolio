import React from 'react'
import { PROFILE, NAV_ITEMS } from '../data'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-soft)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '2rem clamp(1.25rem, 5vw, 4rem)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: 'var(--font-sans)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1rem',
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {PROFILE.initials}
            <span style={{ color: 'var(--accent)' }}>.</span>
          </span>
          <span
            style={{
              fontSize: '0.78rem',
              color: 'var(--text-mid)',
            }}
          >
            © {year} {PROFILE.firstName} {PROFILE.lastName}. All rights reserved.
          </span>
        </div>

        <nav style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {NAV_ITEMS.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 500,
                color: 'var(--text-mid)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-mid)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--text-mid)',
            letterSpacing: '0.04em',
          }}
        >
          <span
            style={{
              width: 6, height: 6,
              borderRadius: '50%',
              background: 'var(--accent-3)',
              display: 'inline-block',
            }}
          />
          {PROFILE.location}
        </div>
      </div>
    </footer>
  )
}

export default Footer
