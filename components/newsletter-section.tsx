"use client"

import { useState, useId } from 'react'

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'
interface Props { title?: string; description?: string; source?: string; compact?: boolean }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const WHATSAPP_ERR = 'Algo deu errado. Tente pelo WhatsApp: (31) 99696-6686'
const BENEFITS = [
  { c: 'text-cyan-400',   t: 'Dicas de tráfego pago aplicáveis esta semana' },
  { c: 'text-violet-400', t: 'Tutoriais de automação com n8n e IA passo a passo' },
  { c: 'text-cyan-400',   t: 'Guias de estratégia para PME de BH e do Brasil' },
  { c: 'text-violet-400', t: 'Cases reais de SEO local e Google Meu Negócio' },
]

function useForm(source: string) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [message, setMessage] = useState('')
  const [err, setErr] = useState('')
  const id = useId()

  function validate(v: string) {
    if (!v.trim()) { setErr('Informe seu email para continuar.'); return false }
    if (!EMAIL_RE.test(v)) { setErr('Email inválido. Verifique e tente novamente.'); return false }
    setErr(''); return true
  }
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
    if (err) setErr('')
    if (status === 'error') setStatus('idle')
  }
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'loading' || !validate(email)) return
    setStatus('loading'); setMessage('')
    try {
      const r = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: email.trim(), source }) })
      const d = await r.json()
      if (d.success) { setStatus('success'); setEmail('') }
      else { setStatus('error'); setMessage(d.error ?? WHATSAPP_ERR) }
    } catch { setStatus('error'); setMessage(WHATSAPP_ERR) }
  }
  return { email, status, message, err, id, validate, onChange, onSubmit }
}

