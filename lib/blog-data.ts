export interface BlogArticle {
  slug: string
  title: string
  excerpt: string
  content?: string
  coverImage: string
  coverGradient?: string
  author: string
  publishedAt: string
  updatedAt?: string
  category: 'SEO Local' | 'Trafego Pago' | 'Automacao' | 'Estrategia' | 'Redes Sociais' | 'Google Ads' | 'IA & Marketing' | 'Meta Ads' | 'SEO'
  tags: string[]
  readTime: number
  metaTitle?: string
  metaDescription?: string
  keywords?: string[]
  featured?: boolean
  noindex?: boolean
  tableOfContents?: string[]
}

export type BlogArticleListItem = Omit<BlogArticle, "content">

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "como-aparecer-google-maps-belo-horizonte",
    title: "Como Aparecer no Google Maps de Belo Horizonte em 30 Dias",
    excerpt: "Guia pratico para otimizar seu Google Meu Negocio e aparecer nas primeiras posicoes do Google Maps em BH. Passo a passo sem precisar de tecnico.",
    coverImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
    author: "Davi Honorato",
    publishedAt: "2026-03-15",
    category: "SEO Local",
    tags: ["Google Meu Negocio", "SEO local", "BH", "Google Maps", "negocios locais"],
    readTime: 8,
    keywords: ["google maps belo horizonte", "google meu negocio BH", "SEO local BH"],
    featured: true,
    content: `
## Resumo rapido

- Perfil completo e verificado e o primeiro passo.
- Fotos reais e avaliacoes frequentes aumentam relevancia.
- Consistencia de dados (NAP) e fundamental.

---

## Checklist relampago

- Perfil do Google Meu Negocio verificado
- Nome, endereco e telefone consistentes
- Categoria principal correta
- Fotos reais e atualizadas
- Respostas a todas as avaliacoes

---

## Passo 1: Verificar e Completar o Perfil

Acesse o Google Business Profile e garanta que todos os campos estao preenchidos. Nome, endereco, telefone, horario de funcionamento e descricao do negocio.

---

## Passo 2: Escolher a Categoria Certa

A categoria principal define em quais buscas voce aparece. Escolha a mais especifica possivel e adicione categorias secundarias relevantes.

---

## Passo 3: Fotos e Postagens Semanais

Negocio com fotos recentes recebe 42% mais pedidos de rota no Maps. Publique fotos reais e postagens semanais sobre novidades e promocoes.

---

## Passo 4: Avaliacoes e Respostas

Peca avaliacoes de forma natural e responda todas, positivas e negativas. Respostas rapidas mostram atencao ao cliente.

---

## Insight rapido

O Google Maps prioriza negocios que demonstram atividade constante. Postagens e avaliacoes recentes pesam mais do que um perfil bonito e parado.

---

## Exemplo real

Uma clinica em BH que respondeu 100% das avaliacoes e postou semanalmente subiu de 15o para 3o no Maps em 28 dias.

---

## FAQ

- **Quanto tempo leva para aparecer no Maps?** De 2 a 4 semanas com otimizacao constante.
- **Preciso pagar para aparecer?** Nao. O perfil organico do Google Meu Negocio e gratuito.
- **Avaliacoes falsas ajudam?** Nao. O Google detecta e pode penalizar seu perfil.

---

## Resumo final

- Perfil completo e verificado e prioridade.
- Fotos e postagens semanais geram relevancia.
- Avaliacoes reais e respostas rapidas fazem diferenca.

---

## Proximos passos

Se quiser, revisamos seu perfil no Google Maps e entregamos um plano de otimizacao com prioridades claras.
`,
  },
  {
    slug: "trafego-pago-clinicas-bh-guia-2026",
    title: "Trafego Pago para Clinicas em BH: Guia Completo 2026",
    excerpt: "Como usar Google Ads e Meta Ads para gerar pacientes para sua clinica em Belo Horizonte. Estrategias que funcionam para clinicas odontologicas, medicas e de estetica.",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    author: "Davi Honorato",
    publishedAt: "2026-03-28",
    category: "Trafego Pago",
    tags: ["Google Ads", "Meta Ads", "clinicas", "BH", "trafego pago"],
    readTime: 12,
    keywords: ["trafego pago clinicas BH", "google ads clinica belo horizonte", "marketing para clinicas"],
    featured: true,
    content: `
## Resumo rapido

- Google Ads captura demanda ativa; Meta Ads gera demanda.
- Landing page dedicada e essencial para conversao.
- Mensuracao correta define o sucesso.

---

## Checklist relampago

- Campanhas separadas por servico
- Landing pages dedicadas
- Conversoes configuradas (formulario, WhatsApp, ligacao)
- Orcamento minimo definido por canal
- Rotina semanal de otimizacao

---

## Google Ads para Clinicas

Foque em termos com intencao local: "dentista BH", "clinica estetica Belo Horizonte". Use extensoes de local e chamada para facilitar o contato.

---

## Meta Ads para Clinicas

Use campanhas de reconhecimento com antes/depois (respeitando normas do CFM) e retargeting para quem visitou o site. Segmente por regiao e interesse.

---

## Landing Pages que Convertem

A pagina de destino precisa ter: proposta clara, prova social, formulario simples e CTA para WhatsApp. Evite menus e distracao.

---

## Insight rapido

Clinicas que separam campanhas por servico e usam landing pages dedicadas reduzem o custo por lead em ate 40%.

---

## Exemplo real

Uma clinica odontologica em BH reduziu o CPA de R$85 para R$32 em 30 dias ao separar campanhas por servico e criar landing pages especificas.

---

## FAQ

- **Quanto investir no inicio?** De R$1.500 a R$3.000/mes por canal para ter dados suficientes.
- **Google ou Meta primeiro?** Google Ads primeiro se ha demanda de busca; Meta se precisa gerar consciencia.
- **Quanto tempo para ver resultado?** De 2 a 4 semanas com otimizacao constante.

---

## Resumo final

- Separe campanhas por servico.
- Use landing pages dedicadas.
- Mensure tudo e otimize semanalmente.

---

## Proximos passos

Se quiser, podemos revisar suas campanhas e entregar um plano com prioridades claras para sua clinica.
`,
  },
  {
    slug: "automacao-n8n-pequenas-empresas-brasil",
    title: "Automacao com n8n: Como Pequenas Empresas Brasileiras Estao Usando IA",
    excerpt: "Conheca casos reais de automacao com n8n em PMEs brasileiras. Como automatizar atendimento no WhatsApp, follow-up de leads e atualizacao de CRM sem contratar mais pessoas.",
    coverImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800",
    author: "Davi Honorato",
    publishedAt: "2026-04-02",
    category: "Automacao",
    tags: ["n8n", "automacao", "WhatsApp", "IA", "PME"],
    readTime: 10,
    keywords: ["automacao n8n brasil", "automacao whatsapp negocios", "n8n pequenas empresas"],
    featured: true,
    content: `
## Resumo rapido

- n8n permite automatizar sem saber programar.
- WhatsApp, CRM e e-mail sao os 3 fluxos mais comuns.
- Automacao libera tempo para vender, nao para operar.

---

## Checklist relampago

- Fluxo de atendimento mapeado
- Integracao WhatsApp + CRM configurada
- Follow-up automatico de leads
- Alertas para transbordo humano
- Dashboard de metricas ativo

---

## O que e n8n

Plataforma de automacao open-source que conecta ferramentas sem codigo. Ideal para PMEs que precisam de integracao sem custo alto.

---

## Caso 1: Atendimento WhatsApp Automatizado

Uma loja de roupas em BH automatizou respostas iniciais no WhatsApp com n8n. Tempo de primeira resposta caiu de 2 horas para 3 minutos.

---

## Caso 2: Follow-up de Leads no CRM

Uma consultoria automatizou o follow-up de leads que nao responderam em 48h. Taxa de resposta subiu 35% sem esforco manual.

---

## Caso 3: Atualizacao Automatica de CRM

Um escritorio de advocacia conectou formularios do site ao CRM via n8n. Eliminaram 4 horas semanais de entrada manual de dados.

---

## Insight rapido

Automacao nao e sobre substituir pessoas. E sobre liberar pessoas para fazer o que so pessoas fazem: vender, negociar e resolver problemas.

---

## Exemplo real

Uma PME com 8 funcionarios automatizou 3 fluxos com n8n e economizou o equivalente a 1 funcionario em tempo operacional.

---

## FAQ

- **Preciso saber programar?** Nao. O n8n funciona com blocos visuais.
- **Quanto custa?** A versao self-hosted e gratuita. A cloud comeca em US$20/mes.
- **Quais ferramentas integram?** WhatsApp, Google Sheets, CRM, e-mail, Slack e centenas de outras.

---

## Resumo final

- n8n e acessivel para PMEs.
- Comece por atendimento e follow-up.
- Automacao libera tempo e reduz erros.

---

## Proximos passos

Se quiser, podemos mapear seus fluxos e sugerir as automacoes com maior impacto para seu negocio.
`,
  },
  {
    slug: "10-erros-google-ads",
    title: "10 Erros em Google Ads que Travaram a Performance",
    excerpt: "Os pontos cegos que drenam orcamento -- e como corrigir com metodo, sem achismo.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop&q=80",
    author: "Davi Luiz",
    publishedAt: "2025-02-15",
    readTime: 12,
    category: "Google Ads",
    tags: ["Google Ads", "SEM", "ROI", "Performance"],
    featured: true,
    tableOfContents: [
      "Resumo rapido",
      "Checklist relampago",
      "Erro #1: Objetivo e Mensagem Difusos",
      "Erro #2: Palavras-chave Sem Intencao",
      "Erro #3: Pagina de Destino Fraca",
      "Erro #4: Mensuracao Incompleta",
      "Erro #5: Estrutura e Orcamento Confusos",
      "Erro #6: Rotina de Otimizacao Ausente",
      "Erro #7: Anuncios Sem Prova e Diferencial",
      "Erro #8: Negativas Ignoradas",
      "Erro #9: Lances Sem Estrategia",
      "Erro #10: Falta de Experimento",
      "Insight rapido",
      "Exemplo real",
      "FAQ",
      "Resumo final",
      "Proximos passos",
    ],
    content: `
## Resumo rapido

- A maioria das contas perde dinheiro em detalhes invisiveis.
- Sem mensuracao, voce trabalha com opiniao, nao com dados.
- Estrutura simples + rotina clara vencem a "complexidade bonita".

---

## Checklist relampago

- Objetivo e publico definidos em uma frase
- Anuncio e pagina dizendo a mesma promessa
- Conversoes criticas registradas e testadas
- Estrutura simples (poucas campanhas, muito foco)
- Rotina semanal de cortes e ajustes

---

## Erro #1: Objetivo e Mensagem Difusos

### O problema
Quando a campanha tenta falar com todo mundo, ela some no ruido. A mensagem fica generica e a intencao real do usuario e ignorada.

### O ajuste
Defina um objetivo unico e escreva anuncios para um publico especifico. A promessa precisa ser clara e restrita: o que voce entrega e para quem.

---

## Erro #2: Palavras-chave Sem Intencao

### O problema
Palavras-chave amplas demais geram curiosos, nao compradores. O custo sobe e a conversao nao acompanha.

### O ajuste
Priorize termos com contexto, local e problema especifico. E assim que voce compra intencao de compra, nao volume vazio.

![Painel de performance e metricas de campanha](/blog/10-erros-01.jpg)

---

## Erro #3: Pagina de Destino Fraca

### O problema
Mesmo um anuncio excelente morre se a pagina nao responde as duvidas em segundos.

### O ajuste
Garanta coerencia entre anuncio e pagina. A primeira dobra precisa explicar a proposta com clareza e empurrar para uma acao simples.

---

## Erro #4: Mensuracao Incompleta

### O problema
Sem eventos bem configurados, voce otimiza no escuro e chama isso de estrategia.

### O ajuste
Mapeie as acoes que realmente importam (formulario, ligacao, WhatsApp) e valide se estao sendo medidas de ponta a ponta.

---

## Erro #5: Estrutura e Orcamento Confusos

### O problema
Muitas campanhas brigando entre si geram desperdicio, dados confusos e aprendizado lento.

### O ajuste
Mantenha a estrutura enxuta: poucas campanhas, objetivos claros e separacao por etapa de funil.

![Equipe analisando resultados e definindo proximos passos](/blog/10-erros-02.jpg)

---

## Erro #6: Rotina de Otimizacao Ausente

### O problema
Campanhas precisam de revisao constante. Sem rotina, a conta envelhece rapido.

### O ajuste
Defina uma cadencia fixa de revisao para palavras-chave, anuncios e paginas. Pequenos cortes acumulados mudam o ROI.

---

## Erro #7: Anuncios Sem Prova e Diferencial

### O problema
Anuncios genericos nao criam confianca nem explicam por que voce e a escolha certa.

### O ajuste
Inclua prova real e um diferencial concreto. Resultados, casos e garantias claras reduzem a duvida do clique.

---

## Erro #8: Negativas Ignoradas

### O problema
Sem negativas, sua campanha banca cliques irrelevantes e queima verba em visitas sem intencao.

### O ajuste
Revise o relatorio de termos de pesquisa com frequencia e adicione negativas. E um dos ajustes mais rapidos para melhorar ROI.

![Planejamento e organizacao de tarefas no marketing](/blog/10-erros-03.jpg)

---

## Erro #9: Lances Sem Estrategia

### O problema
Trocar estrategia toda semana ou escolher um modelo sem dados suficientes trava o aprendizado.

### O ajuste
Escolha uma estrategia alinhada ao objetivo e mantenha tempo suficiente para estabilizar.

---

## Erro #10: Falta de Experimento

### O problema
Sem testes, voce fica preso ao "mais do mesmo" e perde ganhos faceis em CTR, CPC e CPA.

### O ajuste
Teste titulos, descricoes e variacoes de pagina. Ganhos pequenos, acumulados, mudam o custo final do lead.

---

## Insight rapido

Quanto mais simples a estrutura, mais rapido voce aprende o que funciona. Complexidade sem controle parece profissional, mas custa caro.

---

## Exemplo real

Ao simplificar de 9 campanhas para 3, o CPA caiu 28% em 21 dias porque o orcamento parou de se fragmentar.

---

## FAQ

- **Como saber se a conta esta "saudavel"?** Quando conversoes estao estaveis e as palavras-chave negativas crescem semana a semana.
- **Preciso trocar estrategia de lances sempre?** Nao. Troque apenas quando houver dados suficientes e um objetivo claro.
- **Quanto tempo para ver melhora?** Em geral, 2 a 4 semanas com rotina consistente.

---

## Resumo final

- Uma conta saudavel e simples, medida e revisada toda semana.
- Corte ruido, compre intencao e otimize com metodo.
- Pequenos ajustes acumulados fazem o ROI aparecer.

---

## Proximos passos

Se quiser, revisamos sua conta e entregamos um plano de ajustes com prioridades claras.
`,
  },
  {
    slug: "automacao-whatsapp-leads",
    title: "Automacao no WhatsApp: Estrutura e Boas Praticas",
    excerpt: "Como organizar atendimento e qualificacao com n8n e boas praticas.",
    coverImage: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&h=675&fit=crop&q=80",
    author: "Davi Luiz",
    publishedAt: "2025-02-12",
    readTime: 15,
    category: "Automacao",
    tags: ["WhatsApp", "n8n", "Automacao", "Leads"],
    featured: true,
    tableOfContents: [
      "Resumo rapido",
      "Checklist relampago",
      "Mapa do Atendimento",
      "Qualificacao com Perguntas-Chave",
      "Hand-off para Humanos",
      "Boas Praticas de Mensagens",
      "Checklist de Implementacao",
      "Insight rapido",
      "Exemplo real",
      "FAQ",
      "Resumo final",
      "Proximos passos",
    ],
    content: `
## Resumo rapido

- Primeiro desenhe o fluxo, depois automatize.
- Qualificacao enxuta gera respostas rapidas.
- Hand-off humano evita friccao e perda de venda.

## Checklist relampago

- Fluxo desenhado antes da automacao
- Perguntas-chave reduzidas ao essencial
- Regras de transbordo bem definidas
- Mensagens curtas e objetivas
- Registro de dados no CRM

![Fluxo de automacao e integracoes entre ferramentas](/blog/whatsapp-01.jpg)

---

## Mapa do Atendimento

Antes de automatizar, desenhe o fluxo: entrada do lead, qualificacao, agendamento e fechamento. Sem esse mapa, o bot vira ruido.

![Equipe analisando mapa de atendimento e jornada](/blog/whatsapp-02.jpg)

---

## Qualificacao com Perguntas-Chave

Use poucas perguntas e foque no que realmente define prioridade: orcamento, urgencia e objetivo. O ideal e caber em 3 a 5 perguntas.

---

## Hand-off para Humanos

Automacao eficiente sempre tem transbordo para pessoa quando ha duvida, lead quente ou excecao. Isso reduz desgaste e aumenta conversao.

---

## Boas Praticas de Mensagens

- Mensagens curtas e claras
- Opcoes objetivas (botoes ou respostas rapidas)
- Confirmacoes visuais de proximo passo
- Tempo de resposta previsivel

![Mensagens organizadas e prontas para resposta rapida](/blog/whatsapp-03.jpg)

---

## Checklist de Implementacao

- Mensagens de entrada e saida prontas
- Regras de SLA configuradas
- Registro de dados no CRM
- Testes com 10 casos reais

---

## Insight rapido

Fluxo sem hand-off humano vira gargalo. Uma regra simples de transbordo evita perda de vendas.

---

## Exemplo real

Ao reduzir o script para 4 perguntas e criar hand-off, o tempo medio de resposta caiu de 18 para 3 minutos.

---

## FAQ

- **Quantas perguntas o bot deve fazer?** De 3 a 5 perguntas no maximo.
- **Quando passar para humano?** Lead quente, excecao ou duvida nao prevista.
- **O que medir primeiro?** Tempo de resposta e taxa de conversao em agendamento.

---

## Resumo final

- Fluxo claro antes da automacao.
- Perguntas curtas, respostas objetivas.
- Transbordo humano evita perda de venda.

---

## Proximos passos

Se quiser, podemos revisar seu cenario e sugerir proximos passos de execucao.
`,
  },
  {
    slug: "gmb-local-seo",
    title: "GMB Local: Boas Praticas de Presenca no Google",
    excerpt: "Como organizar Google Meu Negocio e melhorar a visibilidade local.",
    coverImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=675&fit=crop&q=80",
    author: "Davi Luiz",
    publishedAt: "2025-02-10",
    readTime: 10,
    category: "SEO Local",
    tags: ["GMB", "SEO Local", "Local Search", "Leads"],
    featured: true,
    tableOfContents: [
      "Resumo rapido",
      "Checklist relampago",
      "Perfil Completo e Coerente",
      "Postagens e Fotos",
      "Avaliacoes e Respostas",
      "Otimizacao por Categoria",
      "Insight rapido",
      "Exemplo real",
      "FAQ",
      "Resumo final",
      "Proximos passos",
    ],
    content: `
## Resumo rapido

- Consistencia de dados aumenta confianca do Google.
- Postagens frequentes sinalizam atividade.
- Responder avaliacoes melhora conversao.

## Checklist relampago

- Nome, endereco e telefone consistentes
- Categoria correta e atualizada
- Fotos recentes e reais
- Respostas rapidas a avaliacoes
- Postagens semanais

![Painel de presenca local e dados organizados](/blog/gmb-01.jpg)

---

## Perfil Completo e Coerente

Dados basicos consistentes (nome, endereco, telefone) aumentam confianca e reduzem inconsistencias no Google.

![Trabalho de campo e presenca local no Google](/blog/gmb-02.jpg)

---

## Postagens e Fotos

Atualizacoes semanais com fotos reais ajudam a melhorar o engajamento e a relevancia local.

---

## Avaliacoes e Respostas

Responder avaliacoes demonstra atencao ao cliente e melhora a percepcao da marca. Foque em respostas objetivas.

![Atendimento e resposta a avaliacoes em tempo real](/blog/gmb-03.jpg)

---

## Otimizacao por Categoria

Selecione categorias especificas e atualize atributos de servicos para aparecer nas buscas certas.

---

## Insight rapido

Para buscas locais, prova social pesa mais do que qualquer descricao bonita.

---

## Exemplo real

Ao responder 100% das avaliacoes em 30 dias, o volume de chamadas subiu 22% sem mudar anuncios.

---

## FAQ

- **Quantas fotos devo postar?** Pelo menos 5 novas por mes.
- **Responder avaliacao negativa ajuda?** Sim, mostra postura e aumenta confianca.
- **Postagens no GMB fazem diferenca?** Sim, sinalizam atividade e relevancia.

---

## Resumo final

- Consistencia de dados e prioridade.
- Fotos e postagens frequentes geram relevancia.
- Respostas rapidas aumentam confianca.

---

## Proximos passos

Se quiser, podemos revisar seu cenario e sugerir proximos passos de execucao.
`,
  },
  {
    slug: "ia-marketing-2025",
    title: "IA no Marketing: Onde Faz Sentido Usar",
    excerpt: "Como IA apoia estrategia e operacao com responsabilidade.",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop&q=80",
    author: "Davi Luiz",
    publishedAt: "2025-02-08",
    readTime: 11,
    category: "IA & Marketing",
    tags: ["IA", "Marketing", "Automacao", "Futuro"],
    tableOfContents: [
      "Resumo rapido",
      "Checklist relampago",
      "IA como Assistente, nao como Piloto",
      "Onde a IA ajuda mais",
      "Onde a IA ainda erra",
      "Insight rapido",
      "Exemplo real",
      "FAQ",
      "Resumo final",
      "Proximos passos",
    ],
    content: `
## Resumo rapido

- IA acelera execucao, nao substitui estrategia.
- Use IA para variacoes, analise e triagem.
- Decisoes criticas seguem humanas.

## Checklist relampago

- IA usada como assistente, nao piloto
- Criterios humanos para decisao final
- Tarefas repetitivas automatizadas
- Revisao de consistencia e qualidade
- Metricas claras para avaliar ganhos

![Tecnologia e dados aplicados ao marketing](/blog/ia-01.jpg)

---

## IA como Assistente, nao como Piloto

IA e excelente para rascunhos, variacoes e analise rapida. A estrategia continua sendo humana.

![Time discutindo estrategia com apoio de tecnologia](/blog/ia-02.jpg)

---

## Onde a IA ajuda mais

- Variacoes de criativos
- Resumos de insights
- Classificacao de leads
- Revisao de consistencia de copy

![Colaboracao e revisao de conteudo com IA](/blog/ia-03.jpg)

---

## Onde a IA ainda erra

Em decisoes que precisam de contexto de negocio e timing de mercado.

---

## Insight rapido

IA e poderosa para volume. Estrategia continua sendo humana, porque contexto nao e dado.

---

## Exemplo real

Ao usar IA para 20 variacoes de anuncio e validar manualmente, o CTR subiu sem perder coerencia de marca.

---

## FAQ

- **IA substitui o time de marketing?** Nao. Ela acelera execucao.
- **Onde IA gera mais impacto?** Variacoes, triagem e sumarizacao.
- **IA pode errar feio?** Sim, principalmente em decisoes estrategicas.

---

## Resumo final

- IA acelera execucao, nao substitui estrategia.
- Use IA onde ela reduz tempo e custo.
- Decisoes criticas continuam humanas.

---

## Proximos passos

Se quiser, podemos revisar seu cenario e sugerir proximos passos de execucao.
`,
  },
  {
    slug: "meta-ads-segmentacao",
    title: "Segmentacao de Publico em Meta Ads: Guia Pratico",
    excerpt: "Fundamentos de segmentacao com foco em clareza e testes.",
    coverImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=675&fit=crop&q=80",
    author: "Davi Luiz",
    publishedAt: "2025-02-05",
    readTime: 13,
    category: "Meta Ads",
    tags: ["Meta Ads", "Facebook Ads", "Publico", "Segmentacao"],
    tableOfContents: [
      "Resumo rapido",
      "Checklist relampago",
      "Comece pelo Basico",
      "Estrutura de Testes",
      "Sinais de Escala",
      "Insight rapido",
      "Exemplo real",
      "FAQ",
      "Resumo final",
      "Proximos passos",
    ],
    content: `
## Resumo rapido

- Hipersegmentacao nem sempre melhora CPA.
- Teste poucas variaveis por vez.
- Escale o que ja esta validado.

## Checklist relampago

- Publico amplo com criativo forte
- Hipoteses separadas por conjunto
- Testes com poucas variaveis
- Acompanhamento por CPA/qualidade
- Escala so apos validacao

![Painel de segmentacao e performance](/blog/meta-01.jpg)

---

## Comece pelo Basico

Segmentos amplos com bons criativos podem performar melhor do que hipersegmentacoes.

![Analise de publicos e resultados em equipe](/blog/meta-02.jpg)

---

## Estrutura de Testes

Teste 2 a 3 publicos por vez. Avalie CTR, CPA e qualidade do lead antes de alterar a segmentacao.

---

## Sinais de Escala

Escalar e repetir o que ja esta validado. Nao misture hipoteses diferentes no mesmo conjunto.

![Planejamento de escala e otimizacao de anuncios](/blog/meta-03.jpg)

---

## Insight rapido

Escala nao e "colocar mais dinheiro". Escala e repetir o que ja foi validado, sem misturar hipoteses.

---

## Exemplo real

Ao pausar conjuntos fracos e duplicar o melhor, o CPA caiu 17% em 14 dias.

---

## FAQ

- **Quando escalar?** Quando CPA esta estavel por 7-10 dias.
- **Escalo tudo?** Nao. Escale apenas o que ja provou performance.
- **Quanto aumentar?** Em blocos de 15-30%, sem picos.

---

## Resumo final

- Menos variaveis, mais controle.
- Escale o que ja provou resultado.
- Segmentacao simples ganha de hipersegmentacao.

---

## Proximos passos

Se quiser, podemos revisar seu cenario e sugerir proximos passos de execucao.
`,
  },
  {
    slug: "funil-vendas-seo",
    title: "Funil de Vendas com SEO: Estrutura em 3 Etapas",
    excerpt: "Como alinhar conteudo e intencao de busca ao longo da jornada.",
    coverImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=675&fit=crop&q=80",
    author: "Davi Luiz",
    publishedAt: "2025-02-01",
    readTime: 14,
    category: "SEO",
    tags: ["SEO", "Funil", "Conteudo", "Estrategia"],
    tableOfContents: [
      "Resumo rapido",
      "Checklist relampago",
      "Topo do Funil",
      "Meio do Funil",
      "Fundo do Funil",
      "Insight rapido",
      "Exemplo real",
      "FAQ",
      "Resumo final",
      "Proximos passos",
    ],
    content: `
## Resumo rapido

- Cada etapa do funil tem uma intencao diferente.
- Conteudo certo no momento certo gera conversao.
- SEO precisa de consistencia e prova social.

## Checklist relampago

- Intencao mapeada por etapa
- Conteudo alinhado ao funil
- Paginas de conversao claras
- Provas sociais visiveis
- Rotina de publicacao continua

![Planejamento de conteudo e funil](/blog/funil-01.jpg)

---

## Topo do Funil

Conteudos educativos para capturar duvidas iniciais e gerar consciencia.

![Pesquisa e organizacao de temas para SEO](/blog/funil-02.jpg)

---

## Meio do Funil

Guias e comparativos que ajudam a escolher caminho e metodo.

---

## Fundo do Funil

Paginas com prova social, casos e CTA claro para conversao.

![Resultados e conversao com foco em performance](/blog/funil-03.jpg)

---

## Insight rapido

SEO sem conversao vira trafego vazio. O fundo do funil e onde o dinheiro aparece.

---

## Exemplo real

Ao adicionar prova social e CTA claro, a taxa de conversao subiu 1,9x em 30 dias.

---

## FAQ

- **SEO precisa de quanto tempo?** 3 a 6 meses para maturar.
- **Conteudo sem CTA funciona?** Para topo de funil, sim. Para venda, nao.
- **Qual a metrica principal?** Conversao por etapa do funil.

---

## Resumo final

- Cada etapa tem intencao diferente.
- Conteudo certo na hora certa converte.
- Consistencia vence o volume.

---

## Proximos passos

Se quiser, podemos revisar seu cenario e sugerir proximos passos de execucao.
`,
  },

  // ─── AUTOMAÇÃO / IA (5 posts) ────────────────────────────────────────────────

  {
    slug: "o-que-e-n8n-e-por-que-agencias-usam",
    title: "O que é n8n e por que agências de marketing estão usando",
    excerpt: "n8n é uma plataforma de automação open-source que conecta ferramentas sem precisar programar. Entenda por que virou a escolha principal de agências que querem escalar sem contratar.",
    coverImage: "",
    coverGradient: "from-violet-950 via-violet-900 to-violet-800",
    author: "Davi Honorato",
    publishedAt: "2026-01-10",
    category: "Automacao",
    tags: ["n8n", "automação", "agências", "ferramentas"],
    readTime: 5,
    keywords: ["o que é n8n", "n8n automação", "n8n agências marketing"],
    content: `
## O que é o n8n

n8n (pronuncia-se "n-eight-n") é uma plataforma de automação de fluxos de trabalho open-source. Ela funciona como um Zapier ou Make, mas com uma diferença importante: você pode hospedar no seu próprio servidor e não paga por execução de tarefas.

A interface é visual, baseada em blocos conectados. Você arrasta, conecta e configura sem escrever código. Cada bloco representa uma ação: receber um formulário, enviar mensagem no WhatsApp, salvar no Google Sheets, atualizar um CRM.

---

## Por que agências escolhem o n8n

**1. Custo previsível.** Na versão self-hosted, o custo é fixo (servidor), independente do volume de automações. Agências que processam milhares de leads por mês pagam o mesmo que quem processa cem.

**2. Flexibilidade real.** O n8n tem mais de 400 integrações nativas. Mas o diferencial é o bloco de código personalizado: quando uma integração não existe, você cria com JavaScript simples.

**3. Dados ficam no seu controle.** Para agências que lidam com dados de clientes, hospedar localmente resolve questões de privacidade e conformidade.

**4. Comunidade ativa.** Templates prontos para centenas de casos de uso: onboarding, follow-up, notificações, relatórios automáticos.

---

## Como funciona na prática

Um fluxo básico de follow-up de leads funciona assim no n8n:

1. **Gatilho:** formulário preenchido no site
2. **Ação 1:** salva o lead no CRM (HubSpot, RD Station, Notion)
3. **Ação 2:** envia mensagem de boas-vindas no WhatsApp
4. **Ação 3:** agenda e-mail de follow-up para 24h depois
5. **Ação 4:** notifica o vendedor no Slack

Tudo isso configurado em menos de uma hora, sem programar.

---

## Quando faz sentido usar o n8n

- Você tem processos repetitivos que consomem tempo do time
- Usa mais de 3 ferramentas diferentes que não conversam entre si
- Quer reduzir erros humanos em tarefas de entrada de dados
- Precisa de automações mais complexas do que o Zapier permite

---

## Quando não faz sentido

- Se você tem apenas um processo simples e o Zapier gratuito já resolve
- Se não há ninguém na equipe com disposição para aprender a plataforma

---

## Conclusão

O n8n não é para todos, mas para agências que operam com volume e precisam de controle, é uma das ferramentas com melhor custo-benefício disponíveis hoje. A curva de aprendizado é de dias, não semanas.
`,
  },

  {
    slug: "como-automatizar-follow-up-leads-whatsapp",
    title: "Como automatizar o follow-up de leads no WhatsApp",
    excerpt: "A maioria dos negócios perde vendas por demora na resposta. Veja como montar um fluxo automático de follow-up no WhatsApp sem precisar de desenvolvedor.",
    coverImage: "",
    coverGradient: "from-violet-950 via-purple-900 to-violet-800",
    author: "Davi Honorato",
    publishedAt: "2026-01-18",
    category: "Automacao",
    tags: ["WhatsApp", "follow-up", "automação", "leads", "n8n"],
    readTime: 6,
    keywords: ["follow-up whatsapp automático", "automação leads whatsapp", "n8n whatsapp"],
    content: `
## O problema que custa caro

Estudos de comportamento de consumidor mostram que leads respondidos em menos de 5 minutos têm probabilidade de conversão muito maior do que os respondidos após 30 minutos. Na prática, a maioria das PMEs responde leads horas depois — quando o potencial cliente já foi falar com o concorrente.

A automação de follow-up resolve isso sem depender de plantão humano.

---

## O que é um fluxo de follow-up automatizado

É uma sequência de mensagens programadas que dispara automaticamente quando um lead entra em contato ou preenche um formulário. O objetivo não é substituir o vendedor, mas garantir que nenhum lead fique sem resposta.

---

## Como montar o fluxo (passo a passo)

**Passo 1 — Defina o gatilho**

O fluxo começa quando algo acontece: formulário preenchido, mensagem recebida no WhatsApp, lead adicionado no CRM. Escolha o evento que faz mais sentido para o seu processo.

**Passo 2 — Mensagem imediata (0-2 min)**

Assim que o lead entra, ele recebe uma mensagem automática confirmando que a solicitação foi recebida e informando quando será atendido. Exemplo: *"Olá, [nome]! Recebi sua mensagem. Nossa equipe vai entrar em contato em até 2 horas."*

**Passo 3 — Follow-up em 24h (se não respondeu)**

Se o lead não recebeu atendimento ou não respondeu, o sistema dispara uma segunda mensagem no dia seguinte com mais contexto ou uma pergunta que facilite a conversa.

**Passo 4 — Follow-up em 72h (último contato)**

Uma mensagem final com um CTA claro. Depois disso, o lead é marcado como frio no CRM.

**Passo 5 — Alerta para o vendedor**

Em paralelo, o sistema notifica o vendedor no Slack ou por e-mail sobre cada lead novo e seu estágio.

---

## Ferramentas necessárias

- **n8n** (orquestração do fluxo)
- **Evolution API ou Z-API** (integração WhatsApp)
- **CRM de sua escolha** (HubSpot, RD Station, Notion, Google Sheets)

---

## Erros comuns a evitar

- Mensagens muito longas na primeira interação
- Não personalizar com o nome do lead
- Enviar follow-up em horários inadequados (use janelas entre 9h-18h)
- Não ter transbordo humano configurado

---

## Resultado esperado

Com um fluxo bem configurado, o tempo de primeira resposta cai de horas para minutos, e nenhum lead fica sem contato. O vendedor só entra quando o lead está mais qualificado.
`,
  },

  {
    slug: "ia-qualificacao-de-leads-o-que-funciona",
    title: "IA aplicada à qualificação de leads: o que funciona hoje",
    excerpt: "Usar IA para qualificar leads é possível e já está ao alcance de PMEs. Veja quais abordagens realmente funcionam e o que ainda é promessa de vendedor.",
    coverImage: "",
    coverGradient: "from-violet-950 via-indigo-900 to-violet-900",
    author: "Davi Honorato",
    publishedAt: "2026-01-25",
    category: "Automacao",
    tags: ["IA", "qualificação de leads", "automação", "chatbot"],
    readTime: 7,
    keywords: ["ia qualificação leads", "automação qualificação leads", "chatbot qualificação"],
    content: `
## O que significa qualificar leads com IA

Qualificação de leads é o processo de identificar quais contatos têm real potencial de compra. Tradicionalmente isso é feito por um SDR (Sales Development Representative) que faz perguntas, analisa respostas e decide se o lead avança no funil.

A IA entra nesse processo para automatizar a triagem inicial, respondendo perguntas, coletando dados e classificando o lead antes do contato humano.

---

## O que funciona de verdade hoje

**1. Chatbots com perguntas estruturadas**

Um chatbot que faz de 3 a 5 perguntas chave consegue coletar informações suficientes para classificar o lead: qual é o problema, qual é o orçamento disponível, qual é o prazo, e qual é o cargo do contato.

Isso não exige IA sofisticada — pode ser feito com fluxos condicionais simples no n8n + WhatsApp.

**2. Análise de comportamento no site**

Ferramentas como HubSpot e RD Station já analisam quais páginas o lead visitou, por quanto tempo, e quantas vezes retornou. Combinados com um score automático, isso permite priorizar quem já demonstrou interesse.

**3. Classificação automática por resposta**

Com LLMs (modelos de linguagem como o GPT-4 ou Claude), é possível analisar a mensagem que o lead enviou e classificá-la automaticamente: é um lead quente, morno ou frio? Isso pode ser integrado ao CRM via API.

---

## O que ainda não funciona bem

- Qualificação complexa que depende de contexto de mercado muito específico
- Leitura de tom e urgência em mensagens curtas e ambíguas
- Situações onde o lead não dá informação suficiente para classificação

---

## Como começar sem complicar

1. Defina 3 a 5 perguntas que separam leads qualificados dos não qualificados no seu negócio
2. Monte um chatbot simples que faz essas perguntas automaticamente
3. Com as respostas, crie um score simples (1 a 3) que determina a prioridade do lead
4. Integre esse score ao seu CRM

---

## Conclusão

IA para qualificação de leads não precisa ser complexa para funcionar. O mais importante é ter um processo claro antes de automatizar. Tecnologia sobre processo ruim só acelera o problema.
`,
  },

  {
    slug: "chatbots-para-clinicas-quando-vale-a-pena",
    title: "Chatbots para clínicas: quando vale a pena implementar",
    excerpt: "Chatbots podem reduzir a carga do atendimento em clínicas, mas só quando bem configurados. Entenda em quais situações vale implementar e o que evitar.",
    coverImage: "",
    coverGradient: "from-violet-950 via-violet-800 to-purple-900",
    author: "Davi Honorato",
    publishedAt: "2026-02-03",
    category: "Automacao",
    tags: ["chatbot", "clínicas", "automação", "WhatsApp", "atendimento"],
    readTime: 6,
    keywords: ["chatbot clínica", "automação atendimento clínica", "whatsapp clínica"],
    content: `
## O contexto das clínicas

Clínicas de saúde têm um desafio específico: volume alto de contatos repetitivos (agendamentos, confirmações, dúvidas sobre convênios) misturado com situações que exigem atenção humana imediata.

O chatbot resolve bem a primeira parte. Para a segunda, precisa de transbordo rápido para humano.

---

## Quando o chatbot faz sentido para clínicas

**Volume de mensagens repetitivas alto.** Se mais de 40% das mensagens que chegam são sobre agendamento, confirmação de consulta, horários ou localização, um chatbot já paga o investimento.

**Atendimento fora do horário comercial.** Clínicas que recebem contatos à noite ou nos fins de semana perdem leads que não esperam o próximo dia útil. Um chatbot mantém o contato ativo e coleta os dados necessários.

**Confirmação e lembrete de consultas.** Automação de confirmações reduz faltas. Um fluxo simples de lembrete 24h antes reduz o índice de no-show de forma consistente.

---

## O que o chatbot não deve fazer em clínicas

- Dar orientações médicas ou interpretar sintomas
- Substituir triagem clínica
- Responder dúvidas sobre medicamentos ou tratamentos
- Continuar o atendimento quando o paciente está em sofrimento evidente

Qualquer uma dessas situações precisa de transbordo imediato para humano.

---

## Estrutura recomendada para clínicas

1. **Boas-vindas** com menu de opções (Agendar / Confirmar consulta / Falar com atendente / Localização e horários)
2. **Fluxo de agendamento**: especialidade → data preferida → coleta de dados → confirmação
3. **Fluxo de confirmação**: envio automático 24h antes com link para confirmar ou reagendar
4. **Gatilho de transbordo**: qualquer mensagem fora do fluxo ou pedido explícito de falar com humano

---

## Ferramentas usadas

- WhatsApp Business API (Evolution API ou Z-API para Brasil)
- n8n para orquestração
- Google Calendar ou sistema de agendamento da clínica para integração

---

## Conclusão

O chatbot em clínica não é sobre substituir a recepcionista. É sobre garantir que nenhum paciente fique sem resposta enquanto a clínica está fechada, e que a equipe não perca tempo com perguntas que podem ser respondidas automaticamente.
`,
  },

  {
    slug: "como-criar-fluxo-de-onboarding-automatico",
    title: "Como criar um fluxo de onboarding automático para novos clientes",
    excerpt: "Os primeiros dias após a compra definem a retenção. Veja como criar um onboarding automático que entrega valor imediato e reduz o churn nos primeiros 30 dias.",
    coverImage: "",
    coverGradient: "from-violet-900 via-violet-800 to-indigo-900",
    author: "Davi Honorato",
    publishedAt: "2026-02-12",
    category: "Automacao",
    tags: ["onboarding", "automação", "retenção", "churn", "n8n"],
    readTime: 7,
    keywords: ["onboarding automático clientes", "automação onboarding", "reduzir churn"],
    content: `
## Por que o onboarding importa tanto

A maioria dos churns (cancelamentos) acontece nos primeiros 30 dias. O cliente comprou, mas não entendeu como usar o produto ou serviço, não viu valor rápido, ou simplesmente se sentiu abandonado após a venda.

Um onboarding automático bem estruturado resolve isso sem depender de atenção manual constante.

---

## O que é um fluxo de onboarding automático

É uma sequência de comunicações e ações programadas que acontecem após a conversão. O objetivo é guiar o cliente pelos primeiros passos de forma clara, entregando valor rapidamente e reduzindo dúvidas.

---

## Estrutura de um onboarding em 7 dias

**Dia 0 — Boas-vindas imediatas**
Mensagem de boas-vindas com as informações essenciais: acesso, próximos passos, contato do responsável. Simples, direto.

**Dia 1 — Primeira ação guiada**
E-mail ou mensagem com o primeiro passo que o cliente deve completar. Quanto mais específico, melhor. "Faça X para obter Y."

**Dia 3 — Check-in**
Mensagem perguntando se o cliente conseguiu completar o primeiro passo. Isso cria um ciclo de feedback e mostra que a empresa está presente.

**Dia 5 — Conteúdo de aprofundamento**
Material relevante (artigo, vídeo curto, dica) que ajuda o cliente a tirar mais proveito do que comprou.

**Dia 7 — Avaliação da experiência**
Pergunta simples sobre como está sendo a experiência. Isso gera dados e mostra que a opinião importa.

---

## Ferramentas para montar o fluxo

- **n8n** para orquestrar toda a sequência
- **E-mail transacional** (Resend, Mailgun ou SendGrid)
- **WhatsApp** para mensagens mais diretas
- **CRM** para registrar o progresso de cada cliente

---

## Erros comuns no onboarding

- Enviar informação demais nos primeiros dias (sobrecarga)
- Não personalizar com o nome e o produto comprado
- Não ter transbordo humano quando o cliente responde com dúvida
- Fazer onboarding apenas por e-mail quando o cliente prefere WhatsApp

---

## Resultado esperado

Clientes que passam por um onboarding estruturado têm taxa de retenção significativamente maior nos primeiros 90 dias do que clientes sem esse processo. O investimento em montar o fluxo uma vez gera retorno contínuo.
`,
  },

  // ─── TRÁFEGO PAGO (5 posts) ──────────────────────────────────────────────────

  {
    slug: "google-ads-vs-meta-ads-qual-escolher",
    title: "Google Ads vs Meta Ads: qual escolher para o seu negócio",
    excerpt: "A escolha entre Google e Meta depende do seu objetivo, do seu produto e do comportamento do seu cliente. Entenda as diferenças reais antes de investir.",
    coverImage: "",
    coverGradient: "from-cyan-950 via-cyan-900 to-sky-800",
    author: "Davi Honorato",
    publishedAt: "2026-01-08",
    category: "Trafego Pago",
    tags: ["Google Ads", "Meta Ads", "tráfego pago", "comparativo"],
    readTime: 5,
    keywords: ["google ads vs meta ads", "qual plataforma de anúncios usar", "google ou facebook ads"],
    content: `
## A pergunta mais comum em marketing digital

Toda semana alguém pergunta: "Devo usar Google Ads ou Meta Ads?". A resposta honesta é: depende. Mas existem critérios claros para decidir.

---

## A diferença fundamental

**Google Ads captura demanda existente.** Quando alguém pesquisa "dentista em BH" ou "conserto de ar condicionado urgente", ela já quer o serviço. O Google coloca seu anúncio no caminho dessa intenção.

**Meta Ads gera demanda.** No Facebook e Instagram, as pessoas não estão procurando nada — estão navegando. Você interrompe esse fluxo com um anúncio e precisa criar o interesse do zero.

---

## Quando o Google Ads faz mais sentido

- Produto ou serviço que as pessoas já buscam ativamente
- Necessidade urgente (serviços emergenciais, saúde, jurídico)
- Ciclo de venda curto
- Você precisa de resultado rápido com orçamento limitado

Exemplos: clínicas, advogados, serviços domésticos, e-commerce com produtos conhecidos.

---

## Quando o Meta Ads faz mais sentido

- Produto novo que as pessoas não buscam ainda
- Necessidade de construir marca e reconhecimento
- Produto visual (moda, gastronomia, decoração)
- Você quer escalar com audiências amplas e retargeting

Exemplos: lançamentos, infoprodutos, produtos de lifestyle, marcas em fase de crescimento.

---

## E se eu precisar dos dois?

Na maioria dos negócios maduros, as duas plataformas se complementam. O Google captura quem está pronto para comprar; o Meta reconstrói a marca para quem ainda não está.

A regra prática: comece pelo Google se a demanda já existe. Adicione Meta quando quiser ampliar o volume.

---

## Conclusão

A escolha certa não é sobre qual plataforma é melhor. É sobre qual plataforma alcança seu cliente no momento certo da jornada de compra.
`,
  },

  {
    slug: "como-estruturar-campanha-google-ads-do-zero",
    title: "Como estruturar uma campanha de Google Ads do zero",
    excerpt: "Criar uma campanha no Google sem estrutura é jogar dinheiro fora. Veja o passo a passo para montar campanhas que convertem desde a primeira semana.",
    coverImage: "",
    coverGradient: "from-cyan-950 via-sky-900 to-cyan-800",
    author: "Davi Honorato",
    publishedAt: "2026-01-20",
    category: "Trafego Pago",
    tags: ["Google Ads", "campanhas", "estrutura", "tráfego pago"],
    readTime: 8,
    keywords: ["como criar campanha google ads", "google ads do zero", "estrutura google ads"],
    content: `
## Por que estrutura importa

Uma conta de Google Ads mal estruturada gasta mais, aprende mais devagar e entrega relatórios confusos. Estrutura certa significa saber exatamente qual anúncio, qual palavra-chave e qual página de destino gerou cada resultado.

---

## Os três níveis de uma conta Google Ads

**Campanha:** define o objetivo, o orçamento diário e a rede (pesquisa, display, shopping). Uma campanha tem um foco: gerar ligações, gerar formulários, gerar visitas à loja.

**Grupo de anúncios:** agrupa palavras-chave relacionadas ao mesmo tema. Cada grupo tem seus próprios anúncios.

**Anúncios:** o texto que aparece para o usuário. Cada grupo deve ter pelo menos 3 variações para teste.

---

## Passo a passo para a primeira campanha

**1. Defina o objetivo único**
O que você quer que o usuário faça ao clicar? Preencher formulário, ligar, enviar mensagem no WhatsApp. Um objetivo por campanha.

**2. Pesquise as palavras-chave certas**
Use o Planejador de Palavras-chave do Google. Priorize termos com intenção local e intenção de compra. Evite termos genéricos demais.

**3. Configure as correspondências**
Use Correspondência de Frase (aspas) para equilibrar volume e relevância. Evite Correspondência Ampla no início — gasta demais sem controle.

**4. Crie os anúncios**
Cada anúncio deve ter: título com a palavra-chave principal, proposta de valor clara, CTA direto. Teste pelo menos 2 variações por grupo.

**5. Configure a página de destino**
A página para onde o clique vai deve repetir a promessa do anúncio e ter um formulário ou botão de WhatsApp visível sem rolar a página.

**6. Configure as conversões**
Antes de rodar, configure o acompanhamento de conversões no Google Ads. Sem isso, você não sabe o que está funcionando.

**7. Defina o orçamento e a estratégia de lance**
Para o início, use Maximizar Cliques com limite de CPC. Depois de 30 conversões, migre para Maximizar Conversões.

---

## O que monitorar na primeira semana

- Taxa de cliques (CTR): abaixo de 3% pode indicar anúncios pouco relevantes
- Custo por clique (CPC): compare com a referência do seu setor
- Termos de pesquisa: veja o que realmente ativou seus anúncios e adicione negativas

---

## Conclusão

Estrutura simples vence estrutura complexa no início. Uma campanha bem configurada e revisada toda semana performa melhor do que dez campanhas abandonadas.
`,
  },

  {
    slug: "erros-comuns-em-anuncios-que-desperdicam-verba",
    title: "Erros comuns em anúncios que desperdiçam verba",
    excerpt: "A maioria do orçamento perdido em tráfego pago vai embora por causa de erros básicos e evitáveis. Veja os mais comuns e como corrigir cada um.",
    coverImage: "",
    coverGradient: "from-cyan-900 via-sky-900 to-blue-900",
    author: "Davi Honorato",
    publishedAt: "2026-02-05",
    category: "Trafego Pago",
    tags: ["Google Ads", "Meta Ads", "erros", "otimização"],
    readTime: 6,
    keywords: ["erros google ads", "desperdício de verba anúncios", "otimização campanhas"],
    content: `
## O dinheiro some, mas onde?

Toda conta de anúncios mal gerenciada tem os mesmos pontos de vazamento. Identificar e corrigir esses pontos é, muitas vezes, mais eficaz do que aumentar o orçamento.

---

## Erro 1: Páginas de destino que não convertem

O clique custa dinheiro. Se a página para onde o usuário vai não é clara, não carrega rápido ou não tem um CTA visível, todo o orçamento foi desperdiçado antes mesmo de o usuário tomar uma decisão.

**Correção:** A página deve ter proposta clara na primeira dobra, formulário ou botão de WhatsApp visível, e carregar em menos de 3 segundos.

---

## Erro 2: Palavras-chave sem intenção de compra

"Marketing digital" é uma busca ampla. "Agência de marketing digital em BH" é uma busca com intenção local. Pagar pelo primeiro e ignorar o segundo é jogar verba fora.

**Correção:** Priorize termos com modificadores de localização, problema específico ou urgência.

---

## Erro 3: Ausência de palavras-chave negativas

Sem negativas, seu anúncio aparece para termos irrelevantes. Uma clínica odontológica rodando sem negativar "gratuito", "concurso" e "emprego" paga por cliques de pessoas que nunca vão se tornar pacientes.

**Correção:** Revise o relatório de termos de pesquisa toda semana e adicione negativas sistematicamente.

---

## Erro 4: Sem acompanhamento de conversões

Sem rastreamento, você não sabe qual anúncio gerou resultado. O Google otimiza no escuro e toma decisões ruins.

**Correção:** Configure conversões antes de gastar qualquer real. Teste se estão registrando corretamente.

---

## Erro 5: Mudar a estratégia de lances antes do tempo

Trocar de estratégia toda semana impede que o algoritmo aprenda. O resultado é uma conta que nunca estabiliza.

**Correção:** Dê pelo menos 2 semanas antes de avaliar uma estratégia de lances. Mudanças frequentes reiniciam o aprendizado.

---

## Erro 6: Não fazer testes de anúncios

Rodar o mesmo anúncio por meses sem testar variações é perder ganhos gratuitos. Um título diferente pode dobrar o CTR.

**Correção:** Sempre tenha pelo menos 2 variações de anúncio rodando. Avalie após 300 impressões e substitua o perdedor.

---

## Conclusão

Corrigir esses erros não exige mais orçamento. Exige atenção, rotina e disposição para revisar o que está rodando.
`,
  },

  {
    slug: "como-calcular-se-investimento-em-trafego-esta-valendo",
    title: "Como calcular se seu investimento em tráfego pago está valendo",
    excerpt: "Muita gente investe em anúncios sem saber se está tendo lucro ou prejuízo. Aprenda as métricas certas para avaliar o retorno do seu tráfego pago.",
    coverImage: "",
    coverGradient: "from-cyan-950 via-teal-900 to-cyan-900",
    author: "Davi Honorato",
    publishedAt: "2026-02-18",
    category: "Trafego Pago",
    tags: ["ROI", "métricas", "tráfego pago", "ROAS", "CPA"],
    readTime: 7,
    keywords: ["calcular ROI tráfego pago", "ROAS google ads", "CPA custo por aquisição"],
    content: `
## A pergunta que todo empresário deveria saber responder

"Estou investindo R$ 3.000 por mês em anúncios. Estou tendo retorno?" Se você não consegue responder isso com dados, há um problema.

---

## As métricas que importam

**CPC (Custo por Clique)**
Quanto você paga por cada pessoa que clica no seu anúncio. Métrica de topo de funil — indica eficiência do anúncio e competitividade do leilão.

**CPL (Custo por Lead)**
Quanto custa gerar um contato (formulário preenchido, mensagem no WhatsApp, ligação). Essa é a métrica que conecta tráfego com resultado comercial.

**CPA (Custo por Aquisição)**
Quanto custa fechar uma venda. É o CPL dividido pela taxa de conversão da equipe de vendas.

**ROAS (Retorno sobre Gasto em Anúncios)**
Para e-commerce: receita gerada dividida pelo gasto em anúncios. Um ROAS de 4 significa que cada R$ 1 investido gerou R$ 4 em receita.

---

## Como calcular na prática

Suponha que você investiu R$ 2.000 em anúncios e gerou 40 leads. Seu CPL é R$ 50.

Desses 40 leads, 8 fecharam negócio. Sua taxa de conversão é de 20%. Seu CPA é R$ 250 (R$ 2.000 ÷ 8).

Se o ticket médio do seu serviço é R$ 800, você investiu R$ 250 para faturar R$ 800. Isso é lucro — contanto que sua margem suporte essa proporção.

---

## Qual é o CPA aceitável para o meu negócio?

Regra geral: o CPA deve ser inferior à margem de contribuição do produto ou serviço. Se sua margem é R$ 400, seu CPA precisa ser menor que R$ 400.

Para serviços com recorrência ou LTV (valor vitalício do cliente) alto, você pode aceitar um CPA maior no primeiro mês porque o cliente vai gerar receita por meses ou anos.

---

## O que fazer quando o número não fecha

1. Verificar se o problema é no custo por lead (anúncio/página de destino)
2. Verificar se o problema é na conversão de lead para cliente (processo de vendas)
3. Verificar se o ticket médio ou a margem estão corretos

Muitas vezes o tráfego está funcionando, mas o processo de vendas desperdiça os leads gerados.

---

## Conclusão

Tráfego pago sem mensuração é aposta, não estratégia. Configure o acompanhamento antes de rodar, revise os números toda semana e tome decisões com dados.
`,
  },

  {
    slug: "remarketing-por-que-concorrentes-estao-na-frente",
    title: "Remarketing: por que seus concorrentes aparecem em todo lugar",
    excerpt: "Já reparou que depois de acessar um site você passa a ver anúncios dele em todo lugar? Isso é remarketing, e seus concorrentes provavelmente já estão usando.",
    coverImage: "",
    coverGradient: "from-sky-950 via-cyan-900 to-sky-800",
    author: "Davi Honorato",
    publishedAt: "2026-03-02",
    category: "Trafego Pago",
    tags: ["remarketing", "retargeting", "Google Ads", "Meta Ads"],
    readTime: 5,
    keywords: ["o que é remarketing", "remarketing google ads", "retargeting como funciona"],
    content: `
## O que é remarketing

Remarketing (ou retargeting) é a estratégia de exibir anúncios para pessoas que já visitaram seu site, interagiram com seu perfil nas redes sociais ou demonstraram interesse no seu produto.

A lógica é simples: quem já conhece você tem muito mais chance de converter do que quem está vendo seu anúncio pela primeira vez.

---

## Por que funciona

A maioria das pessoas não compra na primeira visita. Dependendo do setor, a taxa de conversão na primeira visita fica entre 1% e 3%. Isso significa que 97% das pessoas que chegaram ao seu site foram embora sem comprar.

O remarketing vai atrás dessas pessoas com uma segunda (ou terceira) abordagem — quando elas já têm algum contexto sobre o que você oferece.

---

## Tipos de remarketing

**Remarketing de site:** exibe anúncios para quem visitou seu site no Google Display, YouTube ou Meta.

**Remarketing de vídeo:** alcança quem assistiu a seus vídeos no YouTube.

**Remarketing de lista de clientes:** você faz upload de uma lista de e-mails ou telefones e o Google/Meta encontra essas pessoas nas plataformas.

**Remarketing dinâmico (e-commerce):** exibe exatamente o produto que o usuário viu — com foto e preço.

---

## Como configurar o básico

1. Instale o pixel do Meta e a tag do Google no seu site (via GTM)
2. Crie audiências de remarketing: todos os visitantes, visitantes de página específica, quem não converteu
3. Configure campanhas separadas para remarketing com lances e criativos específicos

---

## O que falar no anúncio de remarketing

Não repita o mesmo anúncio que o usuário já viu. Use uma abordagem diferente:
- Depoimento de cliente
- Garantia ou diferencial que não foi destacado antes
- Oferta com prazo limitado
- Pergunta direta sobre o problema que você resolve

---

## Conclusão

Remarketing não é perseguição — é presença estratégica. Marcas que aparecem com consistência para quem já demonstrou interesse convertem mais, a um custo por aquisição menor do que campanhas de prospecção pura.
`,
  },

  // ─── SEO LOCAL / GMB (5 posts) ───────────────────────────────────────────────

  {
    slug: "por-que-gmb-precisa-de-postagens-semanais",
    title: "Por que seu Google Meu Negócio precisa de postagens semanais",
    excerpt: "Perfil no GMB sem postagens é perfil parado. O Google valoriza atividade constante. Veja como postagens semanais impactam seu posicionamento local.",
    coverImage: "",
    coverGradient: "from-emerald-950 via-emerald-900 to-teal-800",
    author: "Davi Honorato",
    publishedAt: "2026-01-12",
    category: "SEO Local",
    tags: ["GMB", "Google Meu Negócio", "postagens", "SEO local"],
    readTime: 4,
    keywords: ["postagens google meu negócio", "GMB postagens semanais", "SEO local postagens"],
    content: `
## O perfil parado não ranqueia bem

O Google Business Profile (antigo Google Meu Negócio) não é só uma ficha cadastral. É um canal de comunicação ativo. E o algoritmo do Google prioriza negócios que demonstram atividade regular.

Perfis que postam com frequência têm mais engajamento (visualizações, cliques, rotas) do que perfis parados — e engajamento é um dos sinais que o Google usa para definir quem aparece no pacote local do Maps.

---

## O que conta como postagem no GMB

O Google Business Profile tem quatro tipos de postagem:

**Novidades:** conteúdo geral sobre o negócio, novidades, dicas. É o tipo mais flexível e o recomendado para uso semanal.

**Eventos:** divulgação de eventos com data de início e fim.

**Ofertas:** promoções com período definido, código de desconto opcional.

**Produtos:** catálogo de produtos com foto, descrição e preço.

Para a maioria dos negócios, Novidades é o tipo mais prático para manutenção semanal.

---

## O que postar

- Dicas relacionadas ao seu serviço
- Novidades do negócio (novo serviço, nova equipe, reforma)
- Respostas a dúvidas frequentes dos clientes
- Fotos dos bastidores do dia a dia
- Depoimentos de clientes (com autorização)

Não precisa ser sofisticado. Uma foto com 3 linhas de texto já conta como postagem.

---

## Com que frequência

Uma postagem por semana é suficiente para manter o sinal de atividade. Duas por semana é ideal. Mais do que isso raramente traz benefício incremental proporcional ao esforço.

---

## Como montar uma rotina sustentável

1. Reserve 30 minutos toda segunda-feira para criar a postagem da semana
2. Tire fotos regularmente durante o dia a dia (produto, equipe, espaço)
3. Tenha um banco de temas: perguntas frequentes de clientes viram posts
4. Se tiver equipe, delegue com um checklist simples

---

## Conclusão

Postagem semanal no GMB não é trabalho complexo. É consistência. E no SEO local, consistência vence esforço pontual.
`,
  },

  {
    slug: "como-responder-avaliacoes-negativas-google",
    title: "Como responder avaliações negativas no Google sem prejudicar sua marca",
    excerpt: "Uma avaliação negativa respondida corretamente pode virar prova de profissionalismo. Veja o método certo para responder críticas no Google sem piorar a situação.",
    coverImage: "",
    coverGradient: "from-emerald-950 via-teal-900 to-emerald-800",
    author: "Davi Honorato",
    publishedAt: "2026-01-28",
    category: "SEO Local",
    tags: ["Google", "avaliações", "reputação", "GMB", "SEO local"],
    readTime: 5,
    keywords: ["como responder avaliação negativa google", "avaliação negativa google", "reputação online"],
    content: `
## Por que a resposta importa mais do que a nota

Uma avaliação de 1 estrela sem resposta diz ao cliente em potencial: "essa empresa não se importa". Uma avaliação de 1 estrela com uma resposta profissional e empática diz: "essa empresa resolve problemas".

Pesquisas de comportamento do consumidor mostram que potenciais clientes leem as respostas às avaliações negativas antes de tomar decisão — às vezes mais do que as avaliações positivas.

---

## O que nunca fazer em uma resposta

- Discutir publicamente com o cliente
- Questionar a veracidade da avaliação no texto da resposta
- Copiar e colar respostas genéricas sem personalização
- Ignorar a crítica e falar sobre aspectos não relacionados
- Revelar dados pessoais do cliente

---

## O método em 4 passos

**Passo 1 — Agradeça pela avaliação, sem ironias**
Comece reconhecendo que o cliente tomou o tempo para dar um feedback. Mesmo que seja negativo.

**Passo 2 — Reconheça o problema sem justificar demais**
Não culpe terceiros. Não liste todas as dificuldades internas. Simplesmente reconheça que a experiência não foi a esperada.

**Passo 3 — Ofereça um caminho para resolver**
Convide o cliente a entrar em contato direto: e-mail, telefone ou WhatsApp. Isso tira a discussão do ambiente público e mostra disposição para resolver.

**Passo 4 — Encerre de forma positiva e breve**
Sem exageros. Uma frase final sinalizando comprometimento com a qualidade.

---

## Exemplo de estrutura

"Olá, [nome]. Obrigado por compartilhar sua experiência. Lamentamos que a visita não tenha atendido suas expectativas. Gostaríamos de entender melhor o que aconteceu — pode entrar em contato conosco pelo [telefone/e-mail]? Estamos à disposição para resolver."

---

## Quando a avaliação é falsa ou abusiva

Se a avaliação contém palavrões, informações falsas verificáveis ou não foi feita por um cliente real, você pode solicitar a remoção pelo próprio Google Business Profile. Enquanto isso, responda profissionalmente — outros leitores estão observando.

---

## Conclusão

Nenhum negócio tem apenas avaliações 5 estrelas. O que diferencia marcas fortes é a forma como respondem às críticas. Resposta rápida, empática e com solução transforma um problema público em prova de qualidade.
`,
  },

  {
    slug: "seo-local-para-clinicas-guia-pratico",
    title: "SEO local para clínicas: o guia prático",
    excerpt: "Clínicas que aparecem no topo do Google Maps recebem mais ligações e agendamentos do que as que dependem só de indicação. Veja como otimizar seu SEO local passo a passo.",
    coverImage: "",
    coverGradient: "from-emerald-950 via-emerald-800 to-teal-900",
    author: "Davi Honorato",
    publishedAt: "2026-02-10",
    category: "SEO Local",
    tags: ["SEO local", "clínicas", "Google Maps", "GMB"],
    readTime: 8,
    keywords: ["SEO local clínicas", "como aparecer google maps clínica", "SEO clínica médica"],
    content: `
## Por que SEO local é diferente para clínicas

Clínicas têm um público geograficamente limitado. Ninguém vai de Contagem para uma clínica no centro de BH por causa de um bom site — a menos que o serviço seja muito especializado. O SEO local foca exatamente nesse raio de ação: aparecer para quem está perto e está buscando o que você oferece.

---

## Os três pilares do SEO local para clínicas

**1. Google Business Profile (GMB)**

O perfil no GMB é o ativo mais importante para SEO local. Para clínicas, os pontos críticos são:

- Categoria correta e específica (ex: "Clínica Odontológica" em vez de só "Saúde")
- Descrição com especialidades e bairro/cidade
- Horários de funcionamento atualizados (incluindo feriados)
- Fotos da fachada, recepção e equipe — ajudam na confiança do paciente
- Serviços listados com descrição
- Postagens semanais sobre especialidades ou dicas de saúde

**2. Avaliações e reputação**

Volume e frequência de avaliações impactam diretamente o ranqueamento local. Para clínicas:

- Peça avaliação no momento certo: após uma consulta positiva, via WhatsApp
- Responda 100% das avaliações — positivas e negativas
- Nunca compre avaliações falsas: o Google detecta e penaliza

**3. Consistência de dados (NAP)**

NAP: Nome, Endereço, Telefone. Esses dados precisam ser idênticos em todas as plataformas: site, GMB, Facebook, Instagram, WhatsApp Business, Doctoralia, Boa Consulta, etc.

Inconsistências confundem o Google e prejudicam o ranqueamento.

---

## SEO no site da clínica

- Página específica para cada especialidade (ex: /ortodontia, /clareamento, /implante)
- Cada página com o nome da cidade e bairro no título e no conteúdo
- Schema markup de HealthcareOrganization (dado estruturado que ajuda o Google entender o contexto)
- Velocidade de carregamento abaixo de 3 segundos

---

## Como monitorar os resultados

Use o Google Business Profile Insights para ver:
- Quantas buscas encontraram seu perfil
- Quantas pessoas pediram rota ou clicaram para ligar
- Quais termos de busca trouxeram visualizações

Esses dados orientam o que otimizar nos meses seguintes.

---

## Conclusão

SEO local para clínicas é uma maratona, não uma sprint. Os resultados aparecem entre 60 e 90 dias de trabalho consistente. Mas uma vez que a clínica aparece no topo do Maps, o fluxo de pacientes orgânicos é constante — sem pagar por cada clique.
`,
  },

  {
    slug: "como-aparecer-no-pacote-local-google-maps",
    title: "Como aparecer no Pacote Local do Google Maps (os 3 primeiros resultados)",
    excerpt: "O Pacote Local são os 3 resultados que aparecem no Google com mapa. Estar neles é o equivalente digital de ter a loja mais movimentada da rua.",
    coverImage: "",
    coverGradient: "from-teal-950 via-emerald-900 to-teal-800",
    author: "Davi Honorato",
    publishedAt: "2026-02-22",
    category: "SEO Local",
    tags: ["Pacote Local", "Google Maps", "SEO local", "GMB"],
    readTime: 6,
    keywords: ["pacote local google", "aparecer google maps primeiros resultados", "3 pack google"],
    content: `
## O que é o Pacote Local

Quando você pesquisa "pizzaria perto de mim" ou "dentista em BH" no Google, o resultado mostra um mapa com 3 negócios em destaque. Esse bloco é chamado de Pacote Local (ou Local Pack / 3-Pack).

Aparecer nele significa ser visto antes de qualquer resultado orgânico. Para negócios locais, é o equivalente a ter a vitrine na esquina mais movimentada da cidade.

---

## Como o Google decide quem aparece

O algoritmo usa três fatores principais:

**Relevância:** o quanto o perfil do negócio corresponde à busca. Um perfil com categoria correta, descrição relevante e serviços listados tem vantagem.

**Distância:** o quão perto o negócio está do usuário (ou da localização que ele pesquisou). Não é o único fator — relevância e proeminência podem compensar distância.

**Proeminência:** o quão reconhecido o negócio é. Avaliações, volume de citações na web, e qualidade do site são sinais de proeminência.

---

## O que fazer para entrar no Pacote Local

**1. Otimize seu perfil no Google Business Profile ao máximo**
Preencha todos os campos disponíveis: categoria, atributos, descrição, serviços, fotos, horários. Perfis incompletos perdem para os completos.

**2. Construa avaliações consistentemente**
Volume e frequência importam. Um perfil com 50 avaliações novas nos últimos 6 meses performa melhor do que um com 200 avaliações antigas.

**3. Mantenha NAP consistente em toda a web**
Nome, endereço e telefone idênticos em GMB, site, redes sociais e diretórios (TripAdvisor, Yelp, Doctoralia, etc.).

**4. Construa citações locais**
Citações são menções do seu negócio em outros sites. Cadastre-se em diretórios relevantes para o seu setor com as informações corretas.

**5. Tenha um site otimizado para SEO local**
O site precisa ter a cidade e bairro no título, H1 e conteúdo principal. Velocidade e mobile são obrigatórios.

---

## Quanto tempo leva

Com otimizações consistentes, a maioria dos negócios em mercados não saturados vê resultados em 60 a 90 dias. Em mercados muito competitivos (ex: advocacia ou odontologia em capitais), pode levar de 3 a 6 meses.

---

## Conclusão

Entrar no Pacote Local não é questão de sorte — é resultado de otimização sistemática. Os negócios que aparecem lá consistentemente são os que trabalham o GMB com frequência e têm reputação sólida.
`,
  },

  {
    slug: "diferenca-seo-organico-e-seo-local",
    title: "Diferença entre SEO orgânico e SEO local: qual focar primeiro",
    excerpt: "SEO orgânico e SEO local são estratégias diferentes com objetivos diferentes. Entender a distinção é o primeiro passo para não desperdiçar esforço.",
    coverImage: "",
    coverGradient: "from-emerald-900 via-teal-900 to-green-900",
    author: "Davi Honorato",
    publishedAt: "2026-03-08",
    category: "SEO Local",
    tags: ["SEO orgânico", "SEO local", "diferença", "Google"],
    readTime: 5,
    keywords: ["diferença seo orgânico local", "seo local vs seo orgânico", "qual seo focar"],
    content: `
## Dois tipos de SEO, dois objetivos diferentes

Quando alguém diz "quero aparecer no Google", pode estar falando de duas coisas bem diferentes: aparecer nos resultados orgânicos (links azuis) ou aparecer no Pacote Local (mapa com 3 negócios).

Entender a diferença define onde você vai investir tempo e recursos.

---

## SEO Orgânico

SEO orgânico é a estratégia de aparecer nos resultados de busca não pagos do Google para palavras-chave informacionais ou transacionais amplas.

**Exemplos de resultados orgânicos:**
- "Como cuidar dos dentes depois dos 40"
- "Melhor sistema de automação para pequenas empresas"
- "O que é tráfego pago"

Aqui você compete com sites de todo o Brasil (e às vezes do mundo inteiro). O conteúdo é o principal ativo: artigos, guias, comparativos.

**O que precisa:** blog com conteúdo consistente, links de outros sites apontando para o seu, site tecnicamente otimizado.

**Prazo para resultados:** 3 a 12 meses.

---

## SEO Local

SEO local é a estratégia de aparecer quando alguém busca um serviço com contexto geográfico — perto de mim, em uma cidade específica, em um bairro.

**Exemplos de resultados locais:**
- "Dentista perto de mim"
- "Restaurante italiano Savassi BH"
- "Clínica veterinária Contagem"

Aqui você compete com negócios do mesmo mercado geográfico. O Google Business Profile é o ativo central, complementado pelo site e pela reputação online.

**O que precisa:** GMB otimizado, avaliações frequentes, NAP consistente, citações locais.

**Prazo para resultados:** 60 a 120 dias.

---

## Qual focar primeiro

Para negócios locais (clínicas, restaurantes, serviços, lojas físicas): **comece pelo SEO Local**. O retorno é mais rápido e mais diretamente ligado ao faturamento.

Para empresas que vendem para todo o Brasil ou produzem conteúdo educacional: **invista no SEO orgânico** como canal de longo prazo.

A maioria dos negócios locais precisa dos dois — mas a ordem importa.

---

## Conclusão

SEO local e orgânico não se opõem: se complementam. Mas para uma PME local com orçamento e tempo limitados, o SEO local entrega resultados mais rápidos e mais relevantes para o negócio.
`,
  },

  // ─── ESTRATÉGIA (5 posts) ────────────────────────────────────────────────────

  {
    slug: "quanto-investir-marketing-digital-pme",
    title: "Quanto investir em marketing digital para PMEs",
    excerpt: "Não existe um número único certo para todos os negócios. Mas existem critérios claros para definir o orçamento de marketing digital sem chute.",
    coverImage: "",
    coverGradient: "from-amber-950 via-orange-900 to-amber-800",
    author: "Davi Honorato",
    publishedAt: "2026-01-15",
    category: "Estrategia",
    tags: ["orçamento", "marketing digital", "PME", "investimento"],
    readTime: 6,
    keywords: ["quanto investir marketing digital PME", "orçamento marketing digital", "quanto gastar com anúncios"],
    content: `
## Por que essa pergunta não tem resposta única

Toda vez que alguém pergunta "quanto devo investir em marketing digital?", a resposta honesta começa com: depende. Mas essa resposta não ajuda ninguém. Então vamos a critérios práticos.

---

## A referência de mercado

Negócios em fase de crescimento costumam investir entre 10% e 20% do faturamento em marketing. Negócios estabelecidos e em manutenção costumam ficar entre 5% e 10%.

Isso inclui verba de mídia (anúncios), agência ou profissional de marketing, produção de conteúdo e ferramentas.

**Exemplo prático:** uma clínica com faturamento de R$ 50.000/mês em fase de crescimento deveria considerar entre R$ 5.000 e R$ 10.000/mês para marketing — incluindo agência e mídia.

---

## Mas e se eu não tenho esse percentual disponível?

Comece com o que você tem, mas seja realista sobre o que é possível com o orçamento disponível.

Com R$ 1.000/mês: dá para fazer SEO local (GMB) e pouca mídia paga. Resultados lentos, mas possíveis.

Com R$ 2.000/mês: já dá para rodar Google Ads ou Meta Ads com acompanhamento básico.

Com R$ 3.000 a R$ 5.000/mês: combinação de mídia paga + gestão profissional começa a funcionar de verdade.

---

## O que nunca fazer

- Investir menos do que o mínimo que a estratégia exige (deixa de funcionar e você conclui que "marketing não funciona")
- Dividir o orçamento em tantas frentes que nenhuma tem volume suficiente
- Não reservar para teste (nos primeiros 60 dias, você está comprando dados, não só clientes)

---

## Como definir o número certo para você

1. Qual é o seu ticket médio?
2. Qual é a sua margem de contribuição?
3. Quantos clientes novos você precisa por mês?
4. Qual é a sua taxa de conversão estimada (lead para cliente)?

Com esses números, você calcula o CPA máximo que o negócio suporta — e a partir daí define quanto investir.

---

## Conclusão

Marketing digital sem orçamento adequado não funciona. Mas orçamento sem estratégia também não. O número certo é aquele que está alinhado com o objetivo, a margem e o prazo que você aceita esperar.
`,
  },

  {
    slug: "funil-de-marketing-para-negocios-locais",
    title: "Funil de marketing para negócios locais: do anúncio ao agendamento",
    excerpt: "Um funil de marketing para negócios locais não precisa ser complexo. Precisa ser claro. Veja como estruturar a jornada do cliente do primeiro clique até o agendamento.",
    coverImage: "",
    coverGradient: "from-amber-950 via-amber-900 to-orange-800",
    author: "Davi Honorato",
    publishedAt: "2026-01-30",
    category: "Estrategia",
    tags: ["funil", "marketing local", "conversão", "jornada do cliente"],
    readTime: 6,
    keywords: ["funil de marketing negócios locais", "jornada cliente negócio local", "funil conversão local"],
    content: `
## O que é o funil de marketing para negócios locais

Um funil de marketing é a jornada que uma pessoa percorre desde o primeiro contato com sua marca até se tornar cliente. Para negócios locais — clínicas, restaurantes, salões, escritórios — esse funil tem características próprias.

---

## As etapas do funil local

**Topo: Descoberta**

A pessoa não te conhece ainda. Ela está procurando uma solução para um problema. Nesse estágio, você aparece via:
- Google Maps (busca local)
- Anúncio no Instagram ou Facebook
- Indicação de conhecido
- Resultado orgânico no Google

O objetivo aqui não é vender. É ser encontrado e gerar interesse.

**Meio: Consideração**

A pessoa te encontrou e está avaliando. Ela visita seu perfil no Instagram, lê suas avaliações no Google, entra no seu site, compara com concorrentes.

O que decide nessa etapa: avaliações, fotos reais, prova social, clareza sobre o que você oferece e o que te diferencia.

**Fundo: Decisão e agendamento**

A pessoa está pronta para agir. Ela manda mensagem no WhatsApp, preenche um formulário, liga ou agenda online.

O que decide aqui: facilidade de contato, velocidade de resposta, clareza sobre próximos passos.

---

## O erro mais comum no funil local

A maioria dos negócios foca no topo (fazer anúncio) e negligencia o meio (o que a pessoa encontra depois) e o fundo (o processo de atendimento e agendamento).

Resultado: você paga para trazer pessoas que chegam e vão embora porque o perfil está desatualizado, o WhatsApp demora horas para responder ou o processo de agendamento é confuso.

---

## Como melhorar cada etapa

**Topo:** GMB otimizado, anúncios com segmentação local correta, postagens regulares.

**Meio:** avaliações recentes, fotos reais, site claro com informações sobre serviços e localização.

**Fundo:** botão de WhatsApp visível, resposta rápida, processo de agendamento simples (de preferência automático).

---

## Conclusão

Funil para negócios locais não precisa de tecnologia complexa. Precisa de consistência em cada etapa. Quem resolve o meio e o fundo do funil converte mais sem gastar mais em topo.
`,
  },

  {
    slug: "metricas-que-donos-de-negocio-precisam-acompanhar",
    title: "Métricas que donos de negócio precisam acompanhar no marketing digital",
    excerpt: "Você não precisa acompanhar dezenas de métricas. Mas precisa das certas. Veja quais números realmente indicam se seu marketing está funcionando.",
    coverImage: "",
    coverGradient: "from-amber-900 via-orange-900 to-amber-900",
    author: "Davi Honorato",
    publishedAt: "2026-02-15",
    category: "Estrategia",
    tags: ["métricas", "KPIs", "marketing digital", "performance"],
    readTime: 5,
    keywords: ["métricas marketing digital PME", "KPIs marketing", "como medir marketing digital"],
    content: `
## O problema de acompanhar métricas erradas

Muitos donos de negócio acompanham curtidas, seguidores e visualizações — métricas de vaidade que pouco dizem sobre se o marketing está gerando dinheiro.

Outros não acompanham nenhuma métrica e decidem por intuição.

A resposta está no meio: poucas métricas, mas as certas.

---

## As métricas que importam por objetivo

**Se o objetivo é gerar leads:**

- **CPL (Custo por Lead):** quanto você paga por cada contato gerado. Divide o gasto total pelo número de leads.
- **Taxa de conversão de lead:** quantos leads viram clientes. Se você gera 100 leads e fecha 10, a taxa é de 10%.
- **Volume de leads por canal:** quais canais geram mais contatos — para investir mais no que funciona.

**Se o objetivo é aumentar visibilidade local:**

- **Visualizações no Google Maps:** disponível no Google Business Profile Insights.
- **Cliques para ligar e rotas:** indicam intenção real de visita.
- **Volume e nota média de avaliações:** sinal de reputação e influência no ranqueamento.

**Se o objetivo é vender online:**

- **ROAS (Retorno sobre Gasto em Anúncios):** receita gerada dividida pela verba de anúncios.
- **Taxa de conversão do site:** quantos visitantes completam uma compra ou preenchem um formulário.
- **Ticket médio:** se ROAS sobe mas ticket cai, pode ser que você esteja atraindo clientes de menor valor.

---

## Como montar um painel simples

Você não precisa de software caro. Uma planilha com as métricas semanais já funciona:

| Métrica | Esta semana | Semana anterior | Meta |
|---|---|---|---|
| Leads gerados | 18 | 14 | 20 |
| CPL | R$ 55 | R$ 70 | < R$ 60 |
| Clientes fechados | 4 | 3 | 5 |
| Taxa de conversão | 22% | 21% | 25% |

---

## Revisão semanal vs mensal

Métricas de tráfego e leads: revise semanalmente. Pequenas variações são normais.

Métricas de receita e ROI: revise mensalmente. Flutuações de curto prazo podem enganar.

---

## Conclusão

Não existe marketing sem mensuração. Mas mensuração não precisa ser complicada. Defina três métricas principais para o seu objetivo atual e acompanhe-as toda semana.
`,
  },

  {
    slug: "como-escolher-agencia-de-marketing-digital",
    title: "Como escolher uma agência de marketing digital: o que avaliar antes de contratar",
    excerpt: "Contratar a agência errada custa tempo e dinheiro. Veja quais critérios realmente importam na hora de escolher quem vai cuidar do seu marketing.",
    coverImage: "",
    coverGradient: "from-orange-950 via-amber-900 to-orange-800",
    author: "Davi Honorato",
    publishedAt: "2026-03-05",
    category: "Estrategia",
    tags: ["agência", "marketing digital", "contratação", "critérios"],
    readTime: 6,
    keywords: ["como escolher agência de marketing digital", "contratar agência marketing", "critérios agência marketing"],
    content: `
## Por que escolher mal custa caro

Contratar uma agência de marketing sem os critérios certos é um dos erros mais comuns e custosos que PMEs cometem. O prejuízo não é só financeiro — é o tempo perdido sem resultado enquanto a concorrência avança.

---

## O que avaliar antes de contratar

**1. Especialização vs. generalismo**

Agências generalistas fazem de tudo para todos. Agências especializadas entendem profundamente o seu setor ou canal. Para resultados concretos, especialização importa mais do que portfólio amplo.

Pergunte: "Quais setores vocês atendem hoje?" e "Quais canais vocês dominam?"

**2. Cases reais com resultados mensuráveis**

Peça cases com números. Não "aumentamos o engajamento" — mas "reduzimos o CPL de R$ 80 para R$ 35 em 60 dias para uma clínica odontológica em BH".

Se a agência não tem números para mostrar, há dois problemas: ou não mediu os resultados, ou os resultados não foram bons.

**3. Transparência no processo**

A agência deve ser capaz de explicar o que vai fazer, por que vai fazer e como vai medir. Se o processo for vago ("vamos trabalhar sua presença digital"), peça mais detalhes. Processo claro indica maturidade.

**4. Comunicação e acesso**

Você vai precisar de respostas rápidas. Pergunte: quem é o ponto de contato direto? Com que frequência você recebe relatório? Em quanto tempo as mensagens são respondidas?

**5. Contrato e prazo**

Evite contratos de 12 meses sem cláusula de saída antecipada. Agências confiantes no próprio trabalho oferecem períodos menores ou cláusulas razoáveis de rescisão.

---

## Perguntas para fazer na primeira reunião

- Quais resultados posso esperar nos primeiros 60 e 90 dias?
- Como vocês medem o sucesso do meu investimento?
- Quem da equipe vai cuidar da minha conta no dia a dia?
- O que acontece se os resultados não vierem?

---

## Sinais de alerta

- Promessas de resultado garantido em tempo muito curto
- Não conseguem explicar como vão fazer o trabalho
- Relatórios com métricas de vaidade (curtidas, alcance) sem conexão com vendas
- Não pedem acesso às suas ferramentas antes de propor estratégia

---

## Conclusão

A agência certa não é necessariamente a maior, a mais barata ou a que tem o site mais bonito. É aquela que entende o seu negócio, tem resultados comprovados no seu contexto e comunica com clareza o que está fazendo.
`,
  },

  {
    slug: "marketing-digital-para-quem-esta-comecando-do-zero",
    title: "Marketing digital para quem está começando do zero",
    excerpt: "Se você nunca investiu em marketing digital e não sabe por onde começar, este guia é para você. Sem jargão, sem promessa de resultado milagroso.",
    coverImage: "",
    coverGradient: "from-amber-950 via-amber-800 to-yellow-900",
    author: "Davi Honorato",
    publishedAt: "2026-03-20",
    category: "Estrategia",
    tags: ["começando", "marketing digital", "iniciantes", "PME"],
    readTime: 7,
    keywords: ["como começar marketing digital", "marketing digital iniciantes PME", "marketing digital do zero"],
    content: `
## Por onde começar sem se perder

Marketing digital parece um universo enorme quando você começa: Google Ads, SEO, Instagram, TikTok, e-mail marketing, WhatsApp, automação... Por onde começar?

A resposta é: pelo que está mais próximo do seu cliente agora.

---

## Passo 1: Monte sua base antes de investir em anúncios

Antes de pagar por tráfego, você precisa de um destino. Uma pessoa que clica no seu anúncio vai para onde?

- **Google Meu Negócio:** configure e complete o perfil agora. Gratuito, impacto imediato no Maps.
- **WhatsApp Business:** configure com mensagem de ausência, catálogo e resposta automática.
- **Site ou landing page:** não precisa ser complexo — uma página com quem você é, o que faz e como entrar em contato já funciona.

---

## Passo 2: Defina um canal principal

Não tente estar em todo lugar ao mesmo tempo. Escolha um canal de acordo com o seu público:

- **Público local buscando serviço ativo:** comece pelo Google (GMB + Google Ads)
- **Público que pode ser alcançado por interesse e estilo de vida:** comece pelo Instagram/Meta Ads
- **Público que busca informação e educação:** comece com conteúdo orgânico (blog + SEO)

---

## Passo 3: Defina o que você quer que aconteça

Qual é a ação que você quer que o cliente tome? Ligar, mandar mensagem no WhatsApp, preencher formulário, aparecer na loja?

Todo esforço de marketing digital deve ter um CTA claro que leva a essa ação. Sem destino definido, você só gasta atenção e dinheiro.

---

## Passo 4: Comece pequeno, meça e expanda

Com R$ 500/mês você consegue testar uma campanha básica de Google Ads ou Meta Ads. Não espere o orçamento perfeito para começar. O objetivo dos primeiros meses é aprender — descobrir qual canal, qual mensagem e qual público funciona para o seu negócio.

---

## Passo 5: Peça avaliações desde o dia 1

Avaliações no Google são gratuitas e têm impacto direto. Todo cliente satisfeito é um potencial avaliador. Peça via WhatsApp, com link direto para o Google. Uma avaliação por semana já faz diferença em 3 meses.

---

## O que não fazer no começo

- Investir em muitos canais ao mesmo tempo sem acompanhar nenhum
- Contratar alguém sem entender o mínimo do que está sendo feito
- Esperar resultados nos primeiros 30 dias (tráfego pago pode ser mais rápido; SEO e GMB levam de 60 a 90 dias)

---

## Conclusão

Marketing digital para quem está começando é sobre consistência, não complexidade. Um canal bem feito, uma mensagem clara e um processo de atendimento rápido já colocam você à frente de muita concorrência que investe mais mas não mede nem melhora.
`,
  },
]

export const BLOG_ARTICLES_LIST: BlogArticleListItem[] = BLOG_ARTICLES.map(({ content, ...rest }) => rest)

export const BLOG_SLUGS = BLOG_ARTICLES.map((article) => article.slug)

export const BLOG_ARTICLE_MAP = BLOG_ARTICLES.reduce<Record<string, BlogArticle>>((acc, article) => {
  acc[article.slug] = article
  return acc
}, {})

export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLE_MAP[slug]
}
