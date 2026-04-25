"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import {
  Target,
  Bot,
  Compass,
  CheckCircle2,
  TrendingUp,
  MousePointerClick,
  Zap,
  Workflow,
  BrainCircuit,
  MessageSquare,
  Map,
  CalendarCheck,
  LineChart,
  ArrowRight,
  DollarSign,
  Users,
  Eye,
  Play,
  Pause,
  RotateCcw,
  Share2,
  Heart,
  MessageCircle,
  Repeat2,
  BarChart3,
  Instagram,
  Facebook,
  Image as ImageIcon,
  Video,
  Globe,
  Code2,
  Gauge,
  Smartphone,
  Monitor,
  Layers,
  Paintbrush,
  Search,
  Shield,
} from "lucide-react"

// ─── Constants ───────────────────────────────────────────────────────────────

const STEEL = "#7c93b0"
const STEEL_RGB = "124, 147, 176"

// ─── Service data ────────────────────────────────────────────────────────────

interface Service {
  id: string
  number: string
  title: string
  tagline: string
  description: string
  deliverables: string[]
  platforms: string[]
  icon: typeof Target
  image: string
  imageAlt: string
  video?: string
}

const services: Service[] = [
  {
    id: "trafego-pago",
    number: "01",
    title: "Tráfego Pago",
    tagline: "Campanhas que geram clientes, não só cliques.",
    description:
      "Gerenciamos Google Ads e Meta Ads com estrutura de testes, segmentação por intenção de compra e acompanhamento semanal para que cada real investido faça sentido.",
    deliverables: [
      "Criação e gestão de campanhas no Google e Meta",
      "Testes de criativos, audiências e páginas de destino",
      "Relatórios semanais com ajustes baseados em dados",
    ],
    platforms: ["Google Ads", "Meta Ads"],
    icon: Target,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    imageAlt: "Dashboard de métricas e análise de campanhas digitais",
    video: "/service-video-1.mp4",
  },
  {
    id: "automacao-ia",
    number: "02",
    title: "Automação com IA",
    tagline: "Fluxos que qualificam e atendem enquanto você trabalha.",
    description:
      "Construímos automações com n8n que conectam WhatsApp, CRM e e-mail em fluxos que qualificam leads e eliminam tarefas repetitivas do seu time.",
    deliverables: [
      "Fluxos n8n para qualificação e encaminhamento de leads",
      "Integração entre WhatsApp, CRM e planilhas",
      "Chatbots treinados com as informações do seu negócio",
    ],
    platforms: ["n8n", "WhatsApp API", "IA"],
    icon: Bot,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    imageAlt: "Inteligência artificial e automação de processos",
    video: "/service-video-automacao.mp4",
  },
  {
    id: "estrategia-digital",
    number: "03",
    title: "Estratégia Digital",
    tagline: "Um plano com metas reais e cronograma definido.",
    description:
      "Organizamos canais, definimos prioridades e montamos um plano de ação com metas claras para que cada iniciativa digital tenha propósito e direção.",
    deliverables: [
      "Diagnóstico dos canais e oportunidades mapeadas",
      "Planejamento com metas e cronograma definidos",
      "Acompanhamento mensal com revisão de estratégia",
    ],
    platforms: ["Analytics", "Consultoria"],
    icon: Compass,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    imageAlt: "Planejamento estratégico e roadmap de resultados",
    video: "/service-video-2.mp4",
  },
  {
    id: "social-media",
    number: "04",
    title: "Social Media",
    tagline: "Conteúdo que conecta, engaja e converte.",
    description:
      "Gerenciamos suas redes sociais com estratégia: calendário editorial, criação de conteúdo visual e copywriting, análise de métricas e engajamento real com sua audiência.",
    deliverables: [
      "Gestão completa de Instagram, Facebook e LinkedIn",
      "Calendário editorial mensal com aprovação prévia",
      "Criação de conteúdo visual e copywriting estratégico",
    ],
    platforms: ["Instagram", "Facebook", "LinkedIn", "TikTok"],
    icon: Share2,
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80",
    imageAlt: "Gestão de redes sociais e criação de conteúdo digital",
    video: "/service-video-social.mp4",
  },
  {
    id: "criacao-websites",
    number: "05",
    title: "Criação de Websites",
    tagline: "Sites rápidos, modernos e que geram resultado.",
    description:
      "Desenvolvemos sites em Next.js com performance máxima, design responsivo e SEO técnico. Landing pages, sites institucionais e e-commerces otimizados para conversão.",
    deliverables: [
      "Site em Next.js com design responsivo e SEO otimizado",
      "Landing pages de alta conversão com A/B testing",
      "E-commerces e sites institucionais sob medida",
    ],
    platforms: ["Next.js", "React", "Vercel", "Tailwind CSS"],
    icon: Globe,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    imageAlt: "Desenvolvimento web moderno e criação de websites",
    video: "/service-video-websites.mp4",
  },
]

