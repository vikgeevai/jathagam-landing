import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'

interface Props {
  readingUrl: string
}

const DELIVERABLES = [
  'Chaldean & Vedic numerology deep-read',
  'Destiny, Soul Urge & Personality numbers',
  'Hora Lord & Lagna (birth ascendant) analysis',
  'Life domain scores — Career, Health, Finance, Family, Business',
  'Top 10 positive predictions for your year ahead',
  'Top 10 warnings & how to navigate them',
  'Personalised Do\'s, Don\'ts & situational remedies',
  'Full Pariharam — deity, mantra, lamp ritual, temple activity',
  '4-week monthly Pariharam calendar',
  'Auto-detected Rasi (Moon sign) & Natchatiram (birth star)',
  'Complete Sani cycle — current phase, end date, next Sade Sati',
  'Full plain-text report to save & share',
]

export default function PricingSection({ readingUrl }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pricing" className="bg-black py-28 md:py-40 px-6">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-white/40 text-sm tracking-widest uppercase mb-6"
        >
          One-Time Reading
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl text-white tracking-tight font-serif leading-tight"
        >
          One reading.{' '}
          <em className="italic text-white/60">A lifetime of clarity.</em>
        </motion.h2>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass rounded-3xl p-8 md:p-12 mt-12 text-left"
        >
          {/* Badge + price row */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div className="flex flex-col gap-3">
              <span className="liquid-glass rounded-full px-4 py-1.5 text-white/80 text-xs tracking-widest uppercase inline-block w-fit">
                ✦ 50% OFF TODAY
              </span>
              <div className="flex items-baseline gap-3 flex-wrap">
                <s className="text-white/30 text-2xl font-serif">$100 SGD</s>
                <span className="text-white text-6xl md:text-7xl font-serif tracking-tight leading-none">
                  $50
                </span>
                <div className="flex flex-col">
                  <span className="text-white text-lg font-serif">SGD</span>
                  <span className="text-white/40 text-sm">one-time</span>
                </div>
              </div>
            </div>

            {/* Trust signals */}
            <div className="flex flex-col gap-1 text-right">
              <span className="text-white/40 text-xs">✓ Instant access</span>
              <span className="text-white/40 text-xs">✓ No subscription</span>
              <span className="text-white/40 text-xs">✓ No account needed</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-8" />

          {/* Deliverables */}
          <p className="text-white/40 text-xs tracking-widest uppercase mb-6">
            What's included
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
            {DELIVERABLES.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check size={16} className="text-white/50 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-8" />

          {/* CTA button */}
          <motion.a
            href={readingUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full bg-white text-black rounded-full py-5 text-center text-lg font-medium tracking-tight cursor-pointer hover:bg-white/90 transition-colors"
          >
            Claim My Reading for $50 SGD →
          </motion.a>

          <p className="text-white/30 text-xs text-center mt-4">
            No subscription. No account needed. Instant access. Offer valid while available.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
