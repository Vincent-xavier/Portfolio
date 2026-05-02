import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { STATS } from '../data'

/* Particle canvas */
const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight
    let mouse = { x: W / 2, y: H / 2 }

    const onResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    const onMouse = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY }
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouse)

    type Particle = {
      x: number; y: number; ox: number; oy: number;
      vx: number; vy: number; size: number; alpha: number; color: string;
    }

    const colors = ['#00ff87', '#7c6dfa', '#ffffff', '#38bdf8']
    const particles: Particle[] = Array.from({ length: 80 }, () => {
      const x = Math.random() * W
      const y = Math.random() * H
      return {
        x, y, ox: x, oy: y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      }
    })

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          const force = (150 - dist) / 150
          p.vx -= (dx / dist) * force * 0.5
          p.vy -= (dy / dist) * force * 0.5
        }
        p.vx += (p.ox - p.x) * 0.005
        p.vy += (p.oy - p.y) * 0.005
        p.vx *= 0.95
        p.vy *= 0.95
        p.x += p.vx
        p.y += p.vy

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
        ctx.globalAlpha = 1
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = '#00ff87'
            ctx.globalAlpha = (1 - d / 100) * 0.08
            ctx.lineWidth = 0.5
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.6 }}
    />
  )
}

/* Stat card */
const StatCard: React.FC<{ stat: typeof STATS[0]; delay: number }> = ({ stat, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.04, borderColor: 'rgba(0,255,135,0.3)' }}
      style={{
        background: 'var(--bg2)',
        border: '1px solid var(--border2)',
        borderRadius: 4,
        padding: '1.75rem 1.5rem',
        cursor: 'default',
        transition: 'border-color 0.3s',
      }}
    >
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 3vw, 2.8rem)',
        fontWeight: 800,
        letterSpacing: '-0.04em',
        lineHeight: 1,
        marginBottom: '0.4rem',
        color: 'var(--text)',
      }}>
        {stat.prefix && <span style={{ color: 'var(--accent)', fontSize: '0.65em' }}>{stat.prefix}</span>}
        {inView ? (
          <CountUp end={stat.value} duration={2} delay={delay} />
        ) : '0'}
        <span style={{ color: 'var(--accent)' }}>{stat.suffix}</span>
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
        color: 'var(--textdim)', textTransform: 'uppercase', letterSpacing: '0.1em',
        marginBottom: '0.25rem',
      }}>
        {stat.label}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#444458' }}>
        {stat.description}
      </div>
    </motion.div>
  )
}

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh', position: 'relative',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', overflow: 'hidden',
        padding: '8rem 6rem 4rem',
      }}
    >
      <ParticleCanvas />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 80% 70% at 30% 50%, black 20%, transparent 80%)',
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,255,135,0.06) 0%, transparent 70%)',
        zIndex: 1, pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 900 }}>
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--accent)', marginBottom: '2.5rem',
            border: '1px solid rgba(0,255,135,0.2)',
            background: 'rgba(0,255,135,0.05)',
            padding: '6px 16px', borderRadius: 2,
          }}
        >
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'var(--accent)', display: 'inline-block',
            }}
          />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
            fontWeight: 800, lineHeight: 0.95,
            letterSpacing: '-0.04em',
            marginBottom: '0.5rem',
          }}
        >
          Vincent
          <br />
          <span style={{
            WebkitTextStroke: '2px rgba(255,255,255,0.3)',
            color: 'transparent',
          }}>Xavier</span>
          <span style={{ color: 'var(--accent)' }}>.</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.9rem, 2vw, 1.15rem)',
            color: 'var(--textdim)', marginBottom: '2rem',
            display: 'flex', alignItems: 'center', gap: 12,
          }}
        >
          <span style={{ color: 'var(--accent2)' }}>$</span>
          <TypeAnimation
            sequence={[
              'Full Stack .NET + React Developer',
              2000,
              'Building Secure Enterprise APIs',
              2000,
              'Optimizing PostgreSQL Performance',
              2000,
              'Shipping Production-Grade UIs',
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ color: 'var(--textmid)' }}
          />
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.9rem',
            color: 'var(--textdim)', maxWidth: 560,
            lineHeight: 1.85, marginBottom: '3rem',
          }}
        >
          3+ years delivering enterprise and healthcare apps for real clients. JWT-secured APIs, 40% faster queries, React frontends, mobile apps — all shipped and live.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '5rem' }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(0,255,135,0.3)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.06em',
              background: 'var(--accent)', color: '#07070a',
              padding: '14px 32px', borderRadius: 2, fontWeight: 500,
              textDecoration: 'none', display: 'inline-block',
              transition: 'box-shadow 0.3s',
            }}
          >
            View Projects →
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.3)', color: 'var(--text)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.06em',
              border: '1px solid var(--border2)', color: 'var(--textdim)',
              padding: '14px 32px', borderRadius: 2,
              textDecoration: 'none', display: 'inline-block',
              transition: 'all 0.2s',
            }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/vincent-xavier26"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04, borderColor: 'var(--accent2)', color: 'var(--accent2)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.06em',
              border: '1px solid var(--border)', color: 'var(--textdim)',
              padding: '14px 32px', borderRadius: 2,
              textDecoration: 'none', display: 'inline-block',
              transition: 'all 0.2s',
            }}
          >
            LinkedIn ↗
          </motion.a>
        </motion.div>

        {/* Stats grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          background: 'var(--border)',
          border: '1px solid var(--border2)',
          borderRadius: 4, overflow: 'hidden',
          maxWidth: 700,
        }}>
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={1.8 + i * 0.1} />
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{
          position: 'absolute', bottom: 40, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          zIndex: 2,
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--textdim)', letterSpacing: '0.1em' }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{
            width: 1, height: 40,
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
          }}
        />
      </motion.div>
    </section>
  )
}

export default Hero
