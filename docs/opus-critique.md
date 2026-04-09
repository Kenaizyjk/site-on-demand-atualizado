# RELATÓRIO DE CRÍTICA EXECUTIVA — Site On Demand Digital
**Data:** 2026-04-08
**Revisor:** Diretor Executivo Sênior (papel crítico, tolerância zero para mediocridade)
**Arquivos analisados:** hero-premium.tsx, services-simple.tsx, faq.tsx, mini-cases.tsx, final-cta.tsx, footer.tsx, navigation.tsx, manifesto-strip.tsx, app/page.tsx

---

## VISÃO GERAL ANTES DE ENTRAR NOS COMPONENTES

O site tem uma identidade visual coesa e tecnicamente competente. O stack (Next.js, Tailwind, Framer Motion) é adequado. O problema não é o código — é a **estratégia de conteúdo**. Há uma confusão grave entre "parecer moderno" e "converter visitante em cliente". Para um PME cético de 35-50 anos que acessa pelo celular depois de trabalhar o dia inteiro, gradientes violet/cyan e blobs animados não fecham contratos. Clareza fecha contratos.

O site no estado atual convence um designer. Não convence um dono de clínica odontológica em BH que já foi enganado por duas agências.

---

## [1] HeroPremium — hero-premium.tsx

**Nota: 6/10**

### Problemas Críticos (bloqueiam conversão):

- **Headline vaga demais para o público-alvo.** "A agência que trabalha como se o dinheiro fosse nosso também" é uma metáfora. Metáforas não convertem PMEs céticos. O dono de restaurante que abriu o site no celular às 22h quer saber O QUE você faz, PARA QUEM e POR QUE isso importa para ele — em 3 segundos. Essa headline entrega nenhuma dessas respostas.

- **"Quero entender como funciona" como CTA primário é fraco.** O visitante já está no site para entender como funciona. O CTA principal deve ter uma promessa de valor específica ligada ao próximo passo concreto: "Diagnóstico gratuito de 30 min" ou "Ver como faço isso funcionar para [segmento]". "Quero entender como funciona" soa como curiosidade, não decisão.

- **Dois números de WhatsApp no site inteiro.** O hero usa `5531996966686`. O FAQ usa `5531971916225`. Isso é um erro de credibilidade fatal. Um PME cético que liga para o número errado não tenta o segundo. Ele vai embora para a agência concorrente.

### Problemas Graves (prejudicam credibilidade):

- **Social proof vazia.** "★★★★★ Agência de marketing digital em BH · Atendimento direto e personalizado" é SEO copy disfarçado de prova social. Cinco estrelas sem fonte, sem quantidade de avaliações, sem plataforma de referência equivalem a zero credibilidade. Pior: o público-alvo reconhece esse padrão como enrolação.

- **Os três checkmarks ("Processo claro", "Automação aplicada ao dia a dia", "Métricas acompanhadas") são promessas genéricas.** Toda agência do Brasil diz isso. Não há diferenciação. Não há especificidade. Não há prova.

- **Subheadline é geográfico/SEO, não persuasivo.** "Agência de marketing digital em BH especializada em tráfego pago, SEO local e automação com IA" parece otimização para Google, não uma fala direta para o visitante. Quando você escreve para o algoritmo no lugar do visitante, o visitante sente isso.

### Problemas Menores (polimento):

- Framer Motion no Hero (`"use client"` + animações em cascata) aumenta o bundle desnecessariamente. O `useReducedMotion` é correto, mas a dependência de framer-motion inteira para fade-ins simples que poderiam ser feitos com CSS `@keyframes` é overengineering.

- O background (blobs + gradiente radial) funciona visualmente mas em mobile de entrada baixa pode causar jank de renderização.

- `min-h-[100vh]` sem `svh` equivalente — em mobile com barra de navegador do Chrome, isso extrapola a viewport. Deveria ser `min-h-svh` ou `min-h-[100dvh]`.

### O que está bom (manter):

