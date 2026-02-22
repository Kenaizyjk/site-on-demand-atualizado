# Prompt Improvement Checklist (100 Itens)

Status:
- `DONE`: aplicado agora.
- `AUTO`: automatizado por regras no prompt/fluxo.
- `LOOP`: atividade recorrente (ciclo continuo).

1. [DONE] Objetivo unico por sessao definido.
2. [DONE] Metas secundarias definidas.
3. [DONE] Publico-alvo principal delimitado.
4. [DONE] Publico-alvo secundario delimitado por contexto.
5. [DONE] Idioma pt-BR fixado.
6. [DONE] Persona em 1 frase definida.
7. [DONE] Tom em adjetivos definido.
8. [DONE] Tom proibido (exagero/hype) restringido.
9. [DONE] Tamanho maximo de resposta definido.
10. [DONE] Uma pergunta por resposta definida.
11. [DONE] Regra de abertura padrao definida.
12. [DONE] Regra de fechamento com avancar definida.
13. [DONE] Regra anti-invencao explicita.
14. [DONE] Regra anti-promessa explicita.
15. [DONE] Regra de incerteza por falta de contexto.
16. [DONE] Ordem de resposta fixa definida.
17. [DONE] Gatilho para pedir contexto extra definido.
18. [DONE] Gatilho para resposta direta definido.
19. [DONE] Perguntas de qualificacao priorizadas.
20. [DONE] Sinais de lead quente definidos.
21. [DONE] Sinais de lead frio definidos.
22. [DONE] Gatilho de CTA WhatsApp definido.
23. [DONE] Gatilho para nao fazer CTA definido.
24. [DONE] Resposta padrao para preco definida.
25. [DONE] Resposta padrao para prazo definida.
26. [DONE] Resposta padrao para garantia definida.
27. [DONE] Resposta para baixo orcamento definida.
28. [DONE] Resposta para objecao de agencia definida.
29. [DONE] Resposta para urgencia definida.
30. [DONE] Resposta para confusao do usuario definida.
31. [DONE] Resposta para handoff humano definida.
32. [DONE] Limite de emoji definido.
33. [DONE] Excesso de enfase restringido.
34. [DONE] Blocos longos proibidos.
35. [DONE] Listas longas evitadas.
36. [DONE] Vocabulos de hype evitados.
37. [DONE] Vocabulos simples priorizados.
38. [DONE] Tratamento consistente com voce.
39. [DONE] Vocabulario comercial padronizado.
40. [DONE] Regra anti-jargao aplicada.
41. [DONE] Regra anti-resposta robotica aplicada.
42. [AUTO] Suite curta de perguntas pronta no loop script.
43. [AUTO] Suite longa de perguntas pronta no loop script.
44. [AUTO] Suite ambigua pronta no loop script.
45. [AUTO] Suite agressiva pronta no loop script.
46. [AUTO] Suite fora de escopo pronta no loop script.
47. [AUTO] Medicao de respostas com pergunta final.
48. [AUTO] Medicao de CTA precoce.
49. [AUTO] Medicao de latencia media.
50. [AUTO] Medicao de taxa de erro.
51. [DONE] Rubrica basica de qualidade definida.
52. [AUTO] Avaliacao de clareza por lote.
53. [AUTO] Avaliacao de empatia por lote.
54. [AUTO] Avaliacao de utilidade por lote.
55. [AUTO] Avaliacao de progressao de qualificacao.
56. [AUTO] Verificacao de repeticao.
57. [DONE] Variacoes de abertura definidas no mock.
58. [DONE] Variacoes de transicao definidas no mock.
59. [DONE] Variacoes de CTA definidas no mock.
60. [DONE] Consistencia entre variacoes revisada.
61. [LOOP] Reducao de prompt em 20% para teste A/B.
62. [LOOP] Reducao de prompt em 40% para teste A/B.
63. [LOOP] Comparativo curto vs longo por metricas.
64. [DONE] Hard rules isoladas.
65. [DONE] Blocos opcionais separados por contexto.
66. [DONE] Exemplos positivos incorporados por diretrizes.
67. [DONE] Exemplos negativos incorporados por restricoes.
68. [DONE] Prompt alinhado ao nicho da operacao.
69. [DONE] Contexto dinamico incorporado.
70. [DONE] Contexto dinamico limitado a utilidade.
71. [DONE] Fallback para contexto vazio definido.
72. [DONE] Fallback para pergunta irrelevante definido.
73. [DONE] Regra de confirmacao em caso complexo.
74. [DONE] Regra de resumo curto em caso necessario.
75. [DONE] Regra de continuidade conversacional.
76. [AUTO] Teste de coerencia em 5 turnos.
77. [AUTO] Teste de coerencia em 10 turnos.
78. [AUTO] Deteccao de pergunta repetida.
79. [AUTO] Deteccao de coleta duplicada.
80. [DONE] Regra de nao repetir pergunta respondida.
81. [DONE] Ordem de qualificacao fixada.
82. [DONE] Proximo dado faltante priorizado.
83. [DONE] Regra de reconhecer objecao antes de perguntar.
84. [DONE] Regra de responder duvida antes do CTA.
85. [DONE] CTA apos valor percebido.
86. [AUTO] Testes por persona de mercado.
87. [AUTO] Testes por maturidade de negocio.
88. [AUTO] Testes por faixa de orcamento.
89. [AUTO] Testes por nivel de urgencia.
90. [AUTO] Testes com usuario indeciso.
91. [AUTO] Testes com usuario objetivo.
92. [AUTO] Testes com usuario cetico.
93. [AUTO] Medicao de handoff util para WhatsApp.
94. [AUTO] Medicao de handoff precoce.
95. [DONE] Regras de seguranca/compliance reforcadas.
96. [DONE] Linguagem inclusiva e neutra reforcada.
97. [DONE] Versionamento documental criado.
98. [LOOP] A/B entre versoes por ciclo.
99. [LOOP] Promocao de mudanca so com ganho.
100. [LOOP] Rotina semanal de melhoria definida.

## Ciclo continuo recomendado
- Rodar `scripts/test-chat-ai-loop.ps1` em `-Mode real -Count 50` apos cada ajuste de prompt.
- Comparar relatorios em `test-reports/`.
- Atualizar este checklist com evidencias por versao.
