import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import { Education, Contact } from './components/EducationContact'
import Footer from './components/Footer'

/* Loading screen */
const Loader: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const duration = 1800
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setCount(pct)
      if (pct >= 100) {
        clearInterval(timer)
        setTimeout(onDone, 300)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [onDone])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', inset: 0, background: 'var(--bg)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        zIndex: 10000,
      }}
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-display)', fontSize: '4rem',
          fontWeight: 800, letterSpacing: '-0.04em',
          color: 'var(--text)', marginBottom: '3rem',
        }}
      >
        VX<span style={{ color: 'var(--accent)' }}>.</span>
      </motion.div>

      {/* Progress bar */}
      <div style={{
        width: 200, height: 1,
        background: 'var(--border2)',
        borderRadius: 1, overflow: 'hidden',
        marginBottom: '1rem',
      }}>
        <motion.div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
            width: `${count}%`,
            boxShadow: '0 0 8px var(--accent)',
          }}
        />
      </div>

      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
        color: 'var(--textdim)', letterSpacing: '0.1em',
      }}>
        {count.toString().padStart(3, '0')}%
      </div>
    </motion.div>
  )
}

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Cursor />
      <AnimatePresence mode="wait">
        {!loaded && <Loader key="loader" onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      <AnimatePresence>
        {loaded && (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />
            <main>
              <Hero />
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
