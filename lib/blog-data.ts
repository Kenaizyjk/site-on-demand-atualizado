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
    description: "Os pontos cegos que drenam orçamento — e como corrigir com método, sem achismo.",
    author: "Davi Luiz",
    publishedAt: "2025-02-15",
    readTime: 12,
    category: "Google Ads",
    tags: ["Google Ads", "SEM", "ROI", "Performance"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop&q=80",
    featured: true,
    tableOfContents: [
      "Resumo rápido",
      "Checklist relâmpago",
      "Erro #1: Objetivo e Mensagem Difusos",
      "Erro #2: Palavras-chave Sem Intenção",
      "Erro #3: Página de Destino Fraca",
      "Erro #4: Mensuração Incompleta",
      "Erro #5: Estrutura e Orçamento Confusos",
      "Erro #6: Rotina de Otimização Ausente",
      "Erro #7: Anúncios Sem Prova e Diferencial",
      "Erro #8: Negativas Ignoradas",
      "Erro #9: Lances Sem Estratégia",
      "Erro #10: Falta de Experimento",
      "Insight rápido",
      "Exemplo real",
      "FAQ",
      "Resumo final",
      "Próximos passos",
    ],
    content: `
## Resumo rápido

- A maioria das contas perde dinheiro em detalhes invisíveis.
- Sem mensuração, você trabalha com opinião, não com dados.
- Estrutura simples + rotina clara vencem a “complexidade bonita”.

---

## Checklist relâmpago

- Objetivo e público definidos em uma frase
- Anúncio e página dizendo a mesma promessa
- Conversões críticas registradas e testadas
- Estrutura simples (poucas campanhas, muito foco)
- Rotina semanal de cortes e ajustes

---

## Erro #1: Objetivo e Mensagem Difusos

### O problema
Quando a campanha tenta falar com todo mundo, ela some no ruído. A mensagem fica genérica e a intenção real do usuário é ignorada.

### O ajuste
Defina um objetivo único e escreva anúncios para um público específico. A promessa precisa ser clara e restrita: o que você entrega e para quem.

---

## Erro #2: Palavras-chave Sem Intenção

### O problema
Palavras-chave amplas demais geram curiosos, não compradores. O custo sobe e a conversão não acompanha.

### O ajuste
Priorize termos com contexto, local e problema específico. É assim que você compra intenção de compra, não volume vazio.

![Painel de performance e métricas de campanha](/blog/10-erros-01.jpg)

---

## Erro #3: Página de Destino Fraca

### O problema
Mesmo um anúncio excelente morre se a página não responde às dúvidas em segundos.

### O ajuste
Garanta coerência entre anúncio e página. A primeira dobra precisa explicar a proposta com clareza e empurrar para uma ação simples.

---

## Erro #4: Mensuração Incompleta

### O problema
Sem eventos bem configurados, você otimiza no escuro e chama isso de estratégia.

### O ajuste
Mapeie as ações que realmente importam (formulário, ligação, WhatsApp) e valide se estão sendo medidas de ponta a ponta.

---

## Erro #5: Estrutura e Orçamento Confusos

### O problema
Muitas campanhas brigando entre si geram desperdício, dados confusos e aprendizado lento.

### O ajuste
Mantenha a estrutura enxuta: poucas campanhas, objetivos claros e separação por etapa de funil.

![Equipe analisando resultados e definindo próximos passos](/blog/10-erros-02.jpg)

---

## Erro #6: Rotina de Otimização Ausente

### O problema
Campanhas precisam de revisão constante. Sem rotina, a conta envelhece rápido.

### O ajuste
Defina uma cadência fixa de revisão para palavras-chave, anúncios e páginas. Pequenos cortes acumulados mudam o ROI.

---

## Erro #7: Anúncios Sem Prova e Diferencial

### O problema
Anúncios genéricos não criam confiança nem explicam por que você é a escolha certa.

### O ajuste
Inclua prova real e um diferencial concreto. Resultados, casos e garantias claras reduzem a dúvida do clique.

---

## Erro #8: Negativas Ignoradas

### O problema
Sem negativas, sua campanha banca cliques irrelevantes e queima verba em visitas sem intenção.

### O ajuste
Revise o relatório de termos de pesquisa com frequência e adicione negativas. É um dos ajustes mais rápidos para melhorar ROI.

![Planejamento e organização de tarefas no marketing](/blog/10-erros-03.jpg)

---

## Erro #9: Lances Sem Estratégia

### O problema
Trocar estratégia toda semana ou escolher um modelo sem dados suficientes trava o aprendizado.

### O ajuste
Escolha uma estratégia alinhada ao objetivo e mantenha tempo suficiente para estabilizar.

---

## Erro #10: Falta de Experimento

### O problema
Sem testes, você fica preso ao “mais do mesmo” e perde ganhos fáceis em CTR, CPC e CPA.

### O ajuste
Teste títulos, descrições e variações de página. Ganhos pequenos, acumulados, mudam o custo final do lead.

---

## Insight rápido

Quanto mais simples a estrutura, mais rápido você aprende o que funciona. Complexidade sem controle parece profissional, mas custa caro.

---

## Exemplo real

Ao simplificar de 9 campanhas para 3, o CPA caiu 28% em 21 dias porque o orçamento parou de se fragmentar.

---

## FAQ

- **Como saber se a conta está “saudável”?** Quando conversões estão estáveis e as palavras-chave negativas crescem semana a semana.
- **Preciso trocar estratégia de lances sempre?** Não. Troque apenas quando houver dados suficientes e um objetivo claro.
- **Quanto tempo para ver melhora?** Em geral, 2 a 4 semanas com rotina consistente.

---

## Resumo final

- Uma conta saudável é simples, medida e revisada toda semana.
- Corte ruído, compre intenção e otimize com método.
- Pequenos ajustes acumulados fazem o ROI aparecer.

---

## Próximos passos

Se quiser, revisamos sua conta e entregamos um plano de ajustes com prioridades claras.
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
      "Checklist relâmpago",
      "Mapa do Atendimento",
      "Qualificação com Perguntas-Chave",
      "Hand-off para Humanos",
      "Boas Práticas de Mensagens",
      "Checklist de Implementação",
      "Insight rápido",
      "Exemplo real",
      "FAQ",
      "Resumo final",
      "Próximos passos",
    ],
    content: `
## Resumo rápido

- Primeiro desenhe o fluxo, depois automatize.
- Qualificação enxuta gera respostas rápidas.
- Hand-off humano evita fricção e perda de venda.

## Checklist relâmpago

- Fluxo desenhado antes da automação
- Perguntas-chave reduzidas ao essencial
- Regras de transbordo bem definidas
- Mensagens curtas e objetivas
- Registro de dados no CRM

![Fluxo de automação e integrações entre ferramentas](/blog/whatsapp-01.jpg)

---

## Mapa do Atendimento

Antes de automatizar, desenhe o fluxo: entrada do lead, qualificação, agendamento e fechamento. Sem esse mapa, o bot vira ruído.

![Equipe analisando mapa de atendimento e jornada](/blog/whatsapp-02.jpg)

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

![Mensagens organizadas e prontas para resposta rápida](/blog/whatsapp-03.jpg)

---

## Checklist de Implementação

- Mensagens de entrada e saída prontas
- Regras de SLA configuradas
- Registro de dados no CRM
- Testes com 10 casos reais

---

## Insight rápido

Fluxo sem hand-off humano vira gargalo. Uma regra simples de transbordo evita perda de vendas.

---

## Exemplo real

Ao reduzir o script para 4 perguntas e criar hand-off, o tempo médio de resposta caiu de 18 para 3 minutos.

---

## FAQ

- **Quantas perguntas o bot deve fazer?** De 3 a 5 perguntas no máximo.
- **Quando passar para humano?** Lead quente, exceção ou dúvida não prevista.
- **O que medir primeiro?** Tempo de resposta e taxa de conversão em agendamento.

---

## Resumo final

- Fluxo claro antes da automação.
- Perguntas curtas, respostas objetivas.
- Transbordo humano evita perda de venda.

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
      "Checklist relâmpago",
      "Perfil Completo e Coerente",
      "Postagens e Fotos",
      "Avaliações e Respostas",
      "Otimização por Categoria",
      "Insight rápido",
      "Exemplo real",
      "FAQ",
      "Resumo final",
      "Próximos passos",
    ],
    content: `
## Resumo rápido

- Consistência de dados aumenta confiança do Google.
- Postagens frequentes sinalizam atividade.
- Responder avaliações melhora conversão.

## Checklist relâmpago

- Nome, endereço e telefone consistentes
- Categoria correta e atualizada
- Fotos recentes e reais
- Respostas rápidas a avaliações
- Postagens semanais

![Painel de presença local e dados organizados](/blog/gmb-01.jpg)

---

## Perfil Completo e Coerente

Dados básicos consistentes (nome, endereço, telefone) aumentam confiança e reduzem inconsistências no Google.

![Trabalho de campo e presença local no Google](/blog/gmb-02.jpg)

---

## Postagens e Fotos

Atualizações semanais com fotos reais ajudam a melhorar o engajamento e a relevância local.

---

## Avaliações e Respostas

Responder avaliações demonstra atenção ao cliente e melhora a percepção da marca. Foque em respostas objetivas.

![Atendimento e resposta a avaliações em tempo real](/blog/gmb-03.jpg)

---

## Otimização por Categoria

Selecione categorias específicas e atualize atributos de serviços para aparecer nas buscas certas.

---

## Insight rápido

Para buscas locais, prova social pesa mais do que qualquer descrição bonita.

---

## Exemplo real

Ao responder 100% das avaliações em 30 dias, o volume de chamadas subiu 22% sem mudar anúncios.

---

## FAQ

- **Quantas fotos devo postar?** Pelo menos 5 novas por mês.
- **Responder avaliação negativa ajuda?** Sim, mostra postura e aumenta confiança.
- **Postagens no GMB fazem diferença?** Sim, sinalizam atividade e relevância.

---

## Resumo final

- Consistência de dados é prioridade.
- Fotos e postagens frequentes geram relevância.
- Respostas rápidas aumentam confiança.

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
      "Checklist relâmpago",
      "IA como Assistente, não como Piloto",
      "Onde a IA ajuda mais",
      "Onde a IA ainda erra",
      "Insight rápido",
      "Exemplo real",
      "FAQ",
      "Resumo final",
      "Próximos passos",
    ],
    content: `
