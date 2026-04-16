import Navigation from "@/components/navigation"
import HeroCinematic from "@/components/hero-cinematic"
import ServicesSimple from "@/components/services-simple"
import MiniCases from "@/components/mini-cases"
import FAQ from "@/components/faq"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="od-page">
      <Navigation />

      {/* 1. Hero */}
      <div className="od-reveal-section">
        <HeroCinematic />
      </div>

      <hr className="od-divider" />

      {/* 2. Serviços */}
      <ServicesSimple />

      <hr className="od-divider" />

      {/* 3. Mini Cases */}
      <MiniCases />

      <hr className="od-divider" />

      {/* 4. Dúvidas */}
      <FAQ />

      <hr className="od-divider" />

      {/* 5. CTA Final */}
      <FinalCTA />

      <hr className="od-divider" />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
