import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="what-you-get"
      className="pt-24 md:pt-36 pb-10 md:pb-14 px-6 overflow-hidden"
    >
      {/* Radial gradient overlay */}
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-cream/40 text-sm tracking-widest uppercase mb-6 font-body"
        >
          Tamil Vedic Wisdom
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.1] tracking-tight font-serif"
        >
          The answers you're searching for{' '}
          <em className="italic text-gold/70">have always been there.</em>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          className="text-cream/50 text-base md:text-lg leading-relaxed max-w-2xl mt-8 font-body"
        >
          Before your grandparents made any life-changing decision — marriage,
          migration, career — they consulted the stars first. Jyothisham, the
          5,000-year Tamil science of cosmic light, reveals what no career
          counsellor, therapist, or algorithm can: the precise forces already
          shaping your destiny. Your Jathagam is not fortune-telling. It is a
          precise map, drawn at the exact moment you took your first breath —
          and it has been waiting for you to read it.
        </motion.p>
      </div>
    </section>
  )
}
