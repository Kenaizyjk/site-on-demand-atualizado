import type { Metadata } from "next"
import CinematicIntro from "@/components/cinematic-intro"
import Navigation from "@/components/navigation"
import HeroCinematic from "@/components/hero-cinematic"
import ServicesSimple from "@/components/services-simple"
import GMBShowcase from "@/components/gmb-showcase"
import FAQ from "@/components/faq"
import ContactForm from "@/components/contact-form"
import BlogPreviewHome from "@/components/blog-preview-home"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://ondemanddigital.com.br',
  },
}

export default function Home() {
  return (
    <main id="main-content" className="od-page">
      <CinematicIntro />
      <Navigation />

      {/* 1. Hero */}
      <HeroCinematic />

      {/* 2. Serviços */}
      <ServicesSimple />

      {/* 3. Google Meu Negócio */}
      <GMBShowcase />

      {/* 4. Dúvidas */}
      <FAQ />

      {/* 5. Contato */}
      <ContactForm />

      {/* 6. Blog */}
      <BlogPreviewHome />

      {/* 7. Newsletter */}
      <NewsletterSection />

      <hr className="od-divider" />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