- Estrutura semântica correta (`<section>`, `<h1>`).
- `aria-hidden` nos elementos decorativos.
- `prefersReducedMotion` implementado.
- CTA secundário "Como trabalhamos" com âncora interna é uma decisão inteligente para quem não está pronto para converter.
- `data-track` nos CTAs para analytics.

### Ação imediata recomendada:

1. **Unificar o número de WhatsApp** para um único número em todo o projeto (prioridade máxima).
2. Reescrever a headline para ser específica: quem é o cliente, qual o problema que você resolve, qual o resultado tangível. Exemplo de direção (não de copy final): "Marketing digital sem enrolação para clínicas, prestadores e comércios em BH."
3. Substituir o CTA primário por algo com ação concreta: "Falar com o fundador" ou "Diagnóstico gratuito — 30 minutos".
4. Remover as cinco estrelas sem fonte ou substituir por link verificável (Google Reviews, por exemplo).

---

## [2] ServicesSimple — services-simple.tsx

**Nota: 7/10**

### Problemas Críticos (bloqueiam conversão):

- **Os links "Ver mais" apontam para rotas que não existem no projeto.** `/servicos/trafego-pago`, `/servicos/seo-local`, `/servicos/automacao`, `/servicos/estrategia` — nenhuma dessas páginas existe no mapeamento do `app/`. O git status lista apenas os arquivos do projeto. Links quebrados em cards de serviço são conversão zero: o visitante clica, cai num 404, e interpreta isso como empresa amadora ou desorganizada. **Isso é um bug crítico de negócio, não só técnico.**

- **Texto sem acentuação em dados hardcoded.** "SEO Local e Google Meu Negocio", "Otimizacao", "Producao", "Automacao", "Clinica de Estetica", "Fluxos n8n para qualificacao" — uma empresa de marketing digital que não acentua o português corretamente no próprio site destrói a credibilidade com o público brasileiro. Não importa que seja dado estático: o visitante vê o texto, não o código.

### Problemas Graves (prejudicam credibilidade):

- **Os bullets descrevem tarefas, não benefícios.** "Criação e configuração de campanhas no Google e Meta", "Testes de criativos e públicos com critérios definidos" — isso é uma lista de atividades que uma agência faz. O dono de PME não compra atividades, compra resultados. Cada bullet deveria conectar a atividade ao benefício: "Testes de criativos que identificam o que converte antes de gastar verba."

- **Hover com gradiente overlay implementado incorretamente.** Na linha 182-188, o `div` de overlay tem `style={{ opacity: undefined }}` hardcoded, o que anula o Tailwind `opacity-0` e `group-hover:opacity-100`. Isso significa que o efeito de gradiente hover **nunca funciona corretamente** — o elemento fica com opacidade indefinida/inválida. Bug visual que passa por teste manual rápido mas é sutil o suficiente para nunca ser corrigido.

- **"Estratégia Digital" com accentColor "slate" é visualmente morto.** O card de Estratégia tem cores acinzentadas enquanto os outros têm cyan, emerald, violet. Em uma grade de 4 cards, o último parece desativado ou menos importante. Se Estratégia é um serviço real, ele merece uma cor real.

### Problemas Menores (polimento):

- Animações de linhas verticais pulsantes no background (linhas 116-128) com `animate-pulse` de durações diferentes: decorativas demais, com custo de performance, e invisíveis para 80% dos visitantes por estarem em `opacity-[0.07]`. Remover.

- `bento: "md:col-span-1 md:row-span-1"` em todos os cards é idêntico — o campo `bento` no objeto de dados não tem propósito real. Dead code.

- A classe CSS `group-hover/link` requer `group/link` no ancestral. Verificar se a hierarquia está correta para todos os navegadores-alvo.

### O que está bom (manter):

- Grid 2 colunas no desktop é legível e equilibrado.
- Badges de plataformas (Google Ads, Meta Ads, n8n) adicionam especificidade técnica real.
- Estrutura de card (ícone, título, descrição, bullets, CTA) é logicamente organizada.
- O header da seção com badge "O que fazemos" cumpre função de orientação.

