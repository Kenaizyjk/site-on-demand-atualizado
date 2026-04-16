export type CaseStudy = {
  slug: string
  company: string
  metric: string
  label: string
  story: string
  sector?: string
}

export const cases: CaseStudy[] = [
  {
    slug: "clinica-odontologica-bh",
    company: "Clínica Odontológica · BH",
    metric: "+187%",
    label: "Agendamentos via Google",
    story: "SEO local + Google Ads. Saiu de invisível no Maps para Top 3 em 4 meses.",
    sector: "Saúde",
  },
  {
    slug: "restaurante-centro-bh",
    company: "Restaurante · Centro de BH",
    metric: "Top 3",
    label: "Google Maps",
    story: "GMB + Redes Sociais. +62 avaliações autênticas em 3 meses de trabalho.",
    sector: "Alimentação",
  },
  {
    slug: "ecommerce-moda",
    company: "E-commerce de Moda",
    metric: "R$ 18",
    label: "Custo médio por lead",
    story: "Tráfego pago Google + Meta. ROAS de 4,2x em Google Shopping após reestruturação.",
    sector: "E-commerce",
  },
]
