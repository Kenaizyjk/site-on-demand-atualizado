import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Automação para Clínicas | Agenda Lotada em 30 Dias ou Seu Dinheiro de Volta",
  description:
    "Sistema completo de automação para clínicas médicas e estéticas. Reduza no-show em 70%, lote sua agenda e aumente faturamento. 47 clínicas atendidas em SP, MG e RJ. Garantia de resultado.",
  keywords: [
    "automação clínicas",
    "marketing para clínicas",
    "agenda médica automática",
    "reduzir no-show",
    "agendamento automático WhatsApp",
    "sistema para clínicas",
    "automação clínica estética",
    "aumentar agendamentos clínica",
    "chatbot médico",
    "CRM para clínicas",
  ],
  authors: [{ name: "ON DEMAND Digital" }],
  openGraph: {
    title: "Sua Clínica Lotada em 30 Dias | Automação Completa",
    description:
      "Automação + Tráfego Pago que já encheu a agenda de 47 clínicas. Reduza no-show em 70% e aumente faturamento. Garantia de resultado.",
    type: "website",
    locale: "pt_BR",
    url: "https://ondemanddigital.com.br/clinicas",
    siteName: "ON DEMAND Digital",
    images: [
      {
        url: "/og-clinicas.jpg",
        width: 1200,
        height: 630,
        alt: "Automação para Clínicas - ON DEMAND Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sua Clínica Lotada em 30 Dias | Automação Completa",
    description: "Reduza no-show em 70% e aumente faturamento com automação inteligente. 47 clínicas atendidas.",
    images: ["/og-clinicas.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ondemanddigital.com.br/clinicas",
  },
}

export default function ClinicasLayout({ children }: { children: React.ReactNode }) {
  return children
}
