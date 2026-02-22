"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  ChevronDown,
  ChevronUp,
  TrendingUp,
  TrendingDown,
  Calendar,
  DollarSign,
  Users,
  Target,
  Zap,
  CheckCircle,
  Play,
  X,
  Download,
  Linkedin,
  MessageCircle,
  Mail,
  FileText,
  ArrowRight,
  ExternalLink,
  BadgeCheck,
  BarChart3,
  ShoppingCart,
  Heart,
  Home,
  Filter,
  Clock,
  Award,
  Copy,
} from "lucide-react"
import * as Dialog from "@radix-ui/react-dialog"

// ============================================================================
// TIPOS E DADOS
// ============================================================================

interface Timeline {
  month: string
  revenue: string
  revenueValue: number
}

interface BeforeAfter {
  revenue: string
  revenueValue: number
  leads: number
  conversion: number
  cpl: number
  roas: number
  extra?: string
}

interface Phase {
  title: string
  week: string
  items: string[]
}

interface Screenshot {
  title: string
  description: string
  image: string
}

interface CaseStudy {
  id: string
  slug: string
  // Header
  logo: string
  clientName: string
  segment: string
  period: string
  verified: boolean
  verifiedDate: string
  color: string
  icon: React.ReactNode

  // Card Collapsed
  shortDescription: string
  mainMetric: string

  // Situao Inicial
  challenges: string[]
  beforeMetrics: BeforeAfter

  // Soluo
  phases: Phase[]

  // Timeline
  timeline: Timeline[]

  // Resultados
  afterMetrics: BeforeAfter
  improvements: {
    revenue: number
    leads: number
    conversion: number
    cpl: number
    roas: number
  }

  // Depoimento
  testimonial: {
    quote: string
    author: string
    role: string
    videoUrl: string
    videoDuration: string
    thumbnail: string
  }

  // Screenshots
  screenshots: Screenshot[]

  // ROI
  investment: number
  totalReturn: number
  roi: number
  timeSaved: string
  salarySaved: number
  extraGains: string[]

  // Links
  linkedinUrl: string
  auditedBy: string
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "ecommerce-moda-280k",
    logo: "=",
    clientName: "Boutique Estilo BR",
    segment: "E-commerce Moda Feminina",
    period: "Ago/2023 - Dez/2023 (5 mÃªses)",
    verified: true,
    verifiedDate: "12/11/2024",
    color: "#ff006e",
    icon: <ShoppingCart className="w-6 h-6" />,
    shortDescription: "E-commerce de Moda Feminina - So Paulo",
    mainMetric: "DE R$ 45K  R$ 280K/MS (+522%)",

    challenges: [
      "TrÃ¡fego pago queimando budget (R$ 15k/mÃªs, ROAS 1.2x)",
      "78% carrinho abandonado (mÃ©dia e-commerce: 69%)",
      "Sem automaÃ§Ã£o pÃ³s-compra",
      "Atendimento manual sobrecarregado",
      "Zero remarketing estruturado",
      "Site lento (4.2s carregamento)",
    ],

    beforeMetrics: {
      revenue: "R$ 45.000/mÃªs",
      revenueValue: 45000,
      leads: 280,
      conversion: 2.1,
      cpl: 42,
      roas: 1.2,
      extra: "Ticket mÃ©dio: R$ 187",
    },

    phases: [
      {
        title: "DiagnÃ³stico",
        week: "Semana 1",
        items: [
          "Auditoria completa do funil de vendas",
          "Mapeamento jornada do cliente",
          "AnÃ¡lise concorrÃªncia (15 players)",
          "DefiniÃ§Ã£o KPIs e metas",
          "IdentificaÃ§Ã£o gargalos crÃ­ticos",
        ],
      },
      {
        title: "Setup TÃ©cnico",
        week: "Semanas 2-3",
        items: [
          "Landing pages de alta conversÃ£o (4 modelos)",
          "OtimizaÃ§Ã£o checkout one-page",
          "IntegraÃ§Ã£o n8n com Nuvemshop",
          "Pixel Meta + Google configurados",
          "OtimizaÃ§Ã£o velocidade (1.2s)",
          "ImplementaÃ§Ã£o CDN e cache",
        ],
      },
      {
        title: "AutomaÃ§Ãµes",
        week: "Semana 4",
        items: [
          "Carrinho abandonado (WhatsApp + Email + SMS)",
          "PÃ³s-compra: Upsell automÃ¡tico D+3",
          "Win-back: Cliente inativo 30 dias",
          "AvaliaÃ§Ã£o automÃ¡tica D+7",
          "Programa de pontos gamificado",
          "Welcome series (5 emails)",
        ],
      },
      {
        title: "TrÃ¡fego",
        week: "Semanas 5-8",
        items: [
          "Campanhas Meta Ads (Instagram + Facebook)",
          "Google Shopping feed otimizado",
          "Remarketing dinÃ¢mico multi-plataforma",
          "Parcerias com 12 micro-influencers",
          "Tiktok Ads (teste piloto)",
        ],
      },
      {
        title: "OtimizaÃ§Ã£o",
        week: "ContÃ­nua",
        items: [
          "Testes A/B semanais (criativos + copy)",
          "Ajustes de budget baseado em dados",
          "CriaÃ§Ã£o 20+ novos criativos/mÃªs",
          "AnÃ¡lise cohort mensal",
          "Ajuste segmentaÃ§Ã£o audiÃªncias",
        ],
      },
    ],

    timeline: [
      { month: "Ago", revenue: "R$ 45k", revenueValue: 45000 },
      { month: "Set", revenue: "R$ 78k", revenueValue: 78000 },
      { month: "Out", revenue: "R$ 142k", revenueValue: 142000 },
      { month: "Nov", revenue: "R$ 231k", revenueValue: 231000 },
      { month: "Dez", revenue: "R$ 280k", revenueValue: 280000 },
    ],

    afterMetrics: {
      revenue: "R$ 280.000/mÃªs",
      revenueValue: 280000,
      leads: 890,
      conversion: 8.7,
      cpl: 12,
      roas: 6.8,
      extra: "Ticket mÃ©dio: R$ 312 (+67%)",
    },

    improvements: {
      revenue: 522,
      leads: 218,
      conversion: 314,
      cpl: -71,
      roas: 467,
    },

