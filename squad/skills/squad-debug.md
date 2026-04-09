# Skill: /squad-debug
**Tipo:** Time de debugging especializado
**Descrição:** Ativa o time técnico para diagnosticar e resolver um bug específico.

---

## O que esta skill faz

Forma uma equipe dedicada de debug com especialistas técnicos para resolver problemas de forma sistemática e rápida.

---

## Instrução para o Orquestrador

Quando o usuário executa `/squad-debug [descrição do bug]`, faça:

### Passo 1 — Triagem Inicial (você mesmo)

```
Bug reportado: [descrição do usuário]
Classificação: P0 | P1 | P2 | P3
Área provável: frontend | backend | performance | SEO | analytics
```

### Passo 2 — Spawn paralelo do time técnico

```
Agent 1 — opus-tech (líder):
  "Você é o Lucas Mendes (opus-tech). Leia squad/agents/opus-tech.md.
  Bug: [descrição]
  Analise a causa raiz provável e defina a estratégia de debug.
  Delegue sub-tarefas para sonnet-debug e outros workers.
  Escreva em squad/memory/meeting-notes.md"

Agent 2 — sonnet-debug (executor):
  "Você é o sonnet-debug. Leia squad/agents/sonnet-debug.md.
  Bug: [descrição]
  Investigue os arquivos relevantes, identifique a causa raiz e proponha/implemente o fix.
  Escreva em squad/memory/meeting-notes.md"

Agent 3 — sonnet-perf (se performance):
  "Analise se o bug tem componente de performance.
  Verifique métricas e otimizações necessárias.
  Escreva em squad/memory/meeting-notes.md"

Agent 4 — haiku-review (verificação):
  "Faça code review rápido do fix proposto pelo sonnet-debug.
  Verifique se não há side effects.
  Escreva em squad/memory/meeting-notes.md"
```

### Passo 3 — Diagnóstico Comum por Tipo de Bug

**TypeScript Error:**
```bash
npx tsc --noEmit  # ver todos os erros
```
→ Spawn: sonnet-debug

**Build Failure:**
```bash
npm run build 2>&1 | head -50
```
→ Spawn: opus-tech + sonnet-debug

**Hydration Mismatch:**
- Verificar componentes com `Date`, `Math.random()`, `localStorage` no render
→ Spawn: sonnet-debug

**Layout Quebrado (mobile):**
- Verificar breakpoints Tailwind, flexbox/grid issues
→ Spawn: sonnet-debug + sonnet-ux

**Performance Regressão:**
- Verificar bundle size, imports novos, imagens não otimizadas
→ Spawn: sonnet-perf + haiku-review

**API Error (500/404):**
- Verificar route handler, variáveis de ambiente, validação de input
→ Spawn: sonnet-dev-2 + sonnet-debug

### Passo 4 — Resolução e Verificação

1. Aplique o fix (ou delegue para o worker adequado)
2. Spawn `haiku-review` para verificar o fix
3. Spawn `sonnet-qa` para testar o fluxo afetado
4. Documente o bug e fix em `squad/memory/meeting-notes.md`

### Passo 5 — Comunicar ao usuário

```
## Bug Resolvido ✅

**Bug:** [descrição original]
**Causa raiz:** [o que causou]
**Fix aplicado:** [o que foi feito]
**Arquivos modificados:** [lista]
**Testado:** [como foi verificado]
**Prevenção:** [como evitar no futuro]
```

---

## Exemplo de uso

```
/squad-debug "TypeScript error em components/hero-premium.tsx"
/squad-debug "Newsletter form não está enviando no mobile"
/squad-debug "LCP está acima de 3s no PageSpeed Insights"
/squad-debug "Build falhando no Vercel com erro de módulo não encontrado"
```