### Ação imediata recomendada:

1. **Criar as páginas de serviço** (`/servicos/trafego-pago`, etc.) ou **alterar os hrefs** para apontar para âncoras existentes (`/servicos#trafego-pago`) enquanto as páginas não existem. Links 404 em cards de conversão são inaceitáveis.
2. Corrigir **todos os textos sem acentuação** nos dados hardcoded.
3. Remover `style={{ opacity: undefined }}` do overlay de hover.
4. Reescrever bullets para orientação de benefício, não de tarefa.

---

## [3] MiniCases — mini-cases.tsx

**Nota: 2/10 — ALERTA VERMELHO: CONTEÚDO FICTÍCIO**

### Problemas Críticos (bloqueiam conversão E destroem credibilidade):

**ESTE COMPONENTE DEVE SER REMOVIDO OU COMPLETAMENTE REESCRITO.**

Os três "casos" apresentados são **ficção disfarçada de prova social**. Não há:
- Nome do cliente
- Cidade
- Período da campanha
- Métricas verificáveis (número de agendamentos antes/depois, custo por lead, ROI)
- Depoimento real de pessoa real com nome e cargo

O que existe são cenários genéricos com resultados vagos apresentados como se fossem reais:

- "Agenda ocupada em 3 semanas de campanha" — sem quantificar: ocupada quanto? De quantas consultas para quantas? Qual a verba investida?
- "Apareceu no Top 3 local para buscas do bairro" — Top 3 de qual bairro? Quais palavras-chave? Por quanto tempo se manteve?
- "Primeiros clientes pelo digital em menos de 30 dias" — quantos clientes? Com qual custo de aquisição?

**Para o público de PMEs brasileiros céticos com agências, esse é exatamente o tipo de conteúdo que eles aprenderam a identificar como mentira.** Um dono de clínica que foi enganado por agências antes reconhece esse padrão em 5 segundos. O efeito é o oposto do pretendido: destrói confiança em vez de construir.

O título "Resultados de quem já trabalhou com a gente" qualifica explicitamente esse conteúdo como resultado de clientes reais. Se os dados não são verificáveis e os clientes são anônimos sem qualquer forma de confirmação, isso beira desonestidade comercial.

### Problemas Graves (prejudicam credibilidade):

- Textos sem acentuação: "Situacao antes", "Clinica de Estetica", "so de indicacoes", "Negocio".

- O `useState` por card para hover é overengineering — CSS puro (`:hover`) resolveria isso sem re-renders desnecessários em 3 componentes simultâneos.

- O `transform` está sendo aplicado tanto via Tailwind className quanto via `style` prop simultaneamente (`-translate-y-1` no className E `translateY(-4px)` no style inline), criando conflito de especificidade que pode resultar em comportamento imprevisível dependendo do navegador.

### O que está bom (manter):

- A estrutura de card "Situação → Ação → Resultado" é pedagogicamente correta e seria ótima com dados reais.
- CTAs contextuais por segmento ("Quero isso para minha clínica") são uma boa ideia de copywriting segmentado.

### Ação imediata recomendada:

**OPÇÃO A (preferida):** Substituir completamente por uma seção "Como trabalhamos" com o processo em 3-4 etapas, sem qualquer dado de cliente. Isso é honesto, diferencia pelo método, e não depende de clientes reais para funcionar.

**OPÇÃO B (se houver clientes reais dispostos a autorizar):** Reconstruir com dados reais verificáveis: nome do negócio (ou iniciais identificáveis), cidade, período, métricas específicas com fonte, e idealmente um depoimento textual com nome e cargo da pessoa.

**Em hipótese alguma manter o componente como está.**

---

## [4] ManifestoStrip — manifesto-strip.tsx

**Nota: 5/10**

### Problemas Críticos (bloqueiam conversão):

