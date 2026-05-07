import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.header
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        marginBottom: 'clamp(2rem, 4vw, 3rem)',
        textAlign: align,
        maxWidth: align === 'center' ? 720 : 760,
        marginInline: align === 'center' ? 'auto' : undefined,
      }}
    >
      <div className="eyebrow" style={{ marginBottom: '0.85rem', justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
        {eyebrow}
      </div>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 3.4vw, 2.6rem)',
          fontWeight: 800,
          letterSpacing: '-0.025em',
          color: 'var(--text)',
          lineHeight: 1.15,
          marginBottom: subtitle ? '0.75rem' : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            color: 'var(--text-mid)',
            lineHeight: 1.65,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.header>
  )
}

export default SectionHeader