// ─── Interactive: Ads Dashboard (Tráfego Pago) ──────────────────────────────

function AdsDashboard() {
  const [activeTab, setActiveTab] = useState<"google" | "meta">("google")
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null)

  const googleMetrics = [
    { icon: MousePointerClick, label: "Cliques", value: "2.847", change: "+12,3%" },
    { icon: Eye, label: "Impressões", value: "48.2k", change: "+8,7%" },
    { icon: DollarSign, label: "CPC Médio", value: "R$ 1,42", change: "-18,5%" },
    { icon: Users, label: "Conversões", value: "186", change: "+24,1%" },
  ]

  const metaMetrics = [
    { icon: Eye, label: "Alcance", value: "127k", change: "+31,2%" },
    { icon: Users, label: "Leads", value: "342", change: "+15,8%" },
    { icon: DollarSign, label: "CPL", value: "R$ 8,90", change: "-22,4%" },
    { icon: TrendingUp, label: "ROAS", value: "4,7x", change: "+19,6%" },
  ]

  const metrics = activeTab === "google" ? googleMetrics : metaMetrics

  const sparklines = [
    [35, 42, 38, 55, 48, 62, 58, 72, 68, 78, 85, 90],
    [20, 28, 32, 25, 40, 35, 48, 52, 45, 60, 55, 65],
    [60, 55, 48, 52, 45, 38, 35, 30, 28, 25, 22, 18],
    [30, 35, 42, 38, 50, 55, 48, 62, 70, 75, 82, 88],
  ]

  return (
    <div className="space-y-3">
      {/* Platform tabs */}
      <div
        className="flex rounded-lg overflow-hidden"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        {(["google", "meta"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="flex-1 py-2.5 min-h-[44px] text-xs font-light uppercase tracking-wider transition-all duration-200"
            style={{
              background: activeTab === tab ? "rgba(255,255,255,0.05)" : "transparent",
              color: activeTab === tab ? "#e2e8f0" : "rgba(255,255,255,0.3)",
              borderBottom: activeTab === tab
                ? "2px solid rgba(255,255,255,0.4)"
                : "2px solid transparent",
            }}
          >
            {tab === "google" ? "Google Ads" : "Meta Ads"}
          </button>
        ))}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-2">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon
          const isHovered = hoveredMetric === idx
          return (
            <div
              key={metric.label}
              className="rounded-xl px-3 py-3 cursor-pointer transition-all duration-200"
              style={{
                background: isHovered
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(255,255,255,0.02)",
                border: isHovered
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "1px solid rgba(255,255,255,0.04)",
              }}
              onMouseEnter={() => setHoveredMetric(idx)}
              onMouseLeave={() => setHoveredMetric(null)}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-3.5 h-3.5" style={{ color: STEEL }} />
                <span
                  className="text-[10px]"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {metric.label}
                </span>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-white text-lg font-light">{metric.value}</span>
                <span
                  className="text-[10px] font-medium"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {metric.change}
                </span>
              </div>
              {/* Sparkline */}
              <div className="flex items-end gap-[2px] h-5 mt-2">
                {sparklines[idx].map((val, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-full"
                    style={{
                      height: `${(val / 100) * 20}px`,
                      background:
                        i >= 9
                          ? "rgba(255,255,255,0.3)"
                          : "rgba(255,255,255,0.08)",
                    }}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Interactive: n8n Workflow Panel (Automação com IA) ──────────────────────

function N8nWorkflow() {
  const [activeNode, setActiveNode] = useState<number | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [executedNodes, setExecutedNodes] = useState<number[]>([])
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const nodes = [
    { icon: Zap, label: "Novo Lead", sub: "Webhook recebe formulário" },
    { icon: BrainCircuit, label: "IA Qualifica", sub: "GPT analisa e pontua" },
    { icon: MessageSquare, label: "WhatsApp", sub: "Resposta automática" },
    { icon: Users, label: "CRM", sub: "Cria contato e deal" },
  ]

  const runWorkflow = useCallback(() => {
    if (isRunning) return
    setIsRunning(true)
    setExecutedNodes([])
    setActiveNode(0)

    let step = 0
    intervalRef.current = setInterval(() => {
      step++
      if (step < nodes.length) {
        setExecutedNodes((prev) => [...prev, step - 1])
        setActiveNode(step)
      } else {
        setExecutedNodes((prev) => [...prev, step - 1])
        setActiveNode(null)
        setIsRunning(false)
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }, 900)
  }, [isRunning, nodes.length])

  const resetWorkflow = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setIsRunning(false)
    setExecutedNodes([])
    setActiveNode(null)
  }, [])

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className="space-y-3">
      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Workflow className="w-4 h-4" style={{ color: STEEL }} />
          <span className="text-white text-xs font-light tracking-wide">
            Fluxo de Qualificação
          </span>
        </div>
        <button
          onClick={isRunning ? resetWorkflow : runWorkflow}
          className="flex items-center gap-1.5 px-3 py-1.5 min-h-[44px] rounded-lg text-xs font-light tracking-wide transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            background: isRunning
              ? "rgba(255,255,255,0.04)"
              : "rgba(255,255,255,0.04)",
            border: isRunning
              ? "1px solid rgba(255,255,255,0.12)"
              : "1px solid rgba(255,255,255,0.1)",
            color: isRunning ? "rgba(255,255,255,0.6)" : "#e2e8f0",
          }}
        >
          {isRunning ? (
            <>
              <Pause className="w-3.5 h-3.5" /> Parar
            </>
          ) : executedNodes.length > 0 ? (
            <>
              <RotateCcw className="w-3.5 h-3.5" /> Reiniciar
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5" /> Executar
            </>
          )}
        </button>
      </div>

      {/* Nodes */}
      <div className="space-y-0">
        {nodes.map((node, idx) => {
          const Icon = node.icon
          const isActive = activeNode === idx
          const isExecuted = executedNodes.includes(idx)
          const isLast = idx === nodes.length - 1

          return (
            <div key={node.label}>
              <div
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 transition-all duration-300"
                style={{
                  background: isActive
                    ? "rgba(255,255,255,0.05)"
                    : isExecuted
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(255,255,255,0.02)",
                  border: isActive
                    ? "1px solid rgba(255,255,255,0.15)"
                    : isExecuted
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(255,255,255,0.04)",
                  transform: isActive ? "scale(1.01)" : "scale(1)",
                  boxShadow: isActive
                    ? "0 0 24px rgba(255,255,255,0.04)"
                    : "none",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{
                    background: isExecuted
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(255,255,255,0.04)",
                    border: isExecuted
                      ? "1px solid rgba(255,255,255,0.12)"
                      : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {isExecuted ? (
                    <CheckCircle2
                      className="w-5 h-5"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    />
                  ) : (
                    <Icon
                      className="w-5 h-5"
                      style={{ color: isActive ? "#e2e8f0" : STEEL }}
                    />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-light">{node.label}</p>
                  <p
                    className="text-[11px]"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {node.sub}
                  </p>
                </div>

                <div className="shrink-0">
                  {isActive && (
                    <div className="flex gap-0.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-bounce"
                        style={{
                          background: STEEL,
                          animationDelay: "0ms",
                        }}
                      />
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-bounce"
                        style={{
                          background: STEEL,
                          animationDelay: "150ms",
                        }}
                      />
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-bounce"
                        style={{
                          background: STEEL,
                          animationDelay: "300ms",
                        }}
                      />
                    </div>
                  )}
                  {isExecuted && !isActive && (
                    <span
                      className="text-[10px] font-light"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      ✓
                    </span>
                  )}
                </div>
              </div>

              {/* Connector */}
              {!isLast && (
                <div className="flex justify-center py-1">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-px h-3 transition-colors duration-500"
                      style={{
                        background: isExecuted
                          ? "rgba(255,255,255,0.3)"
                          : "rgba(255,255,255,0.1)",
                      }}
                    />
                    <ArrowRight
                      className="w-3 h-3 rotate-90 transition-colors duration-500"
                      style={{
                        color: isExecuted
                          ? "rgba(255,255,255,0.3)"
                          : "rgba(255,255,255,0.12)",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Execution log */}
      {executedNodes.length > 0 && (
        <div
          className="rounded-lg px-3 py-2"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <p
            className="text-[10px] font-mono"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {isRunning
              ? `▶ Executando nó ${(activeNode ?? 0) + 1} de ${nodes.length}...`
              : `✓ Fluxo completo — ${nodes.length} nós em ${(nodes.length * 0.9).toFixed(1)}s`}
          </p>
        </div>
      )}
    </div>
  )
}

// ─── Interactive: Strategy Roadmap (Estratégia Digital) ──────────────────────

function StrategyRoadmap() {
  const [activePhase, setActivePhase] = useState(0)

  const phases = [
    {
      icon: Map,
      title: "Diagnóstico",
      week: "Semana 1-2",
      tasks: [
        "Análise de canais atuais",
        "Mapeamento de concorrência",
        "Definição de KPIs",
      ],
      status: "complete" as const,
    },
    {
      icon: CalendarCheck,
      title: "Planejamento",
      week: "Semana 3-4",
      tasks: [
        "Estratégia por canal",
        "Cronograma de ações",
        "Budget por frente",
      ],
      status: "active" as const,
    },
    {
      icon: Zap,
      title: "Execução",
      week: "Semana 5-8",
      tasks: [
        "Ativação de campanhas",
        "Setup de automações",
        "Otimização contínua",
      ],
      status: "pending" as const,
    },
    {
      icon: LineChart,
      title: "Resultados",
      week: "Mensal",
      tasks: [
        "Relatório de performance",
        "Revisão de metas",
        "Ajustes estratégicos",
      ],
      status: "pending" as const,
    },
  ]

  return (
    <div className="space-y-3">
      {/* Progress */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Progresso geral
          </span>
          <span className="text-white text-xs font-light">35%</span>
        </div>
        <div
          className="h-2 rounded-full overflow-hidden"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: "35%",
              background: `linear-gradient(90deg, rgba(${STEEL_RGB}, 0.4), ${STEEL})`,
            }}
          />
        </div>
      </div>

      {/* Phases */}
      <div className="space-y-2">
        {phases.map((phase, idx) => {
          const Icon = phase.icon
          const isActive = activePhase === idx
          const isComplete = phase.status === "complete"

          return (
            <div
              key={phase.title}
              className="rounded-xl transition-all duration-300 cursor-pointer overflow-hidden"
              style={{
                background: isActive
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(255,255,255,0.02)",
                border: isActive
                  ? "1px solid rgba(255,255,255,0.12)"
                  : "1px solid rgba(255,255,255,0.04)",
              }}
              onClick={() => setActivePhase(idx)}
            >
              <div className="flex items-center gap-3 px-4 py-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: isComplete
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(255,255,255,0.04)",
                    border: isComplete
                      ? "1px solid rgba(255,255,255,0.12)"
                      : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {isComplete ? (
                    <CheckCircle2
                      className="w-4 h-4"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    />
                  ) : (
                    <Icon className="w-4 h-4" style={{ color: STEEL }} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-light">{phase.title}</p>
                  <p
                    className="text-[10px]"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {phase.week}
                  </p>
                </div>
                <span
                  className="text-[9px] font-light px-2 py-0.5 rounded-full shrink-0"
                  style={{
                    background: isComplete
                      ? "rgba(255,255,255,0.06)"
                      : phase.status === "active"
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(255,255,255,0.03)",
                    color: isComplete
                      ? "rgba(255,255,255,0.5)"
                      : phase.status === "active"
                      ? "rgba(255,255,255,0.5)"
                      : "rgba(255,255,255,0.3)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {isComplete
                    ? "Concluído"
                    : phase.status === "active"
                    ? "Em andamento"
                    : "Pendente"}
                </span>
              </div>

              {/* Expanded tasks */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: isActive ? "200px" : "0px",
                  opacity: isActive ? 1 : 0,
                }}
              >
                <div className="px-4 pb-3 space-y-1.5">
                  {phase.tasks.map((task) => (
                    <div key={task} className="flex items-center gap-2 pl-12">
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{
                          background: isComplete
                            ? "rgba(255,255,255,0.4)"
                            : `rgba(${STEEL_RGB}, 0.5)`,
                        }}
                      />
                      <span
                        className="text-[11px]"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        {task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Interactive: Social Calendar (Social Media) ─────────────────────────────

function SocialCalendar() {
  const [activeDay, setActiveDay] = useState(1)
  const [activePost, setActivePost] = useState<number | null>(null)

  const weekDays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"]

  const weekPosts: Record<number, { time: string; type: string; icon: typeof ImageIcon; platform: string; caption: string }[]> = {
    0: [
      { time: "09:00", type: "Carrossel", icon: ImageIcon, platform: "Instagram", caption: "5 dicas para aumentar seu alcance" },
      { time: "14:00", type: "Story", icon: Video, platform: "Instagram", caption: "Bastidores do processo criativo" },
    ],
    1: [
      { time: "10:00", type: "Reels", icon: Video, platform: "Instagram", caption: "Tutorial rápido de 30 segundos" },
      { time: "16:00", type: "Post", icon: ImageIcon, platform: "Facebook", caption: "Case de sucesso: resultados do mês" },
      { time: "18:00", type: "Story", icon: Video, platform: "Instagram", caption: "Enquete: qual conteúdo preferem?" },
    ],
    2: [
      { time: "08:30", type: "Artigo", icon: ImageIcon, platform: "LinkedIn", caption: "Tendências de marketing digital 2026" },
      { time: "15:00", type: "Carrossel", icon: ImageIcon, platform: "Instagram", caption: "Antes e depois: redesign de marca" },
    ],
    3: [
      { time: "10:00", type: "Reels", icon: Video, platform: "Instagram", caption: "Dica rápida: copy que converte" },
      { time: "14:30", type: "Post", icon: ImageIcon, platform: "Facebook", caption: "Depoimento de cliente satisfeito" },
    ],
    4: [
      { time: "09:00", type: "Carrossel", icon: ImageIcon, platform: "Instagram", caption: "Resumo da semana em 5 slides" },
      { time: "12:00", type: "Story", icon: Video, platform: "Instagram", caption: "Por trás das câmeras: equipe" },
      { time: "17:00", type: "Vídeo", icon: Video, platform: "TikTok", caption: "Trend adaptada para o nicho" },
    ],
    5: [
      { time: "11:00", type: "Story", icon: Video, platform: "Instagram", caption: "Conteúdo leve de fim de semana" },
    ],
    6: [
      { time: "10:00", type: "Post", icon: ImageIcon, platform: "Instagram", caption: "Frase motivacional + CTA" },
    ],
  }

  const engagementMetrics = [
    { icon: Heart, label: "Curtidas", value: "12.4k", change: "+18,2%" },
    { icon: MessageCircle, label: "Comentários", value: "847", change: "+24,5%" },
    { icon: Repeat2, label: "Compartilhamentos", value: "1.2k", change: "+31,8%" },
    { icon: BarChart3, label: "Alcance", value: "89.3k", change: "+15,6%" },
  ]

  const currentPosts = weekPosts[activeDay] || []

  return (
    <div className="space-y-3">
      {/* Engagement metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
        {engagementMetrics.map((metric) => {
          const Icon = metric.icon
          return (
            <div
              key={metric.label}
              className="rounded-lg px-2 py-2 text-center"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <Icon className="w-3.5 h-3.5 mx-auto mb-1" style={{ color: STEEL }} />
              <p className="text-white text-sm font-light">{metric.value}</p>
              <p
                className="text-[9px]"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {metric.change}
              </p>
            </div>
          )
        })}
      </div>

      {/* Week day selector */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <CalendarCheck className="w-4 h-4" style={{ color: STEEL }} />
            <span className="text-white text-xs font-light tracking-wide">
              Calendário da Semana
            </span>
          </div>
          <span
            className="text-[10px]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Abr 2026
          </span>
        </div>

        <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
          {weekDays.map((day, idx) => {
            const postCount = (weekPosts[idx] || []).length
            const isActive = activeDay === idx
            return (
              <button
                key={day}
                onClick={() => { setActiveDay(idx); setActivePost(null) }}
                className="flex flex-col items-center py-2 rounded-lg transition-all duration-200 min-h-[44px]"
                style={{
                  background: isActive
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(255,255,255,0.02)",
                  border: isActive
                    ? "1px solid rgba(255,255,255,0.15)"
                    : "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <span
                  className="text-[8px] sm:text-[9px] font-light uppercase"
                  style={{
                    color: isActive
                      ? "rgba(255,255,255,0.7)"
                      : "rgba(255,255,255,0.3)",
                  }}
                >
                  {day}
                </span>
                <span
                  className="text-[11px] sm:text-xs font-light mt-0.5"
                  style={{ color: isActive ? "#e2e8f0" : "rgba(255,255,255,0.5)" }}
                >
                  {14 + idx}
                </span>
                {/* Post indicator dots */}
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: Math.min(postCount, 3) }).map((_, i) => (
                    <span
                      key={i}
                      className="w-1 h-1 rounded-full"
                      style={{
                        background: isActive
                          ? STEEL
                          : "rgba(255,255,255,0.2)",
                      }}
                    />
                  ))}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Posts for selected day */}
      <div className="space-y-1.5">
        <p
          className="text-[10px] font-light uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          {currentPosts.length} {currentPosts.length === 1 ? "post agendado" : "posts agendados"}
        </p>
        {currentPosts.map((post, idx) => {
          const PostIcon = post.icon
          const isExpanded = activePost === idx
          return (
            <div
              key={`${post.time}-${idx}`}
              className="rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                background: isExpanded
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(255,255,255,0.02)",
                border: isExpanded
                  ? "1px solid rgba(255,255,255,0.12)"
                  : "1px solid rgba(255,255,255,0.04)",
              }}
              onClick={() => setActivePost(isExpanded ? null : idx)}
            >
              <div className="flex items-center gap-3 px-3 py-2.5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <PostIcon className="w-4 h-4" style={{ color: STEEL }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-white text-sm font-light">{post.type}</span>
                    <span
                      className="text-[9px] px-1.5 py-0.5 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      {post.platform}
                    </span>
                  </div>
                  <p
                    className="text-[10px]"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {post.time}
                  </p>
                </div>
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: `rgba(134,179,134,0.6)` }}
                />
              </div>

              {/* Expanded caption */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: isExpanded ? "60px" : "0px",
                  opacity: isExpanded ? 1 : 0,
                }}
              >
                <p
                  className="px-3 pb-2.5 text-[11px] pl-14"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  &quot;{post.caption}&quot;
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Interactive: Website Builder (Criação de Websites) ──────────────────────

function WebsiteBuilder() {
  const [activeView, setActiveView] = useState<"desktop" | "mobile">("desktop")
  const [activeSection, setActiveSection] = useState(0)

  const lighthouseScores = [
    { label: "Performance", score: 98, color: "rgba(134,179,134,0.7)" },
    { label: "Acessibilidade", score: 100, color: "rgba(134,179,134,0.7)" },
    { label: "Boas Práticas", score: 100, color: "rgba(134,179,134,0.7)" },
    { label: "SEO", score: 100, color: "rgba(134,179,134,0.7)" },
  ]

  const coreWebVitals = [
    { label: "LCP", value: "1.2s", status: "good" as const, desc: "Largest Contentful Paint" },
    { label: "FID", value: "8ms", status: "good" as const, desc: "First Input Delay" },
    { label: "CLS", value: "0.01", status: "good" as const, desc: "Cumulative Layout Shift" },
    { label: "TTFB", value: "180ms", status: "good" as const, desc: "Time to First Byte" },
  ]

  const techStack = [
    { icon: Code2, label: "Next.js 15", desc: "App Router + RSC" },
    { icon: Paintbrush, label: "Tailwind CSS", desc: "Utility-first CSS" },
    { icon: Layers, label: "shadcn/ui", desc: "Component library" },
    { icon: Shield, label: "TypeScript", desc: "Tipagem estática" },
    { icon: Zap, label: "Vercel", desc: "Edge deployment" },
    { icon: Search, label: "SEO Técnico", desc: "Schema + Sitemap" },
  ]

  const siteSections = [
    { label: "Hero", height: "h-10", accent: true },
    { label: "Serviços", height: "h-7", accent: false },
    { label: "Sobre", height: "h-6", accent: false },
    { label: "Depoimentos", height: "h-5", accent: false },
    { label: "Contato", height: "h-6", accent: true },
  ]

  return (
    <div className="space-y-3">
      {/* Site preview */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" style={{ color: STEEL }} />
            <span className="text-white text-xs font-light tracking-wide">
              Preview do Site
            </span>
          </div>
          <div
            className="flex rounded-lg overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {(["desktop", "mobile"] as const).map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className="px-2.5 py-1.5 min-h-[44px] min-w-[44px] flex items-center justify-center transition-all duration-200"
                style={{
                  background: activeView === view
                    ? "rgba(255,255,255,0.06)"
                    : "transparent",
                  color: activeView === view
                    ? "#e2e8f0"
                    : "rgba(255,255,255,0.3)",
                }}
              >
                {view === "desktop" ? (
                  <Monitor className="w-3.5 h-3.5" />
                ) : (
                  <Smartphone className="w-3.5 h-3.5" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mini browser */}
        <div
          className="rounded-xl overflow-hidden transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            maxWidth: activeView === "mobile" ? "200px" : "100%",
            margin: activeView === "mobile" ? "0 auto" : "0",
          }}
        >
          {/* Browser chrome */}
          <div
            className="flex items-center gap-2 px-3 py-2"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
              <span className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
              <span className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
            </div>
            <div
              className="flex-1 rounded px-2 py-0.5 text-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span
                className="text-[9px] font-mono"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                seusite.com.br
              </span>
            </div>
          </div>

          {/* Site wireframe */}
          <div className="p-3 space-y-1.5">
            {siteSections.map((section, idx) => (
              <div
                key={section.label}
                className={`${section.height} rounded-md transition-all duration-300 cursor-pointer flex items-center justify-center`}
                style={{
                  background: activeSection === idx
                    ? "rgba(255,255,255,0.06)"
                    : section.accent
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(255,255,255,0.02)",
                  border: activeSection === idx
                    ? `1px solid rgba(${STEEL_RGB}, 0.4)`
                    : "1px solid rgba(255,255,255,0.04)",
                  transform: activeSection === idx ? "scale(1.02)" : "scale(1)",
                }}
                onMouseEnter={() => setActiveSection(idx)}
              >
                <span
                  className="text-[9px] font-light"
                  style={{
                    color: activeSection === idx
                      ? "rgba(255,255,255,0.5)"
                      : "rgba(255,255,255,0.2)",
                  }}
                >
                  {section.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lighthouse scores */}
      <div>
        <p
          className="text-[10px] font-light uppercase tracking-widest mb-2"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Lighthouse Scores
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
          {lighthouseScores.map((item) => (
            <div
              key={item.label}
              className="rounded-lg px-2 py-2.5 text-center"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              {/* Circular score indicator */}
              <div className="relative w-10 h-10 mx-auto mb-1.5">
                <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="3"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="3"
                    strokeDasharray={`${(item.score / 100) * 87.96} 87.96`}
                    strokeLinecap="round"
                  />
                </svg>
                <span
                  className="absolute inset-0 flex items-center justify-center text-[10px] font-light"
                  style={{ color: "#e2e8f0" }}
                >
                  {item.score}
                </span>
              </div>
              <p
                className="text-[8px] font-light leading-tight"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Web Vitals */}
      <div>
        <p
          className="text-[10px] font-light uppercase tracking-widest mb-2"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Core Web Vitals
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          {coreWebVitals.map((vital) => (
            <div
              key={vital.label}
              className="rounded-lg px-3 py-2 flex items-center gap-2.5"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: "rgba(134,179,134,0.7)" }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-white text-xs font-light">{vital.label}</span>
                  <span className="text-white text-xs font-light">{vital.value}</span>
                </div>
                <p
                  className="text-[9px]"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {vital.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <p
          className="text-[10px] font-light uppercase tracking-widest mb-2"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Stack Tecnológico
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
          {techStack.map((tech) => {
            const TechIcon = tech.icon
            return (
              <div
                key={tech.label}
                className="rounded-lg px-2 py-2 text-center group cursor-default transition-all duration-200 hover:scale-[1.03]"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <TechIcon
                  className="w-4 h-4 mx-auto mb-1 transition-colors duration-200"
                  style={{ color: STEEL }}
                />
                <p
                  className="text-[10px] font-light"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {tech.label}
                </p>
                <p
                  className="text-[8px]"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {tech.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ─── Detail panel (right side) ───────────────────────────────────────────────

function DetailPanel({ service }: { service: Service }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mql.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])

  // Reset video error state when service changes
  useEffect(() => {
    setVideoError(false)
  }, [service.id])

  // IntersectionObserver: only load/play video when panel is visible
  useEffect(() => {
    const el = videoContainerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Play/pause video based on visibility
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isVisible) {
      video.play().catch(() => {
        // Autoplay may fail before data loads — ignore silently
      })
    } else {
      video.pause()
    }
  }, [isVisible])

  const showVideo = service.video && !prefersReducedMotion && !videoError

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        background: "rgba(12, 12, 16, 0.7)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        boxShadow: "0 12px 48px rgba(0,0,0,0.4)",
      }}
    >
      {/* Hero image / video */}
      <div ref={videoContainerRef} className="relative h-48 sm:h-56 w-full overflow-hidden">
        {showVideo && isVisible ? (
          <video
            ref={videoRef}
            key={service.id}
            src={service.video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 30%, rgba(12,12,16,0.95) 100%)",
          }}
        />
        {/* Floating badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5">
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: STEEL }}
            />
            <span
              className="text-[10px] font-light uppercase tracking-wider"
              style={{ color: "#e2e8f0" }}
            >
              {service.title}
            </span>
          </div>
        </div>
        {/* Live badge */}
        <div className="absolute top-4 right-4">
          <div
            className="flex items-center gap-1 px-2 py-1 rounded-full"
            style={{
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "rgba(134,179,134,0.7)" }}
            />
            <span
              className="text-[9px] font-light"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              AO VIVO
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Tagline */}
        <h3 className="text-xl sm:text-2xl font-extralight text-white leading-tight mb-3 tracking-wide">
          {service.tagline}
        </h3>

        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {service.description}
        </p>

        {/* Deliverables */}
        <div className="mb-5">
          <p
            className="text-[10px] font-light uppercase tracking-widest mb-3"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Entregas
          </p>
          <ul className="space-y-2">
            {service.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                />
                <span className="text-[#e2e8f0] text-sm font-light">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {service.platforms.map((platform) => (
            <span
              key={platform}
              className="text-[10px] font-light px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              {platform}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-5"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />

        {/* Interactive panel */}
        {service.id === "trafego-pago" && <AdsDashboard />}
        {service.id === "automacao-ia" && <N8nWorkflow />}
        {service.id === "estrategia-digital" && <StrategyRoadmap />}
        {service.id === "social-media" && <SocialCalendar />}
        {service.id === "criacao-websites" && <WebsiteBuilder />}

        {/* Footer */}
        <div
          className="flex items-center gap-2 rounded-lg px-3 py-2 mt-5"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: `rgba(${STEEL_RGB}, 0.6)` }}
          />
          <span
            className="text-[10px] font-light tracking-wide"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Gerenciado pela On Demand
          </span>
        </div>
      </div>
    </div>
  )
}

// ─── Main export ─────────────────────────────────────────────────────────────

export default function ServicesSimple() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayedIndex, setDisplayedIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const detailRef = useRef<HTMLDivElement>(null)

  const handleServiceClick = useCallback((idx: number) => {
    if (idx === activeIndex) return

    // Start fade-out
    setIsTransitioning(true)
    setActiveIndex(idx)

    // After fade-out, swap content and fade-in
    setTimeout(() => {
      setDisplayedIndex(idx)
      // Small delay to let React render new content, then fade-in
      requestAnimationFrame(() => {
        setIsTransitioning(false)
      })
    }, 150)

    // On mobile only: scroll to detail card
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 200)
    }
  }, [activeIndex])

  const active = services[displayedIndex]

  return (
    <section id="servicos" ref={sectionRef} className="relative bg-[#09090b]">
      <div className="py-16 sm:py-20 lg:py-28 bg-[#09090b] relative overflow-x-clip">
        {/* Background glow — very subtle white radial */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(255,255,255,0.02) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="od-container px-4 relative z-10">
          {/* Section header */}
          <div className="od-reveal mb-14 lg:mb-20">
            <p
              className="text-xs font-light uppercase tracking-[0.25em] mb-4"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              O que fazemos
            </p>
            <h2
              className="text-3xl sm:text-5xl md:text-6xl font-extralight uppercase tracking-[0.12em] leading-[1.05]"
              style={{
                background:
                  "linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.55) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Serviços com
              <br />
              entrega clara.
            </h2>

            {/* Decorative line */}
            <div
              className="h-px max-w-xs mt-6"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.4), transparent)",
              }}
            />

            <p
              className="text-base sm:text-lg mt-6 max-w-xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Cada serviço com escopo definido, acompanhamento constante e
              resultados mensuráveis. Sem entregas genéricas.
            </p>
          </div>

          {/* Two-column layout: selector (left) + detail (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_5fr)_minmax(0,_7fr)] gap-8 lg:gap-10 items-start">
            {/* Left: Service selector list */}
            <div className="space-y-3 lg:sticky lg:top-20 lg:self-start">
              {services.map((service, idx) => {
                const Icon = service.icon
                const isActive = activeIndex === idx

                return (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(idx)}
                    className="w-full text-left rounded-xl p-5 transition-all duration-300 group"
                    style={{
                      background: isActive
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(255,255,255,0.02)",
                      border: isActive
                        ? "1px solid rgba(255,255,255,0.15)"
                        : "1px solid rgba(255,255,255,0.04)",
                      boxShadow: isActive
                        ? "inset 3px 0 0 rgba(255,255,255,0.2), 0 4px 24px rgba(255,255,255,0.02)"
                        : "none",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                        style={{
                          background: isActive
                            ? "rgba(255,255,255,0.06)"
                            : "rgba(255,255,255,0.04)",
                          border: isActive
                            ? "1px solid rgba(255,255,255,0.12)"
                            : "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <Icon
                          className="w-5 h-5 transition-colors duration-300"
                          style={{
                            color: isActive ? "#e2e8f0" : STEEL,
                          }}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-[10px] font-light uppercase tracking-widest transition-colors duration-300"
                            style={{
                              color: isActive
                                ? "rgba(255,255,255,0.5)"
                                : "rgba(255,255,255,0.25)",
                            }}
                          >
                            {service.number}
                          </span>
                        </div>
                        <h3
                          className="text-base font-light transition-colors duration-300 mb-1 tracking-wide"
                          style={{
                            color: isActive ? "#ffffff" : "#e4e4e7",
                          }}
                        >
                          {service.title}
                        </h3>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                          {service.description.slice(0, 100)}…
                        </p>
                      </div>

                      <ArrowRight
                        className="w-4 h-4 shrink-0 mt-1 transition-all duration-300"
                        style={{
                          color: isActive ? STEEL : "transparent",
                          transform: isActive
                            ? "translateX(0)"
                            : "translateX(-8px)",
                          opacity: isActive ? 1 : 0,
                        }}
                      />
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Right: Detail panel */}
            <div ref={detailRef} className="scroll-mt-20">
              <div
                className="transition-opacity duration-300 ease-in-out"
                style={{ opacity: isTransitioning ? 0 : 1 }}
              >
                <DetailPanel key={active.id} service={active} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