- **É um `<blockquote>` sem atribuição.** Semanticamente, `<blockquote>` pressupõe uma citação de alguém. Se é uma declaração da empresa, deveria ser um `<p>` ou `<h2>`. Do jeito que está, o HTML semântico está incorreto.

- **"Marketing digital que faz sentido para o seu negócio. Não para o nosso portfólio."** — Boa direção de copy, mas imediatamente contradita pelos mini-cases logo abaixo que parecem ser exatamente portfólio genérico. Há uma incoerência de mensagem entre o manifesto e o que vem depois.

### Problemas Graves (prejudicam credibilidade):

- **"A On Demand existe porque dono de clínica não deveria precisar entender de tráfego pago para crescer."** — A especificidade de "clínica" aqui é boa. O problema é que o site atende também restaurantes, e-commerces e "empresas em crescimento" (conforme o FAQ). Fixar o manifesto em "dono de clínica" estreita o posicionamento para um segmento, enquanto o restante do site tenta ser generalista. Isso é inconsistência de posicionamento, não de copy.

- O componente é uma **ilha visual desconectada**. Entra e sai sem criar momentum para a próxima seção. Não há CTA, não há gancho para o que vem depois (MiniCases). Funciona como pausa contemplativa num site que precisa de ritmo de conversão.

### Problemas Menores (polimento):

- Três camadas de background sobrepostas (zinc-900/40 + border-y + blur radial) para uma seção simples de texto. Complexidade visual desnecessária que aumenta tempo de paint.

- `style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}` inline para algo que deveria estar na classe `font-display`. Mistura de Tailwind e inline styles sem justificativa.

### O que está bom (manter):

- A ideia de uma declaração de posicionamento entre serviços e casos é estruturalmente correta.
- A linha "Não para o nosso portfólio" tem personalidade — rara nesse tipo de site.
- As linhas gradiente de borda (topo e base) criam demarcação visual sem peso.

### Ação imediata recomendada:

Corrigir a semântica (`blockquote` → elemento adequado). Decidir: a empresa atende clínicas especificamente ou é generalista? Alinhar o manifesto com o posicionamento real. Adicionar transição para o próximo elemento.

---

## [5] FAQ — faq.tsx

**Nota: 7.5/10**

### Problemas Críticos (bloqueiam conversão):

- **Dois números de WhatsApp.** O botão "Falar no WhatsApp" no FAQ usa `https://wa.me/5531971916225` — número diferente do hero (`5531996966686`) e do footer (`5531996966686`). Reforçando: isso é erro de negócio, não técnico. Um PME que toca o número errado e cai em lugar errado (ou número inexistente) interpreta isso como empresa desestruturada.

- **"Nossa equipe responde em até 1 dia útil"** é promessa vaga e lenta para um canal de WhatsApp. WhatsApp presume resposta rápida. Se a promessa real é 1 dia útil, mude o canal de contato para email como padrão. Se WhatsApp é o canal, a promessa deveria ser de horas, não de "1 dia útil".

### Problemas Graves (prejudicam credibilidade):

- **"Vocês atendem qualquer tipo de negócio?"** — A resposta menciona "clínicas, e-commerces e empresas em crescimento" mas o manifesto antes fala especificamente de "dono de clínica". O posicionamento fragmentado aparece até no FAQ.

- **"Quanto tempo para ver resultados?"** diz "Depende do canal e do objetivo" — tecnicamente correto mas frustrante para PME ansioso. Uma resposta mais específica por canal seria mais útil: "Tráfego pago: primeiros leads em 3-7 dias após ativação. SEO: movimentos visíveis em 60-90 dias." Menos filosofia, mais especificidade.

- O `outline: "none"` no `onFocus` do button (linha 193) anula o foco visual nativo do navegador sem oferecer alternativa acessível adequada. O `onFocus` recoloca um outline customizado, mas isso não funciona corretamente com navegação por teclado e leitores de tela. O padrão correto seria `:focus-visible` via CSS.

