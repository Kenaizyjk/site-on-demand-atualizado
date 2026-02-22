# 🐛 RELATÓRIO DE BUGS - Migração Netlify → Vercel

**Data da Análise:** 22 de Fevereiro de 2026  
**Projeto:** On Demand Digital - Next.js 16  
**Status:** Migrado para Vercel (Incompleto)

---

## 📊 RESUMO EXECUTIVO

Total de Bugs Encontrados: **9 críticos**

- ✅ **Estrutura de Projeto:** Boa
- ⚠️ **Configuração:** Problemas de legado Netlify
- ❌ **APIs Faltando:** 2 rotas críticas ausentes
- ⚠️ **URLs Inconsistentes:** 3 arquivos com domínio errado
- ⚠️ **Build Config:** Configuração permissiva perigosa

---

## 🔴 BUGS CRÍTICOS

### 1. ❌ API ROUTES FALTANDO - `/api/chat-ai`
**Arquivo:** [components/chatbot-live-section.tsx](components/chatbot-live-section.tsx#L64)  
**Linha:** 64  
**Severidade:** CRÍTICA  
**Descrição:**  
O componente `ChatbotLiveSection` faz chamada a `fetch("/api/chat-ai")` mas a rota não existe. Sem essa rota, o chatbot não funcionará e gerará erro 404.

```typescript
const response = await fetch("/api/chat-ai", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    message: userMessage,
    context: "Cliente interessado em serviços de marketing digital",
    sessionId: getOrCreateSessionId(),
    history: messages.filter(...)
  }),
  signal: controller.signal
})
```

**Fix Sugerido:**  
Criar arquivo `app/api/chat-ai/route.ts` com handler para processar mensagens do chatbot. Exemplo:

```typescript
export async function POST(request: Request) {
  try {
    const { message, context, sessionId, history } = await request.json()
    
    // TODO: Implementar lógica do chatbot
    // Pode usar OpenAI API, Claude API, ou outro serviço de IA
    
    return Response.json({
      role: "assistant",
      content: "Resposta do assistente IA"
    })
  } catch (error) {
    return Response.json({ error: "Invalid request" }, { status: 400 })
  }
}
```

---

### 2. ❌ API ROUTES FALTANDO - `/api/subscribe`
**Arquivo:** [components/lead-magnet-modal.tsx](components/lead-magnet-modal.tsx#L31)  
**Linha:** 31  
**Severidade:** CRÍTICA  
**Descrição:**  
Três componentes chamam `fetch("/api/subscribe")`:
- [components/lead-magnet-modal.tsx](components/lead-magnet-modal.tsx#L31) linha 31
- [app/ads/automation-demo/page.tsx](app/ads/automation-demo/page.tsx#L30) linha 30
- [app/ads/gmb-strategy/page.tsx](app/ads/gmb-strategy/page.tsx#L38) linha 38

A rota `/api/subscribe` não existe. Isto impedirá captura de leads em formulários.

```typescript
const response = await fetch("/api/subscribe", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email,
    name,
    source: "lead_magnet_modal",
    magnet_type: "checklist_10_passos",
  }),
})
```

**Fix Sugerido:**  
Criar `app/api/subscribe/route.ts` para integração com Brevo (antiga Sendinblue):

```typescript
export async function POST(request: Request) {
  try {
    const { email, name, source, magnet_type } = await request.json()
    
    // TODO: Implementar integração com Brevo API
    // ou outro serviço de email marketing
    
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: "Subscription failed" }, { status: 400 })
  }
}
```

---

### 3. ⚠️ ARQUIVO NETLIFY.TOML AINDA PRESENTE
**Arquivo:** [netlify.toml](netlify.toml)  
**Linha:** 1  
**Severidade:** ALTA  
**Descrição:**  
O arquivo `netlify.toml` ainda existe no projeto mas é referência a Netlify. Projeto foi migrado para Vercel - esse arquivo é desnecessário e pode causar confusão.

Arquivo contém:
```toml
[build]
  command = "npm install --legacy-peer-deps && npm run build"
  publish = ".next"
  environment = { NODE_VERSION = "20" }

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

**Fix Sugerido:**  
Remover `netlify.toml` - Vercel usa `vercel.json` para configuração.

```bash
rm netlify.toml
```

---

### 4. ⚠️ GITHUB WORKFLOW PARA NETLIFY AINDA ATIVO
**Arquivo:** [.github/workflows/netlify-deploy.yml](.github/workflows/netlify-deploy.yml)  
**Linha:** 1  
**Severidade:** ALTA  
**Descrição:**  
Workflow do GitHub Actions para deploy em Netlify ainda existe. Referencia:
- `nwtgck/actions-netlify@v2.1` (ação para Netlify)
- Secrets `NETLIFY_AUTH_TOKEN` e `NETLIFY_SITE_ID`

Isto pode causar deploys duplicados ou conflitantes com Vercel.

**Fix Sugerido:**  
Remover arquivo ou desabilitar o workflow. Vercel integra automaticamente com GitHub.

```bash
rm .github/workflows/netlify-deploy.yml
```

---

### 5. ⚠️ VERCEL.JSON COM "ROOT" INCORRETO
**Arquivo:** [vercel.json](vercel.json#L6)  
**Linha:** 6  
**Severidade:** ALTA  
**Descrição:**  
O arquivo `vercel.json` aponta para raiz incorreta:

```json
{
  "root": "Ondemand-2.0-07fa4c71e765761d1c4680170a78848548c5bf13"
}
```

Mas a estrutura do projeto é:
```
site-on-demand-atualizado/
  Ondemand-2.0-07fa4c71e765761d1c4680170a78848548c5bf13/
    (arquivos do projeto aqui)
```

**Fix Sugerido:**  
Remover propriedade `root` de `vercel.json` ou ajestar caminho. Se vercel.json está na raiz correta (`Ondemand-2.0-07fa4c71e765761d1c4680170a78848548c5bf13`), remova `root`:

```json
{
  "buildCommand": "npm install --legacy-peer-deps && npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install --legacy-peer-deps",
  "framework": "nextjs",
  "nodeVersion": "20.x",
  "env": {
    "NEXT_TELEMETRY_DISABLED": "1"
  }
}
```

---

## 🟡 BUGS DE CONFIGURAÇÃO

### 6. ⚠️ NEXT.CONFIG.MJS - IGNORAR ERROS DE BUILD
**Arquivo:** [next.config.mjs](next.config.mjs#L13)  
**Linha:** 13  
**Severidade:** ALTA  
**Descrição:**  
Configuração perigosa que ignora erros TypeScript:

```javascript
typescript: {
  ignoreBuildErrors: true, // ✅ Build seguro - não ignorar erros
},
```

Mudar para `true` (ignorar) é perigoso. Comentário diz diferente da config.

**Fix Sugerido:**  
Remover ou mudar para `false`:

```javascript
typescript: {
  ignoreBuildErrors: false, // ✅ Detectar e falhar em erros
},
```

---

### 7. ⚠️ SCRIPTS DE DEPLOY AINDA REFERENCIAM NETLIFY
**Arquivo:** [deploy-quick.sh](deploy-quick.sh)  
**Linha:** múltiplas  
**Severidade:** MÉDIA  
**Descrição:**  
Script de deploy ainda usa Netlify CLI:

```bash
# Linha 10: "🚀 Deploy Rápido para Netlify"
# Linha 13: "# Verificar Netlify CLI"
# Linha 14: if ! command -v netlify &> /dev/null; then
# Linha 16: npm install -g netlify-cli
# Linha 25: netlify deploy --prod
```

**Fix Sugerido:**  
Remover ou reescrever para usar Vercel:

```bash
#!/bin/bash
set -e

echo "🚀 Deploy para Vercel"

# Verificar Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "⚠️  Instalando Vercel CLI..."
    npm install -g vercel
fi

cd "$(dirname "$0")"
echo "📦 Buildando projeto..."

vercel deploy --prod
```

---

### 8. ⚠️ CHECK-DEPLOY.SH AINDA VERIFICA NETLIFY
**Arquivo:** [check-deploy.sh](check-deploy.sh)  
**Linha:** 39-45, 61-65, 90  
**Severidade:** MÉDIA  
**Descrição:**  
Script de check de deploy verifica Netlify CLI:

```bash
# Linha 39: "# 3. Verificar Netlify CLI"
# Linha 40: echo -n "Netlify CLI: "
# Linha 41: if command -v netlify &> /dev/null; then
# Linha 61: "# 5. Verificar netlify.toml"
# Linha 62: echo -n "netlify.toml: "
# Linha 63: if [ -f "netlify.toml" ]; then
```

**Fix Sugerido:**  
Remover verificações de Netlify ou atualizar para Vercel.

---

## 🟠 BUGS DE URL/DOMÍNIO

### 9. ❌ URLS INCONSISTENTES - DOMÍNIO ERRADO
**Arquivos Afetados:**
1. [app/blog/feed.xml/route.ts](app/blog/feed.xml/route.ts#L5) linha 5
2. [app/blog/feed.xml/route.ts](app/blog/feed.xml/route.ts#L39) linha 39
3. [app/blog/[slug]/page.tsx](app/blog/[slug]/page.tsx#L70) linha 70

**Severidade:** ALTA  
**Descrição:**  
Alguns arquivos usam domínio errado `ondemand.digital` ao invés de `ondemanddigital.com.br`:

```typescript
// ❌ ERRADO - app/blog/feed.xml/route.ts linha 5
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ondemand.digital"

// ❌ ERRADO - app/blog/feed.xml/route.ts linha 39
<author>davi@ondemand.digital (${article.author})</author>

// ❌ ERRADO - app/blog/[slug]/page.tsx linha 70
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ondemand.digital"
```

Enquanto resto do projeto usa `ondemanddigital.com.br`:
- `lib/constants.ts` - `https://ondemanddigital.com.br`
- `next.config.mjs` - `https://ondemanddigital.com.br`
- `public/robots.txt` - `https://ondemanddigital.com.br`

**Fix Sugerido:**  
Atualizar para domínio correto:

```typescript
// ✅ CORRETO
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ondemanddigital.com.br"

// ✅ CORRETO
<author>davi@ondemanddigital.com.br (${article.author})</author>

// ✅ CORRETO
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ondemanddigital.com.br"
```

---

## 📋 CHECKLIST DE FIXES

### Críticos (Quebram funcionalidade)
- [ ] Criar `/app/api/chat-ai/route.ts` para chatbot
- [ ] Criar `/app/api/subscribe/route.ts` para captura de leads
- [ ] Corrigir URLs de domínio (ondemand.digital → ondemanddigital.com.br)

### Altos (Causar problemas de deployment)
- [ ] Remover `netlify.toml`
- [ ] Remover `.github/workflows/netlify-deploy.yml`
- [ ] Corrigir `vercel.json` (remover `root` ou ajustar)
- [ ] Mudar `ignoreBuildErrors: true` para `false` em `next.config.mjs`

### Médios (Confusão/duplication)
- [ ] Atualizar/remover `deploy-quick.sh`
- [ ] Atualizar/remover `check-deploy.sh`

---

## 🔧 VARIÁVEIS DE AMBIENTE NECESSÁRIAS

Certifique-se de que essas variáveis estão configuradas no Vercel:

```env
# SEO & Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION=xxxxx

# Ad Pixels
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=xxxxx
NEXT_PUBLIC_GOOGLE_ADS_ID=G-XXXXXXX
NEXT_PUBLIC_HOTJAR_ID=xxxxx
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=xxxxx
NEXT_PUBLIC_TIKTOK_PIXEL_ID=xxxxx

# URLs
NEXT_PUBLIC_SITE_URL=https://ondemanddigital.com.br

# Webhooks
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://xxxxx

# API Keys (se usar serviços externos)
OPENAI_API_KEY=sk-xxxxx  # Se usar ChatGPT
BREVO_API_KEY=xxxxx  # Para email marketing
```

---

## 📝 NOTAS ADICIONAIS

1. **Package.json está ok** - Scripts de deploy apontam corretamente para Vercel
2. **Next.js 16 está bem configurado** - Imagens, headers, security estão bem
3. **TypeScript e ESLint estão configurados** - Sem problemas graves
4. **Componentes e páginas estão bem estruturadas** - Apenas faltam rotas de API
5. **Blog e SEO estão bem implementados** - Schema.org, RSS feed funcionando

---

## 🎯 PRÓXIMOS PASSOS

1. **Imediatamente:** Criar as 2 rotas de API que faltam
2. **Urgente:** Remover artifacts de Netlify
3. **Logo:** Corrigir inconsistências de URLs
4. **Validação:** Rodar `npm run build` e verificar erro zero
5. **Teste:** Testar chatbot, formulários de lead capture antes de deploy

---

**Relatório gerado em:** 22 de Fevereiro de 2026  
**Analisador:** AI Code Reviewer (GitHub Copilot)
