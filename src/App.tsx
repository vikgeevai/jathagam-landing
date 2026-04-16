import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FeaturedVideoSection from './components/FeaturedVideoSection'
import ServicesSection from './components/ServicesSection'
import PricingSection from './components/PricingSection'
import TestimonialsSection from './components/TestimonialsSection'
import FooterCTA from './components/FooterCTA'

const STRIPE_URL = 'https://buy.stripe.com/28EbIVg1781Ie77aQabMQ04'

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection stripeUrl={STRIPE_URL} />
      <PricingSection stripeUrl={STRIPE_URL} />
      <AboutSection />
      <FeaturedVideoSection stripeUrl={STRIPE_URL} />
      <ServicesSection stripeUrl={STRIPE_URL} />
      <TestimonialsSection />
      <FooterCTA stripeUrl={STRIPE_URL} />
    </main>
  )
}
