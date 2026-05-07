import React from 'react'
import { motion } from 'framer-motion'
import { NAV_ITEMS, PROFILE } from '../data'
import { useScrollSpy } from '../hooks/useScrollSpy'
import type { Theme } from '../hooks/useTheme'

interface SidePanelProps {
  theme: Theme
  onToggleTheme: () => void
}

const NAV_IDS = NAV_ITEMS.map(i => i.href.replace('#', ''))

const SidePanel: React.FC<SidePanelProps> = ({ theme, onToggleTheme }) => {
  const active = useScrollSpy(NAV_IDS, 140)

  return (
    <aside className="sidebar" aria-label="Profile">
      <div className="sidebar-inner">
        {/* Top brand */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            fontFamily: 'var(--font-display)',
            fontSize: '1.05rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: '1.25rem',
          }}
        >
          {PROFILE.initials}
          <span style={{ color: 'var(--accent)' }}>.</span>
        </motion.a>

        {/* Profile + intro */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.9rem',
            marginBottom: '1.25rem',
          }}
        >
          <div
            style={{
              width: 64, height: 64,
              borderRadius: 16,
              overflow: 'hidden',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              flexShrink: 0,
              background: 'var(--bg-soft)',
            }}
          >
            <img
              src={PROFILE.avatar}
              alt={`${PROFILE.firstName} ${PROFILE.lastName}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 2.4vw, 1.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: 'var(--text)',
                lineHeight: 1.05,
              }}
            >
              {PROFILE.firstName} {PROFILE.lastName}
              <span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: 'var(--accent)',
                marginTop: 4,
              }}
            >
              {PROFILE.role}
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.88rem',
            color: 'var(--text-mid)',
            lineHeight: 1.6,
            marginBottom: '1rem',
          }}
        >
          3+ years building secure enterprise &amp; healthcare apps — JWT-secured APIs, 40% faster queries and React frontends that ship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '5px 12px',
            borderRadius: 999,
            border: '1px solid color-mix(in srgb, var(--accent-3) 30%, transparent)',
            background: 'color-mix(in srgb, var(--accent-3) 10%, transparent)',
            color: 'var(--accent-3)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
          }}
        >
          <span
            style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'var(--accent-3)',
              display: 'inline-block',
              boxShadow: '0 0 0 4px color-mix(in srgb, var(--accent-3) 22%, transparent)',
            }}
          />
          Available for opportunities
        </motion.div>

        {/* Scroll-spy nav */}
        <nav
          aria-label="Section navigation"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            marginBottom: '1.5rem',
          }}
        >
          {NAV_ITEMS.map((item, i) => {
            const id = item.href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'true' : undefined}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '50px 1fr',
                  alignItems: 'center',
                  gap: 12,
                  padding: '8px 4px',
                  borderRadius: 6,
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--text)' : 'var(--text-mid)',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text)'
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-mid)'
                }}
              >
                <span
                  aria-hidden
                  style={{
                    height: 1,
                    width: isActive ? 50 : 24,
                    background: isActive ? 'var(--accent)' : 'var(--border-strong)',
                    transition: 'width 0.25s ease, background 0.2s',
                    justifySelf: 'start',
                    marginLeft: 4,
                  }}
                />
                <span style={{ textTransform: 'uppercase', fontSize: '0.74rem' }}>
                  {`0${i + 1}`.slice(-2)} · {item.label}
                </span>
              </a>
            )
          })}
        </nav>

        {/* Spacer pushes footer to bottom */}
        <div style={{ flex: 1 }} />

        {/* Socials + theme + cta */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <IconLink href={`mailto:${PROFILE.email}`} label="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </IconLink>
            <IconLink href={PROFILE.linkedin} label="LinkedIn" external>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v7.46h-4.55v-6.61c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.49V22H7.62V8z"/>
              </svg>
            </IconLink>
            <IconLink href={PROFILE.github} label="GitHub" external>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2c-3.2.69-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.17.92-.26 1.9-.39 2.88-.39s1.96.13 2.88.39c2.2-1.48 3.16-1.17 3.16-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.7 5.36-5.27 5.65.42.36.78 1.07.78 2.16v3.2c0 .31.21.66.8.55 4.57-1.52 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5z"/>
              </svg>
            </IconLink>

            <span style={{ flex: 1 }} />

            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="icon-btn"
            >
              {theme === 'light' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              )}
            </button>
          </div>

          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              fontFamily: 'var(--font-sans)',
              fontSize: '0.86rem',
              fontWeight: 600,
              background: 'var(--accent)',
              color: '#ffffff',
              padding: '11px 16px',
              borderRadius: 10,
              boxShadow: '0 6px 18px color-mix(in srgb, var(--accent) 28%, transparent)',
              transition: 'transform 0.18s, box-shadow 0.18s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 10px 24px color-mix(in srgb, var(--accent) 40%, transparent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 6px 18px color-mix(in srgb, var(--accent) 28%, transparent)'
            }}
          >
            Hire Me
            <span aria-hidden>→</span>
          </a>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.66rem',
              color: 'var(--text-mid)',
              letterSpacing: '0.06em',
            }}
          >
            {PROFILE.location}
          </div>
        </motion.div>
      </div>
    </aside>
  )
}

const IconLink: React.FC<{
  href: string
  label: string
  external?: boolean
  children: React.ReactNode
}> = ({ href, label, external, children }) => (
  <a
    href={href}
    aria-label={label}
    title={label}
    target={external ? '_blank' : undefined}
    rel={external ? 'noreferrer' : undefined}
    className="icon-btn"
  >
    {children}
  </a>
)

export default SidePanel
