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
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        style={{ opacity: 0 }}
      />

      {/* Deep indigo overlay */}
      <div className="absolute inset-0 bg-deep-space/55 pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-20 px-4 md:px-6 pt-5 pb-4">
        <div className="liquid-glass rounded-full max-w-4xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
          {/* Logo — flex-shrink-0 prevents it from being squeezed */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Sparkles size={18} className="text-gold" />
            <span className="text-cream font-semibold text-base tracking-tight font-serif">
              Jothidam
            </span>
          </div>

          {/* Desktop nav links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-6">
            {[['What You Get', '#what-you-get'], ['Pricing', '#pricing'], ['Stories', '#stories']].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-cream/60 hover:text-cream text-sm transition-colors duration-150 font-body"
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href={stripeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full px-4 md:px-5 py-2 text-cream text-xs md:text-sm font-medium hover:bg-gold/5 transition-colors whitespace-nowrap flex-shrink-0"
          >
            Get Reading
          </a>
        </div>
      </nav>

      {/* Hero content — flex-1 centres vertically without translate hacks */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pb-16 text-center">

        {/* Headline — single h1, two block spans = tight two-line layout */}
        <h1 className="font-body font-normal mb-5 leading-[1.15]">
          <span className="block text-cream text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Your stars,
          </span>
          <em className="block text-gold/90 italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            never lie.
          </em>
        </h1>

        {/* Subtitle — narrow, calm */}
        <p className="text-cream/55 text-sm md:text-[0.95rem] leading-relaxed max-w-[17rem] md:max-w-xs font-body mb-8">
          The stars encoded your destiny the moment you were born.
          Your Jathagam holds the clarity you've been searching for.
        </p>

        {/* CTA pill — compact */}
        <div className="w-full max-w-[18rem] md:max-w-xs liquid-glass rounded-full pl-5 pr-1.5 py-1.5 flex items-center gap-3 mb-5">
          <span className="flex-1 text-cream/50 text-sm text-left font-body">
            Receive my Jathagam reading
          </span>
          <a
            href={stripeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold rounded-full p-2.5 text-deep-space hover:bg-gold-light transition-colors flex-shrink-0"
            aria-label="Begin Jathagam reading"
          >
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Scroll cue */}
        <a
          href="#pricing"
          className="text-cream/35 text-xs tracking-widest uppercase font-body hover:text-cream/55 transition-colors"
        >
          See what awaits you ↓
        </a>
      </div>

      {/* Social icons */}
      <div className="relative z-10 flex justify-center gap-3 pb-8">
        {[
          { icon: Instagram, label: 'Instagram' },
          { icon: Twitter, label: 'Twitter' },
          { icon: Globe, label: 'Website' },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            aria-label={label}
            className="liquid-glass rounded-full p-3 text-cream/60 hover:text-cream hover:bg-gold/5 transition-all cursor-pointer"
          >
            <Icon size={18} />
          </button>
        ))}
      </div>
    </section>
  )
}
