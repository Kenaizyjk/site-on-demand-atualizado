# DESIGN SYSTEM — On Demand Digital

## Princípios

- **Dark · Electric · Precise**
- Espaço negativo é sagrado — respira antes de adicionar
- Todo elemento tem propósito ou não existe
- Performance > estética quando há conflito

---

## Cores

```css
/* Background */
--bg-base:     #09090b;  /* Zinc 950 — fundo principal */
--bg-panel:    #0f0f12;  /* Painéis internos */
--bg-surface:  #18181b;  /* Cards, modais */
--bg-surface-2:#27272a;  /* Hover, inputs, bordas */

/* Acentos */
--accent-primary:   #8b5cf6;  /* Violet 500 — botões, destaques */
--accent-secondary: #06b6d4;  /* Cyan 500 — gradientes, glow */
--accent-pink:      #ec4899;  /* Pink 500 — accent terciário */

/* Texto */
--text-primary:   #f8fafc;  /* Quase branco */
--text-secondary: #cbd5e1;  /* Slate 300 */
--text-muted:     #71717a;  /* Zinc 500 */

/* Bordas */
--border:         #27272a;  /* Zinc 800 */
--border-accent:  rgba(139, 92, 246, 0.3); /* Violet com transparência */
```

---

## Tipografia

```
Display: Syne (Google Fonts)
  H1 hero:   Syne 800, clamp(4rem, 10vw, 9rem), tracking -0.04em, line-height 0.88
  H2 seção:  Syne 700, clamp(2rem, 4vw, 3.5rem), tracking -0.02em
  H3 card:   Syne 600, 1.5rem, tracking -0.01em

Body: Inter (Google Fonts, variável)
  Parágrafos: Inter 400, 1rem, line-height 1.7
  CTAs:       Inter 600, 0.9375rem, tracking 0.01em
  Labels:     Inter 600, 0.75rem, uppercase, tracking 0.06em
  Caption:    Inter 400, 0.8125rem, tracking 0.01em
```

---

## Animações

```
Timing permitidos:
  Hover/tap feedback:   160–220ms ease
  Modais/drawers:       240–360ms ease
  Scroll reveals:       400–600ms ease (máx 800ms)
  Stagger entre itens:  40–60ms delay

Proibido:
  - animate-pulse em múltiplos elementos simultâneos
  - Canvas pesado no thread principal
  - Gradiente animado em loop infinito em texto
  - Hover scale > 1.03
  - Animações sem prefers-reduced-motion fallback
```

---

## Grid

```
Container:   max-w-7xl, px-4 sm:px-6 lg:px-8, mx-auto
Section:     py-20 lg:py-28
Section SM:  py-12 lg:py-16

Bento Grid (serviços):
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  gap-4 md:gap-6

Cards:       rounded-2xl, border border-zinc-800/50
             hover:border-violet-500/30, transition 300ms
             hover:-translate-y-1.5
```

---

## Componentes Base

### Botão Primário
```css
bg-violet-600 hover:bg-violet-500
text-white font-semibold
px-6 py-3 rounded-xl
shadow-lg shadow-violet-500/25
hover:shadow-violet-500/40
transition-all duration-200
```

### Botão Ghost
```css
border border-zinc-700 hover:border-violet-500/50
text-zinc-300 hover:text-white
px-6 py-3 rounded-xl
bg-transparent hover:bg-zinc-900/50
transition-all duration-200
```

### Badge
```css
bg-violet-500/10 border border-violet-500/20
text-violet-300 text-xs font-semibold
px-3 py-1 rounded-full uppercase tracking-widest
```

### Card
```css
bg-zinc-900/50 border border-zinc-800/50
rounded-2xl p-6
hover:border-violet-500/30
hover:-translate-y-1.5
transition-all duration-300
```
