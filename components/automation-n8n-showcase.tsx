"use client"

import { Zap, Play, X, CheckCircle2, Mail, Database, Bot } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

function TiltCard({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -12
    const rotateY = ((x - centerX) / centerX) * 12

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`,
      transition: "transform 0.1s ease-out",
      boxShadow: `${-rotateY * 2}px ${rotateX * 2}px 30px rgba(6,182,212,0.3)`,
    })
  }

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s ease-out, box-shadow 0.5s ease-out",
      boxShadow: "0 0 0 rgba(6,182,212,0)",
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ ...style, transformStyle: "preserve-3d" }}
      className="will-change-transform cursor-pointer"
    >
      {children}
    </div>
  )
}

function SimulationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeStep, setActiveStep] = useState(-1)
  const [logs, setLogs] = useState<{ msg: string; time: string; type: 'info' | 'success' | 'start' }[]>([])
  const [emailState, setEmailState] = useState<'hidden' | 'arriving' | 'opened'>('hidden')
  const canvasRef = useRef<HTMLDivElement>(null)

  const addLog = (msg: string, type: 'info' | 'success' | 'start' = 'info') => {
    setLogs(prev => [...prev, { msg, time: new Date().toLocaleTimeString().split(' ')[0], type }])
  }

  useEffect(() => {
    if (!isPlaying) return

    setLogs([])
    addLog("Iniciando execução do workflow...", 'start')
    setActiveStep(0)
    setEmailState('hidden')

    const delays = [
      { step: 1, ms: 1500, log: "Webhook (Trigger): Dados do lead 'João Silva' recebidos." },
      { step: 2, ms: 3000, log: "OpenAI: Qualificação avançada gerou copy personalizada 'High-Ticket'." },
      { step: 3, ms: 4500, log: "ActiveCampaign: Novo negócio criado e associado ao funil B2B." },
      { step: 4, ms: 6000, log: "Gmail: Disparando e-mail com template otimizado." }
    ]

    const timeouts = delays.map(d => setTimeout(() => {
      addLog(d.log, 'success')
      setActiveStep(d.step)

      if (d.step === 4) {
        setTimeout(() => {
          addLog("Workflow executado com sucesso! (1.23s)", 'start')
          setIsPlaying(false)
          setEmailState('arriving')

          setTimeout(() => setEmailState('opened'), 2500)
        }, 1000)
      }
    }, d.ms))

    return () => timeouts.forEach(clearTimeout)
  }, [isPlaying])

  const handlePlay = () => {
    if (isPlaying) return
    setIsPlaying(true)
  }

  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false)
      setActiveStep(-1)
      setLogs([])
      setEmailState('hidden')
    }
  }, [isOpen])

  const nodes = [
    { id: 0, title: 'Webhook', type: 'Trigger', icon: Zap, x: 50, y: 180, color: 'text-yellow-400' },
    { id: 1, title: 'OpenAI', type: 'AI Node', icon: Bot, x: 300, y: 180, color: 'text-emerald-400' },
    { id: 2, title: 'ActiveCampaign', type: 'CRM', icon: Database, x: 550, y: 180, color: 'text-blue-400' },
    { id: 3, title: 'Gmail', type: 'Action', icon: Mail, x: 800, y: 180, color: 'text-pink-400' },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-7xl h-[85vh] bg-[#1e1e24] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row shadow-black/60 border border-gray-800"
            onClick={e => e.stopPropagation()}
          >
            {/* Fechar Mobile */}
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white z-[60] md:hidden bg-black/50 p-2 rounded-full">
              <X className="w-5 h-5" />
            </button>

            {/* Painel Esquerdo: Canvas do n8n */}
            <div className="w-full md:w-3/4 relative bg-[#0b0c10] overflow-hidden flex flex-col h-full border-r border-[#2d2d2d]">

              {/* Header Canvas n8n */}
              <div className="h-14 border-b border-[#2d2d2d] bg-[#1a1b23] flex items-center justify-between px-4 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.4)]">
                    <img src="/N8n-logo-new.svg" alt="n8n" width={16} height={16} className="invert brightness-0" loading="lazy" />
                  </div>
                  <span className="text-gray-200 text-sm font-semibold">On Demand B2B Flow</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePlay}
                    disabled={isPlaying}
                    className={`px-4 py-1.5 rounded text-sm font-medium transition-colors flex items-center gap-2 ${isPlaying ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-500 text-white'}`}
                  >
                    <Play className="w-4 h-4 fill-current" />
                    {isPlaying ? 'Executing...' : 'Test workflow'}
                  </button>
                </div>
              </div>

              {/* Área de Nós do Canvas */}
              <div
                ref={canvasRef}
                className="relative flex-1 overflow-auto bg-[#0b0c10]"
                style={{ backgroundImage: 'radial-gradient(circle, #2d2d2d 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}
              >
                <div className="relative min-w-[1100px] h-full min-h-[500px]">

                  {/* Linhas Conectoras SVG */}
                  <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                    {nodes.map((node, i) => {
                      if (i === nodes.length - 1) return null;
                      const next = nodes[i + 1];

                      const startX = node.x + 220;
                      const startY = node.y + 40;
                      const endX = next.x;
                      const endY = next.y + 40;
                      const pathD = `M ${startX} ${startY} C ${startX + 30} ${startY}, ${endX - 30} ${endY}, ${endX} ${endY}`;

                      const isPulsing = isPlaying && activeStep === i;
                      const isDone = activeStep > i;

                      return (
                        <g key={`path-${i}`}>
                          <path d={pathD} stroke="#444" strokeWidth="3" fill="none" />
                          {isPulsing && (
                            <motion.path
                              d={pathD}
                              stroke="#22c55e"
                              strokeWidth="3"
                              fill="none"
                              strokeDasharray="8 8"
                              initial={{ strokeDashoffset: 100 }}
                              animate={{ strokeDashoffset: 0 }}
                              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                            />
                          )}
                          {isDone && (
                            <path d={pathD} stroke="#22c55e" strokeWidth="3" fill="none" />
                          )}
                        </g>
                      )
                    })}
                  </svg>

                  {/* Cards dos Nós */}
                  {nodes.map((node, i) => (
                    <div key={node.id} className="absolute transition-transform duration-300 z-10" style={{ left: node.x, top: node.y }}>
                      <div className={`w-[220px] bg-[#1a1b23] border ${activeStep === i && isPlaying ? 'border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)]' : activeStep > i ? 'border-green-500/50' : 'border-[#3d3d3d]'} rounded-lg shadow-xl overflow-hidden`}>
                        {/* Input Port (Dots on side) */}
                        {i !== 0 && <div className="absolute -left-1.5 top-10 w-3 h-3 bg-gray-500 rounded-full border-2 border-[#1a1b23] z-20" />}

                        {/* Header do Node */}
                        <div className="px-4 py-3 pb-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded shadow-inner bg-black/40 flex items-center justify-center border border-gray-700/50 ${node.color}`}>
                              <node.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-gray-100 font-semibold text-[13px]">{node.title}</p>
                              <p className="text-gray-500 text-[11px] font-mono">{node.type}</p>
                            </div>
                          </div>
                        </div>

                        {/* Success / Status Indicator */}
                        {(activeStep > i || (activeStep === i && !isPlaying && i === nodes.length - 1)) && (
                          <div className="absolute right-2 top-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                          </div>
                        )}

                        {/* Node Run Status Bar bottom */}
                        {activeStep === i && isPlaying && (
                          <motion.div className="h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-b-lg w-full" layoutId="highlight" />
                        )}

                        {/* Output Port */}
                        {i !== nodes.length - 1 && <div className="absolute -right-1.5 top-10 w-3 h-3 bg-gray-500 rounded-full border-2 border-[#1a1b23] z-20" />}
                      </div>
                    </div>
                  ))}

                </div>
              </div>

              {/* Gmail Notification Popup Overlay (Simulating Windows/Mac OS Desktop Notification) */}
              <AnimatePresence>
                {emailState !== 'hidden' && (
                  <motion.div
                    initial={{ opacity: 0, x: 50, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={`absolute right-6 top-20 z-[100] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-gray-200 overflow-hidden text-gray-800 flex flex-col transition-all duration-500 ease-out origin-top-right ${emailState === 'opened' ? 'w-96 md:w-[450px] h-[400px]' : 'w-72 h-20 cursor-pointer hover:bg-gray-50'}`}
                    onClick={() => setEmailState('opened')}
                  >
                    {emailState === 'arriving' ? (
                      <div className="flex items-center justify-start h-full px-4 w-full">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500 mr-3 shrink-0">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-sm text-gray-900 truncate">On Demand Bot</p>
                          <p className="text-xs text-gray-600 truncate">Você tem um novo e-mail gerado.</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col h-full w-full">
                        {/* Header Gmail fake */}
                        <div className="bg-[#f0f4f9] px-4 py-3 flex justify-between items-center border-b">
                          <div className="flex items-center gap-2">
                            <Mail className="text-red-500 w-5 h-5" />
                            <span className="font-semibold text-sm text-gray-700">Gmail</span>
                          </div>
                          <button onClick={(e) => { e.stopPropagation(); setEmailState('hidden'); }} className="text-gray-500 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        {/* Corpo Email */}
                        <div className="px-5 py-4 flex-1 overflow-y-auto">
                          <div className="flex gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-blue-800 text-white flex items-center justify-center font-bold text-lg shrink-0">OD</div>
                            <div className="flex-1">
                              <div className="flex justify-between items-baseline mb-1">
                                <p className="font-bold text-gray-900 text-sm">On Demand System</p>
                                <span className="text-xs text-gray-500">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                              </div>
                              <p className="text-xs text-gray-500 font-medium">para: João Silva &lt;joao.silva@techcorp.com.br&gt;</p>
                            </div>
                          </div>

                          <h1 className="text-xl font-medium text-gray-900 mb-4 tracking-tight">Estratégia Exclusiva de Escala para a Tech Corp</h1>

                          <div className="text-[14px] text-gray-800 space-y-4 leading-relaxed font-sans">
                            <p>Olá João,</p>
                            <p>Eu analisei a operação de inbound da <strong className="font-semibold text-blue-700">Tech Corp</strong> nos últimos meses e identifiquei oportunidades claras de melhoria que sua concorrência ainda não está utilizando.</p>
                            <p>Com ajuda do n8n, preparei este e-mail para você logo após o preenchimento do formulário.</p>
                            <p>Nós construímos essa mesma máquina hiperpersonalizada para nossos clientes. Uma mÃ¡quina que pesquisa o perfil do lead, escreve uma abordagem perfeita e dispara agendamentos sem depender de SDRs lentos.</p>
                            <div className="pt-4 border-t border-gray-100 mt-4">
                              <p className="font-semibold text-gray-900 mb-2">Quer ver essa infraestrutura rodando no seu negócio?</p>
                              <a href="https://wa.me/553196966686?text=Ol%C3%A1!%20Quero%20entender%20como%20funciona%20a%20automa%C3%A7%C3%A3o" target="_blank" rel="noreferrer" className="inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-md">
                                Falar com a On Demand
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Painel Direito: ExecuÃ§Ãµes / Logs */}
            <div className="w-full md:w-1/4 bg-[#1a1b23] flex flex-col h-1/2 md:h-full border-l border-[#2d2d2d]">
              <div className="h-10 border-b border-[#2d2d2d] flex items-center">
                <div className="px-4 border-b-2 border-orange-500 h-full flex items-center relative -mb-[2px]">
                  <span className="text-xs font-semibold text-white">Executions</span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-[11px] bg-[#121319]">
                {logs.length === 0 && !isPlaying ? (
                  <div className="text-gray-500 italic text-center mt-10">Press 'Test workflow' to start execution.</div>
                ) : (
                  logs.map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-2 p-2 rounded bg-[#1a1b23] border ${log.type === 'start' ? 'border-blue-500/30' : log.type === 'success' ? 'border-green-500/30 text-green-400' : 'border-gray-800 text-gray-400'}`}
                    >
                      <span className="text-gray-600 shrink-0">[{log.time}]</span>
                      <span className="break-words">{log.msg}</span>
                    </motion.div>
                  ))
                )}
                {isPlaying && (
                  <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity }} className="flex gap-2 p-2">
                    <span className="text-orange-500">Running nodes...</span>
                  </motion.div>
                )}
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function AutomationN8NShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const workflows = [
    {
      title: "Triagem & Qualificação de Leads B2B",
      description: "O fluxo captura leads via webhook, organiza informações e envia uma proposta no WhatsApp com validação humana.",
      gifUrl: "https://s12.gifyu.com/images/b9m0O.gif", // Reaproveitando os gifs temporários ou placeholder estático
      tags: ["OpenAI", "WhatsApp", "CRM"],
      icon: Play,
      metric: "Teste Agora",
      metricLabel: "Clique para interagir",
    }
  ]

  return (
    <>
      <section className="od-section sm:py-32 bg-[#09090b] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="od-container px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Header Esquerda */}
          <div className="w-full lg:w-1/2 text-center lg:text-left od-reveal">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#18181b] border border-[#27272a] px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-6 sm:mb-8 shadow-xl">
              <img src="/N8n-logo-new.svg" alt="N8N Logo" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" loading="lazy" />
              <span className="text-[#a1a1aa] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Infraestrutura de Automação
              </span>
              <img src="/automation-infra.svg" alt="" width={120} height={24} className="hidden sm:block h-5 w-auto opacity-80" loading="lazy" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <span className="text-white">Mais do que sites. </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]">Sistemas Inteligentes.</span>
            </h2>

            <p className="text-[#a1a1aa] text-lg sm:text-xl leading-relaxed mb-10">
              Nossa agência constrói workflows complexos usando <strong className="text-white">n8n</strong>. Conectamos planilhas, CRMs, e-mail e WhatsApp para reduzir trabalho manual e organizar o fluxo de atendimento.
            </p>

            <ul className="space-y-4 text-left max-w-md mx-auto lg:mx-0">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span className="text-[#e4e4e7] font-medium">Capture e organize leads B2B com fluxo contínuo</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span className="text-[#e4e4e7] font-medium">Qualificação instantânea com IA nativa</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span className="text-[#e4e4e7] font-medium">Envio de propostas e agendamentos com comunicação clara</span>
              </li>
            </ul>
          </div>

          {/* Interactive Card Direita */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 od-reveal od-reveal-delay-2">
            <div className="relative group/wrap">
              {/* Orb Glow Behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#06b6d4]/10 rounded-full blur-[80px] -z-10" />

              <TiltCard onClick={() => setIsModalOpen(true)}>
                <div className="group relative bg-[#18181b] border-2 border-[#27272a] rounded-3xl overflow-hidden hover:border-[#06b6d4]/50 transition-all duration-300 shadow-2xl">
                  {/* Play Overlay Indicador */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-black/40">
                    <div className="w-20 h-20 bg-[#06b6d4] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.6)] pl-2 transform group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-black fill-current" />
                    </div>
                    <p className="text-white font-bold mt-4 uppercase tracking-wider flex items-center gap-2 drop-shadow-lg">Simular Execução Real</p>
                  </div>

                  {/* GIF Container Placeholder (estático para ilustrar) */}
                  <div className="relative aspect-video bg-[#09090b] overflow-hidden border-b border-[#27272a]">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4 opacity-40">
                      <div className="w-12 h-12 bg-zinc-800 rounded flex items-center justify-center border border-zinc-700 shadow-lg"><Zap className="w-6 h-6 text-yellow-400" /></div>
                      <div className="w-16 h-1 bg-zinc-700" />
                      <div className="w-12 h-12 bg-zinc-800 rounded flex items-center justify-center border border-zinc-700 shadow-lg"><Bot className="w-6 h-6 text-[#8b5cf6]" /></div>
                      <div className="w-16 h-1 bg-zinc-700" />
                      <div className="w-12 h-12 bg-zinc-800 rounded flex items-center justify-center border border-zinc-700 shadow-lg"><Mail className="w-6 h-6 text-pink-400" /></div>
                    </div>
                  </div>

                  {/* Content do Card */}
                  <div className="p-6 sm:p-8 bg-[#18181b]">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {workflows[0].tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 bg-[#27272a] text-[#a1a1aa] rounded-full text-xs font-bold border border-[#3f3f46]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                      <Play className="w-5 h-5 text-[#06b6d4] fill-[#06b6d4]" />
                      {workflows[0].title}
                    </h3>
                    <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed">
                      {workflows[0].description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* Rende o Modal fora da Section principal */}
      <SimulationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}




