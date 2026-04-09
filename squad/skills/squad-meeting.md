# Skill: /squad-meeting
**Tipo:** Reunião estruturada de debate entre agentes
**Descrição:** Ativa os 5 líderes Opus para debater um tópico específico e tomar uma decisão coletiva.

---

## O que esta skill faz

Simula uma reunião de liderança onde cada líder Opus apresenta sua perspectiva sobre um tema, seguida de síntese e decisão pelo orquestrador.

---

## Instrução para o Orquestrador

Quando o usuário executa `/squad-meeting [tópico]`, faça:

### Passo 1 — Definir o tópico

```
Tópico: [o que o usuário forneceu]
Pergunta central: [reformule como pergunta de decisão]
Contexto relevante: [leia squad/memory/shared-context.md]
```

### Passo 2 — Spawn paralelo dos 5 Opus

```
Agent 1 — opus-ceo:
  "Você é a Marina Luz (opus-ceo). Leia squad/agents/opus-ceo.md.
  Tópico da reunião: [tópico]
  Dê sua opinião em 3-5 parágrafos: qual decisão você recomenda e por quê?
  Considere: impacto no negócio, prioridade estratégica, recursos necessários.
  Escreva em squad/memory/meeting-notes.md sob '## CEO — [data]'"

Agent 2 — opus-tech:
  "Você é o Lucas Mendes (opus-tech). Leia squad/agents/opus-tech.md.
  Tópico da reunião: [tópico]
  Dê sua opinião: viabilidade técnica, impacto em performance, riscos de implementação.
  Escreva em squad/memory/meeting-notes.md sob '## Tech — [data]'"

Agent 3 — opus-design:
  "Você é a Sofia Andrade (opus-design). Leia squad/agents/opus-design.md e squad/design-system.md.
  Tópico da reunião: [tópico]
  Dê sua opinião: impacto visual, consistência do design system, experiência do usuário.
  Escreva em squad/memory/meeting-notes.md sob '## Design — [data]'"

Agent 4 — opus-growth:
  "Você é o Bruno Ferreira (opus-growth). Leia squad/agents/opus-growth.md.
  Tópico da reunião: [tópico]
  Dê sua opinião: impacto na conversão, CTAs, experiência de compra, métricas esperadas.
  Escreva em squad/memory/meeting-notes.md sob '## Growth — [data]'"

Agent 5 — opus-content:
  "Você é a Ana Clara (opus-content). Leia squad/agents/opus-content.md.
  Tópico da reunião: [tópico]
  Dê sua opinião: copy, voz da marca, impacto em SEO, percepção do público PME.
  Escreva em squad/memory/meeting-notes.md sob '## Content — [data]'"
```

### Passo 3 — Workers técnicos (se aplicável)

Se o tópico tiver componente técnico, spawn adicional:

```
sonnet-ux      → impacto na experiência do usuário
sonnet-perf    → impacto na performance
haiku-ideas    → alternativas rápidas ao que está sendo debatido
```

### Passo 4 — Síntese e Decisão

1. Leia todos os outputs em `squad/memory/meeting-notes.md`
2. Identifique consensos e divergências
3. Tome a decisão final considerando o voto de cada líder
4. Escreva a decisão em `squad/decisions.md` como D0XX
5. Atualize `squad/memory/decisions-queue.md` se necessário

### Passo 5 — Comunicar ao usuário

Apresente:
- **Decisão:** [o que foi decidido]
- **Consenso:** quais líderes concordaram
- **Divergência:** quais discordaram e por quê
- **Próximos passos:** quem implementa o quê

---

## Exemplo de uso

```
/squad-meeting "Devemos adicionar uma seção de preços na home?"
/squad-meeting "Qual deve ser a headline principal do hero?"
/squad-meeting "Vale implementar um quiz de diagnóstico?"
/squad-meeting "Como posicionar o produto para clínicas médicas?"
```
