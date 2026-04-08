import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TESTIMONIALS = [
  {
    initials: 'PR',
    name: 'Priya Rajan',
    role: 'Accountant, Tampines',
    quote:
      'I was about to resign and move back to Chennai. My Jathagam reading showed Sade Sati was ending in 4 months. I stayed. The promotion came exactly when predicted. I still can\'t believe it.',
  },
  {
    initials: 'KS',
    name: 'Karthik Subramaniam',
    role: 'Business Owner, Jurong',
    quote:
      'Three business decisions in a year — all felt impossible. The reading revealed my finance domain was at 78 and the timing was auspicious. We signed. Two succeeded, one taught us what we needed to know.',
  },
  {
    initials: 'MV',
    name: 'Malathi Venkatraman',
    role: 'Homemaker, Woodlands',
    quote:
      'My daughter\'s marriage talks kept breaking. The Pariharam remedies were specific — a particular lamp ritual, a particular temple. Three weeks later, a match appeared that we hadn\'t even considered. The stars knew.',
  },
]

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="stories" className="bg-black py-20 md:py-28 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-white/40 text-sm tracking-widest uppercase text-center mb-4"
        >
          From the Tamil community in Singapore
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-3xl md:text-5xl text-white text-center tracking-tight font-serif mb-16"
        >
          When the reading spoke,{' '}
          <em className="italic text-white/60">we listened.</em>
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="liquid-glass rounded-3xl p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 text-amber-400/80 text-sm">
                {'★★★★★'.split('').map((s, idx) => (
                  <span key={idx}>{s}</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/80 text-base leading-relaxed italic mt-4 mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="liquid-glass rounded-full w-10 h-10 flex items-center justify-center text-white/60 text-sm font-medium flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
