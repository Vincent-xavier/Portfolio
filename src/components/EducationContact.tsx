import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionLabel } from './Skills'

const edu = [
  {
    period: 'Jul 2022 – Oct 2022',
    degree: 'Full Stack Development Certification',
    institution: 'Bosco Soft Technologies Pvt. Ltd.',
    location: 'Tirupattur, Tamil Nadu',
    color: '#00ff87',
  },
  {
    period: 'Jun 2017 – Apr 2020',
    degree: 'Bachelor of Science in Information Technology',
    institution: 'G.T.N. Arts College (Autonomous)',
    location: 'Dindigul, Tamil Nadu',
    color: '#7c6dfa',
  },
]

const contacts = [
  { label: 'Email', value: 'vincentxavier2602@gmail.com', href: 'mailto:vincentxavier2602@gmail.com', icon: '✉' },
  { label: 'Phone', value: '+91 85260 73314', href: 'tel:+918526073314', icon: '☎' },
  { label: 'LinkedIn', value: 'vincent-xavier26', href: 'https://linkedin.com/in/vincent-xavier26', icon: '↗' },
  { label: 'Location', value: 'Dindigul, Tamil Nadu', href: null, icon: '◎' },
]

export const Education: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="education"
      style={{
        padding: '8rem 6rem',
        maxWidth: 1300, margin: '0 auto',
        borderTop: '1px solid var(--border)',
      }}
    >
      <SectionLabel num="04" title="Education" />

      <div ref={ref} style={{ display: 'flex', flexDirection: 'column' }}>
        {edu.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: '180px 1fr',
              gap: '2rem',
              padding: '2.5rem 0',
              borderBottom: i < edu.length - 1 ? '1px solid var(--border)' : 'none',
              alignItems: 'center',
            }}
          >
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
              color: 'var(--textdim)', letterSpacing: '0.06em',
              lineHeight: 1.6,
            }}>
              {e.period}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{
                width: 3, height: 48,
                background: e.color, borderRadius: 2, flexShrink: 0,
              }} />
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.2rem',
                  fontWeight: 700, letterSpacing: '-0.02em',
                  color: 'var(--text)', marginBottom: '0.3rem',
                }}>
                  {e.degree}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                  color: e.color, letterSpacing: '0.06em',
                }}>
                  {e.institution} — {e.location}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export const Contact: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText('vincentxavier2602@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <section
      id="contact"
      style={{
        padding: '10rem 6rem 8rem',
        maxWidth: 1300, margin: '0 auto',
        borderTop: '1px solid var(--border)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: 600, height: 300,
        background: 'radial-gradient(ellipse, rgba(0,255,135,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--accent)', marginBottom: '2rem',
          }}
        >
          05 — Let's Connect
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 5rem)',
            fontWeight: 800, letterSpacing: '-0.04em',
            lineHeight: 1.0, marginBottom: '1.5rem',
            color: 'var(--text)',
          }}
        >
          Let's Build
          <br />
          <span style={{
            WebkitTextStroke: '2px rgba(255,255,255,0.25)',
            color: 'transparent',
          }}>Something </span>
          <span style={{ color: 'var(--accent)' }}>Great.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.9rem',
            color: 'var(--textdim)', maxWidth: 500,
            margin: '0 auto 4rem', lineHeight: 1.8,
          }}
        >
          Open to full-time roles, freelance projects, and interesting engineering challenges.
        </motion.p>

        {/* Contact cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1px', background: 'var(--border)',
          border: '1px solid var(--border2)',
          borderRadius: 4, overflow: 'hidden',
          maxWidth: 900, margin: '0 auto',
        }}>
          {contacts.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              {c.href ? (
                <motion.a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  whileHover={{ scale: 1.02, color: 'var(--accent)' }}
                  style={{
                    display: 'block', padding: '2rem 1.5rem',
                    background: 'var(--bg)', textDecoration: 'none',
                    textAlign: 'left', color: 'var(--textdim)',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{c.icon}</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--textdim)', marginBottom: '0.35rem',
                  }}>
                    {c.label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
                    color: 'var(--text)', letterSpacing: '0.02em',
                  }}>
                    {c.value}
                  </div>
                </motion.a>
              ) : (
                <div
                  style={{
                    padding: '2rem 1.5rem', background: 'var(--bg)',
                    textAlign: 'left',
                    cursor: c.label === 'Email' ? 'pointer' : 'default',
                  }}
                  onClick={c.label === 'Email' ? handleCopy : undefined}
                >
                  <div style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{c.icon}</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--textdim)', marginBottom: '0.35rem',
                  }}>
                    {c.label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
                    color: 'var(--text)',
                  }}>
                    {c.value}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Copy email toast */}
        {copiedEmail && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', bottom: 40, left: '50%', transform: 'translateX(-50%)',
              fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
              background: 'var(--accent)', color: '#07070a',
              padding: '10px 20px', borderRadius: 2, zIndex: 9999,
            }}
          >
            ✓ Email copied!
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Education
