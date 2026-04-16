import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface Props {
  stripeUrl: string
}

const CARD_1_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'
const CARD_2_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4'

const CARDS = [
  {
    video: CARD_1_VIDEO,
    tag: 'Identity',
    title: 'Rasi & Natchatiram Reading',
    description:
      'Discover exactly who you are at a cosmic level — your Moon sign, birth star, dasha lord, planetary strengths, life domain scores, and the personalised remedies that unlock your potential.',
  },
  {
    video: CARD_2_VIDEO,
    tag: 'Foresight',
    title: 'Saturn Cycle & Predictions',
    description:
      'Know your current Sani phase (Sade Sati, Ashtama, or clear), the exact date it ends, your top 10 blessings incoming, top 10 warnings to guard against — and your divine Pariharam remedy plan.',
  },
]

export default function ServicesSection({ stripeUrl }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="what-you-get" className="py-20 md:py-32 px-6 overflow-hidden relative">
      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex items-end justify-between mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-cream tracking-tight font-serif">
            What you receive
          </h2>
          <span className="hidden md:block text-cream/40 text-sm font-body">
            Your complete reading
          </span>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {CARDS.map((card, i) => (
            <motion.a
              key={card.tag}
              href={stripeUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Video */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <video
                  src={card.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-space/60 to-transparent pointer-events-none" />
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cream/40 text-xs tracking-widest uppercase font-body">
                    {card.tag}
                  </span>
                  <div className="liquid-glass rounded-full p-2">
                    <ArrowUpRight size={16} className="text-gold/70" />
                  </div>
                </div>
                <h3 className="text-cream text-xl md:text-2xl mb-3 tracking-tight font-serif">
                  {card.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed font-body">
                  {card.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
