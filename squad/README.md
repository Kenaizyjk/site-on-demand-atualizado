# ON DEMAND DIGITAL — SQUAD HQ

## Manifesto do Escritório Virtual

Este é o quartel-general do time virtual da On Demand Digital.
Cada decisão, debate e entrega vive aqui.

---

## Ecossistema de 20 Agentes Claude Code

### Hierarquia

```
Orquestrador Mestre (sessão atual — Sonnet 4.6)
    │
    ├── L1: Líderes Opus 4.6 (decisões estratégicas)
    │   ├── opus-ceo      → Marina Luz — Estratégia e orquestração
    │   ├── opus-tech     → Lucas Mendes — Arquitetura e P0 bugs
    │   ├── opus-design   → Sofia Andrade — Design system e UX
    │   ├── opus-growth   → Bruno Ferreira — CRO e conversão
    │   └── opus-content  → Ana Clara — Copy e SEO de conteúdo
    │
    ├── L2: Workers Sonnet 4.6 (execução técnica)
    │   ├── sonnet-dev-1      → Componentes frontend
    │   ├── sonnet-dev-2      → APIs e integrações
    │   ├── sonnet-seo        → SEO técnico
    │   ├── sonnet-copy       → Copywriting
    │   ├── sonnet-debug      → Debug e bugs
    │   ├── sonnet-qa         → QA e testes
    │   ├── sonnet-research   → Pesquisa de mercado
    │   ├── sonnet-analytics  → GA4 e tracking
    │   ├── sonnet-ux         → UX review
    │   └── sonnet-perf       → Performance
    │
    └── L3: Fast Workers Haiku 4.5 (tarefas rápidas)
        ├── haiku-competitor  → Análise de concorrentes
        ├── haiku-ideas       → Geração de ideias
        ├── haiku-review      → Code review superficial
        ├── haiku-data        → Dados e contexto
        └── haiku-docs        → Documentação
```

---

## Skills Globais

| Skill | Comando | Descrição |
|-------|---------|-----------|
| Squad Run | `/squad-run` | Sprint completo com todos os 20 agentes em paralelo |
| Squad Meeting | `/squad-meeting [tópico]` | Debate dos 5 Opus + decisão coletiva |
| Squad Debug | `/squad-debug [bug]` | Time técnico dedicado a um bug específico |

---

## Regras do Escritório

1. Nenhuma feature entra sem justificativa de negócio
2. Performance é requisito, não diferencial
3. O cliente da agência é PME — escreve simples
4. WhatsApp é o canal primário. Tudo direciona para lá
5. Design bonito que não converte é arte, não produto
6. Bugs P0 são resolvidos antes de novas features
7. Depoimentos reais antes de qualquer nova seção

---

## Estrutura de Arquivos

```
squad/
├── README.md              → Este arquivo
├── decisions.md           → Log de decisões (D001–D0XX)
├── design-system.md       → Fonte da verdade de design
├── roadmap.md             → Sprints e prioridades
│
├── agents/                → Definições dos 20 agentes
│   ├── opus-ceo.md
│   ├── opus-tech.md
│   ├── opus-design.md
│   ├── opus-growth.md
│   ├── opus-content.md
│   ├── sonnet-dev-1.md
│   ├── sonnet-dev-2.md
│   ├── sonnet-seo.md
│   ├── sonnet-copy.md
│   ├── sonnet-debug.md
│   ├── sonnet-qa.md
│   ├── sonnet-research.md
│   ├── sonnet-analytics.md
│   ├── sonnet-ux.md
│   ├── sonnet-perf.md
│   ├── haiku-competitor.md
│   ├── haiku-ideas.md
│   ├── haiku-review.md
│   ├── haiku-data.md
│   └── haiku-docs.md
│
├── memory/                → Memória compartilhada entre agentes
│   ├── shared-context.md  → Estado atual do projeto
│   ├── meeting-notes.md   → Atas acumulativas das sessões
│   └── decisions-queue.md → Decisões pendentes
│
└── skills/                → Instruções detalhadas das skills
    ├── squad-run.md
    ├── squad-meeting.md
    └── squad-debug.md
```

---

## Como Usar

### Sprint completo

```
/squad-run
```

Ativa todos os 20 agentes em 3 batches paralelos. Ideal para início de sessão de desenvolvimento.

### Debate estratégico

```
/squad-meeting "Devemos adicionar seção de preços na home?"
```

Convoca os 5 líderes Opus para debater e tomar uma decisão registrada em decisions.md.

### Debug especializado

```
/squad-debug "Build falhando no Vercel com module not found"
```

Forma o time técnico (opus-tech + sonnet-debug + haiku-review + sonnet-qa) para resolver o bug.

---

## Links Rápidos

- [Decisões](./decisions.md)
- [Design System](./design-system.md)
- [Roadmap](./roadmap.md)
- [Contexto Compartilhado](./memory/shared-context.md)
- [Atas das Reuniões](./memory/meeting-notes.md)
