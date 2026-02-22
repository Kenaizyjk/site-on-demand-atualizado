/**
 * Informações de contato centralizadas
 *
 * IMPORTANTE: Substitua os valores abaixo pelos dados reais da empresa
 */

export const CONTACT_INFO = {
  // WhatsApp (formato: código país + DDD + número)
  // (31) 99696-6686
  whatsapp: "553196966686",

  // Email principal
  email: "daviluizjk0@gmail.com",

  // CNPJ (formato: XX.XXX.XXX/XXXX-XX)
  cnpj: "60.803.333/0001-80",
  cnpjFormatted: "60.803.333/0001-80",

  // Razão social
  companyName: "ON DEMAND DIGITAL LTDA",

  // Redes sociais
  social: {
    linkedin: "https://www.linkedin.com/in/davi-honorato-209955367",
    instagram: "https://instagram.com/daviluizjk",
  },

  // Webhooks e APIs
  webhooks: {
    // TODO: Configurar URLs reais no ambiente de produção
    n8n: process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "",
    // Adicione outros webhooks conforme necessário
  }
} as const

/**
 * Gera link do WhatsApp com mensagem pre-formatada
 */
export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`
}

/**
 * Mensagens padrão do WhatsApp
 */
export const WHATSAPP_MESSAGES = {
  general: "Olá! Vim do site e gostaria de saber mais sobre Marketing Digital + IA",
  support: "Olá! Gostaria de conhecer mais sobre os serviços de marketing digital",
  landing: "Olá! Vi a página sobre {service} e gostaria de mais informações",
} as const
