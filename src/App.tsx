import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import SidePanel from './components/SidePanel'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import { Education, Contact } from './components/EducationContact'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'

const Loader: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const duration = 900
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setCount(pct)
      if (pct >= 100) {
        clearInterval(timer)
        setTimeout(onDone, 220)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [onDone])

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', inset: 0,
        background: 'var(--bg)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        zIndex: 10000,
      }}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.5rem',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          color: 'var(--text)',
          marginBottom: '1.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: 4,
        }}
      >
        VX
        <span style={{ color: 'var(--accent)' }}>.</span>
      </motion.div>

      <div
        style={{
          width: 180, height: 3,
          background: 'var(--bg-muted)',
          borderRadius: 2, overflow: 'hidden',
          marginBottom: '0.85rem',
        }}
      >
        <motion.div
          style={{
            height: '100%',
            background: 'var(--accent)',
            width: `${count}%`,
          }}
        />
      </div>

      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--text-mid)',
          letterSpacing: '0.1em',
        }}
      >
        Loading portfolio · {count.toString().padStart(3, '0')}%
      </div>
    </motion.div>
  )
}

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <>
      <AnimatePresence mode="wait">
        {!loaded && <Loader key="loader" onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      <AnimatePresence>
        {loaded && (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar theme={theme} onToggleTheme={toggle} />

            <div className="layout">
              <SidePanel theme={theme} onToggleTheme={toggle} />

              <main className="layout-main">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Contact />
              </main>
            </div>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
