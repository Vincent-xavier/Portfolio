import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PROJECTS } from '../data'
import { SectionLabel } from './Skills'
import type { Project } from '../types'

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const { ref: viewRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const x = ((e.clientY - cy) / (rect.height / 2)) * 5
    const y = -((e.clientX - cx) / (rect.width / 2)) * 5
    setTilt({ x, y })
  }

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <motion.div
      ref={viewRef}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={resetTilt}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: hovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        style={{
          background: 'var(--bg2)',
          border: `1px solid ${hovered ? `${project.color}40` : 'var(--border)'}`,
          borderRadius: 8,
          overflow: 'hidden',
          cursor: 'default',
          transformStyle: 'preserve-3d',
          transition: 'border-color 0.3s',
          position: 'relative',
        }}
      >
        {/* Top accent line */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: 2,
            background: `linear-gradient(90deg, ${project.color}, transparent)`,
            transformOrigin: 'left',
          }}
        />

        {/* Glow effect on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: 200, pointerEvents: 'none',
            background: `radial-gradient(ellipse at 50% 0%, ${project.color}08 0%, transparent 70%)`,
          }}
        />

        <div style={{ padding: '2.5rem 2.25rem' }}>
          {/* Index + name */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
              color: 'var(--textdim)', letterSpacing: '0.1em',
            }}>
              {project.index} / 03
            </span>
            <motion.span
              animate={{ color: hovered ? project.color : 'var(--textdim)' }}
              style={{ fontSize: '1.1rem', transition: 'color 0.3s' }}
            >
              ↗
            </motion.span>
          </div>

          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            fontWeight: 700, letterSpacing: '-0.02em',
            color: 'var(--text)', marginBottom: '0.4rem',
            lineHeight: 1.25,
          }}>
            {project.name}
          </h3>

          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
            color: project.color, letterSpacing: '0.08em',
            textTransform: 'uppercase', marginBottom: '1.25rem',
          }}>
            {project.short}
          </div>

          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.83rem',
            color: 'var(--textdim)', lineHeight: 1.75,
            marginBottom: '1.75rem',
          }}>
            {project.description}
          </p>

          {/* Stack chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.75rem' }}>
            {project.stack.map(s => (
              <motion.span
                key={s}
                whileHover={{ scale: 1.07, borderColor: `${project.color}50`, color: project.color }}
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                  color: 'var(--textdim)', background: 'var(--bg)',
                  border: '1px solid var(--border)', padding: '3px 10px',
                  borderRadius: 2, letterSpacing: '0.04em',
                  transition: 'all 0.2s', cursor: 'default',
                }}
              >
                {s}
              </motion.span>
            ))}
          </div>

          {/* Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {project.highlights.map((h, hi) => (
              <motion.div
                key={h}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 + 0.3 + hi * 0.06 }}
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                  color: project.color,
                  background: `${project.color}08`,
                  border: `1px solid ${project.color}20`,
                  padding: '5px 12px', borderRadius: 2,
                  display: 'inline-block',
                }}
              >
                ✦ {h}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      style={{
        padding: '8rem 6rem',
        maxWidth: 1300, margin: '0 auto',
        borderTop: '1px solid var(--border)',
      }}
    >
      <SectionLabel num="03" title="Projects" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '1.5rem',
      }}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Projects
