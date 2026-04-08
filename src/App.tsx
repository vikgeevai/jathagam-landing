import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FeaturedVideoSection from './components/FeaturedVideoSection'
import PhilosophySection from './components/PhilosophySection'
import ServicesSection from './components/ServicesSection'
import PricingSection from './components/PricingSection'
import TestimonialsSection from './components/TestimonialsSection'
import FooterCTA from './components/FooterCTA'

const READING_URL = 'https://jathagam-reading-system.vercel.app'

export default function App() {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      <HeroSection readingUrl={READING_URL} />
      <AboutSection />
      <FeaturedVideoSection readingUrl={READING_URL} />
      <PhilosophySection />
      <ServicesSection />
      <PricingSection readingUrl={READING_URL} />
      <TestimonialsSection />
      <FooterCTA readingUrl={READING_URL} />
    </main>
  )
}
