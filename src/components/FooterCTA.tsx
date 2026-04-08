import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  readingUrl: string
}

export default function FooterCTA({ readingUrl }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <footer className="bg-black py-28 md:py-40 px-6">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        {/* Big lines */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl text-white font-serif tracking-tight leading-tight"
        >
          Your stars are aligned.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-serif tracking-tight text-white/40 italic leading-tight"
        >
          Are you?
        </motion.p>

        {/* CTA */}
        <motion.a
          href={readingUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="liquid-glass rounded-full px-10 py-4 text-white text-base font-medium mt-12 inline-block cursor-pointer hover:bg-white/5 transition-colors"
        >
          Begin My Jathagam Reading →
        </motion.a>

        {/* Copyright */}
        <p className="text-white/20 text-xs mt-16 leading-relaxed">
          © 2026 Jothidam · Tamil Vedic Jathagam Readings · Singapore
          <br />
          Readings are for guidance and self-reflection. Results may vary.
        </p>
      </div>
    </footer>
  )
}