### Problemas Menores (polimento):

- O `maxHeight: 400` fixo para o conteúdo expansível (linha 265) vai quebrar qualquer resposta futura mais longa. Use `maxHeight: isOpen ? "none" : 0` ou uma ref para altura real.

- `role="button"` num elemento `<button>` é redundante e tecnicamente incorreto (ARIA proíbe uso de `role` que replica o papel implícito do elemento nativo).

- Mistura de Tailwind (classes) com inline styles em proporção elevada ao longo do componente. Não é erro funcional, mas dificulta manutenção futura.

- O Schema.org FAQPage está num componente `"use client"` — o script só é renderizado no client, perdendo o benefício de SEO do JSON-LD no HTML estático. Deveria estar num Server Component.

### O que está bom (manter):

- Dados limpos: sem métricas inventadas, sem cases fictícios. O FAQ honra a regra do contexto.
- Perguntas escolhidas atacam as objeções reais do público (contratos longos, tempo de resultado, qualquer negócio).
- Múltiplos itens abertos simultaneamente é decisão correta de UX — evita que o usuário precise fechar e abrir repetidamente.
- Schema.org FAQPage presente (mesmo com o problema de client-side citado acima).
- `aria-expanded` no botão está correto.

### Ação imediata recomendada:

1. Unificar número de WhatsApp — eliminar `5531971916225` do projeto inteiro.
2. Mover o bloco `<script type="application/ld+json">` para um Server Component.
3. Remover `role="button"` do `<button>`.
4. Substituir `maxHeight: 400` por valor dinâmico.

---

## [6] FinalCTA — final-cta.tsx

**Nota: 6.5/10**

### Problemas Críticos (bloqueiam conversão):

- **"Pronto para ter mais clareza sobre seu marketing?"** — Clareza sobre marketing não é o que o dono de PME compra. Ele compra clientes, agendamentos, vendas, presença. O headline do CTA final deveria atacar o resultado de negócio, não a clareza sobre o processo de marketing. "Pronto para ter uma agenda cheia?" ou "Quer saber o que está impedindo seu negócio de crescer online?" são mais viscerais para o público-alvo.

- **"Conversa de 30 min. Sem compromisso. Sem script de vendas."** — Boa promessa de redução de risco. Mas "sem script de vendas" pode soar defensivo — como se você precisasse se justificar. Quem está confiante no produto não precisa dizer o que NÃO vai fazer. Reformule para o positivo.

### Problemas Graves (prejudicam credibilidade):

- **"Fundador atende diretamente"** é uma promessa de peso — mas há zero menção ao fundador em qualquer parte do site (pelo menos nos componentes analisados). Quem é o fundador? Sem nome, foto, ou história, essa promessa soa como qualquer outra promessa genérica de agência. Se o fundador atende diretamente, mostre quem é esse fundador antes do CTA final.

- **"Retorno rápido"** sem qualificação é promessa vaga. Rápido para quem? Em quanto tempo? Defina: "Resposta em até 2h no WhatsApp" ou "Retorno no mesmo dia".

- O `<hr className="od-divider" />` no `page.tsx` depois do FinalCTA e antes do Footer é uma falha de design — nenhum site de agência moderna usa `<hr>` como separador visual entre CTA e rodapé. Substitua por espaçamento via padding.

### Problemas Menores (polimento):

- A section tem `id="contato"` mas não existe no mapa de navegação (`NAV_LINKS` em navigation.tsx não tem "Contato"). Ou adicione ao menu ou mude o id.

- `bg-gradient-to-b from-transparent to-violet-950/20` na section cria um gradiente que começa em transparente — em fundos escuros isso funciona, mas a composição depende inteiramente do componente anterior terminar em `#09090b`. Acoplamento de design implícito.

### O que está bom (manter):

- Estrutura limpa: título → promessa → garantias → CTA → fallback de email.
- Fallback de email presente é correto — nem todo PME usa WhatsApp como canal de negócios.
- `data-track="final-cta-whatsapp"` para analytics.
- O box com borda violet e fundo escuro cria foco visual adequado para CTA final.

