import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  readingUrl: string
}

const FEATURED_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4'

export default function FeaturedVideoSection({ readingUrl }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl overflow-hidden relative"
          style={{ aspectRatio: '16/9' }}
        >
          <video
            src={FEATURED_VIDEO}
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Bottom overlay content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row items-end justify-between gap-4">
            {/* Info card */}
            <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md w-full md:w-auto">
              <p className="text-white/50 text-xs tracking-widest uppercase mb-3">
                What Your Reading Reveals
              </p>
              <p className="text-white text-sm md:text-base leading-relaxed">
                10 comprehensive sections. Your numerology, Hora &amp; Lagna,
                life domain scores, top&nbsp;10 predictions, Saturn cycles, Rasi
                &amp; Natchatiram deep-reads, personalised Pariharam remedies —
                and a full text report you can keep forever.
              </p>
            </div>

            {/* CTA */}
            <motion.a
              href={readingUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors whitespace-nowrap cursor-pointer flex-shrink-0"
            >
              Get My Reading →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
