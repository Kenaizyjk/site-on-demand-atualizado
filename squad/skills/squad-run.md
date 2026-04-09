# Skill: /squad-run
**Tipo:** Sprint completo em paralelo
**Descrição:** Ativa todos os 20 agentes em batches paralelos para um sprint completo de desenvolvimento.

---

## O que esta skill faz

Executa um sprint completo com 3 batches paralelos de agentes, cobrindo estratégia, execução técnica e tarefas rápidas simultaneamente.

---

## Instrução para o Orquestrador

Quando o usuário executa `/squad-run [tema opcional]`, faça:

### Fase 0 — Preparação (você mesmo)

1. Leia `squad/memory/shared-context.md`
2. Leia `squad/roadmap.md` — identifique top 3 prioridades
3. Defina o escopo do sprint desta sessão

### Fase 1 — Batch Opus (5 líderes em paralelo)

Spawn 5 agentes Agent simultaneamente com `subagent_type: "general-purpose"`:

```
Agent 1 — opus-ceo:
  prompt: Leia squad/agents/opus-ceo.md e squad/memory/shared-context.md.
  Defina as top 3 prioridades desta sessão e delegue para os workers Sonnet relevantes.
  Escreva resultado em squad/memory/meeting-notes.md.

Agent 2 — opus-tech:
  prompt: Leia squad/agents/opus-tech.md e squad/memory/shared-context.md.
  Identifique bugs P0, tome decisões arquiteturais urgentes, delegue para sonnet-dev-1/2.
  Escreva resultado em squad/memory/meeting-notes.md.

Agent 3 — opus-design:
  prompt: Leia squad/agents/opus-design.md, squad/design-system.md e squad/memory/shared-context.md.
  Audite consistência visual dos componentes recentes e proponha correções.
  Escreva resultado em squad/memory/meeting-notes.md.

Agent 4 — opus-growth:
  prompt: Leia squad/agents/opus-growth.md e squad/memory/shared-context.md.
  Audite CTAs e pontos de fricção no funil. Proponha 3 melhorias de conversão.
  Escreva resultado em squad/memory/meeting-notes.md.

Agent 5 — opus-content:
  prompt: Leia squad/agents/opus-content.md e squad/memory/shared-context.md.
  Revise copy das seções modificadas. Verifique voz da marca e keywords.
  Escreva resultado em squad/memory/meeting-notes.md.
```

### Fase 2 — Batch Sonnet (workers executam)

Após ler os outputs da Fase 1 em `squad/memory/meeting-notes.md`, spawn os workers necessários:

```
Workers disponíveis (spawn conforme delegado pelos Opus):
  sonnet-dev-1    → componentes frontend
  sonnet-dev-2    → APIs e integrações
  sonnet-seo      → SEO técnico
  sonnet-copy     → textos e copy
  sonnet-debug    → bugs identificados
  sonnet-qa       → testes de qualidade
  sonnet-research → pesquisa de mercado
  sonnet-analytics → tracking e eventos
  sonnet-ux       → UX review
  sonnet-perf     → performance
```

### Fase 3 — Batch Haiku (finalização rápida)

Spawn 5 Haiku em paralelo:

```
haiku-competitor → pesquise 2-3 concorrentes e extraia oportunidades
haiku-ideas      → gere 10 micro-melhorias para o sprint atual
haiku-review     → faça code review dos arquivos modificados nesta sessão
haiku-data       → atualize squad/memory/shared-context.md com o que foi feito
haiku-docs       → marque itens concluídos no squad/roadmap.md e registre novas decisões
```

### Fase 4 — Síntese (você mesmo)

1. Leia todo `squad/memory/meeting-notes.md` desta sessão
2. Escreva sumário executivo no topo do arquivo
3. Liste próximas prioridades para a próxima sessão
4. Atualize `squad/decisions.md` se novas decisões foram tomadas

---

## Output esperado

Ao final do `/squad-run`:
- `squad/memory/meeting-notes.md` — atualizado com todos os outputs
- `squad/memory/shared-context.md` — estado atual do projeto
- `squad/roadmap.md` — itens marcados como concluídos
- Código modificado: componentes, APIs, SEO conforme prioridades