### Ação imediata recomendada:

Reescrever o headline para resultado de negócio concreto. Qualificar "Retorno rápido" com prazo real. Criar uma seção de apresentação do fundador antes deste componente (ou integrar ao hero).

---

## [7] Footer — footer.tsx

**Nota: 5/10**

### Problemas Críticos (bloqueiam conversão):

- **Links mortos no menu de navegação do Footer.** O footer lista `/casos`, `/sobre`, `/servicos`, `/contato`, `/blog` — o git status mostra que `app/sobre/page.tsx`, `app/casos/`, `app/precos/` etc. estão marcados como deletados (`D`). Um visitante que chega ao footer e clica em "Sobre Nós" ou "Casos de Sucesso" e encontra 404 saiu do site definitivamente.

- **"Redes Sociais" listado como serviço no footer mas AUSENTE em services-simple.tsx.** O footer promete um serviço ("Redes Sociais" com link `/servicos#redes-sociais`) que não está nos 4 serviços listados no componente de serviços. Incoerência direta que confunde o visitante e questiona a organização da empresa.

### Problemas Graves (prejudicam credibilidade):

- **CNPJ 60.803.333/0001-80 exposto no footer.** Não é erro, mas merece atenção: o CNPJ é facilmente consultado em ferramentas como Serasa e Receita Federal. Se o CNPJ for de uma empresa recém-aberta ou com histórico inconsistente, o PME cético (que certamente vai consultar) pode desconfiar. Consulte se o CNPJ está regular e com o nome da empresa correto antes de manter isso.

- **Ícone `Phone` para link de WhatsApp.** Tecnicamente um link de WhatsApp deveria ter o ícone do WhatsApp, não de telefone. Para um público brasileiro que distingue WhatsApp de ligação, isso é incoerência visual imediata.

- **Copyright "© 2026"** — Curiosamente, o ano 2026 está correto para a data atual (2026-04-08), mas é incomum ver um site com copyright futuro. Se o site foi lançado em 2024 ou 2025, o padrão deveria ser "© 2024–2026" para mostrar continuidade.

### Problemas Menores (polimento):

- O email `contato@ondemanddigital.com.br` aparece três vezes no footer (seção Contato, bottom bar, e como `mailto:` no ícone). Redundância excessiva.

- O footer não é Server Component — há `import Link from "next/link"` que funciona bem, mas o componente poderia ser estático puro sem `"use client"` (que de fato não está declarado, OK).

- Ausência de `<address>` semântico para informações de contato.

### O que está bom (manter):

- Grid 4 colunas no desktop com colapso para 2 no mobile é estruturalmente correto.
- Links legais (Política de Privacidade, Termos de Uso) presentes.
- `rel="noopener noreferrer"` em todos os links externos.
- Endereço geográfico (BH, MG) ajuda no SEO local.

### Ação imediata recomendada:

1. Auditar todos os links do footer e remover/corrigir os que apontam para páginas inexistentes.
2. Remover "Redes Sociais" dos serviços listados ou adicionar ao components/services-simple.tsx.
3. Substituir ícone `Phone` por SVG do WhatsApp no link de WhatsApp.

---

## [8] Navigation — navigation.tsx

**Nota: 7/10**

### Problemas Críticos (bloqueiam conversão):

- **"Casos" no menu leva para `/casos` — página deletada.** O git status mostra `D app/casos/clinica-medcare/page.tsx`, `D app/casos/ecommerce-moda/page.tsx`, etc. O link principal de social proof no menu de navegação leva para 404. Isso é o tipo de erro que aparece para o visitante mais motivado — aquele que quis ver os casos antes de entrar em contato — e o derruba no momento exato de maior intenção de compra.

- **"Sobre" no menu leva para `/sobre` — página deletada.** Mesmo problema. O visitante que quer saber quem está por trás da empresa antes de investir dinheiro chega ao 404.

