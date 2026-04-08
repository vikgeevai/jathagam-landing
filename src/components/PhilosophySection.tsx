import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PHILOSOPHY_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4'

export default function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24 font-serif"
        >
          Ancient Wisdom{' '}
          <em className="italic text-white/40">×</em>{' '}
          Modern Precision
        </motion.h2>

        {/* Two-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left — video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl overflow-hidden"
            style={{ aspectRatio: '4/3' }}
          >
            <video
              src={PHILOSOPHY_VIDEO}
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right — text blocks */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center gap-8"
          >
            {/* Block 1 */}
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
                Your Cosmic Blueprint
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Your Rasi (Moon sign) and Natchatiram (birth star) are not
                symbols — they are the precise fingerprint of your soul. They
                encode your natural strengths, the challenges that will repeat
                until addressed, and the planetary cycles that govern every
                major life transition.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Block 2 */}
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
                Saturn Knows Before You Do
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Every 7.5 years, Sade Sati brings Saturn close to your Rasi.
                Every 30 years, it completes a full cycle. Your Jathagam reading
                shows exactly where you are in that journey — and how to move
                through it with clarity instead of fear.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
