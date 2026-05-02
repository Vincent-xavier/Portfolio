import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { NAV_ITEMS } from '../data'

const Navbar: React.FC = () => {
  const { progress, scrollY } = useScrollProgress()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
          height: 64,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 3rem',
          background: scrollY > 40 ? 'rgba(7,7,10,0.92)' : 'transparent',
          backdropFilter: scrollY > 40 ? 'blur(20px)' : 'none',
          borderBottom: scrollY > 40 ? '1px solid rgba(255,255,255,0.06)' : 'none',
          transition: 'background 0.4s, backdrop-filter 0.4s, border 0.4s',
        }}
      >
        {/* Logo */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: '1.2rem', letterSpacing: '-0.03em',
            textDecoration: 'none', color: 'var(--text)',
            display: 'flex', alignItems: 'center', gap: 4,
          }}
        >
          VX
          <span style={{ color: 'var(--accent)', display: 'inline-block' }}>.</span>
        </motion.a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {NAV_ITEMS.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.07 }}
              whileHover={{ color: 'var(--accent)' }}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                color: 'var(--textdim)', textDecoration: 'none',
                letterSpacing: '0.06em', transition: 'color 0.2s',
              }}
            >
              {item.label}
            </motion.a>
          ))}

          <motion.a
            href="mailto:vincentxavier2602@gmail.com"
            whileHover={{ scale: 1.05, backgroundColor: 'var(--accent)', color: '#07070a' }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
              border: '1px solid var(--accent)', color: 'var(--accent)',
              padding: '8px 20px', borderRadius: 2,
              textDecoration: 'none', letterSpacing: '0.08em',
              transition: 'all 0.2s', fontWeight: 500,
            }}
          >
            Hire Me
          </motion.a>
        </div>
      </motion.nav>

      {/* Scroll progress bar */}
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, height: 2,
          background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
          width: `${progress * 100}%`,
          zIndex: 999, transformOrigin: 'left',
          boxShadow: '0 0 10px var(--accent)',
        }}
      />
    </>
  )
}

export default Navbar
