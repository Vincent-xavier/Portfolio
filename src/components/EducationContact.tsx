import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from './SectionHeader'
import { PROFILE } from '../data'

const edu = [
  {
    period: '2022',
    degree: 'Full Stack Development Certification',
    institution: 'Bosco Soft Technologies Pvt. Ltd.',
    location: 'Tirupattur, Tamil Nadu',
    color: '#2563eb',
    timeframe: 'Jul 2022 – Oct 2022',
  },
  {
    period: '2017–2020',
    degree: 'B.Sc. Information Technology',
    institution: 'G.T.N. Arts College (Autonomous)',
    location: 'Dindigul, Tamil Nadu',
    color: '#10b981',
    timeframe: 'Jun 2017 – Apr 2020',
  },
]

export const Education: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="education"
      style={{
        padding: 'clamp(4rem, 8vh, 7rem) clamp(1.25rem, 5vw, 4rem)',
        maxWidth: 1280,
        margin: '0 auto',
      }}
    >
      <SectionHeader
        eyebrow="Education"
        title="Foundation"
        subtitle="Where my technical foundation comes from."
      />

      <div
        ref={ref}
        className="edu-timeline"
        style={{
          position: 'relative',
          paddingLeft: 'clamp(1.5rem, 3vw, 2.25rem)',
        }}
      >
        {/* Vertical rail */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: 'clamp(0.5rem, 0.8vw, 0.7rem)',
            top: '0.4rem',
            bottom: '0.4rem',
            width: 1,
            background:
              'linear-gradient(to bottom, var(--border-strong), transparent)',
          }}
        />

        <ol
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {edu.map((e, i) => (
            <motion.li
              key={e.degree}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative' }}
            >
              {/* Marker */}
              <span
                aria-hidden
                style={{
                  position: 'absolute',
                  left: 'calc(clamp(1.5rem, 3vw, 2.25rem) * -1 + clamp(0.5rem, 0.8vw, 0.7rem) - 5px)',
                  top: '0.4rem',
                  width: 11, height: 11,
                  borderRadius: '50%',
                  background: 'var(--bg)',
                  border: `2px solid ${e.color}`,
                  boxShadow: '0 0 0 4px var(--bg)',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 12,
                  flexWrap: 'wrap',
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)',
                    fontWeight: 800,
                    color: e.color,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                  }}
                >
                  {e.period}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-mid)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {e.timeframe}
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                  fontWeight: 700,
                  color: 'var(--text)',
                  letterSpacing: '-0.01em',
                  marginBottom: 4,
                }}
              >
                {e.degree}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  color: 'var(--text-soft)',
                  fontWeight: 500,
                }}
              >
                {e.institution}
                <span style={{ color: 'var(--text-mid)', margin: '0 8px' }}>·</span>
                <span style={{ color: 'var(--text-mid)' }}>{e.location}</span>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const contactLinks = [
  {
    label: 'Email',
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'vincent-xavier26',
    href: PROFILE.linkedin,
    external: true,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v7.46h-4.55v-6.61c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.49V22H7.62V8z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: PROFILE.phone,
    href: `tel:${PROFILE.phone.replace(/\s+/g, '')}`,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
]

export const Contact: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(5rem, 10vh, 9rem) clamp(1.25rem, 5vw, 4rem) clamp(4rem, 8vh, 7rem)',
        maxWidth: 1280,
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '0%', left: '50%',
          transform: 'translateX(-50%)',
          width: 720, height: 360,
          background:
            'radial-gradient(ellipse, color-mix(in srgb, var(--accent) 14%, transparent) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div ref={ref} style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="eyebrow"
          style={{
            justifyContent: 'center',
            marginBottom: '1rem',
          }}
        >
          Contact
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5.5vw, 4.4rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.05,
            color: 'var(--text)',
            marginBottom: '1.25rem',
            maxWidth: 880,
            marginInline: 'auto',
          }}
        >
          Let's build something
          <br />
          <span
            style={{
              background:
                'linear-gradient(135deg, var(--accent), var(--accent-3))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            great together.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.18 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            color: 'var(--text-mid)',
            maxWidth: 560,
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}
        >
          Open to full-time roles, freelance projects and interesting engineering
          challenges. The fastest way to reach me is email — I usually reply
          within a day.
        </motion.p>

        {/* Big email pill */}
        <motion.a
          href={`mailto:${PROFILE.email}`}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.22, duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            color: 'var(--text)',
            background: 'var(--bg-elev)',
            border: '1px solid var(--border)',
            padding: '14px 22px',
            borderRadius: 999,
            boxShadow: 'var(--shadow-md)',
            marginBottom: '1rem',
            transition: 'transform 0.18s, box-shadow 0.18s, border-color 0.18s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
            e.currentTarget.style.borderColor = 'var(--accent)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'var(--shadow-md)'
            e.currentTarget.style.borderColor = 'var(--border)'
          }}
        >
          <span
            style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'color-mix(in srgb, var(--accent) 14%, transparent)',
              color: 'var(--accent)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </span>
          {PROFILE.email}
          <span aria-hidden style={{ color: 'var(--text-mid)' }}>→</span>
        </motion.a>

        <div style={{ marginBottom: '2.5rem' }}>
          <button
            type="button"
            onClick={handleCopy}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: 'var(--text-mid)',
              padding: '6px 14px',
              borderRadius: 999,
              border: '1px solid var(--border)',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--text)'
              e.currentTarget.style.borderColor = 'var(--border-strong)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--text-mid)'
              e.currentTarget.style.borderColor = 'var(--border)'
            }}
          >
            {copied ? '✓ Copied to clipboard' : '⧉ Copy email'}
          </button>
        </div>

        {/* Inline link row — no card grid */}
        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.32, duration: 0.5 }}
          style={{
            listStyle: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'clamp(1rem, 3vw, 2rem)',
            paddingTop: '1.5rem',
            borderTop: '1px dashed var(--border-strong)',
            maxWidth: 720,
            margin: '0 auto',
          }}
        >
          {contactLinks.map(c => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noreferrer' : undefined}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--text-soft)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-soft)')}
              >
                <span
                  style={{
                    width: 28, height: 28,
                    borderRadius: 8,
                    border: '1px solid var(--border)',
                    background: 'var(--bg-elev)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                  }}
                >
                  {c.icon}
                </span>
                <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.2 }}>
                  <span
                    style={{
                      fontSize: '0.66rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--text-mid)',
                      fontWeight: 600,
                    }}
                  >
                    {c.label}
                  </span>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      color: 'inherit',
                      fontWeight: 500,
                    }}
                  >
                    {c.value}
                  </span>
                </span>
              </a>
            </li>
          ))}
          <li>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: 'var(--font-sans)',
                color: 'var(--text-soft)',
              }}
            >
              <span
                style={{
                  width: 28, height: 28,
                  borderRadius: 8,
                  border: '1px solid var(--border)',
                  background: 'var(--bg-elev)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.2 }}>
                <span
                  style={{
                    fontSize: '0.66rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text-mid)',
                    fontWeight: 600,
                  }}
                >
                  Location
                </span>
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: 'inherit',
                    fontWeight: 500,
                  }}
                >
                  {PROFILE.location}
                </span>
              </span>
            </span>
          </li>
        </motion.ul>

        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              style={{
                position: 'fixed',
                bottom: 32, left: '50%',
                transform: 'translateX(-50%)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 600,
                background: 'var(--text)',
                color: 'var(--bg)',
                padding: '10px 18px',
                borderRadius: 999,
                zIndex: 9999,
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              ✓ Email copied to clipboard
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Education