## Resumo rápido

- IA acelera execução, não substitui estratégia.
- Use IA para variações, análise e triagem.
- Decisões críticas seguem humanas.

## Checklist relâmpago

- IA usada como assistente, não piloto
- Critérios humanos para decisão final
- Tarefas repetitivas automatizadas
- Revisão de consistência e qualidade
- Métricas claras para avaliar ganhos

![Tecnologia e dados aplicados ao marketing](/blog/ia-01.jpg)

---

## IA como Assistente, não como Piloto

IA é excelente para rascunhos, variações e análise rápida. A estratégia continua sendo humana.

![Time discutindo estratégia com apoio de tecnologia](/blog/ia-02.jpg)

---

## Onde a IA ajuda mais

- Variações de criativos
- Resumos de insights
- Classificação de leads
- Revisão de consistência de copy

![Colaboração e revisão de conteúdo com IA](/blog/ia-03.jpg)

---

## Onde a IA ainda erra

Em decisões que precisam de contexto de negócio e timing de mercado.

---

## Insight rápido

IA é poderosa para volume. Estratégia continua sendo humana, porque contexto não é dado.

---

## Exemplo real

Ao usar IA para 20 variações de anúncio e validar manualmente, o CTR subiu sem perder coerência de marca.

---

## FAQ

