import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SKILL_GROUPS } from '../data'
import { SectionHeader } from './SectionHeader'

const Skills: React.FC = () => {
  const [active, setActive] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 })
  const group = SKILL_GROUPS[active]

  return (
    <section
      id="skills"
      style={{
        padding: 'clamp(4rem, 8vh, 7rem) clamp(1.25rem, 5vw, 4rem)',
        maxWidth: 1280,
        margin: '0 auto',
        background: 'var(--bg-soft)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <SectionHeader
        eyebrow="Skills"
        title="Technical toolbox"
        subtitle="Click a category to see the tools I reach for to ship secure, fast and maintainable software."
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="card skills-shell"
        style={{
          borderRadius: 22,
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '260px 1fr',
        }}
      >
        {/* Tabs column */}
        <div
          className="skills-tabs"
          role="tablist"
          aria-label="Skill categories"
          style={{
            background: 'var(--bg)',
            borderRight: '1px solid var(--border)',
            padding: '0.65rem',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {SKILL_GROUPS.map((g, i) => {
            const isActive = i === active
            return (
              <button
                key={g.category}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                className="skills-tab"
                style={{
                  position: 'relative',
                  display: 'grid',
                  gridTemplateColumns: '32px 1fr auto',
                  alignItems: 'center',
                  gap: 12,
                  padding: '11px 12px',
                  borderRadius: 12,
                  textAlign: 'left',
                  background: isActive ? `${g.color}14` : 'transparent',
                  border: '1px solid',
                  borderColor: isActive ? `${g.color}40` : 'transparent',
                  color: 'var(--text)',
                  cursor: 'pointer',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.background = 'var(--bg-soft)'
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.background = 'transparent'
                }}
              >
                <span
                  style={{
                    width: 32, height: 32,
                    borderRadius: 9,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: isActive ? `${g.color}26` : `${g.color}14`,
                    color: g.color,
                    fontSize: '0.95rem',
                    transition: 'background 0.2s',
                  }}
                >
                  {g.icon}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '-0.005em',
                    color: isActive ? 'var(--text)' : 'var(--text-soft)',
                  }}
                >
                  {g.category}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    padding: '2px 8px',
                    borderRadius: 999,
                    background: isActive ? g.color : 'var(--bg-muted)',
                    color: isActive ? '#fff' : 'var(--text-mid)',
                    border: isActive ? 'none' : '1px solid var(--border)',
                  }}
                >
                  {g.skills.length}
                </span>
              </button>
            )
          })}
        </div>

        {/* Detail panel */}
        <div
          className="skills-detail"
          role="tabpanel"
          style={{
            padding: 'clamp(1.5rem, 3vw, 2.25rem)',
            background: 'var(--bg-elev)',
            position: 'relative',
            minHeight: 360,
            backgroundImage: `radial-gradient(800px 200px at 100% 0%, ${group.color}10, transparent 70%)`,
            transition: 'background-image 0.4s ease',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: 48, height: 48,
                    borderRadius: 12,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `${group.color}1f`,
                    color: group.color,
                    fontSize: '1.2rem',
                    flexShrink: 0,
                  }}
                >
                  {group.icon}
                </div>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      flexWrap: 'wrap',
                      marginBottom: 2,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        color: 'var(--text)',
                      }}
                    >
                      {group.category}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: group.color,
                        background: `${group.color}14`,
                        border: `1px solid ${group.color}33`,
                        padding: '3px 8px',
                        borderRadius: 999,
                        fontWeight: 600,
                      }}
                    >
                      {group.skills.length} tools
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.92rem',
                      color: 'var(--text-soft)',
                      lineHeight: 1.6,
                      maxWidth: 520,
                    }}
                  >
                    {group.description}
                  </p>
                </div>
              </div>

              <div
                className="skills-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                  gap: 8,
                }}
              >
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02, duration: 0.35 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '10px 12px',
                      borderRadius: 10,
                      background: 'var(--bg-soft)',
                      border: '1px solid var(--border)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.84rem',
                      fontWeight: 500,
                      color: 'var(--text-soft)',
                      cursor: 'default',
                      transition: 'background 0.2s, border-color 0.2s, color 0.2s, transform 0.18s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = `${group.color}10`
                      e.currentTarget.style.borderColor = `${group.color}55`
                      e.currentTarget.style.color = 'var(--text)'
                      e.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'var(--bg-soft)'
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.color = 'var(--text-soft)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <span
                      style={{
                        width: 6, height: 6,
                        borderRadius: 2,
                        background: group.color,
                        flexShrink: 0,
                      }}
                    />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 760px) {
          .skills-shell { grid-template-columns: 1fr !important; }
          .skills-tabs {
            border-right: none !important;
            border-bottom: 1px solid var(--border);
            flex-direction: row !important;
            overflow-x: auto;
            scrollbar-width: none;
          }
          .skills-tabs::-webkit-scrollbar { display: none; }
          .skills-tab { flex-shrink: 0; }
        }
      `}</style>
    </section>
  )
}

export default Skills
