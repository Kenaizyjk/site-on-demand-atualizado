"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import { WHATSAPP_NUMBER, COMPANY_EMAIL } from "@/lib/constants"

type Status = "idle" | "loading" | "success" | "error"

interface FormData {
  name: string
  business: string
  phone: string
  email: string
  message: string
}

const EMPTY: FormData = { name: "", business: "", phone: "", email: "", message: "" }

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(EMPTY)
  const [status, setStatus] = useState<Status>("idle")
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [honeypot, setHoneypot] = useState("")

  function validate(): boolean {
    const e: Partial<FormData> = {}
    if (!form.name.trim()) e.name = "Informe seu nome"
    if (!form.business.trim()) e.business = "Informe seu negócio ou segmento"
    if (!form.phone.trim()) e.phone = "Informe um WhatsApp para contato"
    if (!form.message.trim()) e.message = "Conte brevemente o que você precisa"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    // Honeypot: if filled, silently fake success (bot detected)
    if (honeypot) {
      setStatus("success")
      return
    }

    setStatus("loading")

    // Format WhatsApp message
    const text = [
      `Olá, vim pelo formulário do site.`,
      ``,
      `Nome: ${form.name}`,
      `Negócio: ${form.business}`,
      `WhatsApp: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      ``,
      `Mensagem: ${form.message}`,
    ]
      .filter((l) => l !== null)
      .join("\n")

    // Small delay for UX, then open WhatsApp
    await new Promise((r) => setTimeout(r, 600))
    setStatus("success")

    setTimeout(() => {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
        "_blank"
      )
    }, 800)
  }

  return (
    <section id="contato" className="py-24 lg:py-36 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — copy */}
          <div>
            <p
              className="text-xs font-medium uppercase tracking-[0.25em] mb-4"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Entre em contato
            </p>
            <h2 className="text-4xl sm:text-5xl font-extralight uppercase tracking-[0.12em] text-white leading-[1.05] mb-4">
              Pronto para marcar um{" "}
              <span
                className="text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #ffffff, rgba(255,255,255,0.55))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                diagnóstico gratuito?
              </span>
            </h2>

            {/* Decorative thin line under heading */}
            <div
              className="w-16 h-px mb-6"
              style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.15), transparent)" }}
              aria-hidden="true"
            />

            <p
              className="text-base sm:text-lg leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Preencha o formulário e entraremos em contato pelo WhatsApp para agendar uma conversa de 30 minutos sobre o seu negócio.
            </p>

            <div className="space-y-5">
              {[
                { title: "Sem compromisso", desc: "A conversa inicial é gratuita e serve para entender se faz sentido trabalharmos juntos." },
                { title: "Resposta rápida", desc: "Retornamos em até 2 horas em dias úteis para confirmar o agendamento." },
                { title: "Atendimento direto", desc: "Você fala com quem vai executar o projeto, não com um representante comercial." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                    style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-10 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p
                className="text-xs mb-2"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Prefere contato direto?
              </p>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="text-sm transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.45)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "white" }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.45)" }}
              >
                {COMPANY_EMAIL}
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div
            className="od-glass-dense rounded-2xl p-8 sm:p-10"
            style={{ border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <CheckCircle className="w-8 h-8" style={{ color: "rgba(255,255,255,0.5)" }} />
                </div>
                <h3 className="text-2xl font-extralight uppercase tracking-[0.12em] text-white mb-3">Mensagem enviada!</h3>
                <p
                  className="text-sm leading-relaxed max-w-xs"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  O WhatsApp vai abrir agora com sua mensagem. Responderemos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                {/* Honeypot anti-spam — invisible to real users */}
                <div
                  className="absolute -left-[9999px] opacity-0 pointer-events-none"
                  aria-hidden="true"
                >
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    Nome completo <span style={{ color: "rgba(255,255,255,0.4)" }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    autoComplete="name"
                    className="w-full rounded-xl od-glass-input px-4 py-3.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none"
                    style={{
                      borderColor: errors.name ? "rgba(239,68,68,0.5)" : "rgba(63,63,70,0.8)",
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,255,255,0.05)" }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = errors.name ? "rgba(239,68,68,0.5)" : "rgba(63,63,70,0.8)"; e.currentTarget.style.boxShadow = "none" }}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                </div>

                {/* Business */}
                <div>
                  <label
                    htmlFor="contact-business"
                    className="block text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    Negócio ou segmento <span style={{ color: "rgba(255,255,255,0.4)" }}>*</span>
                  </label>
                  <input
                    id="contact-business"
                    name="business"
                    type="text"
                    value={form.business}
                    onChange={handleChange}
                    placeholder="Ex: Clínica, restaurante, loja..."
                    className="w-full rounded-xl od-glass-input px-4 py-3.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none"
                    style={{ borderColor: errors.business ? "rgba(239,68,68,0.5)" : undefined }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,255,255,0.05)" }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = errors.business ? "rgba(239,68,68,0.5)" : "rgba(63,63,70,0.8)"; e.currentTarget.style.boxShadow = "none" }}
                  />
                  {errors.business && <p className="mt-1.5 text-xs text-red-400">{errors.business}</p>}
                </div>

                {/* Phone + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      WhatsApp <span style={{ color: "rgba(255,255,255,0.4)" }}>*</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(31) 9 9999-9999"
                      autoComplete="tel"
                      className="w-full rounded-xl od-glass-input px-4 py-3.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none"
                      style={{ borderColor: errors.phone ? "rgba(239,68,68,0.5)" : undefined }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,255,255,0.05)" }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = errors.phone ? "rgba(239,68,68,0.5)" : "rgba(63,63,70,0.8)"; e.currentTarget.style.boxShadow = "none" }}
                    />
                    {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      Email <span className="text-zinc-600 normal-case font-normal tracking-normal">(opcional)</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="voce@empresa.com.br"
                      autoComplete="email"
                      className="w-full rounded-xl od-glass-input px-4 py-3.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none"
                      onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,255,255,0.05)" }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(63,63,70,0.8)"; e.currentTarget.style.boxShadow = "none" }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    O que você precisa? <span style={{ color: "rgba(255,255,255,0.4)" }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Descreva brevemente o seu desafio ou objetivo..."
                    className="w-full rounded-xl od-glass-input px-4 py-3.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none resize-none"
                    style={{ borderColor: errors.message ? "rgba(239,68,68,0.5)" : undefined }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,255,255,0.05)" }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = errors.message ? "rgba(239,68,68,0.5)" : "rgba(63,63,70,0.8)"; e.currentTarget.style.boxShadow = "none" }}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-white font-medium text-base transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)" }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)" }}
                  data-track="contact-form-submit"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Preparando mensagem...
                    </>
                  ) : (
                    <>
                      Marcar diagnóstico gratuito
                      <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-zinc-600">
                  Ao enviar, você será redirecionado para o WhatsApp com sua mensagem.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