- **IA substitui o time de marketing?** Não. Ela acelera execução.
- **Onde IA gera mais impacto?** Variações, triagem e sumarização.
- **IA pode errar feio?** Sim, principalmente em decisões estratégicas.

---

## Resumo final

- IA acelera execução, não substitui estratégia.
- Use IA onde ela reduz tempo e custo.
- Decisões críticas continuam humanas.

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
      "Checklist relâmpago",
      "Comece pelo Básico",
      "Estrutura de Testes",
      "Sinais de Escala",
      "Insight rápido",
      "Exemplo real",
      "FAQ",
      "Resumo final",
      "Próximos passos",
    ],
    content: `
## Resumo rápido

- Hipersegmentação nem sempre melhora CPA.
- Teste poucas variáveis por vez.
- Escale o que já está validado.

## Checklist relâmpago

- Público amplo com criativo forte
- Hipóteses separadas por conjunto
- Testes com poucas variáveis
- Acompanhamento por CPA/qualidade
- Escala só após validação

![Painel de segmentação e performance](/blog/meta-01.jpg)

---

## Comece pelo Básico

Segmentos amplos com bons criativos podem performar melhor do que hipersegmentações.

![Análise de públicos e resultados em equipe](/blog/meta-02.jpg)

---

## Estrutura de Testes

Teste 2 a 3 públicos por vez. Avalie CTR, CPA e qualidade do lead antes de alterar a segmentação.

---

## Sinais de Escala

Escalar é repetir o que já está validado. Não misture hipóteses diferentes no mesmo conjunto.

![Planejamento de escala e otimização de anúncios](/blog/meta-03.jpg)

---

## Insight rápido

Escala não é “colocar mais dinheiro”. Escala é repetir o que já foi validado, sem misturar hipóteses.

---

## Exemplo real

Ao pausar conjuntos fracos e duplicar o melhor, o CPA caiu 17% em 14 dias.

---

## FAQ

- **Quando escalar?** Quando CPA está estável por 7–10 dias.
- **Escalo tudo?** Não. Escale apenas o que já provou performance.
- **Quanto aumentar?** Em blocos de 15–30%, sem picos.

---

## Resumo final

- Menos variáveis, mais controle.
- Escale o que já provou resultado.
- Segmentação simples ganha de hipersegmentação.

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
      "Checklist relâmpago",
      "Topo do Funil",
      "Meio do Funil",
      "Fundo do Funil",
      "Insight rápido",
      "Exemplo real",
      "FAQ",
      "Resumo final",
      "Próximos passos",
    ],
    content: `
