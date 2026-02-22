/**
 * Página Principal (Home) - Design Limpo e Profissional
 * Nova Paleta: Slate + Cyan | Modelo: Consultoria Personalizada
 *
 * Estrutura otimizada com fluxo lógico:
 * 1. Navigation (glassmorphism)
 * 2. Hero Section (gradiente aurora)
 * 3. Serviços - O QUE FAZEMOS
 * 4. Valores/Diferencial
 * 5. AI Stack (4 ferramentas de IA)
 * 6. Automações n8n (3 fluxos)
 * 7. GMB Showcase (leads gratuitos)
 * 8. Minha História (fundador)
 * 9. ChatBot Inteligente (demo interativa)
 * 10. Depoimentos (prova social)
 * 11. FAQ (accordion)
 * 12. CTA Final
 * 13. Footer (minimalista)
 */

import Navigation from "@/components/navigation"
import HeroPremium from "@/components/hero-premium"
import ValueProposition from "@/components/value-proposition"
import ServicesSimple from "@/components/services-simple"
import AIStackProfessional from "@/components/ai-stack-professional"
import AutomationN8NShowcase from "@/components/automation-n8n-showcase"
import GMBShowcase from "@/components/gmb-showcase"
import FounderStory from "@/components/founder-story"
import ChatbotLiveSection from "@/components/chatbot-live-section"

import BlogPreviewHome from "@/components/blog-preview-home"
import FAQ from "@/components/faq"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="od-page">
      <Navigation />

      {/* 1. Hero - Promessa clara + Botão CTA */}
      <HeroPremium />

      {/* 2. Serviços - O QUE FAZEMOS (contexto imediato) */}
      <ServicesSimple />

      {/* 3. Valores/Diferencial - Por que escolher a On Demand */}
      <ValueProposition />

      {/* 4. AI Stack - Ferramentas de Inteligência Artificial */}
      <AIStackProfessional />

      {/* 5. Automações - Fluxos n8n com GIFs */}
      <AutomationN8NShowcase />

      {/* 6. GMB Showcase - Google Meu Negócio */}
      <GMBShowcase />

      {/* 7. Minha História - Quem sou e por que faço isso */}
      <FounderStory />

      {/* 8. ChatBot Inteligente - Demo Interativa */}
      <ChatbotLiveSection />


      {/* 9. Blog Preview - Artigos Recentes */}
      <BlogPreviewHome />

      {/* 10. FAQ - Perguntas frequentes */}
      <FAQ />

      {/* 11. CTA Final - Último empurrão para conversão */}
      <FinalCTA />

      {/* 12. Footer - Minimalista */}
      <Footer />

      {/* WhatsApp Flutuante */}
      <WhatsAppFloat />

      {/* Chat AI Demo removed (floating IA button removed) */}
    </main>
  )
}


