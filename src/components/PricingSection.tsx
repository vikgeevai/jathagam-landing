import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'

interface Props {
  stripeUrl: string
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

export default function PricingSection({ stripeUrl }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pricing" className="py-20 md:py-32 px-6">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-cream/40 text-sm tracking-widest uppercase mb-6 font-body"
        >
          Your entire cosmic blueprint — one time, $50 SGD
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl text-cream tracking-tight font-serif leading-tight"
        >
          One reading.{' '}
          <em className="italic text-gold/80">Stop living in the dark.</em>
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
              <span className="liquid-glass rounded-full px-4 py-1.5 text-gold/90 text-xs tracking-widest uppercase inline-block w-fit font-body">
                ✦ 50% OFF TODAY
              </span>
              <div className="flex items-baseline gap-3 flex-wrap">
                <s className="text-cream/30 text-2xl font-serif">$100 SGD</s>
                <span className="text-cream text-6xl md:text-7xl font-serif tracking-tight leading-none">
                  $50
                </span>
                <div className="flex flex-col">
                  <span className="text-cream text-lg font-serif">SGD</span>
                  <span className="text-cream/40 text-sm font-body">one-time</span>
                </div>
              </div>
            </div>

            {/* Trust signals */}
            <div className="flex flex-col gap-1 text-right">
              <span className="text-cream/40 text-xs font-body">✓ Instant access</span>
              <span className="text-cream/40 text-xs font-body">✓ No subscription</span>
              <span className="text-cream/40 text-xs font-body">✓ No account needed</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gold/10 mb-8" />

          {/* Deliverables */}
          <p className="text-cream/40 text-xs tracking-widest uppercase mb-6 font-body">
            What's included
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
            {DELIVERABLES.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check size={16} className="text-gold/60 mt-0.5 flex-shrink-0" />
                <span className="text-cream/70 text-sm leading-relaxed font-body">{item}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gold/10 mb-8" />

          {/* CTA button */}
          <motion.a
            href={stripeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full bg-gold text-deep-space rounded-full py-5 text-center text-lg font-medium tracking-tight cursor-pointer hover:bg-gold-light transition-colors font-serif"
          >
            Claim My Reading for $50 SGD →
          </motion.a>

          <p className="text-cream/30 text-xs text-center mt-4 font-body">
            Secure payment via Stripe. No subscription. Instant access. Offer valid while available.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