export default function NewsletterSection({ title, description, source = 'home', compact = false }: Props) {
  const form = useForm(source)
  if (compact) return <Compact title={title} description={description} form={form} />

  return (
    <section id="newsletter" aria-labelledby="nl-heading" className="od-section relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#060608 0%,#09090b 40%,#060608 100%)' }}>

      {/* Noise texture — makes section visually distinct from surrounding bg-[#09090b] sections */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '200px 200px' }} />

      {/* Aurora */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-violet-600/12 blur-[120px]" style={{ animation: 'a1 14s ease-in-out infinite alternate' }} />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" style={{ animation: 'a2 18s ease-in-out infinite alternate' }} />
      </div>

      {/* Grid overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(rgba(139,92,246,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="od-container relative z-10 px-4">
        <div className="mb-10 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-300">
            Newsletter semanal
          </span>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* LEFT — value proposition */}
          <div>
            <h2 id="nl-heading" className="mb-5 font-display text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title ?? <>Marketing digital que{' '}<span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">realmente funciona</span>{' '}direto no seu email</>}
            </h2>
            <p className="mb-8 text-base leading-relaxed sm:text-lg" style={{ color: '#b4b4bc' }}>
              {description ?? 'Uma análise por semana. Sem enrolação. Estratégias de tráfego pago, SEO local e automação com IA aplicáveis no seu negócio ainda esta semana.'}
            </p>
            <ul className="space-y-3" role="list">
              {BENEFITS.map((b) => (
                <li key={b.t} className="flex items-start gap-3">
                  <span className={`mt-0.5 text-sm font-bold ${b.c}`} aria-hidden="true">✓</span>
                  <span className="text-sm leading-snug text-zinc-300">{b.t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs" style={{ color: '#b4b4bc' }}>
              Fundadores, gerentes e donos de PME recebem toda semana. Leitura em menos de 5 minutos.
            </p>
          </div>

          {/* RIGHT — form card */}
          <div className="relative">
            <div aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-2xl"
              style={{ background: 'linear-gradient(135deg,rgba(139,92,246,0.15) 0%,transparent 50%,rgba(6,182,212,0.10) 100%)' }} />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900/60 p-8 sm:p-10"
              style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px"
                style={{ background: 'linear-gradient(90deg,transparent,rgba(139,92,246,0.6),rgba(6,182,212,0.6),transparent)' }} />

              {form.status === 'success' ? <SuccessState /> : (
                <>
                  <div className="mb-6">
                    <h3 className="mb-2 font-display text-xl font-bold text-white sm:text-2xl">Receba a análise da próxima semana</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#b4b4bc' }}>Dicas de marketing, tutoriais de automação e guias de estratégia. Toda semana.</p>
                  </div>
                  <form onSubmit={form.onSubmit} noValidate>
                    <div className="mb-4">
                      <label htmlFor={form.id} className="mb-2 block text-xs font-semibold uppercase tracking-widest text-zinc-400">Seu melhor email</label>
                      <input
                        id={form.id} type="email" value={form.email} onChange={form.onChange}
                        onBlur={() => form.email && form.validate(form.email)}
                        placeholder="voce@empresa.com.br" required disabled={form.status === 'loading'}
                        aria-describedby={form.err ? `${form.id}-err` : undefined} aria-invalid={!!form.err}
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800/70 px-4 py-3.5 text-sm text-zinc-100 placeholder-zinc-500 transition-all duration-200 focus:border-violet-500/60 focus:outline-none focus:ring-2 focus:ring-violet-500/25 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-red-500/50"
                      />
                      {form.err && <p id={`${form.id}-err`} role="alert" className="mt-2 text-xs text-red-400">{form.err}</p>}
                    </div>
                    <button type="submit" disabled={form.status === 'loading'}
                      className="group relative w-full overflow-hidden rounded-xl py-3.5 text-sm font-bold text-white transition-all duration-300 hover:brightness-110 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 disabled:cursor-not-allowed disabled:opacity-60"
                      style={{ background: 'linear-gradient(135deg,#7c3aed 0%,#8b5cf6 40%,#06b6d4 100%)' }}>
                      <span aria-hidden="true" className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-[100%]" />
                      <span className="relative flex items-center justify-center gap-2">
                        {form.status === 'loading'
                          ? <><svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Confirmando...</>
                          : 'Quero receber os insights'}
                      </span>
                    </button>
                    {/* Privacy micro-copy — immediately below CTA */}
                    <p className="mt-3 text-center text-xs text-zinc-500">Sem spam. Cancele quando quiser.</p>
                    {form.status === 'error' && form.message && (
                      <p role="alert" className="mt-3 text-xs text-red-400">{form.message}</p>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes a1{from{transform:translate(0,0) scale(1)}to{transform:translate(40px,-30px) scale(1.08)}}@keyframes a2{from{transform:translate(0,0) scale(1)}to{transform:translate(-30px,20px) scale(1.06)}}`}</style>
    </section>
  )
}

function SuccessState() {
  return (
    <div className="flex flex-col items-center py-6 text-center">
      <div className="relative mb-5">
        <div aria-hidden="true" className="absolute -inset-3 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/15 blur-lg" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className="h-8 w-8 text-cyan-400" aria-hidden="true" style={{ animation: 'cd 0.4s ease-out 0.1s both' }}>
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
      </div>
      <h3 className="mb-2 font-display text-xl font-bold text-white">Inscrição confirmada!</h3>
      <p className="text-sm leading-relaxed" style={{ color: '#b4b4bc' }}>
        Você vai receber nossa próxima análise na caixa de entrada. Verifique o spam se não chegar em alguns dias.
      </p>
      <style>{`@keyframes cd{from{stroke-dasharray:50;stroke-dashoffset:50;opacity:0}to{stroke-dasharray:50;stroke-dashoffset:0;opacity:1}}`}</style>
    </div>
  )
}

interface CompactProps { title?: string; description?: string; form: ReturnType<typeof useForm> }
function Compact({ title, description, form }: CompactProps) {
  if (form.status === 'success') return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center">
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-cyan-400" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
      </div>
      <p className="font-semibold text-zinc-100">Inscrição confirmada!</p>
      <p className="mt-1 text-sm" style={{ color: '#b4b4bc' }}>Próxima análise chega em breve.</p>
    </div>
  )
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
      <span className="inline-flex rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-violet-300">Newsletter</span>
      <h3 className="mt-3 font-display text-lg font-bold text-zinc-100 sm:text-xl">{title ?? 'Insights de marketing toda semana'}</h3>
      <p className="mt-1.5 mb-5 text-sm leading-relaxed" style={{ color: '#b4b4bc' }}>{description ?? 'Dicas práticas, tutoriais de automação e guias de estratégia. Sem spam.'}</p>
      <form onSubmit={form.onSubmit} noValidate className="flex flex-col gap-3 sm:flex-row">
        <input id={form.id} type="email" value={form.email} onChange={form.onChange} placeholder="seu@email.com.br" required
          disabled={form.status === 'loading'} aria-label="Seu email para a newsletter" aria-invalid={!!form.err}
          className="flex-1 rounded-xl border border-zinc-700 bg-zinc-800/80 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 transition-colors focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 disabled:opacity-50" />
        <button type="submit" disabled={form.status === 'loading' || !form.email}
          className="whitespace-nowrap rounded-xl px-5 py-3 text-sm font-bold text-white transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 hover:brightness-110"
          style={{ background: 'linear-gradient(135deg,#7c3aed 0%,#8b5cf6 50%,#06b6d4 100%)' }}>
          {form.status === 'loading' ? 'Enviando...' : 'Quero receber'}
        </button>
      </form>
      {form.err && <p role="alert" className="mt-2 text-xs text-red-400">{form.err}</p>}
      {form.status === 'error' && form.message && <p role="alert" className="mt-2 text-xs text-red-400">{form.message}</p>}
      <p className="mt-3 text-xs" style={{ color: '#b4b4bc' }}>Sem spam. Cancele quando quiser.</p>
    </div>
  )
}
