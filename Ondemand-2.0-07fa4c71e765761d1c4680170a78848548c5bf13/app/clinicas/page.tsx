"use client"

import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import {
  ArrowLeft,
  Calendar,
  MessageCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  Zap,
  Shield,
  Stethoscope,
  Users,
  Phone,
  Mail,
  X,
  HeartPulse,
  ChevronDown,
  Star,
  BarChart3,
  Target,
  Award,
  Sparkles,
} from "lucide-react"

export default function ClinicasPage() {
  const problems = [
    {
      icon: <X className="text-red-500" size={32} />,
      title: "80% dos agendamentos por WhatsApp não comparecem?",
      description: "Pacientes marcam consulta mas não aparecem, deixando sua agenda com buracos e prejudicando o faturamento.",
    },
    {
      icon: <AlertCircle className="text-orange-500" size={32} />,
      title: "Secretária sobrecarregada com confirmações?",
      description: "Sua equipe gasta horas confirmando consultas manualmente, uma por uma, quando poderia estar focada no atendimento.",
    },
    {
      icon: <Clock className="text-yellow-500" size={32} />,
      title: "Pacientes esquecem da consulta?",
      description: "Sem lembretes automáticos, pacientes simplesmente esquecem do horário marcado e você perde tempo e dinheiro.",
    },
    {
      icon: <Calendar className="text-red-500" size={32} />,
      title: "Difícil remarcar horários cancelados?",
      description: "Quando alguém desmarca, o horário fica vazio porque não há um sistema para oferecer rapidamente para outros pacientes."
    },
  ]

  const solutions = [
    {
      icon: <MessageCircle className="text-[#25D366]" size={32} />,
      title: "Agendamento Automático 24/7",
      description: "Pacientes agendam direto pelo WhatsApp a qualquer hora. IA qualifica o caso e envia horários disponíveis automaticamente.",
      benefit: "Capture agendamentos mesmo de madrugada",
    },
    {
      icon: <Clock className="text-[#00d9ff]" size={32} />,
      title: "Lembretes Inteligentes",
      description: "Sistema envia lembrete automático 24h antes e 2h antes da consulta por WhatsApp e SMS, com confirmação em 1 clique.",
      benefit: "Reduza no-show em até 70%",
    },
    {
      icon: <Star className="text-[#ffd700]" size={32} />,
      title: "Pós-consulta Automatizado",
      description: "Após atendimento, sistema envia pesquisa NPS e solicita avaliação no Google automaticamente, melhorando sua reputação.",
      benefit: "Aumente avaliaes 5 estrelas",
    },
    {
      icon: <HeartPulse className="text-[#ff006e]" size={32} />,
      title: "Campanhas de Retorno",
      description: "Para procedimentos estéticos: lembretes automáticos de retorno, manutenção (botox, preenchimento) e pacotes personalizados.",
      benefit: "Fature mais com recorrncia",
    },
    {
      icon: <Stethoscope className="text-[#9d4edd]" size={32} />,
      title: "Integração com Sistemas Médicos",
      description: "Conectamos com iClinic, Doctoralia, Clinicorp, MedPlus e outros. Agenda sincronizada em tempo real sem retrabalho.",
      benefit: "Sem duplicidade de agenda",
    },
    {
      icon: <BarChart3 className="text-[#00d966]" size={32} />,
      title: "Relatórios Gerenciais",
      description: "Dashboard com taxa de no-show, horários mais procurados, origem dos pacientes e ROI das campanhas em tempo real.",
      benefit: "Tome decisões baseadas em dados",
    },
  ]

  const caseStudy = {
    name: "Clínica Estética São Paulo",
    segment: "Estética Avançada",
    location: "São Paulo - SP",
    period: "3 meses",
    challenge: "Agenda lotada de agendamentos por WhatsApp mas 40% de no-show. Secretária sobrecarregada e faturamento comprometido.",
    before: {
      leads: 45,
      noShow: 40,
      revenue: "R$ 48k",
      manual: "25h/semana",
    },
    after: {
      leads: 340,
      noShow: 12,
      revenue: "R$ 280k",
      manual: "3h/semana",
    },
    results: {
      leadsGrowth: "+656%",
      noShowReduction: "-70%",
      revenueGrowth: "+483%",
      timeSaved: "88h/mês",
      roi: "5.8x",
    },
    testimonial:
      "Em 3 semanas nossa agenda lotou. O sistema reduziu drasticamente o no-show e a secretária agora consegue focar no atendimento presencial. Melhor investimento que fizemos!",
    owner: "Dra. Mariana Costa",
    role: "Proprietria",
  }

  const workflow = [
    {
      step: "1",
      title: "Paciente Agenda",
      description: "Via WhatsApp, Instagram, Site ou Google",
      icon: <MessageCircle className="text-[#25D366]" size={24} />,
    },
    {
      step: "2",
      title: "IA Qualifica",
      description: "Identifica procedimento e urgncia automaticamente",
      icon: <Sparkles className="text-[#ffd700]" size={24} />,
    },
    {
      step: "3",
      title: "Envia Horrios",
      description: "Mostra agenda disponvel em tempo real",
      icon: <Calendar className="text-[#00d9ff]" size={24} />,
    },
    {
      step: "4",
      title: "Confirmao",
      description: "Paciente confirma e recebe todos os detalhes",
      icon: <CheckCircle2 className="text-[#00d966]" size={24} />,
    },
    {
      step: "5",
      title: "Lembrete 24h",
      description: "WhatsApp automático com dados da consulta",
      icon: <Clock className="text-[#ff006e]" size={24} />,
    },
    {
      step: "6",
      title: "Lembrete 2h",
      description: "ltimo aviso antes do horário marcado",
      icon: <Clock className="text-[#ff006e]" size={24} />,
    },
    {
      step: "7",
      title: "Atendimento",
      description: "Paciente comparece na clínica pontualmente",
      icon: <Users className="text-[#9d4edd]" size={24} />,
    },
    {
      step: "8",
      title: "Ps-consulta",
      description: "NPS + Avaliao Google + Prximo retorno",
      icon: <Star className="text-[#ffd700]" size={24} />,
    },
  ]

  const pricing = [
    {
      name: "Clinic Starter",
      price: "2.997",
      best: false,
      description: "Para clínicas iniciando na automação",
      features: [
        "At 200 agendamentos/mês",
        "Agendamento automático WhatsApp",
        "Lembretes 24h e 2h antes",
        "Confirmaes automticas",
        "Integrao com 1 sistema mdico",
        "Dashboard bsico",
        "Suporte via email",
        "Setup em 5 dias teis",
      ],
      guarantee: "30 agendamentos em 30 dias",
    },
    {
      name: "Clinic Growth",
      price: "4.997",
      best: true,
      description: "Mais popular entre clínicas mdias",
      features: [
        "At 500 agendamentos/mês",
        "Tudo do Starter +",
        "Ps-consulta com NPS",
        "Solicitação de avaliação Google",
        "Campanhas de retorno",
        "Integração ilimitada de sistemas",
        "Dashboard avanado + relat?rios",
        "WhatsApp Business API dedicado",
        "Suporte prioritário (WhatsApp)",
        "Setup em 3 dias úteis",
      ],
      guarantee: "50 agendamentos em 30 dias",
    },
    {
      name: "Clinic Scale",
      price: "9.997",
      best: false,
      description: "Para clínicas de alto volume",
      features: [
        "Agendamentos ilimitados",
        "Tudo do Growth +",
        "Múltiplas especialidades/médicos",
        "Fila de espera inteligente",
        "Remarketing automático",
        "Integração com Tráfego Pago",
        "IA para triagem de casos",
        "Automação de pacotes (estética)",
        "Gerente de conta dedicado",
        "Setup em 2 dias úteis",
        "Treinamento equipe presencial",
      ],
      guarantee: "100 agendamentos em 30 dias",
    },
  ]

  const faqs = [
    {
      question: "Funciona com meu sistema médico atual?",
      answer:
        "Sim! Integramos com os principais sistemas: iClinic, Doctoralia, Clinicorp, MedPlus, Ninsade, Amplimed, MV, Tasy e mais. Se seu sistema tem API ou permite integração via Zapier/n8n, conseguimos conectar. Caso não tenha, podemos usar Google Calendar como agenda intermediária.",
    },
    {
      question: "Os dados dos pacientes estão protegidos? E a LGPD?",
      answer:
        "Absolutamente. Somos 100% compliance com LGPD. Todos os dados trafegam criptografados, são armazenados em servidores brasileiros seguros, e temos termo de consentimento automático. Prontuários NUNCA so acessados - apenas informações de agendamento (nome, telefone, horário). Fornecemos relat?rio de adequação à LGPD.",
    },
    {
      question: "Quanto tempo para configurar e começar a usar?",
      answer:
        "Depende do plano: Starter (5 dias), Growth (3 dias), Scale (2 dias). O processo inclui: análise da sua agenda atual, configuração da automação, integração com sistemas, testes completos e treinamento da equipe. Após setup, o sistema roda 24/7 automaticamente.",
    },
    {
      question: "E se o paciente não usar WhatsApp?",
      answer:
        "O sistema é multicanal. Pacientes sem WhatsApp recebem SMS automático (integrado). Também temos opção de email e ligação de robô de voz. Mas hoje 98% dos brasileiros usam WhatsApp, então a cobertura é quase total. Para agendar, também aceitam via telefone tradicional.",
    },
    {
      question: "Como funciona a garantia de agendamentos?",
      answer:
        "Se você no atingir o mínimo de agendamentos garantido no primeiro mês (30, 50 ou 100 conforme plano), devolvemos 100% do investimento. Simples assim. Mas isso raramente acontece - nossa taxa de sucesso  96%. Alguns clientes batem a meta em 2 semanas.",
    },
    {
      question: "Preciso mudar minha operao atual?",
      answer:
        "Não! A automação se adapta à sua operação, não o contrário. Continuamos atendendo telefone normalmente, a secretária continua agendando como sempre. A diferença  que agora o sistema faz isso TAMBÉM, 24/7, sem sobrecarregar ninguém. é um complemento inteligente.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer:
        "Sim, sem burocracia. Trabalhamos com contrato mensal (sem fidelidade). Se não estiver satisfeito, pode cancelar a qualquer momento com aviso prévio de 30 dias. Mas nosso churn  baixíssimo - quando a clínica vê a agenda lotando e o no-show caindo, não quer mais voltar ao manual.",
    },
    {
      question: "Qual a diferença para contratar mais uma secretária?",
      answer:
        "Uma secretária (salário + encargos) custa ~R$ 3.500/mês e trabalha 8h/dia, 5 dias/semana. Nossa automação custa a partir de R$ 2.997/mês e trabalha 24h/dia, 7 dias/semana, nunca tira férias, não erra, não esquece, e ainda gera relat?rios gerenciais. Além disso, sua secretária atual fica LIVRE para atender melhor quem está na clínica.",
    },
  ]

  const urgency = {
    slotsRemaining: 2,
    month: "dezembro",
    nextAvailability: "janeiro (fila de espera)",
    reason: "Setup personalizado limitado por capacidade tcnica da equipe",
  }

  return (
    <>
      <main className="od-page">
        <Navigation />

        {/* HERO SECTION - ESPECFICO PARA CLNICAS */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#0D1117] to-[#161B22] border-b border-[#30363D] relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00d966]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff006e]/10 rounded-full blur-3xl"></div>

          <div className="od-container px-4 relative z-10 od-reveal">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#00d9ff] hover:text-[#ff006e] transition mb-8"
            >
              <ArrowLeft size={20} />
              Voltar para Home
            </Link>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d966]/10 border border-[#00d966]/30 rounded-full mb-6">
              <Stethoscope className="text-[#00d966]" size={16} />
              <span className="text-sm text-[#00d966] font-semibold">Especializado em Clínicas Médicas e Estéticas</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-[#E6E6FA]">Sua Clínica Lotada em </span>
              <span className="bg-gradient-to-r from-[#00d966] to-[#00d9ff] bg-clip-text text-transparent">
                30 Dias
              </span>
              <br />
              <span className="text-[#E6E6FA]">ou Devolvemos Seu </span>
              <span className="bg-gradient-to-r from-[#ff006e] to-[#ba1cbe] bg-clip-text text-transparent">
                Investimento
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-[#E6E6FA]/80 max-w-4xl mb-8 leading-relaxed">
              <span className="text-[#00d9ff] font-semibold">Automação + Tráfego Pago</span> que já encheu a agenda de{" "}
              <span className="text-[#ff006e] font-bold">47 clínicas</span> em SP, MG e RJ
            </p>

            {/* Pain Points Quick List */}
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#161B22] border border-[#30363D] rounded-lg">
                <CheckCircle2 className="text-[#00d966]" size={16} />
                <span className="text-sm text-[#E6E6FA]/80">Reduza no-show em 70%</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#161B22] border border-[#30363D] rounded-lg">
                <CheckCircle2 className="text-[#00d966]" size={16} />
                <span className="text-sm text-[#E6E6FA]/80">Agenda automatizada 24/7</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#161B22] border border-[#30363D] rounded-lg">
                <CheckCircle2 className="text-[#00d966]" size={16} />
                <span className="text-sm text-[#E6E6FA]/80">Secretária livre para atender melhor</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-[#00d966] to-[#00d9ff] text-white font-bold uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-[#00d966]/50 transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Agendar Diagnóstico Gratuito para Clnicas
                <ChevronDown className="group-hover:translate-y-1 transition" size={20} />
              </a>
              <a
                href="#caso-sucesso"
                className="px-8 py-4 bg-[#161B22] border-2 border-[#30363D] text-[#E6E6FA] font-semibold tracking-wider rounded-lg hover:border-[#00d966] transition flex items-center justify-center gap-2"
              >
                <Award size={20} />
                Ver Caso de Sucesso Real
              </a>
            </div>

            {/* Social Proof Stats */}
            <div className="grid od-reveal grid-cols-2 md:grid-cols-4 gap-4">
              <div className="px-6 py-4 bg-[#161B22] border border-[#30363D] rounded-lg hover:border-[#00d966] transition">
                <div className="text-3xl font-bold text-[#00d966] mb-1">47</div>
                <div className="text-sm text-[#E6E6FA]/70">Clínicas Atendidas</div>
              </div>
              <div className="px-6 py-4 bg-[#161B22] border border-[#30363D] rounded-lg hover:border-[#00d9ff] transition">
                <div className="text-3xl font-bold text-[#00d9ff] mb-1">-70%</div>
                <div className="text-sm text-[#E6E6FA]/70">Reduo No-Show</div>
              </div>
              <div className="px-6 py-4 bg-[#161B22] border border-[#30363D] rounded-lg hover:border-[#ff006e] transition">
                <div className="text-3xl font-bold text-[#ff006e] mb-1">5.8x</div>
                <div className="text-sm text-[#E6E6FA]/70">ROI Mdio</div>
              </div>
              <div className="px-6 py-4 bg-[#161B22] border border-[#30363D] rounded-lg hover:border-[#9d4edd] transition">
                <div className="text-3xl font-bold text-[#9d4edd] mb-1">96%</div>
                <div className="text-sm text-[#E6E6FA]/70">Taxa de Sucesso</div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMAS ESPECFICOS DE CLNICAS */}
        <section className="od-section py-20 bg-[#0D1117] border-b border-[#30363D]">
          <div className="od-container px-4 od-reveal">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-[#E6E6FA]">Voc est </span>
                <span className="bg-gradient-to-r from-[#ff006e] to-[#ba1cbe] bg-clip-text text-transparent">
                  perdendo dinheiro
                </span>
                <span className="text-[#E6E6FA]"> com isso?</span>
              </h2>
              <p className="text-[#E6E6FA]/70 text-lg max-w-3xl mx-auto">
                Esses so os 4 problemas mais comuns que drenam o faturamento de clínicas mdicas e estticas no Brasil:
              </p>
            </div>

            <div className="grid od-reveal grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map((problem, idx) => (
                <div
                  key={idx}
                  className="group p-6 bg-[#161B22] border-2 border-[#30363D] rounded-xl hover:border-red-500/50 transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-[#0D1117] rounded-lg group-hover:scale-110 transition">
                      {problem.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#E6E6FA] mb-2">{problem.title}</h3>
                      <p className="text-[#E6E6FA]/70 leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-2 border-red-500/30 rounded-xl text-center">
              <p className="od-subtitle text-lg">
                <span className="font-bold text-red-400">Se você se identificou com 2 ou mais desses problemas</span>,
                sua clínica est deixando de faturar{" "}
                <span className="font-bold text-[#ff006e]">R$ 30-80k por ms</span> em agendamentos perdidos e no-show.
              </p>
            </div>
          </div>
        </section>

        {/* SOLUES OFERECIDAS */}
        <section className="od-section py-20 bg-[#161B22] border-b border-[#30363D]">
          <div className="od-container px-4 od-reveal">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-[#E6E6FA]">A Soluo </span>
                <span className="bg-gradient-to-r from-[#00d966] to-[#00d9ff] bg-clip-text text-transparent">
                  Completa
                </span>
                <span className="text-[#E6E6FA]"> para Sua Clnica</span>
              </h2>
              <p className="text-[#E6E6FA]/70 text-lg max-w-3xl mx-auto">
                Sistema integrado que automatiza agendamento, confirma presena, recupera no-show e fideliza pacientes
              </p>
            </div>

            <div className="grid od-reveal grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, idx) => (
                <div
                  key={idx}
                  className="group p-6 bg-[#0D1117] border-2 border-[#30363D] rounded-xl hover:border-[#00d966] transition"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 p-3 bg-[#161B22] rounded-lg group-hover:scale-110 transition">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#E6E6FA] mb-2">{solution.title}</h3>
                    </div>
                  </div>
                  <p className="text-[#E6E6FA]/70 text-sm leading-relaxed mb-4">{solution.description}</p>
                  <div className="pt-4 border-t border-[#30363D]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-[#00d966] flex-shrink-0" size={16} />
                      <span className="text-sm text-[#00d966] font-semibold">{solution.benefit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d966] to-[#00d9ff] text-white font-bold uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-[#00d966]/50 transition transform hover:scale-105"
              >
                Ver Planos e Preos
                <ChevronDown size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* CASO DE SUCESSO - S CLNICAS */}
        <section id="caso-sucesso" className="od-section py-20 bg-[#0D1117] border-b border-[#30363D]">
          <div className="od-container px-4 od-reveal">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff006e]/10 border border-[#ff006e]/30 rounded-full mb-4">
                <Award className="text-[#ff006e]" size={16} />
                <span className="text-sm text-[#ff006e] font-semibold">Caso de Sucesso Verificado</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#E6E6FA]">
                De <span className="text-red-400">40% de No-Show</span> para{" "}
                <span className="text-[#00d966]">Agenda Lotada</span> em 3 Semanas
              </h2>
            </div>

            <div className="od-card od-card-hover border-2 border-[#30363D] rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="p-8 bg-gradient-to-r from-[#ff006e]/10 to-[#ba1cbe]/10 border-b border-[#30363D]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#E6E6FA] mb-2">{caseStudy.name}</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="text-sm text-[#E6E6FA]/70">{caseStudy.segment}</span>
                      <span className="text-[#30363D]">"</span>
                      <span className="text-sm text-[#E6E6FA]/70">{caseStudy.location}</span>
                      <span className="text-[#30363D]">"</span>
                      <span className="text-sm px-3 py-1 bg-[#00d9ff]/20 text-[#00d9ff] rounded-full font-semibold">
                        {caseStudy.period}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-[#0D1117] border border-[#30363D] rounded-lg">
                  <p className="text-[#E6E6FA]/80 italic">
                    <span className="font-bold text-red-400">Desafio:</span> {caseStudy.challenge}
                  </p>
                </div>
              </div>

              {/* Before vs After */}
              <div className="p-8">
                <h4 className="text-xl font-bold text-[#E6E6FA] mb-6 text-center">Antes vs Depois</h4>
                <div className="grid od-reveal grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Before */}
                  <div className="p-6 bg-[#0D1117] border-2 border-red-500/30 rounded-xl">
                    <div className="text-center mb-4">
                      <span className="inline-block px-4 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-bold">
                        ANTES
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-[#E6E6FA]/60 mb-1">Leads/mês</div>
                        <div className="text-3xl font-bold text-red-400">{caseStudy.before.leads}</div>
                      </div>
                      <div>
                        <div className="text-sm text-[#E6E6FA]/60 mb-1">Taxa No-Show</div>
                        <div className="text-3xl font-bold text-red-400">{caseStudy.before.noShow}%</div>
                      </div>
                      <div>
                        <div className="text-sm text-[#E6E6FA]/60 mb-1">Faturamento/mês</div>
                        <div className="text-3xl font-bold text-red-400">{caseStudy.before.revenue}</div>
                      </div>
                      <div>
                        <div className="text-sm text-[#E6E6FA]/60 mb-1">Trabalho Manual</div>
                        <div className="text-3xl font-bold text-red-400">{caseStudy.before.manual}</div>
                      </div>
                    </div>
                  </div>

                  {/* After */}
                  <div className="p-6 bg-[#0D1117] border-2 border-[#00d966]/50 rounded-xl">
                    <div className="text-center mb-4">
                      <span className="inline-block px-4 py-1 bg-[#00d966]/20 text-[#00d966] rounded-full text-sm font-bold">
                        DEPOIS
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-[#E6E6FA]/60 mb-1">Leads/mês</div>
                        <div className="text-3xl font-bold text-[#00d966]">{caseStudy.after.leads}</div>
                      </div>
                      <div>
                        <div className="text-sm text-[#E6E6FA]/60 mb-1">Taxa No-Show</div>
                        <div className="text-3xl font-bold text-[#00d966]">{caseStudy.after.noShow}%</div>
                      </div>
                      <div>
                        <div className="text-sm text-[#E6E6FA]/60 mb-1">Faturamento/mês</div>
                        <div className="text-3xl font-bold text-[#00d966]">{caseStudy.after.revenue}</div>
                      </div>
                      <div>
                        <div className="text-sm text-[#E6E6FA]/60 mb-1">Trabalho Manual</div>
                        <div className="text-3xl font-bold text-[#00d966]">{caseStudy.after.manual}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Results */}
                <div className="p-6 bg-gradient-to-r from-[#00d966]/10 to-[#00d9ff]/10 border border-[#00d966]/30 rounded-xl mb-8">
                  <h5 className="text-lg font-bold text-[#E6E6FA] mb-4 text-center">Resultados Principais</h5>
                  <div className="grid od-reveal grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-[#00d966] mb-1">
                        {caseStudy.results.leadsGrowth}
                      </div>
                      <div className="text-xs text-[#E6E6FA]/70">Crescimento Leads</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-[#00d9ff] mb-1">
                        {caseStudy.results.noShowReduction}
                      </div>
                      <div className="text-xs text-[#E6E6FA]/70">Reduo No-Show</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-[#ff006e] mb-1">
                        {caseStudy.results.revenueGrowth}
                      </div>
                      <div className="text-xs text-[#E6E6FA]/70">Aumento Receita</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-[#9d4edd] mb-1">
                        {caseStudy.results.timeSaved}
                      </div>
                      <div className="text-xs text-[#E6E6FA]/70">Tempo Economizado</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-[#ffd700] mb-1">{caseStudy.results.roi}</div>
                      <div className="text-xs text-[#E6E6FA]/70">ROI</div>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="p-6 bg-[#0D1117] border border-[#30363D] rounded-xl">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-[#ffd700] fill-[#ffd700]" size={20} />
                    ))}
                  </div>
                  <p className="od-subtitle text-lg mb-4 italic leading-relaxed">"{caseStudy.testimonial}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#ff006e] to-[#ba1cbe] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {caseStudy.owner
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-bold text-[#E6E6FA]">{caseStudy.owner}</div>
                      <div className="text-sm text-[#E6E6FA]/60">{caseStudy.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-[#E6E6FA]/70 mb-6 text-lg">
                Quer resultados como esses na sua clínica? Agende um diagnstico gratuito agora.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ff006e] to-[#ba1cbe] text-white font-bold uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-[#ff006e]/50 transition transform hover:scale-105"
              >
                <Calendar size={20} />
                Agendar Diagnóstico Gratuito
              </a>
            </div>
          </div>
        </section>

        {/* DEMONSTRAO N8N ESPECFICA */}
        <section className="od-section py-20 bg-[#161B22] border-b border-[#30363D]">
          <div className="od-container px-4 od-reveal">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d9ff]/10 border border-[#00d9ff]/30 rounded-full mb-4">
                <Zap className="text-[#00d9ff]" size={16} />
                <span className="text-sm text-[#00d9ff] font-semibold">Fluxo Automatizado Completo</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#E6E6FA]">
                Como Funciona na <span className="text-[#00d9ff]">Prtica</span>
              </h2>
              <p className="text-[#E6E6FA]/70 text-lg max-w-3xl mx-auto">
                Veja o fluxo completo desde o primeiro contato at a fidelizao do paciente - tudo automatizado
              </p>
            </div>

            {/* Workflow Visual */}
            <div className="mb-12">
              <div className="grid od-reveal grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {workflow.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="od-card od-card-hover border-2 border-[#30363D] rounded-xl p-6 hover:border-[#00d9ff] transition group h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#00d9ff] to-[#9d4edd] rounded-full flex items-center justify-center text-white font-bold">
                          {step.step}
                        </div>
                        <div className="p-2 bg-[#161B22] rounded-lg group-hover:scale-110 transition">{step.icon}</div>
                      </div>
                      <h4 className="font-bold text-[#E6E6FA] mb-2">{step.title}</h4>
                      <p className="text-sm text-[#E6E6FA]/70">{step.description}</p>
                    </div>
                    {/* Connector Arrow */}
                    {idx < workflow.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <ChevronDown className="text-[#00d9ff] rotate-[-90deg]" size={24} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Mockup */}
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-[#E6E6FA] mb-6 text-center">Exemplo de Conversa Automatizada</h3>
              <div className="od-card od-card-hover border-2 border-[#30363D] rounded-2xl p-6 space-y-4">
                {/* Bot message */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="od-card border border-[#30363D] rounded-2xl rounded-tl-none p-4">
                      <p className="od-subtitle text-sm">
                        Olá! Sou a assistente virtual da Clínica Estética SP. Como posso ajudar?
                      </p>
                      <p className="text-[#E6E6FA]/60 text-xs mt-2">10:30</p>
                    </div>
                  </div>
                </div>

                {/* User message */}
                <div className="flex gap-3 justify-end">
                  <div className="flex-1">
                    <div className="bg-[#00d9ff]/20 border border-[#00d9ff]/30 rounded-2xl rounded-tr-none p-4 ml-auto max-w-xs">
                      <p className="od-subtitle text-sm">Quero agendar uma avaliação para preenchimento</p>
                      <p className="text-[#E6E6FA]/60 text-xs mt-2 text-right">10:31</p>
                    </div>
                  </div>
                </div>

                {/* Bot response */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="od-card border border-[#30363D] rounded-2xl rounded-tl-none p-4">
                      <p className="od-subtitle text-sm mb-3">
                        Perfeito! Temos horários disponíveis esta semana com a Dra. Mariana. Escolha o melhor para você:
                      </p>
                      <div className="space-y-2">
                        <button className="w-full p-3 bg-[#0D1117] border border-[#00d966] text-[#00d966] rounded-lg text-sm hover:bg-[#00d966]/10 transition">
                          = Ter, 14/12 s 14:00
                        </button>
                        <button className="w-full p-3 bg-[#0D1117] border border-[#00d966] text-[#00d966] rounded-lg text-sm hover:bg-[#00d966]/10 transition">
                          = Qui, 16/12 s 16:30
                        </button>
                        <button className="w-full p-3 bg-[#0D1117] border border-[#00d966] text-[#00d966] rounded-lg text-sm hover:bg-[#00d966]/10 transition">
                          = Sex, 17/12 s 10:00
                        </button>
                      </div>
                      <p className="text-[#E6E6FA]/60 text-xs mt-3">10:31</p>
                    </div>
                  </div>
                </div>

                {/* System info */}
                <div className="pt-4 border-t border-[#30363D]">
                  <div className="flex items-center gap-2 text-[#00d966] text-sm">
                    <CheckCircle2 size={16} />
                    <span>
                      Após confirmação: lembrete 24h antes + lembrete 2h antes + pós-consulta automático
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING ESPECFICO */}
        <section id="pricing" className="od-section py-20 bg-[#0D1117] border-b border-[#30363D]">
          <div className="od-container px-4 od-reveal">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#E6E6FA]">
                Escolha o Plano <span className="text-[#00d966]">Ideal</span> para Sua Clínica
              </h2>
              <p className="text-[#E6E6FA]/70 text-lg max-w-3xl mx-auto mb-6">
                Investimento que se paga sozinho em 2-3 meses com o aumento de agendamentos e redução de no-show
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d966]/10 border border-[#00d966]/30 rounded-full">
                <Shield className="text-[#00d966]" size={16} />
                <span className="text-sm text-[#00d966] font-semibold">
                  Garantia de Resultado ou Dinheiro de Volta
                </span>
              </div>
            </div>

            <div className="grid od-reveal grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {pricing.map((plan, idx) => (
                <div
                  key={idx}
                  className={`relative bg-[#161B22] border-2 rounded-2xl p-8 transition ${
                    plan.best
                      ? "border-[#00d966] shadow-xl shadow-[#00d966]/20 scale-105"
                      : "border-[#30363D] hover:border-[#00d9ff]"
                  }`}
                >
                  {plan.best && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#00d966] to-[#00d9ff] text-white text-sm font-bold rounded-full">
                        MAIS POPULAR
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#E6E6FA] mb-2">{plan.name}</h3>
                    <p className="text-[#E6E6FA]/60 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-[#00d966]">R$ {plan.price}</span>
                      <span className="text-[#E6E6FA]/60">/mês</span>
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-[#00d966]/10 border border-[#00d966]/30 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Shield className="text-[#00d966] flex-shrink-0 mt-0.5" size={16} />
                      <p className="text-sm text-[#00d966] font-semibold">Garantia: {plan.guarantee} ou no paga</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-[#00d966] flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-[#E6E6FA]/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`block w-full py-4 rounded-lg font-bold text-center transition transform hover:scale-105 ${
                      plan.best
                        ? "bg-gradient-to-r from-[#00d966] to-[#00d9ff] text-white shadow-lg hover:shadow-[#00d966]/50"
                        : "bg-[#0D1117] border-2 border-[#30363D] text-[#E6E6FA] hover:border-[#00d966]"
                    }`}
                  >
                    Solicitar Oramento
                  </a>
                </div>
              ))}
            </div>

            {/* Extra info */}
            <div className="grid od-reveal grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-[#161B22] border border-[#30363D] rounded-xl">
                <CheckCircle2 className="text-[#00d966] mx-auto mb-3" size={32} />
                <h4 className="font-bold text-[#E6E6FA] mb-2">Sem Fidelidade</h4>
                <p className="text-sm text-[#E6E6FA]/70">Contrato mensal, cancele quando quiser</p>
              </div>
              <div className="p-6 bg-[#161B22] border border-[#30363D] rounded-xl">
                <Shield className="text-[#00d9ff] mx-auto mb-3" size={32} />
                <h4 className="font-bold text-[#E6E6FA] mb-2">LGPD Compliance</h4>
                <p className="text-sm text-[#E6E6FA]/70">100% adequado  Lei Geral de Proteo de Dados</p>
              </div>
              <div className="p-6 bg-[#161B22] border border-[#30363D] rounded-xl">
                <Target className="text-[#ff006e] mx-auto mb-3" size={32} />
                <h4 className="font-bold text-[#E6E6FA] mb-2">Setup Rpido</h4>
                <p className="text-sm text-[#E6E6FA]/70">Sua clínica automatizada em 2-5 dias</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ESPECFICO */}
        <section className="od-section py-20 bg-[#161B22] border-b border-[#30363D]">
          <div className="od-container max-w-4xl px-4 od-reveal">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#E6E6FA]">Perguntas Frequentes</h2>
              <p className="text-[#E6E6FA]/70 text-lg">
                Respondemos as principais dúvidas de médicos e gestores de clínicas
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-[#0D1117] border-2 border-[#30363D] rounded-xl p-6 hover:border-[#00d9ff] transition"
                >
                  <summary className="font-bold text-[#E6E6FA] cursor-pointer list-none flex justify-between items-center gap-4">
                    <span className="flex-1">{faq.question}</span>
                    <ChevronDown className="text-[#00d9ff] flex-shrink-0 group-open:rotate-180 transition-transform" size={24} />
                  </summary>
                  <p className="mt-4 text-[#E6E6FA]/80 leading-relaxed pl-1">{faq.answer}</p>
                </details>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-[#00d9ff]/10 to-[#9d4edd]/10 border-2 border-[#00d9ff]/30 rounded-xl text-center">
              <p className="text-[#E6E6FA] mb-4">
                <span className="font-bold">Ainda tem dúvidas?</span> Agende uma demonstrao gratuita e veja o sistema
                funcionando na prtica.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00d9ff] text-white font-semibold rounded-lg hover:bg-[#00d9ff]/90 transition"
              >
                <Phone size={18} />
                Falar com Especialista
              </a>
            </div>
          </div>
        </section>

        {/* URGNCIA */}
        <section className="od-section py-20 bg-[#0D1117] border-b border-[#30363D]">
          <div className="od-container max-w-4xl px-4 od-reveal">
            <div className="relative bg-gradient-to-r from-[#ff006e]/20 to-[#ba1cbe]/20 border-2 border-[#ff006e] rounded-2xl p-8 overflow-hidden">
              {/* Pulse effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff006e]/20 rounded-full blur-3xl animate-pulse"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-400 font-bold uppercase tracking-wider text-sm">Vagas Limitadas</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[#E6E6FA] mb-4">
                  Apenas <span className="text-[#ff006e]">{urgency.slotsRemaining} Vagas</span> para Setup em{" "}
                  {urgency.month}
                </h2>

                <p className="text-[#E6E6FA]/80 mb-6 leading-relaxed">
                  Cada implementao exige setup personalizado e dedicao exclusiva da nossa equipe tcnica. Por isso,
                  limitamos a <span className="font-bold text-[#ff006e]">2 novas clínicas por ms</span>.
                </p>

                <div className="p-4 bg-[#0D1117] border border-[#30363D] rounded-lg mb-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="text-orange-400 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-[#E6E6FA] font-semibold mb-1">Prximas clínicas:</p>
                      <p className="text-[#E6E6FA]/70 text-sm">{urgency.nextAvailability}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-[#ff006e] to-[#ba1cbe] text-white font-bold uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-[#ff006e]/50 transition transform hover:scale-105 text-center"
                  >
                    Garantir Minha Vaga Agora
                  </a>
                  <a
                    href="#caso-sucesso"
                    className="px-8 py-4 bg-[#161B22] border-2 border-[#30363D] text-[#E6E6FA] font-semibold rounded-lg hover:border-[#ff006e] transition text-center"
                  >
                    Ver Caso de Sucesso
                  </a>
                </div>

                <p className="text-[#E6E6FA]/60 text-sm text-center mt-4">
                  <Clock className="inline mr-1" size={14} />
                  Resposta em at 2 horas teis
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="contact" className="od-section py-20 bg-gradient-to-b from-[#161B22] to-[#0D1117]">
          <div className="od-container max-w-5xl px-4 od-reveal">
            <div className="text-center mb-12">
              <Stethoscope className="text-[#00d966] mx-auto mb-6" size={48} />
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-[#E6E6FA]">Pronto para </span>
                <span className="bg-gradient-to-r from-[#00d966] to-[#00d9ff] bg-clip-text text-transparent">
                  Lotar Sua Agenda
                </span>
                <span className="text-[#E6E6FA]">?</span>
              </h2>
              <p className="text-[#E6E6FA]/70 text-lg max-w-3xl mx-auto mb-8">
                Agende um diagnstico gratuito e descubra como automatizar sua clínica, reduzir no-show e aumentar
                faturamento em 30 dias.
              </p>
            </div>

            <div className="od-card od-card-hover border-2 border-[#30363D] rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-[#E6E6FA] mb-6 text-center">
                O que você recebe no diagnstico gratuito:
              </h3>
              <div className="grid od-reveal grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#00d966] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-[#E6E6FA] mb-1">Anlise da Agenda</h4>
                    <p className="text-sm text-[#E6E6FA]/70">
                      Avaliamos sua taxa de no-show e horários vazios
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#00d966] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-[#E6E6FA] mb-1">Projeo de Resultados</h4>
                    <p className="text-sm text-[#E6E6FA]/70">
                      Calculamos quanto você pode faturar a mais
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#00d966] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-[#E6E6FA] mb-1">Demonstrao ao Vivo</h4>
                    <p className="text-sm text-[#E6E6FA]/70">Veja o sistema funcionando na prtica</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#00d966] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-[#E6E6FA] mb-1">Plano Personalizado</h4>
                    <p className="text-sm text-[#E6E6FA]/70">
                      Proposta customizada para sua especialidade
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1!%20Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito%20para%20minha%20cl%C3%ADnica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#00d966] to-[#00d9ff] text-white font-bold text-lg uppercase tracking-wider rounded-xl hover:shadow-2xl hover:shadow-[#00d966]/50 transition transform hover:scale-105"
                >
                  <MessageCircle size={24} />
                  Agendar Diagnóstico Gratuito Agora
                </a>
                <p className="text-[#E6E6FA]/60 text-sm mt-4">
                  <Shield className="inline mr-1" size={14} />
                  Sem compromisso " Sem custo " Resposta em 2h
                </p>
              </div>
            </div>

            {/* Alternative contact methods */}
            <div className="grid od-reveal grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <a
                href="tel:+5511999999999"
                className="p-4 bg-[#161B22] border border-[#30363D] rounded-xl hover:border-[#00d9ff] transition"
              >
                <Phone className="text-[#00d9ff] mx-auto mb-2" size={24} />
                <p className="text-[#E6E6FA] font-semibold">(11) 99999-9999</p>
                <p className="text-[#E6E6FA]/60 text-sm">Seg-Sex 9h-18h</p>
              </a>
              <a
                href="mailto:clinicas@ondemand.com.br"
                className="p-4 bg-[#161B22] border border-[#30363D] rounded-xl hover:border-[#00d9ff] transition"
              >
                <Mail className="text-[#00d9ff] mx-auto mb-2" size={24} />
                <p className="text-[#E6E6FA] font-semibold">clinicas@ondemand.com.br</p>
                <p className="text-[#E6E6FA]/60 text-sm">Resposta em 4h</p>
              </a>
              <div className="p-4 bg-[#161B22] border border-[#30363D] rounded-xl">
                <Users className="text-[#9d4edd] mx-auto mb-2" size={24} />
                <p className="text-[#E6E6FA] font-semibold">47 Clínicas Atendidas</p>
                <p className="text-[#E6E6FA]/60 text-sm">SP, MG, RJ e DF</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}




