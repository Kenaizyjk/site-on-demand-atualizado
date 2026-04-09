# Claude Code Tools — MCP Servers & Skills Disponíveis

> Documentação dos servidores MCP e skills já disponíveis nesta sessão,
> além de recomendações para instalações adicionais.

---

## ✅ MCP Servers JÁ Ativos Nesta Sessão

### 1. Vercel MCP (`mcp__claude_ai_Vercel` / `mcp__plugin_vercel_vercel`)
**O que faz:** Acesso direto à plataforma Vercel — deploys, logs, projetos, domínios, feedback toolbar.

| Ferramenta | Descrição |
|---|---|
| `deploy_to_vercel` | Faz deploy do projeto atual |
| `get_deployment` | Verifica status de um deploy |
| `get_deployment_build_logs` | Lê logs de build |
| `get_runtime_logs` | Lê logs de runtime/serverless |
| `list_deployments` | Lista todos os deploys |
| `list_projects` | Lista projetos Vercel |
| `get_project` | Detalhes de um projeto |
| `check_domain_availability_and_price` | Verifica domínios |
| `search_vercel_documentation` | Busca na docs do Vercel |
| `web_fetch_vercel_url` | Acessa URLs do Vercel |
| `list_toolbar_threads` | Threads de feedback visual |

**Segurança:** ✅ Oficial Vercel — sem risco
**Uso no projeto:** Deploy, monitoramento de logs, verificação de builds

---

### 2. Supabase MCP (`mcp__claude_ai_Supabase`)
**O que faz:** Gerenciamento completo de projetos Supabase — banco de dados, edge functions, branches.

| Ferramenta | Descrição |
|---|---|
| `execute_sql` | Executa SQL no banco |
| `list_tables` | Lista tabelas |
| `apply_migration` | Aplica migrations |
| `deploy_edge_function` | Deploy de edge functions |
| `get_logs` | Logs do projeto |
| `generate_typescript_types` | Gera tipos TS do schema |
| `create_project` | Cria novo projeto |
| `create_branch` | Cria branch de banco |

**Segurança:** ✅ Oficial Supabase
**Uso potencial:** Se implementar persistência para formulários, leads, analytics customizado

---

### 3. Google Calendar MCP (`mcp__claude_ai_Google_Calendar`)
**O que faz:** Acesso ao Google Calendar — criar/editar eventos, buscar horários livres.

| Ferramenta | Descrição |
|---|---|
| `gcal_create_event` | Cria evento |
| `gcal_list_events` | Lista eventos |
| `gcal_find_my_free_time` | Verifica horários disponíveis |
| `gcal_find_meeting_times` | Encontra horários para reuniões |
| `gcal_respond_to_event` | Responde convites |

**Segurança:** ✅ OAuth Google
**Uso potencial:** Agendamento automático de diagnósticos, integrar com Calendly

---

### 4. Gmail MCP (`mcp__claude_ai_Gmail`)
**O que faz:** Leitura e criação de rascunhos no Gmail.

| Ferramenta | Descrição |
|---|---|
| `gmail_search_messages` | Busca emails |
| `gmail_read_message` | Lê email específico |
| `gmail_read_thread` | Lê thread completa |
| `gmail_create_draft` | Cria rascunho |
| `gmail_list_labels` | Lista labels |

**Segurança:** ✅ OAuth Google — leitura e rascunhos apenas
**Uso potencial:** Monitorar leads recebidos, criar respostas automatizadas

---

### 5. Calendly MCP (`mcp__claude_ai_Calendly`)
**O que faz:** Gerenciamento completo de agendamentos Calendly.

| Ferramenta | Descrição |
|---|---|
| `event_types-list_event_types` | Lista tipos de evento |
| `meetings-list_events` | Lista agendamentos |
| `meetings-create_invitee` | Cria convite |
| `availability-get_user_availability_schedule` | Horários disponíveis |
| `scheduling_links-create_single_use_scheduling_link` | Link único de agendamento |

**Segurança:** ✅ API oficial Calendly
**Uso no projeto:** Integrar botão "Agendar Diagnóstico" com link único gerado dinamicamente

---

### 6. Miro MCP (`mcp__claude_ai_Miro`)
**O que faz:** Criação e edição de boards Miro — diagramas, tabelas, documentos.

| Ferramenta | Descrição |
|---|---|
| `diagram_create` | Cria diagrama |
| `doc_create` | Cria documento |
| `table_create` | Cria tabela |
| `board_list_items` | Lista items do board |
| `context_explore` | Explora contexto do board |

**Segurança:** ✅ API oficial Miro
**Uso potencial:** Documentar arquitetura, wireframes, fluxos de automação

---

### 7. Notion MCP (`mcp__claude_ai_Notion`)
**O que faz:** Criação e edição de páginas e databases Notion.

| Ferramenta | Descrição |
|---|---|
| `notion-create-pages` | Cria páginas |
| `notion-create-database` | Cria database |
| `notion-search` | Busca conteúdo |
| `notion-update-page` | Edita páginas |
| `notion-fetch` | Lê página |
| `notion-get-users` | Lista usuários |

**Segurança:** ✅ OAuth Notion
**Uso potencial:** CRM de leads, gestão de conteúdo do blog, documentação interna

---

## 🔧 Skills Disponíveis (Slash Commands)

