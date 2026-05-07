import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from './SectionHeader'

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
    end: ' via query optimization on PostgreSQL / MSSQL databases.',
  },
  {
    icon: '◉',
    text: 'Maintained a production',
    highlight: 'defect escape rate below 5%',
    end: ' across all releases in 2-week Agile / Scrum sprints.',
  },
]

const techStack = [
  'React',
  'TypeScript',
  '.NET Core',
  'PostgreSQL',
  'MSSQL',
  'JWT',
  'Docker',
  'Azure DevOps',
  'React Native',
  'Hangfire',
  'SignalR',
]

const Experience: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="experience"
      style={{
        padding: 'clamp(4rem, 8vh, 7rem) clamp(1.25rem, 5vw, 4rem)',
        maxWidth: 1280,
        margin: '0 auto',
      }}
    >
      <SectionHeader
        eyebrow="Experience"
        title="Where I've shipped software"
        subtitle="A focused career so far — full-stack work for one product company, multiple real clients."
      />

      <div ref={ref} className="exp-editorial">
        {/* Header band — naked, no card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="exp-header"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '1.25rem',
            alignItems: 'flex-start',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent)',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '0.6rem',
              }}
            >
              <span
                style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: 'var(--accent-3)',
                  boxShadow: '0 0 0 4px color-mix(in srgb, var(--accent-3) 22%, transparent)',
                }}
              />
              Software Engineer · Currently Active
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: 'var(--text)',
                marginBottom: '0.4rem',
                lineHeight: 1.15,
              }}
            >
              Bosco Soft Technologies Pvt. Ltd.
            </h3>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                color: 'var(--text-soft)',
                fontWeight: 500,
              }}
            >
              Full Stack .NET + React Developer
              <span style={{ color: 'var(--text-mid)', margin: '0 8px' }}>·</span>
              <span style={{ color: 'var(--text-mid)' }}>Tamil Nadu, India</span>
            </div>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-soft)',
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: 999,
              background: 'var(--bg-muted)',
              border: '1px solid var(--border)',
              whiteSpace: 'nowrap',
              alignSelf: 'flex-start',
            }}
          >
            Oct 2022 — Present
          </div>
        </motion.div>

        {/* Timeline — naked, no enclosing card */}
        <div
          style={{
            position: 'relative',
            padding: '2rem 0 1.5rem',
          }}
        >
          <div
            aria-hidden
            style={{
              position: 'absolute',
              left: 19,
              top: '2rem',
              bottom: '1.5rem',
              width: 2,
              background:
                'linear-gradient(to bottom, color-mix(in srgb, var(--accent) 60%, transparent), color-mix(in srgb, var(--accent) 8%, transparent))',
              borderRadius: 2,
            }}
          />

          <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '40px 1fr',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  aria-hidden
                  style={{
                    width: 40, height: 40,
                    borderRadius: 10,
                    background: 'var(--bg)',
                    border: '1.5px solid var(--accent)',
                    color: 'var(--accent)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.95rem',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 0 0 4px var(--bg)',
                  }}
                >
                  {b.icon}
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
                    color: 'var(--text-soft)',
                    lineHeight: 1.7,
                    paddingTop: 6,
                  }}
                >
                  {b.text}{' '}
                  <span
                    style={{
                      color: 'var(--text)',
                      fontWeight: 700,
                      backgroundImage: 'linear-gradient(transparent 60%, color-mix(in srgb, var(--accent) 22%, transparent) 60%)',
                      padding: '0 2px',
                    }}
                  >
                    {b.highlight}
                  </span>
                  {b.end}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Tech footer — naked inline strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px dashed var(--border-strong)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-mid)',
              letterSpacing: '0.08em',
              fontWeight: 600,
              textTransform: 'uppercase',
              marginRight: 6,
            }}
          >
            Stack ·
          </span>
          {techStack.map(t => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--text-soft)',
                fontWeight: 500,
              }}
            >
              {t}
              <span style={{ color: 'var(--text-dim)', marginLeft: 8 }}>·</span>
            </span>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 540px) {
          .exp-header { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default Experience
