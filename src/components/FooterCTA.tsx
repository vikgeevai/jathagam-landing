import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  stripeUrl: string
}

export default function FooterCTA({ stripeUrl }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <footer className="py-28 md:py-40 px-6">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        {/* Big lines */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl text-cream font-serif tracking-tight leading-tight"
        >
          Your stars are aligned.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-serif tracking-tight text-gold/50 italic leading-tight"
        >
          It's time to read them.
        </motion.p>

        {/* CTA */}
        <motion.a
          href={stripeUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gold text-deep-space rounded-full px-10 py-4 text-base font-medium mt-12 inline-block cursor-pointer hover:bg-gold-light transition-colors font-serif"
        >
          Begin My Jathagam Reading →
        </motion.a>

        {/* Copyright */}
        <p className="text-cream/20 text-xs mt-16 leading-relaxed font-body">
          © 2026 Jothidam · Tamil Vedic Jathagam Readings · Singapore
          <br />
          Readings are for guidance and self-reflection. Results may vary.
        </p>
      </div>
    </footer>
  )
}
