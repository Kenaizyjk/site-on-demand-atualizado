import Navigation from "@/components/navigation"
import HeroCinematic from "@/components/hero-cinematic"
import ServicesSimple from "@/components/services-simple"
import ManifestoStrip from "@/components/manifesto-strip"
import TechStack from "@/components/tech-stack"
import GMBShowcase from "@/components/gmb-showcase"
import BlogPreviewHome from "@/components/blog-preview-home"
import NewsletterSection from "@/components/newsletter-section"
import FAQ from "@/components/faq"
import ContactForm from "@/components/contact-form"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="od-page">
      <Navigation />

      {/* 1. Hero */}
      <HeroCinematic />

      {/* 2. Serviços */}
      <ServicesSimple />

      {/* 3. Como Trabalhamos */}
      <ManifestoStrip />
      <TechStack />

      {/* 4. Google Meu Negócio */}
      <GMBShowcase />

      {/* 5. Blog */}
      <BlogPreviewHome />

      {/* 6. Newsletter */}
      <NewsletterSection />

      {/* 7. Dúvidas */}
      <FAQ />

      {/* 8. Contato */}
      <ContactForm />

      {/* 9. CTA Final */}
      <FinalCTA />

      <hr className="od-divider" />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
