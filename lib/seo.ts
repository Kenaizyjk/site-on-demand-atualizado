import type { Metadata } from 'next'
import { COMPANY_NAME, WEBSITE_URL } from './constants'

export const SEO_KEYWORDS = {
  primary: [
    'agência marketing digital BH',
    'agência marketing digital Belo Horizonte',
    'marketing digital para clínicas BH',
    'tráfego pago Belo Horizonte',
    'SEO local BH',
    'Google Meu Negócio Belo Horizonte',
    'automação marketing digital BH',
    'agência tráfego pago BH',
  ],
  secondary: [
    'agência marketing digital especializada BH',
    'marketing digital para restaurantes BH',
    'marketing digital pequenas empresas',
    'automação com n8n',
    'Google Ads BH',
    'Meta Ads Belo Horizonte',
    'marketing PME Brasil',
  ],
  longTail: [
    'como aparecer no Google Maps Belo Horizonte',
    'agência de tráfego pago para clínicas médicas',
    'automação WhatsApp para negócios locais',
    'quanto custa agência marketing digital BH',
    'melhor agência marketing digital especializada BH',
  ],
}

interface PageSEOInput {
  title: string
  description: string
  path: string
  keywords?: string[]
  noindex?: boolean
  ogImage?: string
}

export function generatePageMetadata(input: PageSEOInput): Metadata {
  const url = `${WEBSITE_URL}${input.path}`
  return {
    title: input.title,
    description: input.description,
    keywords: [...(input.keywords ?? []), ...SEO_KEYWORDS.primary],
    robots: input.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title: `${input.title} | ${COMPANY_NAME}`,
      description: input.description,
      url,
      siteName: COMPANY_NAME,
      locale: 'pt_BR',
      type: 'website',
      images: [
        {
          url: input.ogImage ?? `${WEBSITE_URL}/og-image.svg`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${input.title} | ${COMPANY_NAME}`,
      description: input.description,
    },
  }
}

export const PAGE_SEO = {
  home: {
    title: 'Agência de Marketing Digital em BH',
    description:
      'Agência de marketing digital em Belo Horizonte. Tráfego pago, SEO local e automação com IA com acompanhamento direto e personalizado.',
    path: '/',
  },
  sobre: {
    title: 'Sobre a On Demand Digital',
    description:
      'Conheça a On Demand Digital: agência de marketing digital em BH. Método, transparência e resultado mensurável desde 2022.',
    path: '/sobre',
  },
  casos: {
    title: 'Casos de Sucesso',
    description:
      'Veja resultados reais de clínicas, restaurantes e e-commerces em BH que cresceram com marketing digital estratégico.',
    path: '/casos',
  },
  contato: {
    title: 'Diagnóstico Gratuito: Fale com a On Demand',
    description:
      'Agende uma conversa de 30 minutos gratuita. Sem compromisso. Sem script de vendas. Entendemos seu negócio antes de qualquer proposta.',
    path: '/contato',
  },
  servicos: {
    title: 'Serviços de Marketing Digital',
    description:
      'Tráfego pago, SEO local, automação com IA e gestão de redes sociais para negócios em BH. Veja como trabalhamos.',
    path: '/servicos',
  },
  blog: {
    title: 'Blog: Marketing Digital para PMEs',
    description:
      'Artigos práticos sobre tráfego pago, SEO local, automação com IA e marketing digital para pequenas e médias empresas em BH.',
    path: '/blog',
  },
} as const
