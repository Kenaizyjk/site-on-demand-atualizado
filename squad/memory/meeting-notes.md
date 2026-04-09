# ATAS DAS REUNIÕES DO SQUAD
*Arquivo acumulativo — novas entradas no topo*

---

## Como usar este arquivo

Cada agente escreve seus outputs aqui durante a sessão.
O orquestrador lê tudo e sintetiza a decisão final.
Formato: `## [Agente] — [data]`

---

## Research Agent — 08 de Abril de 2026 — Trends 2026 + Copy + Tools

> Compilado por: sonnet-research | Revisado por: Research Agent
> Objetivo: Guiar o redesign completo do site Site On Demand

---

### 1. DESIGN TRENDS 2026 PARA AGÊNCIAS DIGITAIS

#### O que agências de alto nível estão fazendo

As referências absolutas de 2026 — Vercel, Linear, Stripe, Raycast — operam com uma filosofia unificada: **dark-first, motion-as-craft, minimalism with depth**. Cada pixel é intencional. Cada animação tem propósito. Nenhuma decoração existe por vaidade.

**Vercel**
- Usa a typeface proprietária Geist (disponível no Google Fonts), criada especificamente para clareza em interfaces developer-facing
- Background escuro com #000 como base absoluta, não cinza
- Micro-animações nos cards de feature: aparecimento suave com stagger de 80-120ms
- Gradientes contidos e precisos — sem aurora agressiva, apenas sutileza nos headers

**Linear**
- O benchmark de produto SaaS premium em 2026
- Princípio: "less is more — every element precisely calibrated"
- Grid rígida com espaçamento consistente de 8px (múltiplos de 8)
- Animações de hover com spring physics (não easing linear): `stiffness: 300, damping: 30`
- Bento grid na homepage para features — cards de diferentes alturas que respiram
- Palette: preto profundo + roxo/índigo sutil + branco puro para texto

**Stripe**
- Gradientes que fluem continuamente: azul → roxo → amarelo → rosa → laranja
- Aurora animada no hero: `will-change: transform` em blobs de 400-600px com blur de 80-120px
- Tipografia grande (96px+ para headlines) com weight 700-800
- "Conveys technical sophistication and forward-thinking innovation"

