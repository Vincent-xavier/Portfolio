import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SKILL_GROUPS } from '../data'

const SectionLabel: React.FC<{ num: string; title: string }> = ({ num, title }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '4rem' }}
    >
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
        color: 'var(--accent)', letterSpacing: '0.1em',
      }}>{num}</span>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
        fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)',
      }}>{title}</h2>
      <div style={{ flex: 1, height: 1, background: 'var(--border2)' }} />
    </motion.div>
  )
}

const SkillTag: React.FC<{ skill: string; color: string; delay: number }> = ({ skill, color, delay }) => {
  const [hovered, setHovered] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08, y: -2 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      data-hover
      style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
        letterSpacing: '0.04em',
        padding: '6px 14px', borderRadius: 2,
        cursor: 'default', display: 'inline-block',
        transition: 'background 0.2s, border-color 0.2s, color 0.2s',
        background: hovered ? `${color}15` : 'var(--bg3)',
        border: `1px solid ${hovered ? `${color}40` : 'var(--border)'}`,
        color: hovered ? color : 'var(--textdim)',
      }}
    >
      {skill}
    </motion.span>
  )
}

const SkillGroupCard: React.FC<{ group: typeof SKILL_GROUPS[0]; gi: number }> = ({ group, gi }) => {
  const [hovered, setHovered] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: gi * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--bg3)' : 'var(--bg)',
        padding: '2.25rem 2rem',
        transition: 'background 0.3s',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
        <motion.span
          animate={{ rotate: hovered ? 360 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ color: group.color, fontSize: '1.1rem' }}
        >
          {group.icon}
        </motion.span>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
          textTransform: 'uppercase', letterSpacing: '0.12em',
          color: group.color,
        }}>
          {group.category}
        </span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {group.skills.map((skill, si) => (
          <SkillTag key={skill} skill={skill} color={group.color} delay={gi * 0.05 + si * 0.03} />
        ))}
      </div>
    </motion.div>
  )
}

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      style={{
        padding: '8rem 6rem',
        maxWidth: 1300, margin: '0 auto',
        borderTop: '1px solid var(--border)',
      }}
    >
      <SectionLabel num="01" title="Technical Skills" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 4, overflow: 'hidden' }}>
        {SKILL_GROUPS.map((group, gi) => (
          <SkillGroupCard key={group.category} group={group} gi={gi} />
        ))}
      </div>
    </section>
  )
}

export { SectionLabel }
export default Skills
