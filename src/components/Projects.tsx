import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PROJECTS } from '../data'
import { SectionHeader } from './SectionHeader'
import type { Project } from '../types'

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const reversed = index % 2 === 1

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="card project-card"
      style={{
        borderRadius: 22,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 3,
          background: project.color,
          opacity: 0.85,
        }}
      />

      <div
        className="project-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 1fr',
          gap: 0,
          alignItems: 'stretch',
        }}
      >
        {/* Image side */}
        <div
          className="project-image"
          style={{
            order: reversed ? 2 : 1,
            background: `linear-gradient(135deg, ${project.color}10, ${project.color}05)`,
            borderRight: reversed ? 'none' : '1px solid var(--border)',
            borderLeft: reversed ? '1px solid var(--border)' : 'none',
            padding: 'clamp(1rem, 2.4vw, 1.75rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 260,
          }}
        >
          <div
            style={{
              width: '100%',
              borderRadius: 14,
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border)',
              background: '#fff',
            }}
          >
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* Content side */}
        <div
          className="project-content"
          style={{
            order: reversed ? 1 : 2,
            padding: 'clamp(1.5rem, 3vw, 2.25rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: project.color,
                  background: `${project.color}1a`,
                  border: `1px solid ${project.color}33`,
                  padding: '4px 10px',
                  borderRadius: 999,
                  letterSpacing: '0.04em',
                }}
              >
                Project {project.index}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-mid)',
                }}
              >
                {project.domain}
              </span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-mid)',
              }}
            >
              {project.period}
            </span>
          </div>

          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                lineHeight: 1.2,
                marginBottom: 6,
              }}
            >
              {project.name}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                color: 'var(--text-soft)',
                fontWeight: 500,
              }}
            >
              {project.tagline}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '0.65rem',
              padding: '0.85rem',
              background: 'var(--bg-soft)',
              border: '1px solid var(--border)',
              borderRadius: 12,
            }}
          >
            <DetailRow label="Problem" body={project.problem} />
            <DetailRow label="Role" body={project.role} />
            <DetailRow label="Outcome" body={project.outcome} accent={project.color} />
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text-mid)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: 8,
              }}
            >
              Key features
            </div>
            <ul
              style={{
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 6,
              }}
            >
              {project.features.map(f => (
                <li
                  key={f}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.86rem',
                    color: 'var(--text-soft)',
                    paddingLeft: 18,
                    position: 'relative',
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      position: 'absolute',
                      left: 0, top: 8,
                      width: 8, height: 8,
                      borderRadius: 2,
                      background: project.color,
                      opacity: 0.85,
                    }}
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: 8,
            }}
          >
            {project.metrics.map(m => (
              <div
                key={m.label}
                style={{
                  padding: '10px 12px',
                  borderRadius: 10,
                  background: 'var(--bg-elev)',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    color: project.color,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.7rem',
                    color: 'var(--text-mid)',
                    marginTop: 2,
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {project.stack.map(s => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .project-grid { grid-template-columns: 1fr !important; }
          .project-image { order: 1 !important; border-right: none !important; border-left: none !important; border-bottom: 1px solid var(--border); }
          .project-content { order: 2 !important; }
        }
      `}</style>
    </motion.article>
  )
}

const DetailRow: React.FC<{ label: string; body: string; accent?: string }> = ({ label, body, accent }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: 12, alignItems: 'flex-start' }}>
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        color: 'var(--text-mid)',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        fontWeight: 600,
        paddingTop: 2,
      }}
    >
      {label}
    </span>
    <p
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '0.85rem',
        color: accent ? 'var(--text)' : 'var(--text-soft)',
        lineHeight: 1.55,
        fontWeight: accent ? 600 : 400,
      }}
    >
      {body}
    </p>
  </div>
)

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
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
        eyebrow="Projects"
        title="Selected production work"
        subtitle="Three live projects, three different domains — each shipped, used by real people, and measured by outcomes."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Projects