    testimonial: {
      quote:
        "Pensei que era impossÃ­vel crescer mais sem aumentar muito o time. Em 5 mÃªses faturamos o que levaria 2 anos no ritmo anterior. A automaÃ§Ã£o mudou nosso jogo completamente!",
      author: "Juliana Costa",
      role: "CEO & Fundadora",
      videoUrl: "/videos/testimonial-juliana.mp4",
      videoDuration: "1:32",
      thumbnail: "/images/testimonial-juliana-thumb.jpg",
    },

    screenshots: [
      {
        title: "Dashboard Nuvemshop",
        description: "EvoluÃ§Ã£o do faturamento mensal",
        image: "/screenshots/nuvemshop-revenue.jpg",
      },
      {
        title: "Meta Ads Manager",
        description: "ROAS 6.8x sustentvel",
        image: "/screenshots/meta-ads-roas.jpg",
      },
      {
        title: "Google Analytics",
        description: "TrÃ¡fego qualificado crescente",
        image: "/screenshots/ga-traffic.jpg",
      },
      {
        title: "Automação n8n",
        description: "Fluxo carrinho abandonado",
        image: "/screenshots/n8n-automation.jpg",
      },
    ],

    investment: 42000,
    totalReturn: 1175000,
    roi: 27.9,
    timeSaved: "18h/semana da equipe",
    salarySaved: 8400,
    extraGains: [
      "Base de 12.400 leads qualificados",
      "3.890 clientes recorrentes",
      "LTV aumentou 340%",
      "R$ 47k/mês recuperados de carrinhos",
    ],

