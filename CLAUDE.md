# On-Demand Studio — Project Instructions

## Project
SaaS platform for on-demand video/design services.
Next.js App Router + Prisma + Tailwind CSS + Vercel.

## Knowledge Base
Full context in vault: `C:\Users\davil\OneDrive\Documentos\Claude-KB\`
Project overview: `Claude-KB\projects\on-demand-studio\overview.md`

## Key Notebooks (NotebookLM)
```bash
# Decisions & Architecture
PYTHONUTF8=1 notebooklm ask "question" -n 135f4933-2f3e-4675-9791-cf567f1d860f

# Features & APIs
PYTHONUTF8=1 notebooklm ask "question" -n 8bdd94e7-1a58-42ae-94e8-cf058ddeed4d

# Bugs & Fixes
PYTHONUTF8=1 notebooklm ask "question" -n 0714104f-a32e-4e00-8a38-96d5544659b7
```

## Tech Stack
- **Framework:** Next.js App Router (TypeScript)
- **Styling:** Tailwind CSS + shadcn/ui
- **ORM:** Prisma
- **Deployment:** Vercel
- **AI:** Claude API (claude-sonnet-4-6)

## Code Standards
- Use Server Components by default, Client Components only when needed
- Server Actions for mutations
- TypeScript strict mode
- shadcn/ui for all UI components

## Directory Structure
```
app/           ← pages and layouts (App Router)
components/    ← shared UI components
lib/           ← utilities, db client, helpers
prisma/        ← schema.prisma + migrations
public/        ← static assets
```
