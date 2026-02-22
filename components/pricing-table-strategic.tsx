"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Check,
  X,
  BarChart,
  Rocket,
  Crown,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Sparkles,
  AlertCircle,
  Timer
} from "lucide-react"
import Link from "next/link"

interface PricingFeature {
  text: string
  included: boolean
  highlight?: boolean
}

interface PricingPlan {
  id: string
  name: string
  tagline: string
  icon: React.ReactNode
  originalPrice?: number
  price: number
  priceLabel: string
  badge?: string
  badgeColor?: string
  secondaryBadge?: string
  secondaryBadgeColor?: string
  isHighlight?: boolean
  isSoldOut?: boolean
  ctaText: string
  ctaLink: string
  savings?: string
  features: PricingFeature[]
  setupTime: string
  automations: string
  sends: string
  support: string
  guarantee?: string
}

const plans: PricingPlan[] = [
  {
    id: "starter",
    name: "STARTER",
    tagline: "Para começar com estrutura",
    icon: <Rocket className="w-6 h-6" />,
    price: 0,
    priceLabel: "",
    badge: "Sob consulta",
    badgeColor: "bg-gray-700",
    ctaText: "Falar com a equipe",
    ctaLink: "#contact",
    setupTime: "Setup inicial",
    automations: "Automação essencial",
    sends: "Fluxo controlado",
    support: "Suporte padrão",
    features: [
      { text: "Setup inicial do ecossistema", included: true },
      { text: "Automação essencial para o funil", included: true },
      { text: "Dashboard essencial", included: true },
      { text: "Suporte por email", included: true },
      { text: "Revisão periódica", included: true },
      { text: "Suporte prioritário", included: false },
      { text: "Integrações avançadas", included: false },
      { text: "Gerente dedicado", included: false },
    ]
  },
  {
    id: "growth",
    name: "GROWTH",
    tagline: "Para acelerar com consistência",
    icon: <TrendingUp className="w-6 h-6" />,
    price: 0,
    priceLabel: "",
    badge: "Mais procurado",
    badgeColor: "bg-gradient-to-r from-pink-500 to-purple-500",
    isHighlight: true,
    ctaText: "Falar com a equipe",
    ctaLink: "#contact",
    setupTime: "Setup prioritário",
    automations: "Automação avançada",
    sends: "Fluxo ampliado",
    support: "Suporte prioritário",
    features: [
      { text: "Setup prioritário", included: true, highlight: true },
      { text: "Automação avançada", included: true },
      { text: "Suporte prioritário", included: true, highlight: true },
      { text: "Dashboard avançado", included: true },
      { text: "Revisão estratégica recorrente", included: true, highlight: true },
      { text: "Integrações personalizadas", included: true },
      { text: "Gerente dedicado", included: false },
    ]
  },
  {
    id: "scale",
    name: "SCALE",
    tagline: "Para escopo sob medida",
    icon: <Crown className="w-6 h-6" />,
    price: 0,
    priceLabel: "",
    badge: "Sob medida",
    badgeColor: "bg-gradient-to-r from-amber-500 to-yellow-500",
    ctaText: "Falar com especialista",
    ctaLink: "#contact",
    setupTime: "Setup personalizado",
    automations: "Automação sob medida",
    sends: "Fluxo dedicado",
    support: "Suporte dedicado",
    features: [
      { text: "Tudo do Growth +", included: true, highlight: true },
      { text: "Integrações personalizadas", included: true },
      { text: "Relatórios customizados", included: true },
      { text: "Consultoria estratégica recorrente", included: true, highlight: true },
      { text: "Suporte dedicado", included: true },
    ]
  }
]

const faqs = [
  {
    question: "Posso cancelar quando quiser?",
    answer: "Trabalhamos com contrato claro e flexível, com ajustes e renovações acordados de forma transparente."
  },
  {
    question: "Como vocês definem metas?",
    answer: "As metas são definidas em conjunto, com base no seu contexto, orçamento e capacidade comercial. Registramos tudo no plano de ação."
  },
  {
    question: "Tem contrato de fidelidade?",
    answer: "Preferimos contratos flexíveis. O objetivo é manter a parceria pela clareza do processo e pela evolução percebida."
  },
  {
    question: "Aceita parcelamento?",
    answer: "As condições de pagamento são definidas na proposta, de acordo com o escopo e o formato do contrato."
  },
  {
    question: "Quanto tempo para começar a ver resultados?",
    answer: "Os prazos variam por segmento, ticket e maturidade. O importante é ter rotina de execução e acompanhamento."
  },
  {
    question: "O que está incluído no setup?",
    answer: "O setup inclui configuração de automações, integrações necessárias, fluxos de nutrição, dashboards e alinhamento com o time."
  }
]

const comparisonFeatures = [
  { name: "Setup inicial", starter: "Essencial", growth: "Prioritário", scale: "Sob medida" },
  { name: "Automações", starter: "Básico", growth: "Avançado", scale: "Sob medida" },
  { name: "Fluxos de comunicação", starter: "Essencial", growth: "Ampliado", scale: "Dedicado" },
  { name: "Suporte", starter: "Email", growth: "Prioritário", scale: "Dedicado" },
  { name: "Dashboard", starter: "Essencial", growth: "Avançado", scale: "Customizado" },
  { name: "Revisões estratégicas", starter: "Periódicas", growth: "Recorrentes", scale: "Personalizado" },
  { name: "Integrações", starter: "Básicas", growth: "Avançadas", scale: "Customizadas" },
  { name: "Relatórios", starter: "Essencial", growth: "Detalhado", scale: "Customizado" },
]

