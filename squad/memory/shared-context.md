# CONTEXTO COMPARTILHADO — On Demand Digital
*Atualizado por: sonnet-qa*
*Data: 09 de Abril de 2026*

---

## Identidade do Projeto

**Empresa:** On Demand Digital
**Fundador:** Davi
**Público:** PMEs brasileiras (restaurantes, clínicas, lojas, serviços locais)
**Objetivo do site:** Gerar leads via WhatsApp
**URL de produção:** ondemanddigital.com.br
**Stack:** Next.js 15, TypeScript, Tailwind CSS, Vercel

---

## Estado Atual do Site

### Páginas Existentes

```
/                    → Home (página principal)
/sobre               → Sobre o Davi e a empresa
/servicos            → Listagem de serviços
/casos               → Cases de sucesso
/contato             → Diagnóstico gratuito
/blog                → Lista de posts
/blog/[slug]         → Post individual
/termos              → Termos de uso
/privacidade         → Política de privacidade
/obrigado            → Página pós-conversão
```

### Componentes Principais

```
hero-premium.tsx        → Hero da home
navigation.tsx          → Menu de navegação
footer.tsx              → Rodapé
value-proposition.tsx   → Seção de valor
testimonials.tsx        → Depoimentos
services-simple.tsx     → Grid de serviços
automation-n8n-showcase → Showcase n8n/automação
gmb-showcase.tsx        → Google Meu Negócio showcase
faq.tsx                 → FAQ accordion
final-cta.tsx           → CTA final da home
whatsapp-float.tsx      → Botão WhatsApp flutuante
blog-preview-home.tsx   → Preview do blog na home
```

---

## Decisões Ativas (não rever sem necessidade)

| ID | Decisão | Status |
|----|---------|--------|
| D001 | Violet como accent primary (#8b5cf6) | ✅ |
| D002 | Syne 800 + Inter 400/500 | ✅ |
| D003 | Sem canvas animado no hero | ✅ |
| D004 | WhatsApp como CTA primário | ✅ |
| D005 | Ordem das seções da home | ✅ |
| D006 | N8N Panel interativo | ✅ |
| D007 | Newsletter via Brevo | ✅ |
| D008 | Páginas Tier 2 criadas | ✅ |
| D009 | SEO system completo | ✅ |
| D010 | Bugs P0 corrigidos | ✅ |

---

## P0s Abertos (atualizar a cada sessão)

- [x] ~~footer.tsx — event handlers (onMouseEnter/onMouseLeave) em Server Component~~ → Fixed 09/04
- [x] ~~Blog author photo: ícone placeholder~~ → Fixed 09/04
- [x] ~~Home page fora da ordem D005~~ → Fixed 09/04

---

## O que foi feito na Sessão de 09/04/2026

### Bugs corrigidos
- `footer.tsx` — removidos 10 event handlers JS inline → substituídos por Tailwind hover classes (Server Component preservado)
- `app/blog/[slug]/page.tsx` — foto do Davi adicionada em 2 locais (header do post + sidebar do autor). Usando `DAVI_PHOTO` constant.

### Estrutura da Home (D005 implementado)
- Adicionados: `FounderStory` (pos 2), `Testimonials` (pos 3), `MiniCases` (pos 7)
- Removido: `AutomationN8NShowcase` (user insatisfeito — ver DQ001 em decisions-queue.md)

### Copy humanizada
- `founder-story.tsx` — reescrita completa. Headline mudou de "Da Frustração à Inovação" para "Já vi muita empresa boa perder cliente por causa disso."
- Stats mudaram de "Foco/Experiência/Presença" para "30+ negócios / 1:1 atendimento / 0 intermediários"
- `manifesto-strip.tsx` — font corrigida (Plus Jakarta Sans → Syne via `font-display`)

### CSS/Design
- `--glow-cyan`: 0.18 → 0.22 (aurora mais presente)
- `--glow-purple`: 0.14 → 0.18 (aurora mais presente)
- Cursor glow: 0.07 → 0.11 (mais visível no mouse)

### Ecossistema de agentes (sessão anterior)
- 20 agentes criados em squad/agents/
- 3 skills globais: /squad-run, /squad-meeting, /squad-debug
- Memória compartilhada em squad/memory/

## O que foi feito na continuação de 09/04/2026

### QA Tracking completo
- `data-track` adicionado a TODOS os CTAs WhatsApp do site (era QA P1):
  - `footer.tsx`: `footer-whatsapp-phone` (tel), `footer-whatsapp-cta` (CTA gratuito)
  - `faq.tsx`: `faq-whatsapp-cta`
  - `mini-cases.tsx`: `mini-cases-whatsapp-cta`
  - `app/contato/page.tsx`: `contato-whatsapp-cta`
  - `app/sobre/page.tsx`: `sobre-whatsapp-cta`
- Cobertura total: 13 pontos de tracking ativos no site

---

## Próximas Prioridades

1. Grain/noise overlay — textura premium (zero bundle, CSS puro)
2. Hero redesign baseado nos insights de pesquisa (copy humanizada, micro-interações)
3. Blog: 3 novos posts SEO local BH
4. Decisão sobre n8n panel (DQ001)
5. Hospedar foto do Davi localmente (DQ002)
6. Skills update com novos protocolos de copy
7. OG images dinâmicas via next/og
8. Cases individuais /casos/[slug]

---

## Métricas de Sucesso

| KPI | Meta | Status |
|-----|------|--------|
| Cliques WhatsApp/semana | +5/semana | Acompanhando |
| LCP | < 2.0s | Acompanhando |
| CLS | < 0.05 | Acompanhando |
| Posts indexados | 3 | Em andamento |

---

## WhatsApp Principal

```
Número: +55 31 [número do Davi]
Link base: https://wa.me/5531XXXXXXXXX
Pre-text hero: "Olá, vim pelo site e quero entender como funciona"
Pre-text blog: "Olá, li o artigo sobre [tema] e tenho interesse"
Pre-text contato: "Olá, quero fazer o diagnóstico gratuito"
```

---

## Notas para Agentes

- O cliente é conservador com gastos: priorize ROI claro
- PME não quer complexidade: comunicar simples sempre
- BH é o mercado primário, mas o site atende nacional
- Blog é importante para SEO de longo prazo — manter regularidade
