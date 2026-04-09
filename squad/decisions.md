# LOG DE DECISÕES — On Demand Digital

*Atualizado em: 08 de Abril de 2026*

---

## D001 — Paleta de Cores

**Decisão:** Manter `#09090b` como base. Trocar acento primário de Cyan para Violet `#8b5cf6`.
Cyan `#06b6d4` permanece como acento secundário e em gradientes.

**Justificativa:** Violet diferencia de agências tech genéricas. Cyan permanece como identidade.
**Quem decidiu:** Sofia (Design) + Research Agent 1
**Status:** ✅ Implementar

---

## D002 — Tipografia

**Decisão:** Syne 800 (display) + Inter 400/500 (body). Google Fonts via `next/font`.
**Fallback futuro:** Clash Display na v2.
**Justificativa:** Syne é Google Fonts (zero fricção). Clash Display requer `next/font/local`.
**Quem decidiu:** Síntese entre Sofia e Research Agent
**Status:** ✅ Implementar

---

## D003 — Canvas de Partículas no Hero

**Decisão:** Remover canvas animado do hero no MVP.
**Justificativa:** Mata LCP em mobile. Ricardo + Lucas com dados.
**Quem decidiu:** Ricardo (COO) + Lucas (Tech) — venceram sobre Sofia (Design)
**Status:** ✅ Implementar — substituir por CSS gradient estático

---

## D004 — CTA Principal

**Decisão:** WhatsApp como CTA primário. Formulário apenas como alternativa secundária no footer.
**Texto do CTA hero:** "Quero entender como funciona"
**Link:** `https://wa.me/5531XXXXXXXX?text=Olá%2C+vim+pelo+site+...`
**Justificativa:** 88% dos brasileiros preferem mensagens. PME já usa WhatsApp para tudo.
**Quem decidiu:** Bruno (Growth) + Research Agent 2
**Status:** ✅ Implementar

---

## D005 — Ordem das Seções na Home

**Decisão:** Nova ordem:
1. Hero
2. Fundador (move de posição 7 para 2 — humaniza antes da tecnologia)
3. Depoimentos (move de 8 para 3 — social proof antes de features)
4. Serviços (Bento Grid)
5. Como Trabalhamos (consolida AIStack + N8N + GMB em 1 seção)
6. N8N Visual Panel (interativo, aberto no site)
7. Mini-Cases com números
8. Blog Preview
9. FAQ
10. CTA Final

**Justificativa:** Marina (CEO): "humanize antes de mostrar tecnologia"
**Quem decidiu:** Marina (CEO) + pesquisa de estrutura
**Status:** ✅ Implementar

---

## D006 — N8N Panel

**Decisão:** Criar visualização interativa do workflow n8n diretamente no site (não iframe).
Mostrar um fluxo real de automação animado com SVG/React, dark-themed.
**Justificativa:** "Mostrar o painel aberto no site para a pessoa ver" — instrução do cliente.
**Quem decidiu:** CEO + instrução direta do cliente
**Status:** ✅ Implementar — novo componente `AutomationFlow`

---

## D007 — Newsletter

**Decisão:** Implementar sistema de newsletter com:
- Componente de assinatura na home e no blog
- API route `/api/subscribe`
- Integração via Brevo (gratuito até 300 emails/dia)
**Justificativa:** Captura leads que não convertem via WhatsApp
**Quem decidiu:** Bruno (Growth) + CEO
**Status:** ✅ Implementar

---

## D008 — Páginas Tier 2 (imediato)

**Decisão:** Criar as 4 páginas prioritárias:
- `/sobre` — história do Davi, metodologia, valores
- `/casos` — listagem + casos individuais
- `/contato` — página de diagnóstico gratuito
- `/servicos` — overview de serviços

**Justificativa:** Completa o "loop de confiança" do visitante
**Quem decidiu:** Consenso Ricardo + Marina + Research
**Status:** ✅ Implementar

---

## D009 — SEO System

**Decisão:** Implementar sistema SEO completo:
- Keywords mapeadas por página e intenção de busca
- Schema.org atualizado e completo
- Sitemap regenerado com apenas rotas existentes
- OG images geradas via `next/og`
- Blog com meta auto-gerada de conteúdo

**Justificativa:** 57% dos leads B2B vêm de SEO orgânico
**Quem decidiu:** Lucas (Tech) + Research Agent
**Status:** ✅ Implementar

---

## D010 — Bugs P0 (corrigir antes de tudo)

**Decisão:** Corrigir imediatamente:
1. Fontes não aplicadas no layout.tsx
2. GTM bloqueando rendering
3. Viewport como meta manual (Next.js 16+)
4. `recharts` sem uso — remover
5. `"use client"` desnecessário no footer

**Justificativa:** Performance impacta conversão diretamente
**Quem decidiu:** Lucas (Tech) + Worker 2
**Status:** ✅ Em implementação