    linkedinUrl: "https://linkedin.com/in/juliana-costa-example",
    auditedBy: "Auditoria Digital Insights",
  },

  {
    id: "2",
    slug: "clinica-estetica-340-leads",
    logo: "=",
    clientName: "Clínica Essncia Esttica",
    segment: "Clínica Esttica",
    period: "Mar/2024 - Jul/2024 (5 mÃªses)",
    verified: true,
    verifiedDate: "08/10/2024",
    color: "#9d4edd",
    icon: <Heart className="w-6 h-6" />,
    shortDescription: "Clínica Esttica - So Paulo",
    mainMetric: "DE 45  340 AGENDAMENTOS/MS (+656%)",

    challenges: [
      "Clínica pequena: 1 médico, 1 secretária",
      "Apenas 45 procedimentos/mês",
      "Agenda 40% vazia (desperdcio)",
      "40% no-show (paciente no comparece)",
      "Marketing zero estruturado",
      "Dependncia 100% de indicaes",
    ],

    beforeMetrics: {
      revenue: "R$ 48.000/mês",
      revenueValue: 48000,
      leads: 45,
      conversion: 68,
      cpl: 0,
      roas: 0,
      extra: "No-show: 40% (18 faltas/mês)",
    },

    phases: [
      {
        title: "Fundao Digital",
        week: "Semana 1-2",
        items: [
          "Site institucional profissional",
          "Google My Business otimizado",
          "Perfis sociais padronizados",
          "Sistema agendamento online 24/7",
          "Integrao WhatsApp Business API",
        ],
      },
      {
        title: "Automaes",
        week: "Semana 3",
        items: [
          "Agendamento automtico via WhatsApp",
          "Lembretes inteligentes (24h + 2h antes)",
          "Confirmao automtica",
          "Ps-consulta: NPS automtico D+1",
          "Campanhas retorno (30, 60, 90 dias)",
        ],
      },
      {
        title: "Contedo",
        week: "Semana 4-6",
        items: [
          "Estratégia conteúdo educativo",
          "20 posts/mês (antes e depois)",
          "Stories diários com dicas",
          "Reels sobre procedimentos",
          "Blog com SEO otimizado",
        ],
      },
      {
        title: "Tráfego Pago",
        week: "Semana 7+",
        items: [
          "Meta Ads (Instagram + Facebook)",
          "Google Ads (pesquisa local)",
          "Campanhas procedimentos específicos",
          "Remarketing pacientes",
          "Budget inicial R$ 3k/mês",
        ],
      },
      {
        title: "Reputação",
        week: "Contínua",
        items: [
          "Sistema de coleta de avaliações",
          "Resposta automática a reviews",
          "Gestão de reputação online",
          "Incentivo a avaliações positivas",
        ],
      },
    ],

    timeline: [
      { month: "Mar", revenue: "R$ 48k", revenueValue: 48000 },
      { month: "Abr", revenue: "R$ 89k", revenueValue: 89000 },
      { month: "Mai", revenue: "R$ 156k", revenueValue: 156000 },
      { month: "Jun", revenue: "R$ 234k", revenueValue: 234000 },
      { month: "Jul", revenue: "R$ 280k", revenueValue: 280000 },
    ],

    afterMetrics: {
      revenue: "R$ 280.000/mês",
      revenueValue: 280000,
      leads: 340,
      conversion: 89,
      cpl: 18,
      roas: 5.8,
      extra: "No-show: 12% (41 faltas/mês)",
    },

    improvements: {
      revenue: 483,
      leads: 656,
      conversion: 31,
      cpl: 100,
      roas: 580,
    },

    testimonial: {
      quote:
        "Antes eu atendia 1-2 pacientes por dia e ficava ociosa. Hoje atendemos 12-15 pacientes/dia, contratamos mais 2 médicos e ainda temos lista de espera. É surreal!",
      author: "Dra. Mariana Silva",
      role: "Dermatologista e Proprietária",
      videoUrl: "/videos/testimonial-mariana.mp4",
      videoDuration: "1:18",
      thumbnail: "/images/testimonial-mariana-thumb.jpg",
    },

    screenshots: [
      {
        title: "Google My Business",
        description: "Avaliações: 4,2 -> 4,9 (287 reviews)",
        image: "/screenshots/gmb-reviews.jpg",
      },
      {
        title: "Sistema de Agendamento",
        description: "Agenda 95% ocupada",
        image: "/screenshots/booking-system.jpg",
      },
      {
        title: "WhatsApp Automação",
        description: "Lembretes reduzindo no-show",
        image: "/screenshots/whatsapp-automation.jpg",
      },
      {
        title: "Instagram Growth",
        description: "De 890 para 12.4k seguidores",
        image: "/screenshots/instagram-growth.jpg",
      },
    ],

    investment: 38000,
    totalReturn: 1016000,
    roi: 25.7,
    timeSaved: "25h/semana da secretária",
    salarySaved: 12000,
    extraGains: [
      "Lista de espera: 67 pacientes",
      "2 novos médicos contratados",
      "Expansão para segunda unidade",
      "287 avaliaes 5 estrelas",
    ],

    linkedinUrl: "https://linkedin.com/in/mariana-silva-example",
    auditedBy: "Health Marketing Analytics",
  },

  {
    id: "3",
    slug: "arquitetura-420k-projetos",
    logo: "<",
    clientName: "Ateli Urbano Arquitetura",
    segment: "Escritrio de Arquitetura",
    period: "Jan/2024 - Abr/2024 (4 mÃªses)",
    verified: true,
    verifiedDate: "15/09/2024",
    color: "#00d9ff",
    icon: <Home className="w-6 h-6" />,
    shortDescription: "Escritrio de Arquitetura - Rio de Janeiro",
    mainMetric: "DE 12  89 LEADS/MS (+642%)",

    challenges: [
      "Identidade visual fraca e genrica",
      "Portfolio desorganizado (Google Drive)",
      "Sem presena digital relevante",
      "100% dependncia de indicaes",
      "Dificuldade comunicar valor",
      "Concorrncia com escritrios grandes",
    ],

    beforeMetrics: {
      revenue: "R$ 65.000/mês",
      revenueValue: 65000,
      leads: 12,
      conversion: 33,
      cpl: 0,
      roas: 0,
      extra: "Ticket mdio: R$ 48.000/projeto",
    },

    phases: [
      {
        title: "Branding",
        week: "Semanas 1-3",
        items: [
          "Identidade visual completa",
          "Logo e manual de marca",
          "Paleta de cores premium",
          "Tipografia e elementos grficos",
          "Papelaria e materiais",
        ],
      },
      {
        title: "Site Portfolio",
        week: "Semanas 4-6",
        items: [
          "Site premium com filtros de projetos",
          "Galeria interativa de alta qualidade",
          "Blog de tendncias arquitetura",
          "Calculadora de oramento online",
          "Formulrio multi-etapas qualificado",
        ],
      },
      {
        title: "Contedo Visual",
        week: "Semanas 7-8",
        items: [
          "Fotografia profissional 15 projetos",
          "Tours virtuais 360",
          "Renders 3D para redes sociais",
          "Vdeos time-lapse obras",
          "Cases detalhados com storytelling",
        ],
      },
      {
        title: "Posicionamento Digital",
        week: "Semanas 9+",
        items: [
          "LinkedIn company page otimizada",
          "Instagram foco em projetos premium",
          "Pinterest para inspirao",
          "Houzz profile profissional",
          "Parcerias com construtoras",
        ],
      },
      {
        title: "Automação",
        week: "Contínua",
        items: [
          "Qualificao automtica de leads",
          "Follow-up inteligente ps-contato",
          "Envio automtico de portfolio PDF",
          "Agendamento consulta online",
          "CRM para gestão de propostas",
        ],
      },
    ],

    timeline: [
      { month: "Jan", revenue: "R$ 65k", revenueValue: 65000 },
      { month: "Fev", revenue: "R$ 142k", revenueValue: 142000 },
      { month: "Mar", revenue: "R$ 298k", revenueValue: 298000 },
      { month: "Abr", revenue: "R$ 420k", revenueValue: 420000 },
    ],

    afterMetrics: {
      revenue: "R$ 420.000/mês",
      revenueValue: 420000,
      leads: 89,
      conversion: 47,
      cpl: 18,
      roas: 8.2,
      extra: "Ticket mdio: R$ 78.000/projeto (+62%)",
    },

    improvements: {
      revenue: 546,
      leads: 642,
      conversion: 42,
      cpl: 100,
      roas: 820,
    },

    testimonial: {
      quote:
        "Investir em branding e posicionamento digital foi a melhor deciso. Hoje escolhemos nossos clientes e trabalhamos apenas com projetos que amamos. Nosso ticket mdio subiu 62%!",
      author: "Arq. Rafael Mendes",
      role: "Scio-Fundador",
      videoUrl: "/videos/testimonial-rafael.mp4",
      videoDuration: "1:45",
      thumbnail: "/images/testimonial-rafael-thumb.jpg",
    },

    screenshots: [
      {
        title: "Site Portfolio",
        description: "Premium e interativo",
        image: "/screenshots/portfolio-site.jpg",
      },
      {
        title: "Instagram Profile",
        description: "De 2.3k para 18.7k seguidores",
        image: "/screenshots/instagram-arquitetura.jpg",
      },
      {
        title: "Lead Qualification",
        description: "Filtro automtico de leads qualificados",
        image: "/screenshots/lead-qualification.jpg",
      },
      {
        title: "Virtual Tours",
        description: "Tours 360 dos projetos",
        image: "/screenshots/virtual-tours.jpg",
      },
    ],

    investment: 52000,
    totalReturn: 1368000,
    roi: 25.3,
    timeSaved: "12h/semana do time comercial",
    salarySaved: 6000,
    extraGains: [
      "3 parcerias estratgicas com construtoras",
      "Participao em revista especializada",
      "Prmio regional de arquitetura",
      "Pipeline de R$ 2.4M em propostas",
    ],

    linkedinUrl: "https://linkedin.com/in/rafael-mendes-example",
    auditedBy: "Architecture Business Consultoria",
  },
]

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================

