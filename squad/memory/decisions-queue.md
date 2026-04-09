# FILA DE DECISÕES PENDENTES
*Decisões que precisam ser tomadas pelo CEO ou pelo time*

---

## Como usar

Quando um agente encontra uma decisão que não pode tomar sozinho, adiciona aqui.
O opus-ceo revisa no início de cada sessão e decide ou escalona.

Formato:
```
## [ID] — [Título]
**Tipo:** arquitetura | design | negócio | conteúdo
**Levantado por:** [agente]
**Data:** [data]
**Contexto:** [por que precisa ser decidido]
**Opções:**
  A) ...
  B) ...
**Recomendação do agente:** [A/B/outra]
**Decisão (CEO):** *aguardando*
```

---

## Decisões Pendentes

## DQ001 — N8N Showcase Panel
**Tipo:** design | conteúdo
**Levantado por:** orquestrador (instrução do Davi)
**Data:** 08 de Abril de 2026
**Contexto:** O painel interativo de n8n (SVG animado) foi removido da home. Davi disse que "não está ficando do jeito que quero, não sei nem se é necessário". Componente `automation-n8n-showcase.tsx` ainda existe no projeto mas não está sendo usado.
**Opções:**
  A) Remover permanentemente — substituir por seção "Como Trabalhamos" mais simples com texto e ícones (texto + ícones, sem complexidade técnica)
  B) Redesenhar — criar um visual mais limpo, menos código, mais storytelling de automação
  C) Manter removido por ora — focar em seções com maior impacto (Fundador, Depoimentos, Mini Cases)
**Recomendação do agente:** C → manter removido por ora. A home ficou mais limpa e as seções de conversão estão mais destacadas. Revisar após pesquisa de design.
**Decisão (CEO):** *aguardando Davi*

## DQ002 — Foto do fundador no blog
**Tipo:** conteúdo
**Levantado por:** orquestrador
**Data:** 08 de Abril de 2026
**Contexto:** A foto foi colocada nos dois locais do blog (header do post + sidebar do autor) usando a URL externa do ibb.co (mesma usada no founder-story). Para produção, o ideal é hospedar a foto localmente em `public/davi-honorato.jpg`.
**Recomendação:** Davi deve fornecer a foto em alta resolução para salvar em `public/` e usar `next/image` com otimização nativa.
**Decisão (CEO):** *aguardando Davi*

---

## Decisões Tomadas Recentemente

*(mover para cá quando CEO decidir, antes de arquivar em squad/decisions.md)*
