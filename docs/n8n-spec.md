# Especificação Ultra-Detalhada: Painel n8n no Site On Demand Digital

**Versão:** 1.0
**Data:** 2026-04-08
**Responsável:** Diretor Criativo Sênior
**Criticidade:** MÁXIMA — qualquer pessoa que use n8n real deve reconhecer esta interface imediatamente.

---

## PARTE 1 — 5 TEMPLATES REAIS DO N8N PARA MARKETING DIGITAL

### Template 1: Website Lead Management — Form → WhatsApp + Google Sheets
**URL de referência:** https://n8n.io/workflows/7424

**Nodes envolvidos (em ordem):**
1. `n8n Form Trigger` — laranja (#FF6D5A) com ícone de raio — capta dados do formulário
2. `Google Sheets` — verde (#339933 / verde G Suite) — salva lead na planilha
3. `IF` — laranja-amarelo (#FF9800) — verifica se número de telefone existe
4. `WhatsApp Business Cloud` — verde WhatsApp (#25D366) — envia mensagem ao lead
5. `Gmail` ou `Send Email` — vermelho/rosa — envia cópia para o time

**Fluxo:** Form submit → Salvar planilha → Verificar dados → WhatsApp automático + Email interno

**Relevância para On Demand:** Exatamente o fluxo que a agência vende para clínicas e restaurantes. Captura lead do site e dispara contato em segundos.

---

### Template 2: AI-Powered Lead Qualification com Scoring
**URL de referência:** https://n8n.io/workflows/3490

**Nodes envolvidos:**
1. `Webhook` — laranja (#FF6D5A) — recebe dados brutos do lead
2. `HTTP Request` — azul (#2196F3) — busca dados adicionais da empresa
3. `OpenAI` (ou AI Agent) — roxo (#7C3AED) — analisa e pontua o lead 1-10
4. `IF` — laranja (#FF9800) — ramifica: score alto (>7) vs baixo (<7)
5. `HubSpot` ou `Pipedrive` — vermelho/azul — cria contato no CRM (ramo A)
6. `Wait` — roxo escuro (#9C27B0) — aguarda 24h (ramo B)
7. `Send Email` — rosa (#E91E63) — email de nurturing para leads frios

**Fluxo:** Webhook → Enriquecimento → AI Score → Ramificação → CRM ou Nurturing

**Relevância:** Demonstra o uso de IA no processo de qualificação, diferencial da On Demand.

---

### Template 3: Lead Capture Multi-Etapa com Follow-up
**URL de referência:** https://n8n.io/workflows/2581

**Nodes envolvidos:**
1. `n8n Form Trigger` — laranja — captura email inicial
2. `Google Sheets` — verde — registra lead parcial
3. `Send Email` — rosa — envia 2° formulário por email
4. `n8n Form Trigger` (2°) — laranja — captura dados completos
5. `Google Sheets` (update) — verde — atualiza linha existente
6. `Slack` ou `WhatsApp` — verde — notifica time de vendas

**Fluxo:** Form 1 → Salvar parcial → Email com Form 2 → Completar perfil → Atualizar CRM → Notificar vendas

**Relevância:** Fluxo de captura progressiva, aumenta taxa de conversão sem sobrecarregar o lead.

---

### Template 4: Automação de Follow-up com WhatsApp + Schedule
**URL de referência:** https://n8n.io/workflows/8572

**Nodes envolvidos:**
1. `Schedule Trigger` — laranja claro (Trigger) — roda diariamente às 9h
2. `Google Sheets` — verde — lê lista de leads sem resposta
3. `IF` — laranja — verifica: lead tem mais de 48h sem contato?
4. `WhatsApp Business Cloud` — verde (#25D366) — envia follow-up
5. `Google Sheets` (update) — verde — marca como "follow-up enviado"
6. `Wait` — roxo — aguarda 3 dias
7. `Send Email` — rosa — email de reengajamento final

**Fluxo:** Agendamento diário → Ler leads dormentes → Verificar tempo → WhatsApp → Atualizar planilha → Aguardar → Email final

**Relevância:** Automação de follow-up que qualquer agência precisaria para clientes.

---

### Template 5: CRM Sync + Notificação de Novo Lead (ESCOLHIDO)
**Nodes envolvidos:**
1. `Webhook` — laranja (#FF6D5A) — recebe payload do formulário do site
2. `Code` (ou Edit Fields) — cinza/azul escuro — normaliza e limpa os dados
3. `Google Sheets` — verde — salva na planilha CRM
4. `IF` — laranja — horário comercial? (08:00 às 18:00, seg-sex)
5. `WhatsApp Business Cloud` — verde — mensagem imediata (ramo SIM)
6. `Wait` — roxo — aguarda até próximo dia útil (ramo NÃO)
7. `HTTP Request` — azul — atualiza CRM via API (Pipedrive/HubSpot)
8. `Send Email` — rosa — email de boas-vindas ao lead

**Fluxo:** Webhook → Normalizar dados → Planilha → Verificar horário → WhatsApp ou Espera → CRM → Email boas-vindas

**Relevância:** Workflow completo que combina todos os elementos que a On Demand Digital entrega para clientes.

---

## PARTE 2 — TEMPLATE ESCOLHIDO PARA IMPLEMENTAÇÃO

**Template 5 — "Lead Capture → CRM → Follow-up Inteligente"**

**Justificativa:**
- Representa fielmente o produto principal da On Demand Digital
- Possui ramificação IF (demonstra lógica condicional — feature impressionante para o visitante)
- Inclui WhatsApp + Google Sheets (as duas integrações mais desejadas pelo público-alvo)
- Tem nós suficientes para criar um canvas visualmente rico (7-8 nodes)
- A lógica de "horário comercial" é algo que todo dono de clínica/restaurante entende e deseja
- Mistura trigger, lógica, ação, espera e API — mostra a gama completa do n8n

---

## PARTE 3 — ESPECIFICAÇÃO ULTRA-DETALHADA DE UI

### 3.1 — Canvas Background (Dot Grid)

**Cor do fundo:** `#1b1b1f` (NÃO `#0d0d0d` nem `#18181b` — o n8n real é ligeiramente mais quente/acinzentado)

**Dot grid real do n8n:**
- Tipo: pontos circulares pequenos em grade regular (NÃO radial-gradient)
- Ponto: `rgba(255, 255, 255, 0.12)` de 1px de diâmetro
- Espaçamento: **20px × 20px** (o n8n usa GRID_SIZE = 20px confirmado no source)
- Implementação CSS correta:
  ```css
  background-color: #1b1b1f;
  background-image: radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px);
  background-size: 20px 20px;
  ```
- O fundo atual usa `#0d0d0d` com `backgroundSize: "24px 24px"` — AMBOS ERRADOS

---

### 3.2 — Barra Superior (Header / Top Bar)

**Cor:** `#181818` a `#1f1f1f` (quase preto, NOT `#1c1c1e` que é iOS-style)

**Estrutura real da top bar do n8n (da esquerda para direita):**

1. **Breadcrumb de navegação** (NÃO traffic lights de macOS):
   - Ícone n8n logo (rosa/salmão `#EA4B71`) — 18×18px
   - `>` separador em cinza escuro
   - Nome da pasta/projeto: "My workflows" em cinza médio
   - `>` separador
   - Nome do workflow em branco/claro, editável (clique para renomear)

2. **Status indicators** (centro-esquerda):
   - Badge "Saved" em verde claro quando salvo
   - Badge "Saving..." quando editando

3. **Botões à direita:**
   - `Share` — outline, cinza claro
   - `Execute workflow` — botão LARANJA (#FF6D5A — mesmo laranja do n8n brand), com ícone de play ▶
   - **IMPORTANTE:** O botão NÃO É LARANJA QUEIMADO. É o laranja brand exato do n8n: `hsl(6.9, 100%, 67.6%)` ≈ `#ff6b6b` ou `#FF6D5A`

**O que o código atual erra:**
- Usa traffic lights de macOS (bolinha vermelha/amarela/verde) — NUNCA existiu no n8n
- Botão de run em `#ea580c` (laranja Tailwind) em vez do laranja brand `#FF6D5A` do n8n
- Não tem breadcrumb de navegação real
- Tem texto "Self-hosted" na barra inferior (ok, mas secundário)

---

### 3.3 — Toolbar (Segunda barra — abaixo do header)

**IMPORTANTE:** O n8n real NÃO tem uma toolbar com botões de texto como "Selecionar", "Mover", "Zoom+", "Zoom-".

**A toolbar real do n8n tem:**
- Lado esquerdo: ícones de ferramenta (pointer/select, hand/pan) — ícones SVG pequenos, sem label de texto
- Lado direito: contador de zoom (ex: "100%") com botões + e - em ícone
- Botão "Fit to screen" (ícone de expand/compress)
- Botão de minimap toggle
- Indicador de nodes selecionados (aparece só quando algo está selecionado)
- Fundo: mesma cor do canvas ou ligeiramente diferente (`#18181c`)
- Altura: ~36px

**O código atual tem:**
- Botões de texto "Selecionar", "Mover", "Zoom+", "Zoom-" — FALSO, não existe assim no n8n
- Deve usar ícones SVG compactos

---

### 3.4 — Node Card Design (Formato Real)

**Dimensões reais do n8n (medidas do source code / inspeção):**
- **Largura:** 100px (nodes compactos) ou ~200px (nodes padrão no novo canvas)
- **Altura:** ~56px para nodes padrão (menor que o atual de 62px)
- **Border-radius:** `8px` (confirmado pelo design system: `--border-radius-base: 4px` para componentes, mas nodes usam 8px)

**Estrutura interna de um node no n8n real:**

```
┌──────────────────────────────────────┐  ← border: 1px solid #2d2d30
│ ░ │ [ICON]  Node Label              │  ← icon area: 36-40px wide, cor do tipo
│   │         Subtítulo/operation     │
└──────────────────────────────────────┘
   ↑                    ↑
input port         output port
(círculo vazio)    (círculo vazio)
```

**Detalhes de cada elemento:**

**Ícone/Strip lateral:**
- Largura: ~36px (o atual tem 44px — MUITO LARGO)
- O strip lateral NÃO é a largura total do ícone — é apenas uma tira colorida fina (~4-6px) no lado ESQUERDO, e o ícone fica no centro do card sobre fundo escuro
- **CORREÇÃO CRÍTICA:** No n8n real, o ícone NÃO tem um bloco colorido grande. Tem uma borda colorida fina na esquerda + o ícone centralizado dentro do card com fundo escuro uniforme

**Fundo do card:**
- Dark mode: `#252529` ou `#2a2a2e` — cinza escuro neutro
- Border: `1px solid #3a3a3c` (cinza escuro, quase invisível)
- Border ativa/selecionada: `2px solid #FF6D5A` (laranja do node type)

**Texto do label:**
- Fonte: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` — NÃO monospace
- Label principal: 13px, weight 500 (medium), cor: `#e0e0e0` quase branco
- Subtítulo/operation: 11px, weight 400, cor: `#909096`

**Status badge (execução):**
- Sucesso: círculo verde `#22c55e` com checkmark branco pequeno, posicionado NO TOPO DIREITO do card (não dentro)
- Erro: círculo vermelho `#ef4444` com X branco
- Running: spinner giratório circular, mesma cor do tipo do node
- O badge fica FORA do card, sobreposto no canto superior direito

**Contagem de dados executados:**
- Badge cinza com número: ex. `"3"` em cinza, sobreposto no canto inferior direito
- Indica quantos items passaram pelo node nessa execução

---

### 3.5 — Cores Exatas por Tipo de Node

**TODAS as cores de nodes no n8n são definidas pelo campo `color` do node's JSON descriptor:**

| Tipo de Node | Cor Correta | Hex |
|---|---|---|
| **Trigger / Webhook** | Laranja n8n brand | `#FF6D5A` |
| **Schedule Trigger** | Laranja n8n brand | `#FF6D5A` |
| **n8n Form Trigger** | Laranja n8n brand | `#FF6D5A` |
| **HTTP Request** | Azul claro | `#2196F3` |
| **IF (Conditional)** | Amarelo-laranja | `#FF9800` ← correto no código atual |
| **Switch** | Amarelo | `#FFC107` |
| **Wait** | Roxo/lilás | `#9C27B0` ← correto |
| **Code** | Cinza médio | `#607D8B` ou `#5C6BC0` |
| **Google Sheets** | Verde Google | `#0F9D58` (não `#4CAF50`) |
| **WhatsApp Business** | Verde WhatsApp | `#25D366` ← correto |
| **Send Email / Gmail** | Vermelho Google | `#D93025` ou `#EA4335` (não `#E91E63`) |
| **OpenAI / AI** | Verde escuro ou cinza | `#74AA9C` (verde OpenAI) ou roxo |
| **HubSpot** | Laranja HubSpot | `#FF7A59` |
| **Merge** | Azul médio | `#1A73E8` |
| **Edit Fields (Set)** | Laranja médio | `#FF9800` |
| **Error Trigger** | Vermelho | `#F44336` |

**IMPORTANTE:** Todos os triggers são a mesma cor laranja (`#FF6D5A`) com um ícone de raio ⚡ no canto — isso é uma marca visual do n8n para indicar "trigger node".

---

### 3.6 — Portas de Conexão (Handles/Ports)

**Design real do n8n:**
- Forma: círculo
- Diâmetro: **8px** (o atual usa 5px — muito pequeno)
- Borda: `1.5px solid #5c5c66` (cinza médio) quando idle
- Preenchimento: transparente (vazio) quando idle — NÃO preenchido de preto
- Hover: fundo branco + borda colorida do tipo
- Porta de OUTPUT do IF: tem dois pontos — **"true"** (verde `#22c55e`) e **"false"** (vermelho/laranja)
- Labels nas portas: "true" em verde e "false" em laranja/vermelho, 9px, posicionados FORA do card

**Posicionamento:**
- Input: centro-esquerdo do card, exatamente na borda
- Output: centro-direito do card, exatamente na borda
- Para IF com dois outputs: vertically stacked, com labels "true"/"false" ou "1"/"2"

---

### 3.7 — Linhas de Conexão (Edges/Connections)

**Design real:**
- Cor default (idle): `#5c5c66` — cinza médio (NÃO `#52525b`)
- Espessura: `1.5px` (NÃO 2px)
- Tipo: Bezier suave — control points a 50% da distância horizontal
- Durante execução ativa: a linha fica colorida na cor do node de origem
- Com dados passados: linha fica levemente mais brilhante
- Arrowhead: pequena seta simples na ponta, mesma cor da linha, ~6px

**Animação do dot:**
- No n8n real, durante execução, a linha pulsa com um efeito de `stroke-dashoffset` animado (como uma linha pontilhada que se move)
- NÃO é um único dot que percorre a linha — é um efeito de "marching ants" ou pulse na própria linha
- Dot de execução: `rgba(255, 255, 255, 0.8)`, raio 4px, move-se ao longo do caminho

---

### 3.8 — Janela de Execução / Log Panel

**No n8n real, existe um painel inferior de logs:**
- Abre automaticamente ao executar
- Fundo: `#18181c`
- Mostra: timestamp, status (success/error), items processados por node
- Cada linha: ícone colorido do node + nome + resultado + tempo de execução
- Ex: `✓ Webhook — 1 item — 12ms`
- Botão "Open execution" para ver detalhe
- Painel de ~200px de altura no fundo

---

### 3.9 — Status Bar Inferior

**Conteúdo real:**
- Lado esquerdo: status de execução com dot colorido
- Centro: nome do workflow ou nada
- Lado direito: versão do n8n, número de nodes, zoom %

---

### 3.10 — Animação de Execução (Especificação Completa)

**Sequência real de estados visuais:**

1. **Idle (antes de executar):**
   - Todos os nodes com borda `#3a3a3c`
   - Portas cinza médio
   - Linhas cinza `#5c5c66`
   - Sem badges

2. **Trigger disparado:**
   - Node trigger fica com borda colorida (cor do tipo) + leve glow
   - Spinner aparece NO TOPO DO CARD (sobreposto, não dentro)
   - Linha de saída do trigger começa a animar

3. **Node em execução ("running"):**
   - Borda do card: `2px solid [cor-do-tipo]` com box-shadow `0 0 0 3px [cor-do-tipo]20`
   - Spinner no canto superior: `14px`, gira continuamente
   - Linha animada chegando no node (efeito de marcha)

4. **Node concluído com sucesso:**
   - Badge verde (`#22c55e`) no canto SUPERIOR DIREITO, fora do card: círculo 20px com ✓
   - Badge de contagem: cinza pequeno no CANTO INFERIOR DIREITO com número de items
   - Borda retorna ao normal (ou fica levemente verde)
   - Animação: badge entra com scale 0.5 → 1.0, duração 200ms ease-out

5. **Node com erro:**
   - Badge vermelho (`#ef4444`) no canto superior direito com ✕
   - Border: `2px solid #ef4444`
   - Glow vermelho sutil

6. **Tempos recomendados para a animação do site:**
   - Node inicial ativo: 0ms
   - Edge animation (node→node): 600-800ms
   - Node "thinking" (spinner): 400-800ms por node
   - Badge entrada: 200ms
   - Próximo node começa: 200ms após badge aparecer
   - Total da sequência: ~8-12 segundos para 6 nodes

---

## PARTE 4 — WORKFLOW A IMPLEMENTAR (SPEC COMPLETA)

### Workflow: "Lead → Qualificação → CRM → Follow-up"

**Nodes (da esquerda para direita, layout horizontal):**

```
[Webhook] → [Google Sheets] → [IF: Horário?] → [WhatsApp]    → [HTTP: CRM]
                                              ↘ [Wait 24h]   ↗
```

**Detalhes de cada node:**

#### Node 1 — Webhook
- **Tipo:** Trigger (laranja `#FF6D5A`)
- **Label:** "Webhook"
- **Subtítulo:** "Novo lead do site"
- **Ícone:** Raio ⚡ em branco (SVG path real do n8n: dois triângulos sobrepostos formando raio)
- **Estado inicial:** idle, borda fina cinza
- **Posição:** x:60, y:200

#### Node 2 — Google Sheets
- **Tipo:** Action (verde `#0F9D58` — verde Google real, não `#4CAF50`)
- **Label:** "Google Sheets"
- **Subtítulo:** "Salvar lead"
- **Ícone:** Grid 3×3 em branco (representando planilha)
- **Posição:** x:280, y:200

#### Node 3 — IF
- **Tipo:** Core/Logic (laranja `#FF9800`)
- **Label:** "IF"
- **Subtítulo:** "Horário comercial?"
- **Ícone:** Losango/diamond com ? dentro, ou dois caminhos divergindo
- **Dois outputs:** "true" (verde, para cima) e "false" (laranja/vermelho, para baixo)
- **Posição:** x:500, y:200

#### Node 4 — WhatsApp Business Cloud
- **Tipo:** Action (verde `#25D366`)
- **Label:** "WhatsApp"
- **Subtítulo:** "Enviar mensagem"
- **Ícone:** Balão de chat com telefone (SVG do WhatsApp)
- **Posição:** x:720, y:100
- **Conectado a:** IF (output true) → WhatsApp → HTTP Request

#### Node 5 — Wait
- **Tipo:** Core (roxo `#9C27B0`)
- **Label:** "Wait"
- **Subtítulo:** "Até amanhã 9h"
- **Ícone:** Relógio com ponteiros
- **Posição:** x:720, y:300
- **Conectado a:** IF (output false) → Wait → HTTP Request

#### Node 6 — HTTP Request
- **Tipo:** Core (azul `#2196F3`)
- **Label:** "HTTP Request"
- **Subtítulo:** "Atualizar CRM"
- **Ícone:** Seta apontando para direita dentro de retângulo arredondado
- **Posição:** x:940, y:200

---

## PARTE 5 — CHECKLIST DE REALISMO (20 ITENS OBRIGATÓRIOS)

1. **Fundo do canvas:** `#1b1b1f` com dots de `1px`, espaçamento `20px × 20px` — NÃO `24px`
2. **SEM traffic lights de macOS** — o n8n NUNCA teve esse padrão de botões na janela
3. **Breadcrumb real:** logo n8n rosa → nome do projeto → nome do workflow (editável)
4. **Botão Execute:** laranja brand n8n `#FF6D5A` ou `hsl(6.9, 100%, 67.6%)` — NÃO `#ea580c`
5. **Toolbar:** ícones SVG de ferramentas (select pointer, pan hand) — NÃO textos "Selecionar"/"Mover"
6. **Node card:** fundo `#252529`, borda `1px solid #3a3a3c`, border-radius `8px`
7. **Strip do ícone:** MÁXIMO 36px de largura (atual tem 44px — 22% largo demais)
8. **Fonte do label:** sans-serif (Inter/Segoe UI), NÃO monospace
9. **Fonte do subtítulo:** sans-serif, 11px, cinza `#909096`
10. **Badge de sucesso:** círculo verde 20px com ✓, posicionado FORA do card no canto superior direito
11. **Badge de contagem de items:** badge pequeno cinza no canto inferior direito (ex: "3 items")
12. **Portas (handles):** diâmetro 8px (atual: 5px — muito pequeno), borda cinza, interior vazio
13. **Labels "true"/"false"** nas portas do IF node, visíveis no canvas fora do card
14. **Cor do Google Sheets:** `#0F9D58` (verde Google real) — NÃO `#4CAF50` (Material green genérico)
15. **Cor de Send Email/Gmail:** `#EA4335` vermelho Google — NÃO `#E91E63` (Material pink)
16. **Linhas de conexão:** `1.5px`, cor `#5c5c66`, NÃO `#52525b` com `2px`
17. **Arrowhead:** pequena seta filled, ~6px, na ponta da linha (o atual tem 8px e é triangulo grosso)
18. **Animação de execução:** linha pulsa/marcha (stroke-dashoffset), NÃO apenas um dot solitário
19. **Spinner de execução:** posicionado SOBREPOSTO no canto superior do card, NÃO interno à direita
20. **Painel de log inferior:** mostrar timeline de execução: "Webhook → 1 item → 8ms" para cada node

---

## PARTE 6 — CRÍTICA BRUTAL DO CÓDIGO ATUAL

### O que está CORRETO (manter):

- Estrutura geral SVG + foreignObject para os nodes — abordagem válida
- Animação com requestAnimationFrame para o dot bezier — bom mecanismo
- IntersectionObserver para auto-start — correto
- Cores do IF (`#FF9800`), Wait (`#9C27B0`), WhatsApp (`#25D366`) — aceitáveis
- Lógica de dois outputs do IF node — correto conceitualmente
- Bezier curves para edges — correto
- Loop após conclusão com setTimeout — correto para UX

### O que está ERRADO (corrigir):

**CRÍTICO — Falso para qualquer usuário n8n:**

1. **Traffic lights de macOS (🔴🟡🟢):** NUNCA existiu no n8n. Isso grita "fiz uma janela genérica de Mac". Remover imediatamente.

2. **Node card com fundo `#18181b`:** O canvas background é `#18181b` no Tailwind (zinc-900), mas os CARDS do n8n têm fundo diferente, mais acinzentado. O código atual faz cards e fundo com a mesma cor base — visualmente confuso e incorreto.

3. **Strip do ícone de 44px:** No n8n real, o ícone ocupa ~36px. Com 44px o card parece desproporcional e "gordo" demais. Ao lado de um canvas real, parece um mock barato.

4. **Fonte `monospace` nos labels:** O n8n usa Inter (sans-serif) em toda a interface. Usar monospace no label do node é um erro visível que denuncia que é fake para qualquer usuário n8n.

5. **Botão Run em `#ea580c` (laranja Tailwind):** O n8n tem laranja próprio `#FF6D5A`. São tons diferentes. O `#ea580c` é alaranjado-queimado (Tailwind orange-600), enquanto o n8n usa um coral-laranja mais suave.

6. **Toolbar com textos:** "Selecionar", "Mover", "Zoom+", "Zoom-" — isso não existe no n8n. A toolbar real tem ícones silhueta (SVG), não botões com texto. Parece uma UI genérica de editor web dos anos 2010.

7. **Badge de "done" interno (✓ dentro do card à direita):** No n8n real, o checkmark de sucesso é um BADGE CIRCULAR VERDE sobreposto no canto SUPERIOR do card, fora dos limites do card. O atual coloca um simples ✓ dentro do card à direita — completamente errado.

8. **Spinner interno à direita:** No n8n real, o spinner de execução aparece sobreposto no topo do card, não alinhado internamente à direita. O posicionamento atual é de uma UI de lista, não de canvas.

9. **Cor `#4CAF50` para Google Sheets:** O Google Sheets usa verde `#0F9D58` (mais escuro e mais saturado). `#4CAF50` é o verde genérico do Material Design — qualquer pessoa que usa Google Workspace nota a diferença.

10. **Cor `#E91E63` para email:** É o pink do Material Design. Gmail usa `#EA4335` (vermelho Google real). Erro que qualquer dev nota.

11. **Ícone do Webhook (dois triângulos/diamante):** O SVG atual tenta representar algo como "relay/conectores" mas o ícone do Webhook no n8n é especificamente um gancho/hook simplificado ou um raio. O atual é ambíguo e não reconhecível.

12. **Canvas background: `#0d0d0d` com `24px × 24px`:** Muito escuro (parece tela de hacker) e espaçamento errado (n8n usa 20px × 20px). Resulta em um grid visivelmente diferente do real.

13. **Sem badge de "N items processados":** O n8n sempre mostra quantos items passaram por cada node após execução. Sem isso, parece que a execução foi abstrata, não processando dados reais.

14. **Status bar inferior:** Mostra "n8n v1.x · Self-hosted" — o real mostra informações de conexão, número de nodes, zoom. O formato atual é genérico.

15. **Sem nenhum "sticky note" visual:** O n8n é famoso por sticky notes amarelos no canvas. Adicionar pelo menos 1-2 sticky notes comentando partes do workflow aumentaria drasticamente o realismo.

**MODERADO — Afeta realismo mas menos perceptível:**

16. Edge color `#52525b` (zinc-600) vs real `#5c5c66` — diferença sutil mas mensurável
17. Edge thickness 2px vs real 1.5px — linha mais grossa que o real
18. Arrowhead triangulo grande (8px) vs real seta menor (6px)
19. Border-radius `8px` nos cards — este está correto
20. NODE_H de 62px — deveria ser ~56px

---

## PARTE 7 — LISTA DE 20 MUDANÇAS PARA OS ENGENHEIROS

**Ordem de prioridade (1 = mais impactante para realismo):**

1. **REMOVER traffic lights** — substituir por breadcrumb: `[n8n logo] > My Workflows > Lead Automation`

2. **CORRIGIR canvas background** — mudar de `#0d0d0d` para `#1b1b1f`, e backgroundSize de `24px 24px` para `20px 20px`

3. **CORRIGIR fonte dos labels** — trocar `fontFamily: "monospace"` por `fontFamily: "'Inter', -apple-system, sans-serif"` em TODOS os textos internos dos nodes

4. **REDUZIR strip do ícone** — de 44px para 36px de largura

5. **CORRIGIR cor do botão Execute** — de `#ea580c` para `#FF6D5A`

6. **SUBSTITUIR toolbar** — remover botões de texto, implementar ícones SVG de ferramentas (pointer icon + hand/pan icon) + zoom %

7. **IMPLEMENTAR badge de sucesso sobreposto** — círculo verde 20px no canto SUPERIOR DIREITO DO CARD (posicionado fora do foreignObject, no SVG), com scale animation 0.5→1.0

8. **IMPLEMENTAR badge de items** — badge cinza `"1 item"` no canto INFERIOR DIREITO do card, aparece junto com o badge de sucesso

9. **MOVER spinner para topo do card** — remover spinner interno à direita, adicionar spinner SVG posicionado sobreposto no topo (y: node.y - 8, x: node.x + NODE_W/2)

10. **CORRIGIR cor Google Sheets** — de `#4CAF50` para `#0F9D58`

11. **CORRIGIR cor Email/Gmail** — de `#E91E63` para `#EA4335`

12. **AUMENTAR handles/ports** — de radius 5 para radius 8

13. **ADICIONAR labels "true"/"false" nas portas do IF** — texto SVG de 9px posicionado fora do card, acima/abaixo das portas respectivas

14. **CORRIGIR linhas de conexão** — strokeWidth de 2 para 1.5, cor de `#52525b` para `#5c5c66`

15. **REFINAR arrowhead** — reduzir de 8px para 6px, usar `path` em vez de `polygon` para seta mais limpa

16. **ADICIONAR painel de log inferior** — barra de ~80px abaixo do canvas com timeline de execução: lista de nodes completados com tempo e items processados

17. **CORRIGIR ícone do Webhook** — SVG de raio ⚡ limpo (não o símbolo atual de "relay")

18. **ADICIONAR sticky note** — retângulo amarelo `#F5D565`, ~120×80px, no canto do canvas com texto como "// Lead qualificado → enviar para time"

19. **AJUSTAR NODE_H** — de 62 para 56px (mais compacto como o real)

20. **IMPLEMENTAR animação de linha** — substituir o dot único por um efeito de `stroke-dasharray` + `stroke-dashoffset` animado na própria linha (marching ants), mais fiel ao n8n real

---

## REFERÊNCIAS

- [Navigating the editor UI | n8n Docs](https://docs.n8n.io/courses/level-one/chapter-1/)
- [Node UI design | n8n Docs](https://docs.n8n.io/integrations/creating-nodes/plan/node-ui-design/)
- [n8n Design System Colors | DeepWiki](https://deepwiki.com/n8n-io/n8n-design-system/4.2-colors)
- [Workflow Canvas and Node Management | n8n-io/n8n | DeepWiki](https://deepwiki.com/n8n-io/n8n/6.2-workflow-canvas-and-node-management)
- [n8n 2024 in Review | Blog](https://blog.n8n.io/2024-in-review/)
- [n8n Community — Canvas Beta Testing](https://community.n8n.io/t/help-us-test-the-new-n8n-canvas-beta/60070)
- [Lead Management templates — n8n.io](https://n8n.io/workflows/7424-website-lead-management-send-contact-form-submissions-to-whatsapp-and-google-sheets/)
- [Node types | n8n Docs](https://docs.n8n.io/integrations/builtin/node-types/)
- [Core nodes | n8n Docs](https://docs.n8n.io/integrations/builtin/core-nodes/)
