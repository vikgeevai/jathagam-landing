import { useRef, useEffect } from 'react'
import { ArrowRight, Instagram, Twitter, Globe, Sparkles } from 'lucide-react'

interface Props {
  stripeUrl: string
}

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4'

export default function HeroSection({ stripeUrl }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const fadeAnimRef = useRef<number | null>(null)

  function animateOpacity(
    el: HTMLVideoElement,
    from: number,
    to: number,
    duration: number,
    onDone?: () => void
  ) {
    if (fadeAnimRef.current) cancelAnimationFrame(fadeAnimRef.current)
    const start = performance.now()
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      el.style.opacity = String(from + (to - from) * t)
      if (t < 1) {
        fadeAnimRef.current = requestAnimationFrame(step)
      } else {
        fadeAnimRef.current = null
        onDone?.()
      }
    }
    fadeAnimRef.current = requestAnimationFrame(step)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onCanPlay = () => {
      video.play().catch(() => {})
      animateOpacity(video, 0, 1, 500)
    }

    const onTimeUpdate = () => {
      if (video.duration && video.duration - video.currentTime <= 0.55) {
        const current = parseFloat(video.style.opacity || '1')
        if (current > 0.01) animateOpacity(video, current, 0, 500)
      }
    }

    const onEnded = () => {
      video.style.opacity = '0'
      setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
        animateOpacity(video, 0, 1, 500)
      }, 100)
    }

    video.addEventListener('canplay', onCanPlay)
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)

    return () => {
      video.removeEventListener('canplay', onCanPlay)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
      if (fadeAnimRef.current) cancelAnimationFrame(fadeAnimRef.current)
    }
  }, [])

  return (
    <section className="min-h-screen overflow-hidden relative flex flex-col">
      {/* Background video */}
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        muted
        autoPlay
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
        style={{ opacity: 0 }}
      />

      {/* Deep indigo overlay for text readability */}
      <div className="absolute inset-0 bg-deep-space/50 pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-20 px-4 md:px-6 py-6">
        <div className="liquid-glass rounded-full max-w-5xl mx-auto px-5 py-3 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-gold" />
            <span className="text-cream font-semibold text-lg tracking-tight font-serif">
              Jothidam
            </span>
            <div className="hidden md:flex items-center gap-8 ml-8">
              {['What You Get', 'Pricing', 'Stories'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-cream/70 hover:text-cream text-sm font-medium transition-colors duration-150"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href={stripeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass rounded-full px-5 py-2 text-cream text-sm font-medium hover:bg-gold/5 transition-colors whitespace-nowrap"
            >
              Get Reading
            </a>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[10%] md:-translate-y-[20%]">
        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-cream tracking-tight font-serif leading-none mb-8">
          Your stars,{' '}
          <em className="italic text-gold/90">never lie.</em>
        </h1>

        {/* CTA pill */}
        <div className="max-w-xl w-full liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3 mb-5">
          <span className="flex-1 text-cream/50 text-sm text-left font-body">
            Unlock my Jathagam reading
          </span>
          <a
            href={stripeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold rounded-full p-3 text-deep-space hover:bg-gold-light transition-colors flex-shrink-0 cursor-pointer"
            aria-label="Begin Jathagam reading"
          >
            <ArrowRight size={20} />
          </a>
        </div>

        {/* Subtitle */}
        <p className="text-cream/60 text-sm leading-relaxed px-4 max-w-sm font-body">
          Every decision you're wrestling with today was mapped the moment you
          took your first breath. Stop guessing. Your Jathagam has always known.
        </p>

        {/* Scroll anchor */}
        <a
          href="#pricing"
          className="liquid-glass rounded-full px-8 py-3 text-cream text-sm font-medium hover:bg-gold/5 transition-colors mt-6 inline-block"
        >
          Discover what the stars say ↓
        </a>
      </div>

      {/* Social footer */}
      <div className="relative z-10 flex justify-center gap-4 pb-10">
        {[
          { icon: Instagram, label: 'Instagram' },
          { icon: Twitter, label: 'Twitter' },
          { icon: Globe, label: 'Website' },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            aria-label={label}
            className="liquid-glass rounded-full p-4 text-cream/70 hover:text-cream hover:bg-gold/5 transition-all cursor-pointer"
          >
            <Icon size={20} />
          </button>
        ))}
      </div>
    </section>
  )
}
