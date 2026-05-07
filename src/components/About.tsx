import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PROFILE } from '../data'
import { SectionHeader } from './SectionHeader'

const pillars = [
  {
    icon: '◈',
    color: '#2563eb',
    title: 'Full-stack ownership',
    text: 'Features end-to-end — data model, API, and the React UI users actually see.',
  },
  {
    icon: '◎',
    color: '#0ea5e9',
    title: 'Production security',
    text: 'JWT, RBAC, OAuth2 and audit-friendly logging for real enterprise environments.',
  },
  {
    icon: '⬡',
    color: '#10b981',
    title: 'Performance',
    text: 'Indexed queries, tuned stored procedures, 40%+ DB performance gains in production.',
  },
  {
    icon: '◆',
    color: '#8b5cf6',
    title: 'Ship-it mindset',
    text: 'Agile sprints, sub-5% defect escape rate, strong bias toward shipping working software.',
  },
]

const About: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: 'clamp(4rem, 8vh, 7rem) clamp(1.25rem, 5vw, 4rem)',
        maxWidth: 1280,
        margin: '0 auto',
      }}
    >
      <SectionHeader
        eyebrow="About"
        title="A pragmatic full-stack engineer"
        subtitle="Real users, real clients, real production environments — here's how I approach the work."
      />

      <div
        className="about-editorial"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, 380px)',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'flex-start',
        }}
      >
        {/* Prose column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {PROFILE.about.map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.4vw, 1.1rem)',
                lineHeight: 1.75,
                color: 'var(--text-soft)',
                marginBottom: '1.1rem',
                maxWidth: 640,
              }}
            >
              {p}
            </p>
          ))}

          <motion.blockquote
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              margin: '2rem 0 0',
              padding: '0.5rem 0 0.5rem 1.25rem',
              borderLeft: '3px solid var(--accent)',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              color: 'var(--text)',
              lineHeight: 1.4,
              maxWidth: 640,
            }}
          >
            <span style={{ color: 'var(--accent)' }}>"</span>
            I care about the boring details — secure auth, indexed queries,
            sensible logging — because that's what makes software dependable in
            production.
            <span style={{ color: 'var(--accent)' }}>"</span>
          </motion.blockquote>
        </motion.div>

        {/* Aside: portrait + quick facts */}
        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: 16,
              overflow: 'hidden',
              border: '1px solid var(--border)',
              aspectRatio: '4 / 5',
              background: 'var(--bg-soft)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <img
              src={PROFILE.avatar}
              alt={`${PROFILE.firstName} ${PROFILE.lastName}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                left: 14, bottom: 14, right: 14,
                padding: '10px 12px',
                borderRadius: 10,
                background: 'color-mix(in srgb, var(--bg) 86%, transparent)',
                backdropFilter: 'blur(6px)',
                border: '1px solid var(--border)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                color: 'var(--text-soft)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 7, height: 7,
                  borderRadius: '50%',
                  background: 'var(--accent-3)',
                  boxShadow: '0 0 0 4px color-mix(in srgb, var(--accent-3) 22%, transparent)',
                }}
              />
              {PROFILE.location}
            </div>
          </div>

          <dl
            style={{
              display: 'grid',
              gridTemplateColumns: '110px 1fr',
              rowGap: 14,
              columnGap: 12,
              fontFamily: 'var(--font-sans)',
            }}
          >
            <Row k="Role"      v={PROFILE.role} />
            <Row k="Based in"  v={PROFILE.location} />
            <Row k="Email"     v={PROFILE.email}     mono />
            <Row k="Open to"   v="Full-time · Freelance" />
            <Row k="Sprint"    v="2-week Agile / Scrum" />
          </dl>
        </motion.aside>
      </div>

      {/* Pillars row — inline, no card backgrounds */}
      <div
        className="about-pillars"
        style={{
          marginTop: 'clamp(2.5rem, 5vw, 4rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: 'clamp(1rem, 2vw, 1.75rem)',
          paddingTop: '1.75rem',
          borderTop: '1px dashed var(--border-strong)',
        }}
      >
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
          >
            <div
              style={{
                width: 36, height: 36,
                borderRadius: 9,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `${p.color}1a`,
                color: p.color,
                marginBottom: 12,
              }}
            >
              {p.icon}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.98rem',
                fontWeight: 700,
                color: 'var(--text)',
                letterSpacing: '-0.01em',
                marginBottom: 4,
              }}
            >
              {p.title}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.84rem',
                color: 'var(--text-mid)',
                lineHeight: 1.55,
              }}
            >
              {p.text}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-editorial { grid-template-columns: 1fr !important; }
          .about-pillars { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 480px) {
          .about-pillars { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

const Row: React.FC<{ k: string; v: string; mono?: boolean }> = ({ k, v, mono }) => (
  <>
    <dt
      style={{
        fontSize: '0.72rem',
        color: 'var(--text-mid)',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        fontWeight: 600,
        paddingTop: 2,
      }}
    >
      {k}
    </dt>
    <dd
      style={{
        fontSize: '0.88rem',
        color: 'var(--text)',
        fontWeight: 500,
        fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
        wordBreak: mono ? 'break-all' : 'normal',
      }}
    >
      {v}
    </dd>
  </>
)

export default About
