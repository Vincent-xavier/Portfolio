import React from 'react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => (
  <footer style={{
    borderTop: '1px solid var(--border)',
    padding: '2rem 6rem',
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
  }}>
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
      color: 'var(--textdim)', letterSpacing: '0.06em',
    }}>
      © 2025 Vincent Xavier A — Full Stack .NET + React Developer
    </div>
    <div style={{ display: 'flex', gap: '1.5rem' }}>
      {['Skills', 'Experience', 'Projects', 'Contact'].map(link => (
        <motion.a
          key={link}
          href={`#${link.toLowerCase()}`}
          whileHover={{ color: 'var(--accent)' }}
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
            color: 'var(--textdim)', textDecoration: 'none',
            letterSpacing: '0.06em', transition: 'color 0.2s',
          }}
        >
          {link}
        </motion.a>
      ))}
    </div>
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ repeat: Infinity, duration: 2 }}
      style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
        color: 'var(--accent)', letterSpacing: '0.1em',
      }}
    >
      Dindigul, Tamil Nadu ◎
    </motion.div>
  </footer>
)

export default Footer