**Raycast**
- Fundo absolutamente preto (#000000)
- Text glow em roxo/laranja para destaque de features
- Animações ultra-rápidas nos componentes de UI (< 150ms)
- Spotlight effect no hover dos cards com gradiente radial

---

#### Backgrounds Animados em Alta

**1. Aurora / Mesh Gradient (mais usado em 2026)**

O efeito aurora é a evolução do glassmorphism — blobs grandes e suaves animados sobre fundo escuro. Já disponível como componente direto no shadcn/ui:

```
Componente: shadcn.io/background/aurora
Aceternity UI: ui.aceternity.com/components/aurora-background
```

Implementação técnica:
- 2-3 blobs de 400-600px com `border-radius: 50%`
- `filter: blur(80-120px)` em cada blob
- `opacity: 0.6-0.8` para não saturar
- Animação CSS com `@keyframes` de 8-12 segundos (float suave)
- `will-change: transform` para GPU acceleration
- Cores: `#4facfe` (azul), `#a855f7` (roxo), `#06d6a0` (verde teal)
- NUNCA usar mais de 3 blobs — degrada performance

**2. Particle Systems**

```
tsParticles v3 (react-tsparticles): github.com/tsparticles/tsparticles
```

- Limite de 50-80 partículas no mobile, 100-150 no desktop
- Usar WebGL renderer em vez de Canvas 2D: 3-5x mais performático
- Canvas emitter shapes (novidade v3): pode usar SVG path como fonte de partículas
- TypeScript nativo — type safety completo

**3. Noise / Grain Overlay (tendência premium 2026)**

Sinaliza artesanato e premium sem custo de performance. Implementação com SVG filter:

```css
/* Via feTurbulence — zero impacto no LCP */
filter: url(#grain);
opacity: 0.15-0.30;
```

Alternativa: PNG overlay de textura de grain com `mix-blend-mode: overlay` e `opacity: 0.08-0.15`.

**4. Bento Grid Layouts**

Popularizado por Apple e Linear. CSS Grid com cards de alturas variadas:

```css
grid-template-columns: repeat(3, 1fr);
/* cards com grid-column: span 2 ou grid-row: span 2 */
```

Ideal para: feature sections, serviços, social proof, métricas de resultado.

---

#### Tipografia em Trend 2026

**Tendências macro:**
- **Expressive & Bold Type**: tipografia como elemento de design, não só veículo de palavras
- **Variable Fonts**: um arquivo, infinitas variações de weight/width — melhor performance
- **Serif Revival**: serifas modernas com alto contraste e formas mais bold (Playfair Display, DM Serif Display)
- **Letter Spacing (Tracking)**:
  - Headings uppercase: `letter-spacing: 0.08em-0.15em` (sinaliza luxo/premium)
  - Body text: nunca aumentar tracking — prejudica leitura
  - Display text em lowercase: `letter-spacing: -0.02em` a `-0.04em` (tight, moderno)

**Fontes recomendadas para agência digital 2026:**

| Uso | Fonte | Por quê |
|-----|-------|---------|
| Headlines display | Syne | Geométrica, ousada, moderna — usada por agências premium |
| Headlines alternativa | Plus Jakarta Sans (800-900) | Clean, tecnológico, versátil para PME |
| Body / UI | Inter ou DM Sans | Workhorse de legibilidade — 16-18px mínimo |
| Developer/técnico | Geist (Vercel) | Neutro premium, excelente para interfaces |
| Serif de destaque | DM Serif Display ou Playfair Display | Para quebrar seções e dar personalidade |
| Monospace accent | Space Mono ou JetBrains Mono | Para dados, métricas, código |

**Tamanhos:**
- Hero H1: `clamp(3rem, 8vw, 6rem)` — responsivo sem media queries
- Section H2: `clamp(2rem, 4vw, 3.5rem)`
- Body: `1rem-1.125rem` com `line-height: 1.6-1.75`
- Label/caption: `0.75rem` com `letter-spacing: 0.08em` uppercase

---

#### Micro-Interações e Animações que Impressionam

**Duração ideal:**
- Micro-interações de UI: `120-220ms`
- Animações de entrada (reveal): `300-500ms`
- Page transitions: `400-600ms`
- Nunca ultrapassar `800ms` sem propósito narrativo

**Patterns de alto impacto com Framer Motion:**

```tsx
// 1. Stagger children — entrada em cascata
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

// 2. Spring physics — hover mais natural que ease
whileHover={{ scale: 1.02, y: -4, transition: { type: "spring", stiffness: 400, damping: 20 } }}

// 3. Layout animations — reposicionamento suave
<motion.div layout layoutId="hero-card" />

// 4. Scroll-based com useScroll + useTransform
const { scrollYProgress } = useScroll()
const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
```

**3D Card Tilt (muito usado em 2026):**
```tsx
// Responde ao mouse com rotateX/rotateY
onMouseMove={(e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  // aplica rotateX: y * 10, rotateY: x * -10
}}
```

**Cursor effects:** Cursor customizado em dot + ring que segue o mouse com lag suave — sinaliza design premium imediatamente.

---

#### 3D Elements em Next.js

**Hierarquia de escolha:**

1. **Spline** (mais fácil, zero código 3D) — drag and drop, exporta componente React direto. Ideal para hero sections com objeto 3D interativo. Custo: bundle pesado (~500KB). Solução: lazy load + Suspense.

2. **React Three Fiber (R3F)** — abstração JSX do Three.js. Ideal para equipes React. WebGPU disponível desde r171 (setembro 2025), compatível com Safari 26+.

3. **Three.js puro** — máximo controle, mais verbose. Use quando R3F não atender.

**Performance no Next.js:**
```tsx
// Dynamic import com SSR desativado — obrigatório para 3D
const SplineScene = dynamic(() => import('./SplineScene'), {
  ssr: false,
  loading: () => <div className="h-[600px] bg-black" />
})
```

- Modelos GLTF comprimidos com Draco (reduz 60-80% do tamanho)
- Limit draw calls: < 100 por cena para mobile
- Usar `<Suspense>` com fallback visual durante carregamento

---

#### Componentes que Fazem Diferença

**Dark Glassmorphism (versão 2026 — mais escuro, mais sofisticado):**
```css
background: rgba(255, 255, 255, 0.04);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.08);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
```

Apple introduziu "Liquid Glass" em 2025 — o vidro agora refrata e reflete o conteúdo ao redor. Expectativa: frameworks vão replicar.

**64% de aplicações SaaS premium** usam glassmorphism em 2026 vs. flat design.

**Color palette auditada para agência digital PME BR:**
- Primário: `#6366f1` (índigo) ou `#7c3aed` (roxo) — moderno, tecnológico, não genérico
- Background: `#09090b` (zinc-950) — nunca pure black nem cinza agressivo
- Accent: `#06d6a0` (teal/verde) ou `#f59e0b` (âmbar) — CTA
- Surface: `#18181b` (zinc-900) para cards
- Border: `rgba(255,255,255,0.06)`

---

### 2. COPYWRITING HUMANIZADO PARA AGÊNCIAS (ANTI-AI-FEEL)

#### Técnicas para Escrever Copy que Soa Como Pessoa Real

**O princípio central de 2026:** Quando todo mundo tem IA, ser humano é o único diferencial. As agências que lideram não entregaram as chaves para o ChatGPT — entenderam que autenticidade é vantagem competitiva.

**5 técnicas fundamentais:**

1. **Information Gain Obrigatório**: Se uma LLM conseguiria prever sua próxima frase, delete. Toda frase deve adicionar algo que só você poderia escrever — uma opinião polarizante, um dado interno, uma história específica.

2. **Entrevista como base**: O melhor copy vem de colocar o cliente/fundador numa ligação e gravar. Perguntar: "como você resolveu X?" e transcrever a resposta. IA não hallucina experiência real.

3. **Conteúdo com Opinião Polarizante**: Conteúdo seguro é ignorado. Tome uma posição. "Tráfego pago sem estratégia de retenção é queimar dinheiro" converte mais que "ajudamos a aumentar suas vendas".

4. **Video-first → Texto**: Grave um vídeo curto sobre o tema, transcreva, edite. Prova que há humano por trás.

5. **Especificidade cirúrgica**: Substitua qualificadores vagos por números reais. Não "resultados incríveis", mas "47 novos pacientes em 30 dias".

---

#### 25 Clichês que Matam Credibilidade (Evitar Absolutamente)

Fontes: análise do corpus de vícios de IA em PT-BR + pesquisa de agências 2026.

**Palavras / expressões IA-tell:**
1. "No cenário atual" — abertura padrão de IA
2. "Mergulhar" / "mergulhe" — delve em português
3. "Incrível" / "fascinante" / "essencial" — superlativos genéricos
4. "No universo do/da [X]" — metáfora de universo
5. "Jornada do consumidor" — clichê de marketing batido
6. "Potencializar" — quando "aumentar" seria mais claro
7. "Alavancar" — em qualquer contexto
8. "Solução completa e integrada" — não diz nada
9. "Não é apenas sobre [X], é sobre [Y]" — estrutura IA clássica
10. "Em um mundo cada vez mais digital..." — abertura de redação
11. "Transformação digital" — vazio de sentido em 2026
12. "Ecossistema" (quando não é sobre tech real) — vagueza disfarçada
13. "Estado da arte" — nunca use
14. "Sinergia" — proibido desde 2018
15. "Resultados excepcionais" — excepcionais para quem?
16. "Time de especialistas apaixonados" — todo mundo diz isso
17. "Sua empresa merece o melhor" — condescendência sem prova
18. "Além disso," no início de cada parágrafo — padrão de IA
19. "Por fim," como conector — marcador de estrutura de IA
20. "Nosso compromisso é..." — promessa sem evidência
21. "Abordagem personalizada" — se não mostra como, é vazia
22. "Inovação constante" — o que isso significa na prática?
23. "Fique à frente da concorrência" — clichê de agência dos anos 2000
24. "Conectamos sua marca ao futuro" — abstrato sem função
25. "Impulsionar sua presença digital" — impulsionar para onde? para quê?

---

#### Fórmulas que Funcionam para PME Brasileira

**Para Restaurantes:**
```
HEADLINE: "[Prato específico] que [clientes] vêm do outro lado da cidade provar"
SUB: "Não é marketing. São [X] avaliações de 5 estrelas no Google."
CTA: "Ver cardápio e reservar sua mesa"
```

Exemplo real-style: "O caldo de cana que fez uma fila de 40 minutos virar notícia no bairro."

**Para Clínicas:**
```
HEADLINE: "[Dor específica do paciente] — resolvida em [X] sessões ou devolvemos a consulta"
SUB: "[Nome da dra/dr], [especialidade] com [X] anos e [Y] pacientes atendidos em [cidade]"
CTA: "Consulta de avaliação gratuita — [X] vagas esta semana"
```

Exemplo real-style: "Sua lombalgia tem nome. A Dra. [Nome] vai descobrir qual — na primeira consulta."

**Para Lojas / E-commerce:**
```
HEADLINE: "O [produto] que [resultado emocional], sem [objeção principal]"
SUB: "Entregamos em [X] dias para [cidade/estado]. [X] clientes satisfeitos este mês."
CTA: "Comprar agora — frete grátis até [data/condição]"
```

Exemplo real-style: "O tênis que você vai querer usar todo dia — sem pagar R$800."

**Fórmula PAS (Problem-Agitate-Solve) em português:**
- **Problema**: Nomeia a dor com especificidade ("Você investe em tráfego pago mas os leads não convertem?")
- **Agitação**: Piora o problema ("Cada mês sem sistema de conversão é dinheiro jogado fora — e seu concorrente já entendeu isso")
- **Solução**: Apresenta com prova ("Nosso sistema de landing page + automação de follow-up aumentou conversão de 3 clínicas em [cidade] em 47% nos primeiros 60 dias")

---

#### Como Escrever a História do Fundador que Emociona sem ser Genérica

**O erro mais comum:** Começar pela trajetória, não pela ferida.

**Framework em 5 atos:**

1. **A ferida** (não a vitória): "Trabalhei 3 anos numa agência grande onde vi PMEs pagando R$5.000/mês por relatórios que ninguém lia."
2. **O momento de decisão** (concreto, com data ou lugar): "Em uma sexta-feira de novembro, cancelei meu contrato CLT..."
3. **O fracasso honesto** (humaniza): "Os primeiros 4 meses foram desastrosos. Perdi 2 clientes por entregar tarde."
4. **A virada com aprendizado específico**: "Aprendi que PME não precisa de estratégia complexa — precisa de resultado simples e mensurável."
5. **Missão que inclui o cliente**: "Hoje atendo só [X] clientes por vez porque cada um precisa de atenção real, não de template."

**O que evitar:**
- "Sempre tive paixão por..." (genérico)
- "Nossa missão é transformar..." (abstracto)
- Foto corporativa séria — use foto real, no contexto de trabalho

---

#### Headlines que Convertem para Agências no Brasil

Baseado em padrões de alta conversão documentados:

- "Seu restaurante aparece quando o cliente pesquisa 'melhor [comida] em [cidade]'?" (pergunta que cria autoconsciência)
- "[X] clínicas em [cidade] triplicaram agendamentos sem aumentar a equipe" (prova social + resultado)
- "Por que seu concorrente tem 4,8 no Google e você não?" (comparação que dói)
- "Fazemos tráfego pago que paga a si mesmo em 30 dias — ou não cobramos" (garantia ousada)
- "O único motivo pelo qual seu site não vende: [resposta direta e específica]" (curiosidade + especificidade)
- "Abrimos [X] vagas para clínicas que querem sair do plano de saúde e viver de particular" (nicho + desejo específico)
- "Você gasta quanto por mês em anúncios? [calculadora inline]" (interação + personalização)

---

### 3. FERRAMENTAS E INTEGRAÇÕES PARA CLAUDE CODE (2026)

#### MCP Servers Mais Úteis para Desenvolvimento Web

O protocolo MCP foi lançado em 2024 e em 2026 já conta com mais de 10.000 servidores indexados em registries públicos (97 milhões de downloads mensais do SDK em novembro 2025).

**Em março de 2026, o NotebookLM lançou suporte oficial ao MCP** — mudança de paradigma para workflows de pesquisa.

| Servidor MCP | Instalação | Uso Principal |
|---|---|---|
| **GitHub** | `npx @composio/mcp@latest setup github --client claude` | Criar branches, PRs, issues, busca de código |
| **Filesystem** | nativo no Claude Code | Acesso a arquivos fora do projeto |
| **Notion** | `claude mcp add --transport http notion https://mcp.notion.com/mcp` | Docs, tasks, knowledge base |
| **Figma** | `npx @composio/mcp@latest setup figma --client claude` | Design-to-code, extrair tokens |
| **Puppeteer** | `npm install puppeteer` + config | Testes de UI, scraping, automação de browser |
| **PostgreSQL/Supabase** | config com credentials | Queries diretas, manipulação de dados |
| **Sequential Thinking** | `npm install -g @modelcontextprotocol/server-sequential-thinking` | Decomposição de problemas complexos |
| **Memory Bank** | clone do repo oficial | Retenção de contexto entre sessões |
| **Zapier** | `npx @composio/mcp@latest setup zapier --client claude` | Cross-app automation, webhooks |
| **NotebookLM** | `notebooklm-mcp` (community) | Base de conhecimento persistente |

**Top 4 para desenvolvimento web:**
1. **GitHub** — elimina context-switching, automatiza todo o fluxo de repositório
2. **Figma** — transforma designs em código production-ready direto
3. **Puppeteer** — testes end-to-end sem sair do Claude Code
4. **Supabase MCP** (via plugin nativo desta sessão) — SQL queries, migrations, logs direto no chat

---

#### NotebookLM como Memória Persistente de Agente

**Arquitetura recomendada (2026):**
```
Claude Code (raciocínio) ←→ MCP Protocol ←→ NotebookLM (memória estruturada)
```

**Setup prático:**
1. Instalar `notebooklm-mcp` (community bridge)
2. Criar notebooks temáticos: "Contexto do cliente", "Decisões de arquitetura", "Copy aprovado"
3. Alimentar com: reuniões gravadas, briefings, feedbacks, documentação
4. Claude acessa via MCP com citações de fontes — respostas baseadas no seu próprio corpus

**Workflow real de agência:**
- Notebook "Cliente X": contrato, briefing, histórico de reuniões, personas
- Claude Code consulta antes de qualquer tarefa e gera outputs alinhados com o contexto do cliente
- Respostas incluem citação de qual documento embasou a decisão

**Alternativas de memória persistente:**
- `memory-bank-mcp` (oficial do Model Context Protocol) — mais simples, arquivos markdown
- Notion MCP — se o time já usa Notion como PKM
- Supabase + embeddings — para escala (busca semântica em documentos)

---

#### Claude Code Skills como Força Multiplicadora

O sistema de Skills (arquivos .md na pasta `.claude/`) transforma MCP tools em workflows composáveis. Exemplos úteis para agência:

- `/squad-run` — sprint de desenvolvimento em paralelo com múltiplos agentes
- `/deploy-preview` — build + deploy Vercel + post URL no Slack automaticamente
- `/seo-audit` — analisa SEO técnico + gera issues no GitHub
- `/copy-review` — Claude lê copy, aplica checklist anti-clichê, sugere melhorias

---

#### Ferramentas de Web Search Integráveis

- **WebSearch tool** (nativo nesta sessão) — busca em tempo real integrada ao raciocínio
- **Perplexity API** — via webhook ou MCP community server
- **Brave Search MCP** — privacy-focused, alta qualidade
- **Tavily** — otimizado para agentes AI, retorna contexto structurado

---

### 4. ANIMAÇÕES E BIBLIOTECAS PARA NEXT.JS 15

#### Framer Motion / Motion — Patterns Avançados

**Atenção:** Em mid-2025 o Framer Motion foi renomeado para **Motion**. Package: `motion` (não `framer-motion`). Import: `import { motion } from 'motion/react'`.

**Versão atual: v12** — novidades:
- Hardware-accelerated scroll: `useScroll()` agora usa aceleração de hardware
- `layoutAnchor` prop para animações de layout com anchor point customizado
- `layout="x"` ou `layout="y"` — animações em eixo único
- Suporte a novas propriedades de cor

**Patterns Avançados — Hierarquia por Impacto Visual:**

**1. Shared Layout Animations (mais impressionante)**
```tsx
// Card expande para modal com animação contínua
<motion.div layoutId="card-thumbnail">
  {/* thumbnail */}
</motion.div>

// Em outro lugar do DOM:
<motion.div layoutId="card-thumbnail">
  {/* modal expandido */}
</motion.div>
```

**2. Scroll-based Animations (mais comum em landing pages 2026)**
```tsx
const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
const y = useTransform(scrollYProgress, [0, 1], [50, -50]) // parallax
const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
```

**3. Stagger Children (entrada de listas/grids)**
```tsx
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
}
```

**4. AnimatePresence (page transitions)**
```tsx
<AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
  <motion.div
    key={pathname}
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.3 }}
  />
</AnimatePresence>
```

---

#### GSAP com React — Quando Usar

**Use GSAP quando:**
- Timeline complexa com sequenciamento preciso de múltiplos elementos
- SVG morphing (paths que mudam de forma)
- Scroll-driven narratives longas (parallax em múltiplas camadas)
- Performance crítica com 50+ elementos animados simultaneamente

**Use Motion/Framer quando:**
- Animações de UI (hover, focus, active states)
- Layout animations (reposicionamento de elementos)
- Page transitions
- Animações baseadas em estado React

**Bundle size comparison:**
- Motion (Framer): +32KB gzipped
- GSAP ScrollTrigger: +48KB gzipped
- AOS (simples): +8KB gzipped
- CSS puro: 0KB extra

---

#### CSS Animations Puras — Alta Performance, Zero Bundle

Para animações que não precisam de interatividade com estado React, CSS puro é sempre superior:

```css
/* Reveal on scroll — intersection observer + CSS class toggle */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Sempre respeitar prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .reveal { transition: none; opacity: 1; transform: none; }
}
```

Propriedades CSS que usam GPU (nunca causam layout reflow):
- `transform` — rotate, scale, translate, skew
- `opacity`
- `filter`
- `clip-path`

Evitar animar: `width`, `height`, `top`, `left`, `margin`, `padding`.

---

#### Lottie vs Rive vs CSS — Decisão por Caso de Uso

| Ferramenta | Peso | FPS | Melhor Para |
|------------|------|-----|-------------|
| **CSS** | 0KB | 60fps nativo | Micro-interações UI, hover, reveal |
| **Lottie (.lottie)** | ~60KB runtime | ~17fps SVG, 60fps canvas | Ícones animados, ilustrações de designer |
| **Rive** | ~200KB WASM | 60fps WebGL | Animações stateful, jogos, interação complexa |

**Recomendação 2026:**
- **Ícones animados / loading states**: Lottie com formato `.lottie` (40-70% menor que JSON)
- **Mascote interativo / onboarding animado**: Rive (state machine nativo)
- **Tudo mais**: CSS animations ou Motion/Framer

**Novidade**: Rive é tipicamente 50-80% menor que Lottie equivalente em formato `.riv`. LottieFiles está implementando WebGPU/WebGL para fechar essa diferença de performance.

---

#### Backgrounds Animados — Sem Matar Performance

**Hierarquia de impacto x performance:**

| Background | Bundle | GPU | LCP Impact | Resultado Visual |
|-----------|--------|-----|------------|-----------------|
| CSS gradient animado | 0KB | Sim | Nenhum | Bom |
| Aurora com CSS blobs | 0KB | Sim | Nenhum | Excelente |
| Grain SVG overlay | ~1KB | Não | Nenhum | Premium |
| tsParticles (canvas) | ~45KB | WebGL | Leve | Alto |
| R3F / Three.js | ~250KB+ | WebGL | Médio | Máximo |
| Spline | ~500KB | WebGL | Alto | Máximo |

**Regra de ouro:** Se o background é puramente decorativo, use CSS. Reserve WebGL para quando o 3D é o produto.

---

### 5. SITES DE AGÊNCIAS PARA INSPIRAÇÃO

#### 10 Agências com Sites Excepcionais

**1. Linear (linear.app)**
Não é agência, mas é O benchmark de produto digital. Cada detalhe é referência de precisão tipográfica, motion design e bento grid.
- O que faz diferente: Spring animations em tudo, gradientes precisos, dark mode absoluto
- Padrão de conversão: Demo interativa no hero — você experimenta antes de ler qualquer copy

**2. Vercel (vercel.com)**
- O que faz diferente: Geist font, micro-animações nos deploy logs ao vivo, case studies com métricas reais
- Padrão de conversão: "From idea to global" → deploy em 1 clique (CTA que remove fricção máxima)

**3. Ueno (ueno.co — adquirida pela Airbnb)**
- O que fazia diferente: Micro-interações lúdicas, storytelling com parallax rico, portfólio como narrativa
- Padrões: Dynamic animations, 3D parallax hover effects em todos os cards de projeto

**4. Hello Monday (hellomonday.com)**
- O que faz diferente: 3D elements blended com interações lúdicas — "pushes web technology creatively"
- Padrão de conversão: Case studies imersivos que demonstram transformação de marca completa

**5. Humaan (humaan.com)**
- O que faz diferente: Minimalismo + acessibilidade radical — inclusão como diferencial
- Padrão de conversão: Processo transparente construído na navegação — você entende como trabalham antes de contratar

**6. Buzzworthy Studio (buzzworthystudio.com)**
- O que faz diferente: Scroll effects vibrantes, visual system consistente, time ágil como posicionamento
- Copy destaque: Mensagem concisa sobre turnaround rápido — "somos o antídoto para agências lentas"

**7. Beyond (beyondagency.com)**
- O que faz diferente: Case studies data-driven, layouts modulares, ROI como linguagem principal
- Padrão de conversão: Cada case tem métricas específicas em destaque visual antes do texto

**8. Massive Media (massivemedia.com)**
- O que faz diferente: Case studies de transformação de marca — antes/depois como narrativa visual
- Padrão de conversão: Bold visuals + impacto mensurável em cada projeto

**9. Framer Gallery (framer.com/gallery/agency)**
- Curadoria dos melhores sites de agência feitos no Framer — referência atual de tendências
- Atualização constante — consultar mensalmente

**10. 925 Studios (925studios.co)**
- O que faz diferente: Escreveram o guia "AI Slop Web Design" — posicionamento anti-genérico radical
- Copy diferenciado: Extremamente direto, sem clichês, fala explicitamente o que NÃO fazem

---

#### Patterns de Conversão que Funcionam

Com base na análise das agências acima:

1. **Demo antes da copy** — deixe o visitante experimentar/ver antes de ler claims
2. **Métricas reais em destaque visual** — não no texto corrido, mas como elementos de design
3. **Processo como vantagem** — mostrar como você trabalha remove objeções de risco
4. **Case study como hero** — não "serviços", mas "o que você conquista"
5. **Social proof específica** — não "centenas de clientes", mas "47 clínicas em São Paulo"
6. **CTA que remove fricção** — "Conversa de 15 min" bate "Solicitar proposta"
7. **Vídeo de fundador** — 40% mais engajamento que texto/imagem equivalente
8. **Garantia explícita** — "Se não gostar em 30 dias, devolvemos" — remove risco percebido

---

### SÍNTESE EXECUTIVA PARA O REDESIGN

**3 decisões estratégicas imediatas:**

1. **Visual**: Dark mode first (#09090b), Aurora CSS no hero (sem Three.js), Motion v12 para animações, Plus Jakarta Sans 800 para headlines, DM Sans para body.

2. **Copy**: Reescrever todo o texto com framework PAS + especificidade cirúrgica. Eliminar os 25 clichês. Criar história do fundador em 5 atos. Headlines com dor específica de restaurante/clínica/loja.

3. **Tools**: Ativar MCP do GitHub + Supabase + Figma no Claude Code. Criar notebook no NotebookLM com contexto completo do projeto. Usar Skills para automação de deploy e revisão de copy.

---

*Fontes consultadas:*
- [Figma Web Design Trends 2026](https://www.figma.com/resource-library/web-design-trends/)
- [Gezar Design Trends 2026](https://gezar.dk/en/blog/web-design-trends-2026)
- [Aceternity UI Aurora](https://ui.aceternity.com/components/aurora-background)
- [Vezert Tech Startup Design](https://vezert.com/blog/creative-web-design-trends-tech-startups)
- [tsParticles GitHub](https://github.com/tsparticles/tsparticles)
- [Fontfabric Typography 2026](https://www.fontfabric.com/blog/10-design-trends-shaping-the-visual-typographic-landscape-in-2026/)
- [Vercel Geist Font](https://vercel.com/font)
- [Motion/Framer Complete Guide 2026](https://inhaq.com/blog/framer-motion-complete-guide-react-nextjs-developers.html)
- [React Three Fiber vs Three.js 2026](https://graffersid.com/react-three-fiber-vs-three-js/)
- [Three.js WebGPU 2026](https://www.utsubo.com/blog/threejs-2026-what-changed)
- [Lottie vs Rive 2026](https://www.pkgpulse.com/blog/lottie-vs-rive-vs-css-animations-web-animation-formats-2026)
- [apidog MCP Servers for Claude Code](https://apidog.com/blog/top-10-mcp-servers-for-claude-code/)
- [NotebookLM MCP Integration](https://claudelab.net/en/articles/claude-ai/claude-notebooklm-mcp-research-automation-pipeline)
- [MCP Claude Code Docs](https://code.claude.com/docs/en/mcp)
- [Digital Agency Websites 2026](https://www.camgomersall.com/blog/best-digital-agency-websites)
- [Awwwards Agency Websites](https://www.awwwards.com/websites/design-agencies/)
- [Glassmorphism 2026 Guide](https://www.codeformatter.in/blog-glassmorphism-generator.html)
- [searchengineland Copywriting 2026](https://searchengineland.com/why-copywriting-is-the-new-superpower-in-2026-467281)
- [Globital White Label Copywriting AI](https://www.globitalmarketing.com/blog/white-label-copywriting-and-ai-how-agencies-are-staying-human-and-relevant/)
- [Envox Vícios de Linguagem IA 2026](https://envox.com.br/marketing-de-conteudo/vicios-linguagem-ia-2026-exemplos-reais/agencia-de-marketing-digital/trafego-pago/vendas/)
- [Primotech Micro-interactions 2026](https://primotech.com/ui-ux-evolution-2026-why-micro-interactions-and-motion-matter-more-than-ever/)
- [925 Studios AI Slop Guide](https://www.925studios.co/blog/ai-slop-web-design-guide)
- [Builder.io Best MCP Servers 2026](https://www.builder.io/blog/best-mcp-servers-2026)

---

## Sessão Inaugural — 08 de Abril de 2026

### Setup do Ecossistema de Agentes

O ecossistema de 20 agentes foi criado com sucesso:

**L1 — Opus 4.6 (5 líderes):**
- opus-ceo (Marina Luz) — Estratégia e orquestração
- opus-tech (Lucas Mendes) — Arquitetura e P0 bugs
- opus-design (Sofia Andrade) — Design system e UX
- opus-growth (Bruno Ferreira) — CRO e conversão
- opus-content (Ana Clara) — Copy e SEO de conteúdo

**L2 — Sonnet 4.6 (10 workers):**
- sonnet-dev-1 — Frontend/componentes
- sonnet-dev-2 — Backend/APIs
- sonnet-seo — SEO técnico
- sonnet-copy — Copywriting
- sonnet-debug — Debug e bugs
- sonnet-qa — QA e testes
- sonnet-research — Pesquisa de mercado
- sonnet-analytics — GA4 e tracking
- sonnet-ux — UX review
- sonnet-perf — Performance

**L3 — Haiku 4.5 (5 fast workers):**
- haiku-competitor — Análise concorrentes
- haiku-ideas — Geração de ideias
- haiku-review — Code review rápido
- haiku-data — Dados e contexto
- haiku-docs — Documentação

**Skills globais instaladas:**
- /squad-run — Sprint completo em paralelo
- /squad-meeting — Debate estruturado entre agentes
- /squad-debug — Time de debugging

---

*(novas entradas das sessões aparecerão aqui)*
