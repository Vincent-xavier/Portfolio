import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { NAV_ITEMS, PROFILE } from '../data'
import type { Theme } from '../hooks/useTheme'

interface NavbarProps {
  theme: Theme
  onToggleTheme: () => void
}

const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const { progress, scrollY } = useScrollProgress()
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = scrollY > 12

  return (
    <div className="nav-top">
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 900,
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(1.25rem, 4vw, 3rem)',
          background: scrolled ? 'color-mix(in srgb, var(--bg) 88%, transparent)' : 'transparent',
          backdropFilter: scrolled ? 'saturate(140%) blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'saturate(140%) blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'background 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease',
        }}
      >
        <a
          href="#hero"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.1rem',
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            display: 'flex', alignItems: 'center', gap: 4,
          }}
          aria-label="Home"
        >
          {PROFILE.initials}
          <span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        <div className="nav-desktop" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-soft)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-soft)')}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            style={{
              width: 38, height: 38,
              borderRadius: 999,
              border: '1px solid var(--border)',
              background: 'var(--bg-elev)',
              color: 'var(--text-soft)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s, border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border-strong)'
              e.currentTarget.style.color = 'var(--text)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-soft)'
            }}
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

          <a
            href="#contact"
            className="nav-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 600,
              background: 'var(--accent)',
              color: '#ffffff',
              padding: '9px 18px',
              borderRadius: 999,
              transition: 'transform 0.18s, box-shadow 0.18s, background 0.2s',
              boxShadow: '0 6px 18px color-mix(in srgb, var(--accent) 30%, transparent)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 10px 24px color-mix(in srgb, var(--accent) 40%, transparent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 6px 18px color-mix(in srgb, var(--accent) 30%, transparent)'
            }}
          >
            Hire Me
            <span aria-hidden>→</span>
          </a>

          <button
            className="nav-burger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
            style={{
              width: 38, height: 38,
              borderRadius: 999,
              border: '1px solid var(--border)',
              background: 'var(--bg-elev)',
              color: 'var(--text-soft)',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              {menuOpen ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            style={{
              position: 'fixed',
              top: 68, left: 0, right: 0,
              zIndex: 899,
              background: 'var(--bg)',
              borderBottom: '1px solid var(--border)',
              padding: '1rem 1.25rem 1.5rem',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {NAV_ITEMS.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'var(--text)',
                    padding: '12px 8px',
                    borderRadius: 8,
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        style={{
          position: 'fixed',
          top: 0, left: 0, height: 2,
          background: 'var(--accent)',
          width: `${progress * 100}%`,
          zIndex: 999,
          transformOrigin: 'left',
        }}
      />

      {/* Responsive nav rules */}
      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: inline-flex !important; }
        }
        @media (max-width: 540px) {
          .nav-cta span { display: none; }
        }
      `}</style>
    </div>
  )
}

export default Navbar
