# Plano de Tracking — On Demand Digital

## Visão Geral

GTM Container ID: **GTM-5NJ3XP3G**
Vercel Analytics: ativo via `@vercel/analytics/next`
Implementação: `components/analytics-tracker.tsx` + `lib/ga-events.ts`

---

## Eventos Implementados

| Evento GA4 | Trigger | Params principais | Prioridade | Implementação |
|---|---|---|---|---|
| `session_start` | Primeiro mount do app | `page_title`, `referrer`, `page_path` | P0 | analytics-tracker (useEffect, uma vez por sessão) |
| `whatsapp_click` | Clique em qualquer link `wa.me` | `source`, `event_label`, `page_path`, `event_category: conversion` | P0 | analytics-tracker (click delegation via `document.addEventListener`) |
| `scroll_depth` | Scroll 25 / 50 / 75 / 90 / 100 % | `depth`, `page` | P0 | analytics-tracker (scroll event + thresholds) |
| `scroll_25_percent` | Scroll ≥ 25 % | `page` | P0 | analytics-tracker |
| `scroll_50_percent` | Scroll ≥ 50 % | `page` | P0 | analytics-tracker |
| `scroll_75_percent` | Scroll ≥ 75 % | `page` | P0 | analytics-tracker |
| `scroll_100_percent` | Scroll ≥ 95 % | `page` | P0 | analytics-tracker |
| `section_viewed` | IntersectionObserver (threshold 30 %) | `section_id`, `page` | P1 | analytics-tracker |
| `faq_opened` | Clique em item de FAQ | `question`, `page` | P1 | analytics-tracker (click delegation em `[data-faq]`) |
| `newsletter_submit` | Submit do form de newsletter | `source`, `page`, `event_category: conversion` | P0 | Chamar `trackNewsletterSubmit()` no handler do form |
| `time_on_page` (milestones) | Timers: 30s / 60s / 120s / 300s | `duration_seconds`, `page` | P1 | analytics-tracker (setTimeout) |
| `time_on_page` (exato) | `visibilitychange` → hidden | `seconds`, `page` | P1 | analytics-tracker (visibilitychange) |
| `page_view` | Navegação SPA (pathname muda) | `page_path`, `page_title` | P0 | GTM automático via dataLayer push |

---

## Atributos `data-track` por Componente

| Componente | Atributo | Uso no GTM |
|---|---|---|
| `hero-premium.tsx` — botão principal | `data-track="hero-whatsapp-cta"` | Trigger: clique em elemento com esse atributo |
| `final-cta.tsx` — botão CTA | `data-track="final-cta-whatsapp"` | Trigger: clique |
| `whatsapp-float.tsx` — botão flutuante desktop | `data-track="float-whatsapp"` | Trigger: clique |
| `whatsapp-sticky-bar.tsx` — barra mobile | `data-track="sticky-whatsapp"` | Trigger: clique |
| `navigation.tsx` — botão "Agendar Diagnóstico" (desktop + mobile) | `data-track="nav-cta"` | Trigger: clique |

---

## Seções Monitoradas pelo IntersectionObserver

| Seletor CSS | section_id enviado |
|---|---|
| `#servicos` | `servicos` |
| `#como-trabalhamos` | `como-trabalhamos` |
| `#blog` | `blog` |
| `#contato` | `contato` |
| `#faq` | `faq` |

---

## Configuração do GTM

### Tags recomendadas

1. **GA4 Configuration Tag**
   - Tipo: Google Analytics: GA4 Configuration
   - Measurement ID: G-XXXXXXXXXX (inserir ID do GA4)
   - Trigger: All Pages

2. **WhatsApp Click — Conversão**
   - Tipo: GA4 Event
   - Nome do evento: `whatsapp_click`
   - Trigger: Click — Links contendo `wa.me`
   - Ou: Click — Element Attribute `data-track` contains `whatsapp`

3. **Scroll Depth**
   - Tipo: GA4 Event
   - Nome: `scroll_depth`
   - Trigger: disparado automaticamente pelo `analytics-tracker.tsx` (não precisa de trigger GTM extra)

### Variáveis úteis no GTM
- `{{Click URL}}` — captura URL do link clicado
- `{{Page Path}}` — caminho da página atual
- `{{Click Element Attribute - data-track}}` — valor do atributo de tracking

---

## Funções Disponíveis em `lib/ga-events.ts`

```typescript
trackWhatsAppClick(source: string)      // P0 — conversão
trackScrollDepth(depth: number)         // P0 — engagement
trackSectionView(sectionId: string)     // P1 — engagement
trackFAQOpen(question: string)          // P1 — content
trackNewsletterSubmit(source: string)   // P0 — conversão
trackPageView(path: string)             // P0 — navegação SPA
trackTimeOnPage(seconds: number)        // P1 — engagement
trackSessionStart()                     // P0 — session
trackEvent(name, params)               // genérico
```

---

## Próximos Passos

### Google Ads
- [ ] Importar evento `whatsapp_click` como conversão principal no Google Ads
- [ ] Criar conversão de "Diagnóstico agendado" ligada ao evento `whatsapp_click` com `source: final-cta-whatsapp`
- [ ] Configurar valor de conversão estimado por lead

### GA4
- [ ] Marcar `whatsapp_click` como evento de conversão no GA4
- [ ] Marcar `newsletter_submit` como evento de conversão
- [ ] Criar audience "Engajados": visitaram ≥ 2 páginas + scroll ≥ 50 %
- [ ] Criar audience "Alta intenção": clicaram em WhatsApp mas não converteram (remarketing)
- [ ] Criar audience "Leitores de blog": visualizaram seção `#blog`

### Remarketing
- [ ] Criar audience no GA4 para usuários que chegaram de tráfego pago e NÃO clicaram em WhatsApp
- [ ] Vincular GA4 ao Google Ads para importar audiences
- [ ] Configurar campanha de remarketing para audiences de alta intenção

### Análise
- [ ] Criar dashboard no Looker Studio com funil: session_start → section_viewed → scroll_75_percent → whatsapp_click
- [ ] Monitorar taxa de abandono por seção usando `section_viewed` e `time_on_page`