### Problemas Graves (prejudicam credibilidade):

- **"Agendar Diagnóstico" como texto do CTA no nav.** Funciona, mas "diagnóstico" pode sonar médico/técnico para alguns perfis de PME. Considere "Conversa gratuita" ou "Falar com a gente" — mais acessível para o público de 30-50 anos não-digital.

- **Sem indicação visual de scroll no mobile.** O menu hambúrguer abre mas não há animação de transição — o conteúdo aparece instantaneamente. Em dispositivos de médio custo (que boa parte do público-alvo usa), isso pode parecer que o botão não funcionou à primeira vista.

### Problemas Menores (polimento):

- O hambúrguer usa `div` filhos com classes Tailwind para desenhar as barras. Funciona, mas uma SVG de hambúrguer padronizada seria mais acessível.

- `isScrolled` com threshold de 20px pode causar flickering em dispositivos com bounce scroll (iOS Safari). Considere debounce ou threshold mais alto.

- O mobile menu não tem `role="dialog"` ou `role="navigation"` adequado para acessibilidade quando aberto.

### O que está bom (manter):

- CTA no topo do menu mobile (antes dos links de navegação) é decisão de UX excelente — garante que o visitante mobile veja a ação prioritária primeiro.
- `aria-expanded` e `aria-label` no botão hambúrguer estão corretos.
- Transição suave de `bg-transparent` para `bg-zinc-950/90` com scroll é padrão adequado.
- `usePathname` para indicar item ativo é correto.
- `passive: true` no event listener de scroll é boa prática de performance.

### Ação imediata recomendada:

**Urgente:** Remover "Casos" e "Sobre" do menu enquanto as páginas não existem, ou recriar as páginas. Um menu com links mortos é pior que um menu menor e funcional.

---

## [9] app/page.tsx — Composição Geral da Página

**Nota: 5/10**

### Problemas Críticos (bloqueiam conversão):

- **A página carrega 13 componentes em sequência sem estratégia de priorização.** O visitante mobile carrega tudo: Navigation + Hero + Services + ManifestoStrip + MiniCases + TechStack + AutomationN8NShowcase + GMBShowcase + BlogPreviewHome + Newsletter + FAQ + FinalCTA + Footer + WhatsAppFloat + NewsletterPopup. Isso é 15 componentes (incluindo o popup). Sem `loading="lazy"`, sem `Suspense`, sem code splitting estratégico. Em 3G ou 4G lento, o LCP vai sofrer.

- **NewsletterPopup e WhatsAppFloat simultâneos.** Um popup de newsletter que aparece enquanto há um float de WhatsApp permanente são dois elementos competindo pela atenção do visitante ao mesmo tempo. Para PMEs brasileiros que já são céticos, isso ativa o "modo irritado com agência". Um deles precisa ir ou os dois precisam de lógica de timing/exclusão mútua.

- **Ausência de `not-found.tsx` funcional** (existe como arquivo `?? app/not-found.tsx` no git status, mas está untracked). Com múltiplos links mortos no site (casos, sobre, serviços), a página 404 precisa estar em produção imediatamente.

### Problemas Graves (prejudicam credibilidade):

- **A sequência de seções não conta uma história.** A ordem atual: Hero → Serviços → Manifesto → Mini Cases → TechStack → Automação → GMB → Blog → Newsletter → FAQ → CTA. Há ruptura de fluxo narrativo em pelo menos 3 pontos: o Manifesto depois dos Serviços desacelera quando deveria acelerar; o TechStack (que provavelmente é uma vitrine de logos de ferramentas) aparece antes de casos de uso específicos; a Newsletter aparece antes do FAQ, pedindo contato antes de responder objeções.

  Fluxo recomendado: Hero → Serviços → ManifestoStrip → Como Trabalhamos (substituindo MiniCases) → Casos Reais (quando existirem) → FAQ → CTA → Footer.

