import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { PROFILE, STATS } from '../data'
import type { Stat } from '../types'

const StatCard: React.FC<{ stat: Stat; delay: number }> = ({ stat, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="card"
      style={{
        padding: '1.1rem 1.15rem',
        borderRadius: 12,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.4rem, 2vw, 1.7rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          lineHeight: 1.1,
        }}
      >
        {stat.prefix && <span style={{ color: 'var(--accent)' }}>{stat.prefix}</span>}
        {inView ? <CountUp end={stat.value} duration={1.6} delay={delay} /> : '0'}
        <span style={{ color: 'var(--accent)' }}>{stat.suffix}</span>
      </div>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.7rem',
          fontWeight: 600,
          color: 'var(--text-soft)',
          marginTop: 6,
          letterSpacing: '0.02em',
        }}
      >
        {stat.label}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.68rem',
          color: 'var(--text-mid)',
          marginTop: 2,
        }}
      >
        {stat.description}
      </div>
    </motion.div>
  )
}

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="hero-mobile-only"
      style={{
        position: 'relative',
        padding: 'clamp(7rem, 12vh, 9rem) clamp(1.25rem, 5vw, 4rem) clamp(4rem, 8vh, 6rem)',
        maxWidth: 1280,
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      {/* Soft background blobs */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -120, right: -120,
            width: 380, height: 380,
            borderRadius: '50%',
            background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 20%, transparent) 0%, transparent 65%)',
            filter: 'blur(20px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -160, left: -100,
            width: 380, height: 380,
            borderRadius: '50%',
            background: 'radial-gradient(circle, color-mix(in srgb, var(--accent-3) 16%, transparent) 0%, transparent 65%)',
            filter: 'blur(24px)',
          }}
        />
      </div>

      <div
        className="hero-grid"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1.25fr 1fr',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'center',
        }}
      >
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 14px',
              borderRadius: 999,
              border: '1px solid color-mix(in srgb, var(--accent-3) 30%, transparent)',
              background: 'color-mix(in srgb, var(--accent-3) 10%, transparent)',
              color: 'var(--accent-3)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
            }}
          >
            <span
              style={{
                width: 7, height: 7, borderRadius: '50%',
                background: 'var(--accent-3)',
                display: 'inline-block',
                boxShadow: '0 0 0 4px color-mix(in srgb, var(--accent-3) 20%, transparent)',
              }}
            />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5.6vw, 4.4rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
              color: 'var(--text)',
              marginBottom: '1rem',
            }}
          >
            {PROFILE.firstName} {PROFILE.lastName}
            <span style={{ color: 'var(--accent)' }}>.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              fontWeight: 600,
              color: 'var(--accent)',
              marginBottom: '1.25rem',
            }}
          >
            <span
              style={{
                width: 22, height: 1,
                background: 'var(--accent)',
                display: 'inline-block',
              }}
            />
            {PROFILE.role}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
              color: 'var(--text-soft)',
              maxWidth: 560,
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
          >
            {PROFILE.tagline} 3+ years delivering enterprise and healthcare apps for real clients — JWT-secured APIs, 40% faster queries, React frontends and mobile apps that actually shipped.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{
              display: 'flex',
              gap: '0.85rem',
              flexWrap: 'wrap',
              marginBottom: '2.5rem',
            }}
          >
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 600,
                background: 'var(--accent)',
                color: '#ffffff',
                padding: '12px 22px',
                borderRadius: 999,
                boxShadow: '0 8px 22px color-mix(in srgb, var(--accent) 28%, transparent)',
                transition: 'transform 0.18s, box-shadow 0.18s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 12px 28px color-mix(in srgb, var(--accent) 38%, transparent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 22px color-mix(in srgb, var(--accent) 28%, transparent)'
              }}
            >
              View Projects <span aria-hidden>→</span>
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--text)',
                background: 'var(--bg-elev)',
                border: '1px solid var(--border)',
                padding: '12px 22px',
                borderRadius: 999,
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-strong)'
                e.currentTarget.style.background = 'var(--bg-soft)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.background = 'var(--bg-elev)'
              }}
            >
              <span aria-hidden>✉</span> Get in Touch
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--text-soft)',
                background: 'transparent',
                border: '1px solid var(--border)',
                padding: '12px 22px',
                borderRadius: 999,
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--accent)'
                e.currentTarget.style.borderColor = 'var(--accent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-soft)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              LinkedIn <span aria-hidden>↗</span>
            </a>
          </motion.div>

          <div
            className="hero-stats"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '0.75rem',
              maxWidth: 620,
            }}
          >
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} delay={0.45 + i * 0.06} />
            ))}
          </div>
        </div>

        {/* Right: profile picture column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-portrait"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: 'clamp(260px, 32vw, 380px)',
              aspectRatio: '1 / 1',
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: -14,
                borderRadius: 28,
                background:
                  'linear-gradient(135deg, color-mix(in srgb, var(--accent) 35%, transparent), color-mix(in srgb, var(--accent-3) 25%, transparent))',
                filter: 'blur(2px)',
                opacity: 0.7,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: 24,
                overflow: 'hidden',
                background: 'var(--bg-soft)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <img
                src={PROFILE.avatar}
                alt={`${PROFILE.firstName} ${PROFILE.lastName} portrait`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="card"
              style={{
                position: 'absolute',
                left: -22, bottom: 28,
                padding: '10px 14px',
                borderRadius: 12,
                fontFamily: 'var(--font-sans)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: 'var(--bg-elev)',
              }}
            >
              <span
                style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: 'color-mix(in srgb, var(--accent) 14%, transparent)',
                  color: 'var(--accent)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700,
                }}
              >
                ⚛
              </span>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text)' }}>
                  React + .NET
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-mid)' }}>
                  Full-stack delivery
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="card"
              style={{
                position: 'absolute',
                right: -18, top: 24,
                padding: '10px 14px',
                borderRadius: 12,
                fontFamily: 'var(--font-sans)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: 'var(--bg-elev)',
              }}
            >
              <span
                style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: 'color-mix(in srgb, var(--accent-3) 16%, transparent)',
                  color: 'var(--accent-3)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700,
                }}
              >
                ⬡
              </span>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text)' }}>
                  40% faster queries
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-mid)' }}>
                  PostgreSQL · MSSQL
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-portrait { order: -1; margin-bottom: 0.5rem; }
          .hero-stats { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 420px) {
          .hero-stats { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
      `}</style>
    </section>
  )
}

export default Hero