| Skill | Ativa com | O que faz |
|---|---|---|
| `memory-recall` | `/memory-recall` | Recupera contexto de sessões anteriores |
| `memory-wrapup` | `/memory-wrapup` | Salva contexto da sessão atual |
| `vercel:deploy` | `/vercel:deploy` | Deploy para Vercel (prod ou preview) |
| `vercel:status` | `/vercel:status` | Status do projeto Vercel |
| `vercel:env` | `/vercel:env` | Gerencia variáveis de ambiente |
| `vercel:marketplace` | `/vercel:marketplace` | Integrações do Vercel Marketplace |
| `vercel:ai-gateway` | `/vercel:ai-gateway` | Configuração de AI Gateway |
| `vercel:auth` | `/vercel:auth` | Autenticação (Clerk, Auth0) |
| `vercel:nextjs` | `/vercel:nextjs` | Guidance Next.js App Router |
| `vercel:shadcn` | `/vercel:shadcn` | shadcn/ui guidance |
| `code-review` | `/code-review` | Review de pull request |
| `simplify` | `/simplify` | Simplifica código recente |
| `claude-api` | `/claude-api` | Build com Claude/Anthropic SDK |
| `clean-code` | `/clean-code` | Padrões de código limpo |

---

## 📦 MCPs Recomendados para Instalar

### Prioridade Alta

#### Context7 — Documentação atualizada de libs
```bash
# Adiciona no ~/.claude/settings.json → mcpServers
{
  "context7": {
    "command": "npx",
    "args": ["-y", "@context7/mcp-server"]
  }
}
```
**O que faz:** Busca documentação atualizada de Next.js, React, Tailwind etc. diretamente no contexto
**Segurança:** ✅ Leitura de docs apenas

#### Brave Search — Pesquisa web real
```bash
{
  "brave-search": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-brave-search"],
    "env": { "BRAVE_API_KEY": "sua-chave-aqui" }
  }
}
```
**O que faz:** Pesquisa web sem rastear histórico
**Segurança:** ✅ Requer API key gratuita (brave.com/search/api)

#### Playwright — Screenshots e testes E2E
```bash
{
  "playwright": {
    "command": "npx",
    "args": ["-y", "@playwright/mcp"]
  }
}
```
**O que faz:** Abre browser, tira screenshots, testa interações — útil para verificar como o site está visualmente
**Segurança:** ✅ Sandbox — roda browser controlado

### Prioridade Média

#### GitHub MCP — Gestão de PRs e issues
```bash
{
  "github": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-github"],
    "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "seu-token" }
  }
}
```
**O que faz:** Cria PRs, lê issues, commenta, gerencia branches
**Segurança:** ✅ Token com escopo limitado

#### Filesystem MCP — Operações avançadas de arquivo
```bash
{
  "filesystem": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-filesystem", "/caminho/permitido"]
  }
}
```
**O que faz:** Listagem, leitura, escrita de arquivos com whitelist de diretórios
**Segurança:** ✅ Só acessa o diretório especificado

#### SQLite MCP — Banco local
```bash
{
  "sqlite": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-sqlite", "--db-path", "./local.db"]
  }
}
```
**O que faz:** Banco SQLite local para dados temporários, analytics, testes
**Segurança:** ✅ Arquivo local apenas

### Prioridade Baixa (mas útil)

#### Exa AI Search — Pesquisa semântica
```bash
{
  "exa": {
    "command": "npx",
    "args": ["-y", "exa-mcp-server"],
    "env": { "EXA_API_KEY": "sua-chave" }
  }
}
```
**O que faz:** Pesquisa web com ranking por relevância semântica — melhor que busca regular para pesquisa de mercado

---

## ⚠️ O que NÃO Instalar (riscos)

| Servidor/Plugin | Risco |
|---|---|
| MCPs de terceiros não verificados no npm | Potencial exfiltração de dados |
| Servidores com acesso a shell/terminal irrestrito | Execução de comandos arbitrários |
| MCPs que pedem chaves de API de clientes | Vazamento de credenciais |
| Plugins que fazem POST para URLs desconhecidas | Exfiltração de contexto |

**Regra geral:** Instale apenas MCPs do repositório oficial `modelcontextprotocol/servers` (mantido pela Anthropic) ou de empresas verificadas (Vercel, Supabase, GitHub, etc.).

---

## 🚀 Como Instalar MCPs no Claude Code

1. Abra o arquivo de configuração:
   ```
   ~/.claude/settings.json   (Windows: C:\Users\seu-usuario\.claude\settings.json)
   ```

2. Adicione a seção `mcpServers`:
   ```json
   {
     "mcpServers": {
       "playwright": {
         "command": "npx",
         "args": ["-y", "@playwright/mcp"]
       },
       "context7": {
         "command": "npx",
         "args": ["-y", "@context7/mcp-server"]
       }
     }
   }
   ```

3. Reinicie o Claude Code (`/exit` e reabra)

4. Verifique com `/help` — os novos servidores aparecem nas ferramentas disponíveis

---

## 🔗 Referências

- Repositório oficial MCPs: `https://github.com/modelcontextprotocol/servers`
- Docs Claude Code: `https://docs.anthropic.com/en/docs/claude-code`
- Docs MCP: `https://modelcontextprotocol.io`
- Vercel MCP: `https://vercel.com/docs/mcp`

---

*Gerado em: 2026-04-08 | Sessão de trabalho On Demand Digital*
