#!/bin/bash

# ========================================
# Script de Deploy Automático - Netlify
# On Demand Digital
# ========================================

set -e  # Exit on error

echo "🚀 Iniciando processo de deploy..."
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# ========================================
# 1. Verificar Netlify CLI
# ========================================
echo "📦 Verificando Netlify CLI..."
if ! command -v netlify &> /dev/null; then
    echo -e "${RED}❌ Netlify CLI não encontrado${NC}"
    echo -e "${YELLOW}Instalando Netlify CLI...${NC}"
    npm install -g netlify-cli
    echo -e "${GREEN}✅ Netlify CLI instalado${NC}"
else
    echo -e "${GREEN}✅ Netlify CLI encontrado${NC}"
fi
echo ""

# ========================================
# 2. Verificar se está logado
# ========================================
echo "🔐 Verificando autenticação..."
if ! netlify status &> /dev/null; then
    echo -e "${YELLOW}⚠️  Não está logado no Netlify${NC}"
    echo -e "${BLUE}Abrindo navegador para login...${NC}"
    netlify login
    echo -e "${GREEN}✅ Login realizado${NC}"
else
    echo -e "${GREEN}✅ Já está autenticado${NC}"
fi
echo ""

# ========================================
# 3. Limpar build anterior
# ========================================
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