export default function CaseStudiesV2() {
  const [expandedCase, setExpandedCase] = useState<string | null>(null)
  const [selectedSegment, setSelectedSegment] = useState<string>("all")
  const [selectedMetric, setSelectedMetric] = useState<string>("all")
  const [selectedTime, setSelectedTime] = useState<string>("all")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
    const [compareCases, setCompareCases] = useState<string[]>([])
  const [showComparator, setShowComparator] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)
  
  // Filtros
  const filteredCases = useMemo(() => {
    return caseStudies.filter((caseStudy) => {
      if (selectedSegment !== "all") {
        if (selectedSegment === "ecommerce" && !caseStudy.segment.includes("commerce")) return false
        if (selectedSegment === "clinica" && !caseStudy.segment.includes("Clínica")) return false
        if (selectedSegment === "arquitetura" && !caseStudy.segment.includes("Arquitetura")) return false
      }

      if (selectedMetric !== "all") {
        if (selectedMetric === "revenue" && caseStudy.improvements.revenue < 400) return false
        if (selectedMetric === "leads" && caseStudy.improvements.leads < 500) return false
        if (selectedMetric === "roi" && caseStudy.roi < 20) return false
      }

      if (selectedTime !== "all") {
        const months = parseInt(caseStudy.period.match(/\d+/)?.[0] || "0")
        if (selectedTime === "short" && months > 3) return false
        if (selectedTime === "medium" && (months < 3 || months > 6)) return false
        if (selectedTime === "long" && months < 6) return false
      }

      return true
    })
  }, [selectedSegment, selectedMetric, selectedTime])

  const toggleCase = (id: string) => {
    setExpandedCase(expandedCase === id ? null : id)
  }

  const toggleCompare = (id: string) => {
    setCompareCases((prev) =>
      prev.includes(id) ? prev.filter((caseId) => caseId !== id) : prev.length < 2 ? [...prev, id] : prev
    )
  }

  const shareCase = (caseStudy: CaseStudy, platform: string) => {
    const url = `https://ondemanddigital.com.br/casos/${caseStudy.slug}`
    const text = `${caseStudy.clientName}: ${caseStudy.mainMetric}`

    switch (platform) {
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank")
        break
      case "whatsapp":
        window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, "_blank")
        break
      case "email":
        window.location.href = `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`
        break
      case "copy":
        navigator.clipboard.writeText(url)
        break
    }
  }

  return (
    <section id="cases-v2" className="od-section py-20 bg-[#0D1117] border-b border-[#30363D] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff006e] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9d4edd] rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="od-container px-4 relative z-10 od-reveal">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 rose-glow">Casos de Sucesso 2.0</h2>
            <p className="text-[#E6E6FA]/70 max-w-3xl mx-auto text-lg">
              Resultados reais, ultra-detalhados e verificados. Cada caso apresenta a jornada completa de transformao
              digital dos nossos clientes.
            </p>
          </motion.div>
        </div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex flex-wrap gap-4 justify-center items-center"
        >
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#E6E6FA]/60" />
            <span className="text-sm text-[#E6E6FA]/60">Filtrar por:</span>
          </div>

          {/* Segmento */}
          <select
            value={selectedSegment}
            onChange={(e) => setSelectedSegment(e.target.value)}
            className="px-4 py-2 bg-[#161B22] border border-[#30363D] rounded text-[#E6E6FA] text-sm hover:border-[#ff006e] transition cursor-pointer focus:outline-none focus:border-[#ff006e]"
          >
            <option value="all">Todos Segmentos</option>
            <option value="ecommerce">E-commerce</option>
            <option value="clinica">Clínicas</option>
            <option value="arquitetura">Arquitetura</option>
          </select>

          {/* Resultado */}
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="px-4 py-2 bg-[#161B22] border border-[#30363D] rounded text-[#E6E6FA] text-sm hover:border-[#ff006e] transition cursor-pointer focus:outline-none focus:border-[#ff006e]"
          >
            <option value="all">Todos Resultados</option>
            <option value="revenue">Faturamento +400%</option>
            <option value="leads">Leads +500%</option>
            <option value="roi">ROI +20x</option>
          </select>

          {/* Tempo */}
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="px-4 py-2 bg-[#161B22] border border-[#30363D] rounded text-[#E6E6FA] text-sm hover:border-[#ff006e] transition cursor-pointer focus:outline-none focus:border-[#ff006e]"
          >
            <option value="all">Todos Perodos</option>
            <option value="short">&lt; 3 mÃªses</option>
            <option value="medium">3-6 mÃªses</option>
            <option value="long">&gt; 6 mÃªses</option>
          </select>

          {compareCases.length > 0 && (
            <button
              onClick={() => setShowComparator(true)}
              className="px-4 py-2 bg-gradient-to-r from-[#ff006e] to-[#9d4edd] text-white text-sm font-semibold rounded hover:shadow-lg hover:shadow-[#ff006e]/30 transition flex items-center gap-2"
            >
              <BarChart3 className="w-4 h-4" />
              Comparar ({compareCases.length})
            </button>
          )}
        </motion.div>

        {/* Cases Grid */}
        <div className="space-y-6">
          {filteredCases.map((caseStudy, idx) => (
            <CaseCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              isExpanded={expandedCase === caseStudy.id}
              onToggle={() => toggleCase(caseStudy.id)}
              onLightbox={setLightboxImage}
              onShare={shareCase}
              isCompareSelected={compareCases.includes(caseStudy.id)}
              onToggleCompare={() => toggleCompare(caseStudy.id)}
              index={idx}
            />
          ))}
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#E6E6FA]/60">Nenhum caso encontrado com esses filtros.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#ff006e]/10 to-[#9d4edd]/10 border border-[#ff006e]/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#E6E6FA] mb-4">
              Quer resultados assim no seu negócio?
            </h3>
            <p className="text-[#E6E6FA]/70 mb-6 max-w-2xl mx-auto">
              Esses so apenas 3 dos nossos 50+ casos de sucesso. Agende um diagnstico gratuito e descubra como
              podemos transformar seus resultados em at 90 dias.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#ff006e] to-[#ba1cbe] text-white font-bold uppercase tracking-wider rounded hover:shadow-lg hover:shadow-[#ff006e]/50 transition">
                Agendar Diagnóstico Gratuito
              </button>
              <button
                onClick={() => setShowCalculator(true)}
                className="px-8 py-4 border border-[#ff006e] text-[#ff006e] font-semibold rounded hover:bg-[#ff006e]/10 transition"
              >
                Calcular Meu Potencial
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <Dialog.Root open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}>
            <Dialog.Portal>
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                  onClick={() => setLightboxImage(null)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative od-container max-w-5xl w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setLightboxImage(null)}
                      className="absolute -top-12 right-0 text-white hover:text-[#ff006e] transition"
                    >
                      <X className="w-8 h-8" />
                    </button>
                    <Image
                      src={lightboxImage}
                      alt="Screenshot"
                      width={1600}
                      height={900}
                      className="w-full h-auto rounded-lg border border-[#30363D]"
                    />
                  </motion.div>
                </motion.div>
              </Dialog.Overlay>
            </Dialog.Portal>
          </Dialog.Root>
        )}
      </AnimatePresence>

      {/* Comparator Modal */}
      <AnimatePresence>
        {showComparator && compareCases.length === 2 && (
          <ComparatorModal
            cases={caseStudies.filter((c) => compareCases.includes(c.id))}
            onClose={() => {
              setShowComparator(false)
              setCompareCases([])
            }}
          />
        )}
      </AnimatePresence>

      {/* Calculator Modal */}
      <AnimatePresence>
        {showCalculator && <CalculatorModal onClose={() => setShowCalculator(false)} />}
      </AnimatePresence>
    </section>
  )
}