## Resumo rápido

- Cada etapa do funil tem uma intenção diferente.
- Conteúdo certo no momento certo gera conversão.
- SEO precisa de consistência e prova social.

## Checklist relâmpago

- Intenção mapeada por etapa
- Conteúdo alinhado ao funil
- Páginas de conversão claras
- Provas sociais visíveis
- Rotina de publicação contínua

![Planejamento de conteúdo e funil](/blog/funil-01.jpg)

---

## Topo do Funil

Conteúdos educativos para capturar dúvidas iniciais e gerar consciência.

![Pesquisa e organização de temas para SEO](/blog/funil-02.jpg)

---

## Meio do Funil

Guias e comparativos que ajudam a escolher caminho e método.

---

## Fundo do Funil

Páginas com prova social, casos e CTA claro para conversão.

![Resultados e conversão com foco em performance](/blog/funil-03.jpg)

---

## Insight rápido

SEO sem conversão vira tráfego vazio. O fundo do funil é onde o dinheiro aparece.

---

## Exemplo real

Ao adicionar prova social e CTA claro, a taxa de conversão subiu 1,9x em 30 dias.

---

## FAQ

- **SEO precisa de quanto tempo?** 3 a 6 meses para maturar.
- **Conteúdo sem CTA funciona?** Para topo de funil, sim. Para venda, não.
- **Qual a métrica principal?** Conversão por etapa do funil.

---

## Resumo final

- Cada etapa tem intenção diferente.
- Conteúdo certo na hora certa converte.
- Consistência vence o volume.

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