- **Componentes ausentes sendo importados:** `TechStack`, `AutomationN8NShowcase`, `GMBShowcase`, `NewsletterSection`, `NewsletterPopup` não foram auditados neste relatório mas estão presentes na página. Se qualquer um deles contiver dados fictícios ou links quebrados, o problema se multiplica.

### Problemas Menores (polimento):

- Falta `<Suspense>` ao redor de componentes que fazem fetch ou que são pesados.

### O que está bom (manter):

- Uso de Server Component para `page.tsx` (sem `"use client"`) está correto — os componentes client estão devidamente isolados.
- `WhatsAppFloat` sempre presente é decisão correta para o público brasileiro.

### Ação imediata recomendada:

1. Adicionar e commitar `app/not-found.tsx`.
2. Definir uma estratégia de exibição mutuamente exclusiva entre `WhatsAppFloat` e `NewsletterPopup`.
3. Revisar e reordenar as seções com base num fluxo narrativo de conversão.

---

## RANKING DOS 3 COMPONENTES MAIS URGENTES DE REESCREVER

### #1 — MiniCases (mini-cases.tsx) — PRIORIDADE EXTREMA

**Por quê:** É o único componente que ativamente mente para o visitante. Apresenta cenários fictícios como resultados reais de clientes, viola a principal regra do contexto ("PROIBIDO: dados falsos, cases fictícios") e, para o público exato que o site quer converter (PMEs brasileiros céticos com agências), funciona como sinal de alarme. O visitante que identifica o padrão não só não converte — ele sai com impressão negativa que vai compartilhar. Nota 2/10 com risco de reputação real.

**Ação:** Remover imediatamente e substituir por seção "Como trabalhamos" com o processo em etapas concretas, sem qualquer dado de cliente.

---

### #2 — Navigation (navigation.tsx) — PRIORIDADE ALTA

**Por quê:** Links mortos no menu principal são o erro mais visível e mais destrutivo do site. O visitante com maior intenção de compra — aquele que quer ver casos e conhecer a empresa antes de entrar em contato — clica em "Casos" ou "Sobre" e cai num 404. Isso acontece no pico da jornada de consideração. Cada 404 nessas URLs é uma conversão perdida de alguém que já estava motivado. A navegação é o mapa do site; um mapa com destinos inexistentes não é um mapa — é uma armadilha.

**Ação:** Remover "Casos" e "Sobre" do menu agora. Adicionar de volta quando as páginas existirem e estiverem com conteúdo real.

---

### #3 — Footer (footer.tsx) — PRIORIDADE ALTA

**Por quê:** O footer é o "plano B" do visitante — quando ele termina de ler o site e ainda tem dúvidas, vai ao footer buscar informações de contato, ver os serviços, ou navegar para outras páginas. Um footer com links mortos (Casos, Sobre, Contato), serviço fantasma (Redes Sociais não listado nos serviços) e ícone errado (Phone no lugar de WhatsApp) transforma o último ponto de contato do visitante com o site numa experiência de desconfiança. O footer valida (ou invalida) tudo que veio antes.

**Ação:** Auditoria completa de todos os hrefs do footer. Remover links mortos. Corrigir ícone do WhatsApp. Alinhar lista de serviços com o que está em ServicesSimple.

---

## DIAGNÓSTICO FINAL

O site tem ossos bons: stack técnico adequado, identidade visual coesa, copy em boa direção. O que está faltando não é talento técnico — é **execução completa antes de publicar**.

Três problemas sistêmicos transpassam todos os componentes e precisam ser resolvidos antes de qualquer outra iteração:

1. **Dois números de WhatsApp diferentes no mesmo site.** Escolha um. Coloque numa constante centralizada. Propague para todos os componentes.

2. **Múltiplas páginas deletadas com links ativos apontando para elas.** O site está com rotas no menu que entregam 404. Isso é inaceitável em produção.

3. **MiniCases com conteúdo fictício apresentado como real.** Remove hoje. Sem negociação.

O restante é iterativo. Esses três, não.
