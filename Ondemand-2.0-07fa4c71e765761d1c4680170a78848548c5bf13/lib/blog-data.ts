export interface BlogArticle {
  id: string
  slug: string
  title: string
  description: string
  author: string
  publishedAt: string
  readTime: number
  category: string
  tags: string[]
  image: string
  featured?: boolean
  tableOfContents?: string[]
  content: string
}

export type BlogArticleListItem = Omit<BlogArticle, "content">

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "1",
    slug: "10-erros-google-ads",
    title: "10 Erros em Google Ads que Travaram a Performance",
    description: "Erros que atrapalham resultados e como revisar com método.",
    author: "Davi Luiz",
    publishedAt: "2025-02-15",
    readTime: 12,
    category: "Google Ads",
    tags: ["Google Ads", "SEM", "ROI", "Performance"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop&q=80",
    featured: true,
    tableOfContents: [
      "Resumo rápido",
      "Erro #1: Objetivo e Mensagem Difusos",
      "Erro #2: Palavras-chave Sem Intenção",
      "Erro #3: Página de Destino Fraca",
      "Erro #4: Mensuração Incompleta",
      "Erro #5: Estrutura e Orçamento Confusos",
      "Erro #6: Rotina de Otimização Ausente",
      "Próximos passos",
    ],
    content: `
## Resumo rápido

- Se a campanha fala com todo mundo, não fala com ninguém.
- Sem mensuração, você otimiza no escuro.
- Estrutura simples + rotina clara vencem complexidade.

---

## Erro #1: Objetivo e Mensagem Difusos

### O problema
Se a campanha tenta falar com todo mundo, acaba não falando com ninguém. A mensagem fica genérica e a intenção do usuário não é respeitada.

### O ajuste
Defina o objetivo principal e escreva anúncios para um público específico. A mensagem precisa deixar claro o que você entrega e para quem.

---

## Erro #2: Palavras-chave Sem Intenção

### O problema
Palavras-chave amplas demais geram cliques sem intenção real de compra.

### O ajuste
Priorize termos com contexto, local ou problema específico. Isso melhora a qualidade do tráfego e evita desperdícios.

---

## Erro #3: Página de Destino Fraca

### O problema
Mesmo um anúncio bem escrito perde força se a página não responde às principais dúvidas do usuário.

### O ajuste
Garanta coerência entre anúncio e página. A primeira dobra deve explicar a proposta com clareza e direcionar para uma ação simples.

---

## Erro #4: Mensuração Incompleta

### O problema
Sem eventos bem configurados, fica impossível saber o que está funcionando.

### O ajuste
Mapeie as ações que realmente importam (formulário, ligação, WhatsApp) e confirme se estão sendo medidos corretamente.

---

## Erro #5: Estrutura e Orçamento Confusos

### O problema
Muitas campanhas competindo entre si geram desperdício e dificultam o aprendizado.

### O ajuste
Mantenha a estrutura simples, com poucas campanhas bem organizadas e objetivos claros por etapa.

---

## Erro #6: Rotina de Otimização Ausente

### O problema
Campanhas precisam de revisão constante. Sem rotina, a conta perde eficiência com o tempo.

### O ajuste
Defina uma cadência de revisão para palavras-chave, anúncios e páginas. Pequenos ajustes acumulados fazem diferença.

---

## Próximos passos

Se quiser, podemos revisar seu cenário e sugerir próximos passos de execução.
`,
  },
  {
    id: "2",
    slug: "automacao-whatsapp-leads",
    title: "Automação no WhatsApp: Estrutura e Boas Práticas",
    description: "Como organizar atendimento e qualificação com n8n e boas práticas.",
    author: "Davi Luiz",
    publishedAt: "2025-02-12",
    readTime: 15,
    category: "Automação",
    tags: ["WhatsApp", "n8n", "Automação", "Leads"],
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&h=675&fit=crop&q=80",
    featured: true,
    tableOfContents: [
      "Resumo rápido",
      "Mapa do Atendimento",
      "Qualificação com Perguntas-Chave",
      "Hand-off para Humanos",
      "Boas Práticas de Mensagens",
      "Checklist de Implementação",
      "Próximos passos",
    ],
    content: `
## Resumo rápido

- Primeiro desenhe o fluxo, depois automatize.
- Qualificação enxuta gera respostas rápidas.
- Hand-off humano evita fricção e perda de venda.

---

## Mapa do Atendimento

Antes de automatizar, desenhe o fluxo: entrada do lead, qualificação, agendamento e fechamento. Sem esse mapa, o bot vira ruído.

---

## Qualificação com Perguntas-Chave

Use poucas perguntas e foque no que realmente define prioridade: orçamento, urgência e objetivo. O ideal é caber em 3 a 5 perguntas.

---

## Hand-off para Humanos

Automação eficiente sempre tem transbordo para pessoa quando há dúvida, lead quente ou exceção. Isso reduz desgaste e aumenta conversão.

---

## Boas Práticas de Mensagens

- Mensagens curtas e claras
- Opções objetivas (botões ou respostas rápidas)
- Confirmações visuais de próximo passo
- Tempo de resposta previsível

---

## Checklist de Implementação

- Mensagens de entrada e saída prontas
- Regras de SLA configuradas
- Registro de dados no CRM
- Testes com 10 casos reais

---

## Próximos passos

Se quiser, podemos revisar seu cenário e sugerir próximos passos de execução.
`,
  },
  {
    id: "3",
    slug: "gmb-local-seo",
    title: "GMB Local: Boas Práticas de Presença no Google",
    description: "Como organizar Google Meu Negócio e melhorar a visibilidade local.",
    author: "Davi Luiz",
    publishedAt: "2025-02-10",
    readTime: 10,
    category: "SEO Local",
    tags: ["GMB", "SEO Local", "Local Search", "Leads"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=675&fit=crop&q=80",
    featured: true,
    tableOfContents: [
      "Resumo rápido",
      "Perfil Completo e Coerente",
      "Postagens e Fotos",
      "Avaliações e Respostas",
      "Otimização por Categoria",
      "Próximos passos",
    ],
    content: `
## Resumo rápido

- Consistência de dados aumenta confiança do Google.
- Postagens frequentes sinalizam atividade.
- Responder avaliações melhora conversão.

---

## Perfil Completo e Coerente

Dados básicos consistentes (nome, endereço, telefone) aumentam confiança e reduzem inconsistências no Google.

---

## Postagens e Fotos

Atualizações semanais com fotos reais ajudam a melhorar o engajamento e a relevância local.

---

## Avaliações e Respostas

Responder avaliações demonstra atenção ao cliente e melhora a percepção da marca. Foque em respostas objetivas.

---

## Otimização por Categoria

Selecione categorias específicas e atualize atributos de serviços para aparecer nas buscas certas.

---

## Próximos passos

Se quiser, podemos revisar seu cenário e sugerir próximos passos de execução.
`,
  },
  {
    id: "4",
    slug: "ia-marketing-2025",
    title: "IA no Marketing: Onde Faz Sentido Usar",
    description: "Como IA apoia estratégia e operação com responsabilidade.",
    author: "Davi Luiz",
    publishedAt: "2025-02-08",
    readTime: 11,
    category: "IA & Marketing",
    tags: ["IA", "Marketing", "Automação", "Futuro"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop&q=80",
    tableOfContents: [
      "Resumo rápido",
      "IA como Assistente, não como Piloto",
      "Onde a IA ajuda mais",
      "Onde a IA ainda erra",
      "Próximos passos",
    ],
    content: `
## Resumo rápido

- IA acelera execução, não substitui estratégia.
- Use IA para variações, análise e triagem.
- Decisões críticas seguem humanas.

---

## IA como Assistente, não como Piloto

IA é excelente para rascunhos, variações e análise rápida. A estratégia continua sendo humana.

---

## Onde a IA ajuda mais

- Variações de criativos
- Resumos de insights
- Classificação de leads
- Revisão de consistência de copy

---

## Onde a IA ainda erra

Em decisões que precisam de contexto de negócio e timing de mercado.

---

## Próximos passos

Se quiser, podemos revisar seu cenário e sugerir próximos passos de execução.
`,
  },
  {
    id: "5",
    slug: "meta-ads-segmentacao",
    title: "Segmentação de Público em Meta Ads: Guia Prático",
    description: "Fundamentos de segmentação com foco em clareza e testes.",
    author: "Davi Luiz",
    publishedAt: "2025-02-05",
    readTime: 13,
    category: "Meta Ads",
    tags: ["Meta Ads", "Facebook Ads", "Público", "Segmentação"],
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=675&fit=crop&q=80",
    tableOfContents: [
      "Resumo rápido",
      "Comece pelo Básico",
      "Estrutura de Testes",
      "Sinais de Escala",
      "Próximos passos",
    ],
    content: `
## Resumo rápido

- Hipersegmentação nem sempre melhora CPA.
- Teste poucas variáveis por vez.
- Escale o que já está validado.

---

## Comece pelo Básico

Segmentos amplos com bons criativos podem performar melhor do que hipersegmentações.

---

## Estrutura de Testes

Teste 2 a 3 públicos por vez. Avalie CTR, CPA e qualidade do lead antes de alterar a segmentação.

---

## Sinais de Escala

Escalar é repetir o que já está validado. Não misture hipóteses diferentes no mesmo conjunto.

---

## Próximos passos

Se quiser, podemos revisar seu cenário e sugerir próximos passos de execução.
`,
  },
  {
    id: "6",
    slug: "funil-vendas-seo",
    title: "Funil de Vendas com SEO: Estrutura em 3 Etapas",
    description: "Como alinhar conteúdo e intenção de busca ao longo da jornada.",
    author: "Davi Luiz",
    publishedAt: "2025-02-01",
    readTime: 14,
    category: "SEO",
    tags: ["SEO", "Funil", "Conteúdo", "Estratégia"],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=675&fit=crop&q=80",
    tableOfContents: [
      "Resumo rápido",
      "Topo do Funil",
      "Meio do Funil",
      "Fundo do Funil",
      "Próximos passos",
    ],
    content: `
## Resumo rápido

- Cada etapa do funil tem uma intenção diferente.
- Conteúdo certo no momento certo gera conversão.
- SEO precisa de consistência e prova social.

---

## Topo do Funil

Conteúdos educativos para capturar dúvidas iniciais e gerar consciência.

---

## Meio do Funil

Guias e comparativos que ajudam a escolher caminho e método.

---

## Fundo do Funil

Páginas com prova social, casos e CTA claro para conversão.

---

## Próximos passos

Se quiser, podemos revisar seu cenário e sugerir próximos passos de execução.
`,
  },
]

export const BLOG_ARTICLES_LIST: BlogArticleListItem[] = BLOG_ARTICLES.map(({ content, ...rest }) => rest)

export const BLOG_SLUGS = BLOG_ARTICLES.map((article) => article.slug)

export const BLOG_ARTICLE_MAP = BLOG_ARTICLES.reduce<Record<string, BlogArticle>>((acc, article) => {
  acc[article.slug] = article
  return acc
}, {})

export function getBlogArticleBySlug(slug: string) {
  return BLOG_ARTICLE_MAP[slug]
}