export default function PricingTableStrategic() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [showComparison, setShowComparison] = useState(false)

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="od-container max-w-4xl text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-full text-pink-400 text-sm font-bold mb-6">
            = INVESTIMENTO ESTRATÉGICO
          </span>

          <h1 className="text-5xl md:text-7xl font-black od-title mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Preços que Geram ROI
          </h1>

          <p className="text-xl od-subtitle text-gray-400 mb-8">
            Não é um custo. É um investimento com método e acompanhamento.
            <br />
            <span className="text-cyan-400 font-bold">Resultados variam conforme contexto e execução.</span>
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 border-2 border-[#0D1117] flex items-center justify-center text-white font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm od-subtitle text-gray-400">
              Muitos clientes escolhem o Growth
            </p>
          </div>
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <div className="grid od-reveal md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative ${plan.isSoldOut ? "opacity-60" : ""}`}
          >
            {/* Highlight Glow Effect */}
            {plan.isHighlight && (
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-75 animate-pulse" />
            )}

            <div
              className={`relative od-card od-card-hover rounded-2xl overflow-hidden ${
                plan.isHighlight
                  ? "border-2 border-transparent bg-gradient-to-b from-pink-500/20 to-purple-500/20"
                  : plan.id === "scale"
                  ? "border-2 border-amber-500/30"
                  : "border border-gray-800"
              }`}
            >
              {/* Badges */}
              <div className="p-6 border-b border-gray-800">
                {plan.badge && (
                  <div className={`inline-flex items-center gap-2 ${plan.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-2`}>
                    {plan.isHighlight && <Sparkles className="w-3 h-3" />}
                    {plan.badge}
                  </div>
                )}

                {plan.secondaryBadge && (
                  <div className={`inline-flex items-center gap-2 ${plan.secondaryBadgeColor} text-red-400 text-xs font-bold px-3 py-1 rounded-full ml-2 animate-pulse`}>
                    <Timer className="w-3 h-3" />
                    {plan.secondaryBadge}
                  </div>
                )}

                <div className="flex items-center gap-3 mt-4">
                  <div className={`p-3 rounded-xl ${
                    plan.isHighlight
                      ? "bg-gradient-to-br from-pink-500 to-purple-500"
                      : plan.id === "scale"
                      ? "bg-gradient-to-br from-amber-500 to-yellow-500"
                      : "bg-gray-800"
                  }`}>
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black od-title text-white">{plan.name}</h3>
                    <p className="text-sm od-subtitle text-gray-400">{plan.tagline}</p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="p-6 border-b border-gray-800">
                <div className="text-3xl font-black od-title text-white">
                  Sob consulta
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  Valor definido após diagnóstico e escopo.
                </p>
              </div>

              {/* Features */}
              <div className="p-6 space-y-4">
                {plan.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 ${
                      feature.highlight ? "bg-gradient-to-r from-pink-500/10 to-purple-500/10 -mx-2 px-2 py-2 rounded-lg" : ""
                    }`}
                  >
                    {feature.included ? (
                      <Check className={`w-5 h-5 flex-shrink-0 ${feature.highlight ? "text-pink-400" : "text-cyan-400"}`} />
                    ) : (
                      <X className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? "text-white" : "text-gray-600"} ${feature.highlight ? "font-bold" : ""}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="p-6">
                {!plan.isSoldOut ? (
                  <Link
                    href={plan.ctaLink}
                    className={`block w-full text-center py-4 rounded-xl font-black od-title uppercase tracking-wider transition-all ${
                      plan.isHighlight
                        ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white hover:shadow-2xl hover:shadow-pink-500/50 hover:scale-105"
                        : plan.id === "scale"
                        ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:shadow-2xl hover:shadow-amber-500/50"
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    }`}
                  >
                    {plan.ctaText}
                  </Link>
                ) : (
                  <button
                    disabled
                    className="block w-full text-center py-4 rounded-xl font-black od-title uppercase tracking-wider bg-gray-800 text-gray-500 cursor-not-allowed"
                  >
                    {plan.ctaText}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="od-container max-w-5xl mb-16">
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="flex items-center justify-center gap-2 mx-auto mb-6 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-colors"
        >
          <BarChart className="w-5 h-5" />
          Comparao Detalhada
          {showComparison ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {showComparison && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="od-card border border-gray-800 rounded-xl overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-4 text-white font-bold">Recurso</th>
                    <th className="text-center p-4 text-gray-400 font-bold">Starter</th>
                    <th className="text-center p-4 text-pink-400 font-bold">Growth</th>
                    <th className="text-center p-4 text-amber-400 font-bold">Scale</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="border-b border-gray-800/50 hover:bg-gray-900/30 transition">
                      <td className="p-4 text-white">{feature.name}</td>
                      <td className="p-4 text-center text-gray-400">{feature.starter}</td>
                      <td className="p-4 text-center text-white font-semibold">{feature.growth}</td>
                      <td className="p-4 text-center text-white font-semibold">{feature.scale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>

      {/* FAQ */}
      <div className="od-container max-w-3xl mb-16">
        <h3 className="text-3xl font-black od-title text-center text-white mb-8">
          Perguntas <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">Frequentes</span>
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="od-card border border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-900/30 transition"
              >
                <span className="text-white font-bold pr-4">{faq.question}</span>
                {expandedFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-pink-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {expandedFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Alternative CTA */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-8">
          <AlertCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h4 className="text-2xl font-bold text-white mb-3">
            Ainda tem dvidas sobre qual plano escolher?
          </h4>
          <p className="text-gray-400 mb-6">
            Use nossa calculadora de ROI para descobrir o potencial de retorno do seu investimento
          </p>
          <Link
            href="/calculadora-roi"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-cyan-500/50 transition-all"
          >
            Calcular meu ROI
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
