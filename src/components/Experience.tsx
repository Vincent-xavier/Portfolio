import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionLabel } from './Skills'

const bullets = [
  {
    icon: '◈',
    text: 'Delivered enterprise and healthcare applications for',
    highlight: '3+ clients',
    end: ', supporting 500+ end users across production environments.',
  },
  {
    icon: '◎',
    text: 'Developed secure RESTful APIs with',
    highlight: 'JWT authentication',
    end: ', supporting multi-role access for enterprise users.',
  },
  {
    icon: '⬡',
    text: 'Improved data retrieval performance by',
    highlight: '40%',
    end: ' via query optimization on PostgreSQL/MSSQL databases.',
  },
  {
    icon: '◉',
    text: 'Maintained a production',
    highlight: 'defect escape rate below 5%',
    end: ' across all releases in 2-week Agile/Scrum sprints.',
  },
]

const Experience: React.FC = () => {
  const [activeBullet, setActiveBullet] = useState<number | null>(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="experience"
      style={{
        padding: '8rem 6rem',
        maxWidth: 1300, margin: '0 auto',
        borderTop: '1px solid var(--border)',
      }}
    >
      <SectionLabel num="02" title="Experience" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          border: '1px solid var(--border2)',
          borderRadius: 4, overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div style={{
          background: 'var(--bg2)',
          padding: '2.5rem 3rem',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem',
          borderBottom: '1px solid var(--border)',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
              color: 'var(--accent)', letterSpacing: '0.1em',
              textTransform: 'uppercase', marginBottom: '0.75rem',
            }}>
              Software Engineer
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              fontWeight: 700, letterSpacing: '-0.03em',
              color: 'var(--text)', marginBottom: '0.35rem',
            }}>
              Bosco Soft Technologies Pvt. Ltd.
            </h3>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
              color: 'var(--accent2)',
            }}>
              Full Stack .NET + React Developer
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                color: 'var(--textdim)', letterSpacing: '0.06em',
                marginBottom: '0.5rem',
              }}
            >
              Oct 2022 — Present
            </motion.div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end' }}>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: 'var(--accent)', display: 'inline-block',
                }}
              />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent)' }}>
                Currently Active
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--textdim)', marginTop: 6 }}>
              Tamil Nadu, India
            </div>
          </div>
        </div>

        {/* Timeline bullets */}
        <div style={{ padding: '2.5rem 3rem', position: 'relative' }}>
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute', left: '3rem', top: '2.5rem',
              width: 1, bottom: '2.5rem',
              background: 'linear-gradient(to bottom, var(--accent), var(--accent2))',
              transformOrigin: 'top', opacity: 0.3,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '2.5rem' }}>
            {bullets.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onHoverStart={() => setActiveBullet(i)}
                onHoverEnd={() => setActiveBullet(null)}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '1.25rem',
                  position: 'relative', cursor: 'default',
                }}
              >
                {/* Dot */}
                <motion.div
                  animate={activeBullet === i ? {
                    scale: 1.4,
                    backgroundColor: 'var(--accent)',
                  } : {
                    scale: 1,
                    backgroundColor: 'var(--bg3)',
                  }}
                  style={{
                    width: 10, height: 10, borderRadius: '50%',
                    border: '1px solid var(--accent)',
                    flexShrink: 0, marginTop: 5,
                    position: 'absolute', left: -29,
                    transition: 'all 0.2s',
                  }}
                />

                {/* Icon */}
                <motion.span
                  animate={{ color: activeBullet === i ? 'var(--accent)' : 'var(--accent2)' }}
                  style={{ fontSize: '1rem', flexShrink: 0 }}
                >
                  {b.icon}
                </motion.span>

                {/* Text */}
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.88rem',
                  color: 'var(--textdim)', lineHeight: 1.7,
                }}>
                  {b.text}{' '}
                  <motion.span
                    animate={{ color: activeBullet === i ? 'var(--accent)' : 'var(--text)' }}
                    style={{ transition: 'color 0.2s' }}
                  >
                    {b.highlight}
                  </motion.span>
                  {b.end}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech used footer */}
        <div style={{
          borderTop: '1px solid var(--border)',
          padding: '1.5rem 3rem',
          display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--textdim)', letterSpacing: '0.08em' }}>TECH USED:</span>
          {['React', '.NET Core', 'PostgreSQL', 'MSSQL', 'JWT', 'Docker', 'Azure DevOps', 'React Native'].map(t => (
            <motion.span
              key={t}
              whileHover={{ scale: 1.1, color: 'var(--accent)' }}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                color: 'var(--textdim)', background: 'var(--bg3)',
                border: '1px solid var(--border)', padding: '3px 10px',
                borderRadius: 2, cursor: 'default', transition: 'color 0.2s',
              }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
