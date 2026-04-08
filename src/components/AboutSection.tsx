import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="what-you-get"
      className="bg-black pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden"
    >
      {/* Radial gradient overlay */}
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-white/40 text-sm tracking-widest uppercase mb-6"
        >
          Tamil Vedic Wisdom
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight font-serif"
        >
          Ancient{' '}
          <em className="italic text-white/60">clarity</em>{' '}
          for
          <br className="hidden md:block" />{' '}
          minds that{' '}
          <em className="italic text-white/60">seek direction.</em>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mt-8"
        >
          For over 5,000 years, Jyothisham — the sacred Tamil science of light —
          has revealed what no career counsellor, therapist, or life coach can:
          the precise cosmic forces that shape your destiny. Your Jathagam is not
          fortune-telling. It is a precise map drawn at the exact moment you took
          your first breath.
        </motion.p>
      </div>
    </section>
  )
}
