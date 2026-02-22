#!/bin/bash

# ========================================
# Script de Deploy Automático - Vercel
# On Demand Digital
# ========================================

set -e  # Exit on error

echo "🚀 Iniciando processo de deploy para Vercel..."
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# ========================================
# 1. Verificar Vercel CLI
# ========================================
echo "📦 Verificando Vercel CLI..."
if ! command -v vercel &> /dev/null; then
    echo -e "${RED}❌ Vercel CLI não encontrado${NC}"
    echo -e "${YELLOW}Instalando Vercel CLI...${NC}"
    npm install -g vercel
    echo -e "${GREEN}✅ Vercel CLI instalado${NC}"
else
    echo -e "${GREEN}✅ Vercel CLI encontrado${NC}"
fi
echo ""

# ========================================
# 2. Verificar autenticação Vercel
# ========================================
echo "🔐 Verificando autenticação..."
if [ ! -f ~/.vercel/auth.json ] 2>/dev/null; then
    echo -e "${YELLOW}⚠️  Não está logado no Vercel${NC}"
    echo -e "${BLUE}Faça login com: vercel login${NC}"
else
    echo -e "${GREEN}✅ Já está autenticado${NC}"
fi
echo ""

# ========================================
# 3. Limpar build anterior
# ========================================
echo "🧹 Limpando build anterior..."
rm -rf .next
echo -e "${GREEN}✅ Cache limpo${NC}"
echo ""

# ========================================
# 4. Instalar dependências
# ========================================
echo "📥 Instalando dependências..."
npm ci --legacy-peer-deps
echo -e "${GREEN}✅ Dependências instaladas${NC}"
echo ""

# ========================================
# 5. Build
# ========================================
echo "🔨 Building para produção..."
npm run build
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build concluído com sucesso${NC}"
else
    echo -e "${RED}❌ Erro no build${NC}"
    exit 1
fi
echo ""

# ========================================
# 6. Deploy para Vercel
# ========================================
echo "🚀 Enviando para Vercel..."
vercel --prod

echo ""
echo -e "${GREEN}✅ Deploy concluído!${NC}"
echo -e "${BLUE}Verifique em https://vercel.com/deployments${NC}"

echo "🧹 Limpando build anterior..."
rm -rf .next
echo -e "${GREEN}✅ Build anterior removida${NC}"
echo ""

# ========================================
# 4. Instalar dependências
# ========================================
echo "📚 Instalando dependências..."
npm ci --legacy-peer-deps
echo -e "${GREEN}✅ Dependências instaladas${NC}"
echo ""

# ========================================
# 5. Build do projeto
# ========================================
echo "🔨 Executando build..."
npm run build
echo -e "${GREEN}✅ Build concluída com sucesso${NC}"
echo ""

# ========================================
# 6. Deploy
# ========================================
echo "🚀 Fazendo deploy..."
echo ""
echo -e "${BLUE}Escolha o tipo de deploy:${NC}"
echo "1) Preview (teste)"
echo "2) Produção"
read -p "Opção (1 ou 2): " deploy_option

if [ "$deploy_option" = "2" ]; then
    echo -e "${YELLOW}Fazendo deploy em PRODUÇÃO...${NC}"
    netlify deploy --prod
    echo ""
    echo -e "${GREEN}✅ Deploy em PRODUÇÃO concluído!${NC}"
else
    echo -e "${YELLOW}Fazendo deploy de PREVIEW...${NC}"
    netlify deploy
    echo ""
    echo -e "${GREEN}✅ Deploy de PREVIEW concluído!${NC}"
fi

echo ""
echo "=========================================="
echo -e "${GREEN}🎉 Deploy finalizado com sucesso!${NC}"
echo "=========================================="
echo ""
echo "🔗 Para abrir o site:"
echo "   netlify open:site"
echo ""
echo "📊 Para ver o dashboard:"
echo "   netlify open:admin"
echo ""