// ============================================================================
// CASE CARD COMPONENT
// ============================================================================

interface CaseCardProps {
  caseStudy: CaseStudy
  isExpanded: boolean
  onToggle: () => void
  onLightbox: (image: string) => void
    onShare: (caseStudy: CaseStudy, platform: string) => void
  isCompareSelected: boolean
  onToggleCompare: () => void
  index: number
}

function CaseCard({
  caseStudy,
  isExpanded,
  onToggle,
  onLightbox,  onShare,
  isCompareSelected,
  onToggleCompare,
  index,
}: CaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`border rounded-lg overflow-hidden transition-all duration-300 ${
        isExpanded
          ? "border-[#ff006e] bg-[#161B22] shadow-lg shadow-[#ff006e]/20"
          : "border-[#30363D] bg-[#161B22] hover:border-[#ff006e]/50"
      }`}
    >
      {/* Collapsed Card */}
      <div
        className="p-6 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            {/* Logo/Icon */}
            <div
              className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl flex-shrink-0"
              style={{ backgroundColor: `${caseStudy.color}20` }}
            >
              {caseStudy.logo}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-[#E6E6FA]">{caseStudy.clientName}</h3>
                {caseStudy.verified && (
                  <div className="flex items-center gap-1 text-[#00d966] text-xs">
                    <BadgeCheck className="w-4 h-4" />
                    <span>VERIFICADO</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-[#E6E6FA]/60 mb-2">{caseStudy.shortDescription}</p>
              <div className="flex items-center gap-3 text-xs text-[#E6E6FA]/50">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {caseStudy.period}
                </span>
                <span className="flex items-center gap-1">
                  {caseStudy.icon}
                  {caseStudy.segment}
                </span>
              </div>
            </div>
          </div>

          {/* Main Metric */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff006e] to-[#9d4edd] mb-1">
                {caseStudy.mainMetric}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onToggle()
                }}
                className="text-sm text-[#ff006e] hover:text-[#ff006e]/80 transition flex items-center gap-1"
              >
                {isExpanded ? "Ocultar" : "Ver histria completa"}
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-[#30363D]"
          >
            <div className="p-6 space-y-8">
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 justify-end">
                <button
                  onClick={onToggleCompare}
                  className={`px-4 py-2 rounded text-sm font-semibold transition ${
                    isCompareSelected
                      ? "bg-[#ff006e] text-white"
                      : "border border-[#30363D] text-[#E6E6FA]/70 hover:border-[#ff006e]"
                  }`}
                >
                  {isCompareSelected ? " Selecionado" : "Comparar"}
                </button>

                <button
                  onClick={() => onShare(caseStudy, "linkedin")}
                  className="p-2 border border-[#30363D] rounded hover:border-[#0077b5] hover:text-[#0077b5] transition"
                  title="Compartilhar no LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onShare(caseStudy, "whatsapp")}
                  className="p-2 border border-[#30363D] rounded hover:border-[#25d366] hover:text-[#25d366] transition"
                  title="Compartilhar no WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onShare(caseStudy, "email")}
                  className="p-2 border border-[#30363D] rounded hover:border-[#ff006e] hover:text-[#ff006e] transition"
                  title="Compartilhar por Email"
                >
                  <Mail className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onShare(caseStudy, "copy")}
                  className="p-2 border border-[#30363D] rounded hover:border-[#00d9ff] hover:text-[#00d9ff] transition"
                  title="Copiar Link"
                >
                  <Copy className="w-4 h-4" />
                </button>

                <button className="px-4 py-2 border border-[#30363D] rounded hover:border-[#ff006e] hover:text-[#ff006e] transition text-sm font-semibold flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>

              {/* Situao Inicial (ANTES) */}
              <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
                <h4 className="text-xl font-bold text-[#E6E6FA] mb-4 flex items-center gap-2">
                  <span className="text-2xl">=0</span>
                  DESAFIOS ENFRENTADOS
                </h4>
                <ul className="space-y-2 mb-6">
                  {caseStudy.challenges.map((challenge, idx) => (
                    <li key={idx} className="text-[#E6E6FA]/70 flex items-start gap-2">
                      <span className="text-red-500 mt-1">"</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[#30363D] pt-4 mt-4">
                  <h5 className="text-sm font-semibold text-[#E6E6FA]/80 mb-4 flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-red-500" />
                    NMEROS ANTES:
                  </h5>
                  <div className="grid od-reveal grid-cols-2 md:grid-cols-3 gap-4">
                    <MetricBox label="Faturamento" value={caseStudy.beforeMetrics.revenue} color="red" />
                    <MetricBox label="Leads/mês" value={caseStudy.beforeMetrics.leads.toString()} color="red" />
                    <MetricBox label="Taxa Converso" value={`${caseStudy.beforeMetrics.conversion}%`} color="red" />
                    <MetricBox label="CPL" value={`R$ ${caseStudy.beforeMetrics.cpl}`} color="red" />
                    <MetricBox label="ROAS" value={`${caseStudy.beforeMetrics.roas}x`} color="red" />
                    {caseStudy.beforeMetrics.extra && (
                      <div className="col-span-2 md:col-span-1 text-sm text-[#E6E6FA]/60">
                        {caseStudy.beforeMetrics.extra}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* O QUE FIZEMOS (SOLUO) */}
              <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
                <h4 className="text-xl font-bold text-[#E6E6FA] mb-4 flex items-center gap-2">
                  <span className="text-2xl">&lt;</span>
                  ESTRATGIA IMPLEMENTADA
                </h4>
                <div className="space-y-6">
                  {caseStudy.phases.map((phase, idx) => (
                    <div key={idx} className="relative pl-8 border-l-2 border-[#ff006e]/30">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#ff006e] border-2 border-[#0D1117]" />
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h5 className="font-bold text-[#ff006e]">FASE {idx + 1} - {phase.title}</h5>
                          <span className="text-xs text-[#E6E6FA]/50 px-2 py-1 bg-[#161B22] rounded">
                            {phase.week}
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {phase.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="text-sm text-[#E6E6FA]/70 flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#00d966] mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TIMELINE VISUAL */}
              <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
                <h4 className="text-xl font-bold text-[#E6E6FA] mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#ff006e]" />
                  EVOLUO MS A MS
                </h4>
                <div className="space-y-4">
                  {/* Timeline bars */}
                  <div className="flex items-end justify-between gap-2 h-48">
                    {caseStudy.timeline.map((month, idx) => {
                      const maxValue = Math.max(...caseStudy.timeline.map((m) => m.revenueValue))
                      const heightPercent = (month.revenueValue / maxValue) * 100
                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                          <div className="text-xs font-semibold text-[#E6E6FA]">{month.revenue}</div>
                          <div
                            className="w-full rounded-t bg-gradient-to-t from-[#ff006e] to-[#9d4edd] transition-all duration-500"
                            style={{ height: `${heightPercent}%` }}
                          />
                          <div className="text-sm font-semibold text-[#E6E6FA]/60">{month.month}</div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Arrow showing growth */}
                  <div className="flex items-center justify-center gap-2 text-[#00d966] pt-4 border-t border-[#30363D]">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold">Crescimento de {caseStudy.improvements.revenue}%</span>
                  </div>
                </div>
              </div>

              {/* RESULTADOS (DEPOIS) */}
              <div className="bg-gradient-to-br from-[#00d966]/10 to-[#00d9ff]/10 border border-[#00d966]/30 rounded-lg p-6">
                <h4 className="text-xl font-bold text-[#E6E6FA] mb-4 flex items-center gap-2">
                  <span className="text-2xl">=</span>
                  TRANSFORMAO EM NMEROS
                </h4>

                <div className="space-y-6">
                  {/* Before/After Comparison */}
                  <div className="grid od-reveal md:grid-cols-2 gap-6">
                    {/* Faturamento */}
                    <div>
                      <div className="text-sm text-[#E6E6FA]/60 mb-2 flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Faturamento
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[#E6E6FA]/50">
                          <span className="text-xs">Antes:</span>
                          <span className="text-lg line-through">{caseStudy.beforeMetrics.revenue}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#00d966]">
                          <span className="text-xs">Depois:</span>
                          <span className="text-2xl font-bold">{caseStudy.afterMetrics.revenue}</span>
                        </div>
                        <div className="text-xs text-[#00d966] flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Crescimento: +{caseStudy.improvements.revenue}%
                        </div>
                      </div>
                    </div>

                    {/* Leads */}
                    <div>
                      <div className="text-sm text-[#E6E6FA]/60 mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Leads/mês
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[#E6E6FA]/50">
                          <span className="text-xs">Antes:</span>
                          <span className="text-lg line-through">{caseStudy.beforeMetrics.leads}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#00d966]">
                          <span className="text-xs">Depois:</span>
                          <span className="text-2xl font-bold">{caseStudy.afterMetrics.leads}</span>
                        </div>
                        <div className="text-xs text-[#00d966] flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Crescimento: +{caseStudy.improvements.leads}%
                        </div>
                      </div>
                    </div>

                    {/* Converso */}
                    <div>
                      <div className="text-sm text-[#E6E6FA]/60 mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Taxa de Converso
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[#E6E6FA]/50">
                          <span className="text-xs">Antes:</span>
                          <span className="text-lg line-through">{caseStudy.beforeMetrics.conversion}%</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#00d966]">
                          <span className="text-xs">Depois:</span>
                          <span className="text-2xl font-bold">{caseStudy.afterMetrics.conversion}%</span>
                        </div>
                        <div className="text-xs text-[#00d966] flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Aumento: +{caseStudy.improvements.conversion}%
                        </div>
                      </div>
                    </div>

                    {/* CPL */}
                    <div>
                      <div className="text-sm text-[#E6E6FA]/60 mb-2 flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Custo por Lead
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[#E6E6FA]/50">
                          <span className="text-xs">Antes:</span>
                          <span className="text-lg line-through">R$ {caseStudy.beforeMetrics.cpl}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#00d966]">
                          <span className="text-xs">Depois:</span>
                          <span className="text-2xl font-bold">R$ {caseStudy.afterMetrics.cpl}</span>
                        </div>
                        <div className="text-xs text-[#00d966] flex items-center gap-1">
                          <TrendingDown className="w-3 h-3" />
                          Reduo: {caseStudy.improvements.cpl}%
                        </div>
                      </div>
                    </div>

                    {/* ROAS */}
                    <div className="md:col-span-2">
                      <div className="text-sm text-[#E6E6FA]/60 mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        ROAS (Return on Ad Spend)
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 text-[#E6E6FA]/50">
                            <span className="text-xs">Antes:</span>
                            <span className="text-lg line-through">{caseStudy.beforeMetrics.roas}x</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#00d966]">
                            <span className="text-xs">Depois:</span>
                            <span className="text-3xl font-bold">{caseStudy.afterMetrics.roas}x</span>
                          </div>
                          <div className="text-xs text-[#00d966] flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Melhoria: +{caseStudy.improvements.roas}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {caseStudy.afterMetrics.extra && (
                    <div className="pt-4 border-t border-[#00d966]/20 text-sm text-[#E6E6FA]/70">
                      {caseStudy.afterMetrics.extra}
                    </div>
                  )}
                </div>
              </div>

              {/* DEPOIMENTO EM VDEO */}
              <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
                <h4 className="text-xl font-bold text-[#E6E6FA] mb-4">Depoimento do Cliente</h4>
                <div className="grid od-reveal md:grid-cols-2 gap-6 items-center">
                  {/* Video Thumbnail */}
                  <div
                    className="relative aspect-video bg-[#161B22] rounded-lg overflow-hidden cursor-pointer group"
                    >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff006e]/20 to-[#9d4edd]/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#ff006e] flex items-center justify-center group-hover:scale-110 transition">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/70 rounded text-xs text-white">
                      {caseStudy.testimonial.videoDuration}
                    </div>
                  </div>

                  {/* Quote */}
                  <div>
                    <blockquote className="text-lg text-[#E6E6FA] mb-4 italic">
                      "{caseStudy.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff006e] to-[#9d4edd] flex items-center justify-center text-white font-bold">
                        {caseStudy.testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-[#E6E6FA]">{caseStudy.testimonial.author}</div>
                        <div className="text-sm text-[#E6E6FA]/60">{caseStudy.testimonial.role}</div>
                        <a
                          href={caseStudy.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#0077b5] hover:underline flex items-center gap-1 mt-1"
                        >
                          Ver perfil no LinkedIn
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SCREENSHOTS REAIS */}
              <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
                <h4 className="text-xl font-bold text-[#E6E6FA] mb-4">Provas Reais (Screenshots)</h4>
                <div className="grid od-reveal grid-cols-2 gap-4">
                  {caseStudy.screenshots.map((screenshot, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-video bg-[#161B22] rounded-lg overflow-hidden cursor-pointer group border border-[#30363D] hover:border-[#ff006e] transition"
                      onClick={() => onLightbox(screenshot.image)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ff006e]/10 to-[#9d4edd]/10 opacity-0 group-hover:opacity-100 transition" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-4">
                          <FileText className="w-8 h-8 text-[#E6E6FA]/30 mx-auto mb-2" />
                          <div className="text-sm font-semibold text-[#E6E6FA]">{screenshot.title}</div>
                          <div className="text-xs text-[#E6E6FA]/60">{screenshot.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#E6E6FA]/50 mt-4 text-center">
                  Clique em qualquer imagem para ampliar
                </p>
              </div>

              {/* O QUE O CLIENTE GANHOU */}
              <div className="bg-gradient-to-br from-[#ff006e]/10 to-[#9d4edd]/10 border border-[#ff006e]/30 rounded-lg p-6">
                <h4 className="text-xl font-bold text-[#E6E6FA] mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#ff006e]" />
                  RETORNO SOBRE O INVESTIMENTO
                </h4>
                <div className="grid od-reveal md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <div className="text-sm text-[#E6E6FA]/60 mb-2">Investimento Total</div>
                    <div className="text-2xl font-bold text-[#E6E6FA]">
                      R$ {caseStudy.investment.toLocaleString("pt-BR")}
                    </div>
                    <div className="text-xs text-[#E6E6FA]/50">Setup + {caseStudy.period.match(/\d+/)?.[0]} meses</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#E6E6FA]/60 mb-2">Retorno Adicional</div>
                    <div className="text-2xl font-bold text-[#00d966]">
                      R$ {caseStudy.totalReturn.toLocaleString("pt-BR")}
                    </div>
                    <div className="text-xs text-[#E6E6FA]/50">No período do projeto</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#E6E6FA]/60 mb-2">ROI</div>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff006e] to-[#9d4edd]">
                      {caseStudy.roi}x
                    </div>
                    <div className="text-xs text-[#E6E6FA]/50">Retorno sobre investimento</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-[#E6E6FA]">
                    <Clock className="w-4 h-4 text-[#00d9ff]" />
                    <span className="text-sm">
                      <strong>Economia de Tempo:</strong> {caseStudy.timeSaved} (R${" "}
                      {caseStudy.salarySaved.toLocaleString("pt-BR")}/mês economizados)
                    </span>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-[#E6E6FA] mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#ff006e]" />
                    CRESCIMENTO SUSTENTVEL:
                  </div>
                  <ul className="space-y-2">
                    {caseStudy.extraGains.map((gain, idx) => (
                      <li key={idx} className="text-sm text-[#E6E6FA]/70 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#00d966] mt-0.5 flex-shrink-0" />
                        <span>{gain}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* BADGE DE VERIFICAO */}
              <div className="od-card od-card-hover border border-[#00d966]/30 rounded-lg p-4 flex items-center justify-center gap-3">
                <BadgeCheck className="w-6 h-6 text-[#00d966]" />
                <div className="text-sm text-[#E6E6FA]">
                  <span className="font-semibold">Caso Verificado</span> por{" "}
                  <span className="text-[#00d966]">{caseStudy.auditedBy}</span> em {caseStudy.verifiedDate}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ============================================================================
// METRIC BOX COMPONENT
// ============================================================================

function MetricBox({ label, value, color }: { label: string; value: string; color: "red" | "green" }) {
  return (
    <div className="od-card od-card-hover border border-[#30363D] rounded p-3">
      <div className="text-xs text-[#E6E6FA]/60 mb-1">{label}</div>
      <div className={`text-lg font-bold ${color === "red" ? "text-red-500" : "text-[#00d966]"}`}>{value}</div>
    </div>
  )
}

// ============================================================================
// COMPARATOR MODAL
// ============================================================================

function ComparatorModal({ cases, onClose }: { cases: CaseStudy[]; onClose: () => void }) {
  if (cases.length !== 2) return null

  const [case1, case2] = cases

  return (
    <Dialog.Root open onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50"
          />
        </Dialog.Overlay>
        <Dialog.Content asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl max-h-[90vh] overflow-auto bg-[#161B22] border border-[#30363D] rounded-lg p-6 z-50"
          >
            <div className="flex items-center justify-between mb-6">
              <Dialog.Title className="text-2xl font-bold text-[#E6E6FA]">Comparao de Casos</Dialog.Title>
              <Dialog.Close asChild>
                <button className="text-[#E6E6FA]/60 hover:text-[#ff006e] transition">
                  <X className="w-6 h-6" />
                </button>
              </Dialog.Close>
            </div>

            <div className="grid od-reveal md:grid-cols-2 gap-6">
              {[case1, case2].map((caseStudy) => (
                <div key={caseStudy.id} className="space-y-4">
                  {/* Header */}
                  <div className="border border-[#30363D] rounded-lg p-4 bg-[#0D1117]">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                        style={{ backgroundColor: `${caseStudy.color}20` }}
                      >
                        {caseStudy.logo}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#E6E6FA]">{caseStudy.clientName}</h3>
                        <p className="text-xs text-[#E6E6FA]/60">{caseStudy.segment}</p>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ff006e] to-[#9d4edd]">
                      {caseStudy.mainMetric}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-3">
                    <CompareMetric
                      label="Faturamento"
                      before={caseStudy.beforeMetrics.revenue}
                      after={caseStudy.afterMetrics.revenue}
                      improvement={`+${caseStudy.improvements.revenue}%`}
                    />
                    <CompareMetric
                      label="Leads/mês"
                      before={caseStudy.beforeMetrics.leads.toString()}
                      after={caseStudy.afterMetrics.leads.toString()}
                      improvement={`+${caseStudy.improvements.leads}%`}
                    />
                    <CompareMetric
                      label="Converso"
                      before={`${caseStudy.beforeMetrics.conversion}%`}
                      after={`${caseStudy.afterMetrics.conversion}%`}
                      improvement={`+${caseStudy.improvements.conversion}%`}
                    />
                    <CompareMetric
                      label="CPL"
                      before={`R$ ${caseStudy.beforeMetrics.cpl}`}
                      after={`R$ ${caseStudy.afterMetrics.cpl}`}
                      improvement={`${caseStudy.improvements.cpl}%`}
                      isDecrease
                    />
                    <CompareMetric
                      label="ROAS"
                      before={`${caseStudy.beforeMetrics.roas}x`}
                      after={`${caseStudy.afterMetrics.roas}x`}
                      improvement={`+${caseStudy.improvements.roas}%`}
                    />
                    <div className="border-t border-[#30363D] pt-3">
                      <div className="text-xs text-[#E6E6FA]/60 mb-1">ROI</div>
                      <div className="text-xl font-bold text-[#00d966]">{caseStudy.roi}x</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function CompareMetric({
  label,
  before,
  after,
  improvement,
  isDecrease = false,
}: {
  label: string
  before: string
  after: string
  improvement: string
  isDecrease?: boolean
}) {
  return (
    <div className="border border-[#30363D] rounded-lg p-3 bg-[#0D1117]">
      <div className="text-xs text-[#E6E6FA]/60 mb-2">{label}</div>
      <div className="flex items-center justify-between gap-2">
        <div className="text-sm text-[#E6E6FA]/50 line-through">{before}</div>
        <ArrowRight className="w-4 h-4 text-[#E6E6FA]/30" />
        <div className="text-lg font-bold text-[#00d966]">{after}</div>
      </div>
      <div className={`text-xs mt-1 ${isDecrease ? "text-[#00d966]" : "text-[#00d966]"}`}>{improvement}</div>
    </div>
  )
}

// ============================================================================
// CALCULATOR MODAL
// ============================================================================

function CalculatorModal({ onClose }: { onClose: () => void }) {
  const [currentRevenue, setCurrentRevenue] = useState(50000)
  const [currentLeads, setCurrentLeads] = useState(100)
  const [growthMultiplier, setGrowthMultiplier] = useState(4)

  const estimatedRevenue = currentRevenue * growthMultiplier
  const estimatedLeads = currentLeads * growthMultiplier
  const additionalRevenue = estimatedRevenue - currentRevenue
  const estimatedROI = 20

  return (
    <Dialog.Root open onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50"
          />
        </Dialog.Overlay>
        <Dialog.Content asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-[#161B22] border border-[#30363D] rounded-lg p-6 z-50"
          >
            <div className="flex items-center justify-between mb-6">
              <Dialog.Title className="text-2xl font-bold text-[#E6E6FA]">
                Calcule Seu Potencial de Crescimento
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="text-[#E6E6FA]/60 hover:text-[#ff006e] transition">
                  <X className="w-6 h-6" />
                </button>
              </Dialog.Close>
            </div>

            <div className="space-y-6">
              {/* Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-[#E6E6FA]/70 mb-2 block">Faturamento Mensal Atual (R$)</label>
                  <input
                    type="number"
                    value={currentRevenue}
                    onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                    className="w-full px-4 py-2 bg-[#0D1117] border border-[#30363D] rounded text-[#E6E6FA] focus:outline-none focus:border-[#ff006e]"
                  />
                </div>

                <div>
                  <label className="text-sm text-[#E6E6FA]/70 mb-2 block">Leads por Mês Atual</label>
                  <input
                    type="number"
                    value={currentLeads}
                    onChange={(e) => setCurrentLeads(Number(e.target.value))}
                    className="w-full px-4 py-2 bg-[#0D1117] border border-[#30363D] rounded text-[#E6E6FA] focus:outline-none focus:border-[#ff006e]"
                  />
                </div>

                <div>
                  <label className="text-sm text-[#E6E6FA]/70 mb-2 block">
                    Multiplicador de Crescimento: {growthMultiplier}x
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="10"
                    step="0.5"
                    value={growthMultiplier}
                    onChange={(e) => setGrowthMultiplier(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-[#E6E6FA]/50 mt-1">
                    <span>Conservador (2x)</span>
                    <span>Agressivo (10x)</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-[#ff006e]/10 to-[#9d4edd]/10 border border-[#ff006e]/30 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#E6E6FA] mb-4">Projeo de Resultados em 6 Meses:</h3>

                <div className="grid od-reveal grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-[#E6E6FA]/60 mb-1">Faturamento Projetado</div>
                    <div className="text-2xl font-bold text-[#00d966]">
                      R$ {estimatedRevenue.toLocaleString("pt-BR")}
                    </div>
                    <div className="text-xs text-[#00d966] mt-1">
                      +R$ {additionalRevenue.toLocaleString("pt-BR")}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-[#E6E6FA]/60 mb-1">Leads Projetados</div>
                    <div className="text-2xl font-bold text-[#00d9ff]">{estimatedLeads}/ms</div>
                    <div className="text-xs text-[#00d9ff] mt-1">+{estimatedLeads - currentLeads} leads</div>
                  </div>

                  <div className="col-span-2">
                    <div className="text-xs text-[#E6E6FA]/60 mb-1">ROI Estimado</div>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff006e] to-[#9d4edd]">
                      {estimatedROI}x
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#E6E6FA]/50 pt-4 border-t border-[#ff006e]/20">
                  * Projees baseadas na mdia dos nossos casos de sucesso. Resultados podem variar.
                </p>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-[#ff006e] to-[#ba1cbe] text-white font-bold uppercase tracking-wider rounded hover:shadow-lg hover:shadow-[#ff006e]/50 transition">
                Agendar Diagnóstico Gratuito
              </button>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

