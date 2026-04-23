// ============================================
// EMPRESA
// ============================================
export const COMPANY_NAME = 'On Demand Digital' as const
export const COMPANY_TAGLINE = 'Marketing Digital & Automação com IA' as const
export const COMPANY_DESCRIPTION = 'Agência de marketing digital com foco em estratégia, automação e execução responsável.' as const
export const COMPANY_EMAIL = 'contato@ondemanddigital.com.br' as const
export const COMPANY_PHONE = '+55 31 99696-6686' as const
export const WHATSAPP_NUMBER = '5531996966686' as const
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}` as const

// ============================================
// URLS & REDES SOCIAIS
// ============================================
export const WEBSITE_URL = 'https://ondemanddigital.com.br' as const

// ============================================
// SEO
// ============================================
export const SEO_DEFAULTS = {
  title: `Agência de Marketing Digital em BH | ${COMPANY_NAME}`,
  description: 'Estratégias de marketing digital, automação e conteúdo com foco em consistência e clareza de execução.',
  keywords: [
    'marketing digital',
    'automação com IA',
    'chatbots',
    'tráfego pago',
    'meta ads',
    'google ads',
    'SEO',
    'social media',
    'CRM',
    'automação de marketing',
    'n8n',
    'belo horizonte',
    'BH',
    'minas gerais',
    'agência marketing bh',
  ],
  ogImage: `${WEBSITE_URL}/og?title=${encodeURIComponent(`Ag\u00EAncia de Marketing Digital em BH | On Demand Digital`)}`,
  twitterImage: `${WEBSITE_URL}/og?title=${encodeURIComponent(`Ag\u00EAncia de Marketing Digital em BH | On Demand Digital`)}`,
} as const
