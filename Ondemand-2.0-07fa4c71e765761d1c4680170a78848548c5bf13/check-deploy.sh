#!/bin/bash

# ========================================
# Verificar Configuração de Deploy
# Execute: ./check-deploy.sh
# ========================================

echo "🔍 Verificando Configuração de Deploy"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

ERRORS=0

# 1. Verificar Node.js
echo -n "Node.js: "
if command -v node &> /dev/null; then
    VERSION=$(node --version)
    echo -e "${GREEN}✅ $VERSION${NC}"
else
    echo -e "${RED}❌ Não instalado${NC}"
    ERRORS=$((ERRORS + 1))
fi

# 2. Verificar npm
echo -n "npm: "
if command -v npm &> /dev/null; then
    VERSION=$(npm --version)
    echo -e "${GREEN}✅ v$VERSION${NC}"
else
    echo -e "${RED}❌ Não instalado${NC}"
    ERRORS=$((ERRORS + 1))
fi

# 3. Verificar Netlify CLI
echo -n "Netlify CLI: "
if command -v netlify &> /dev/null; then
    echo -e "${GREEN}✅ Instalado${NC}"
else
    echo -e "${YELLOW}⚠️  Não instalado${NC}"
    echo "   Instale com: npm install -g netlify-cli"
fi

# 4. Verificar Git
echo -n "Git: "
if command -v git &> /dev/null; then
    VERSION=$(git --version | cut -d' ' -f3)
    echo -e "${GREEN}✅ v$VERSION${NC}"
else
    echo -e "${RED}❌ Não instalado${NC}"
    ERRORS=$((ERRORS + 1))
fi

echo ""
echo "📦 Arquivos de Configuração:"

# 5. Verificar netlify.toml
echo -n "netlify.toml: "
if [ -f "netlify.toml" ]; then
    echo -e "${GREEN}✅ Existe${NC}"
else
    echo -e "${RED}❌ Não encontrado${NC}"
    ERRORS=$((ERRORS + 1))
fi

# 6. Verificar package.json
echo -n "package.json: "
if [ -f "package.json" ]; then
    echo -e "${GREEN}✅ Existe${NC}"
else
    echo -e "${RED}❌ Não encontrado${NC}"
    ERRORS=$((ERRORS + 1))
fi

# 7. Verificar next.config.mjs
echo -n "next.config.mjs: "
if [ -f "next.config.mjs" ]; then
    echo -e "${GREEN}✅ Existe${NC}"
else
    echo -e "${RED}❌ Não encontrado${NC}"
    ERRORS=$((ERRORS + 1))
fi

# 8. Verificar GitHub Actions
echo -n "GitHub Actions: "
if [ -f ".github/workflows/netlify-deploy.yml" ]; then
    echo -e "${GREEN}✅ Configurado${NC}"
else
    echo -e "${YELLOW}⚠️  Não configurado${NC}"
fi

echo ""
echo "🔧 Scripts de Deploy:"

# 9. Verificar scripts
echo -n "deploy.sh: "
if [ -f "deploy.sh" ]; then
    if [ -x "deploy.sh" ]; then
        echo -e "${GREEN}✅ Executável${NC}"
    else
        echo -e "${YELLOW}⚠️  Não executável (chmod +x deploy.sh)${NC}"
    fi
else
    echo -e "${RED}❌ Não encontrado${NC}"
fi

echo -n "deploy-quick.sh: "
if [ -f "deploy-quick.sh" ]; then
    if [ -x "deploy-quick.sh" ]; then
        echo -e "${GREEN}✅ Executável${NC}"
    else
        echo -e "${YELLOW}⚠️  Não executável (chmod +x deploy-quick.sh)${NC}"
    fi
else
    echo -e "${RED}❌ Não encontrado${NC}"
fi

echo ""
echo "📚 Documentação:"

# 10. Verificar docs
DOCS=("START_HERE.md" "DEPLOY_RAPIDO.md" "DEPLOY_AUTOMATICO.md" "GITHUB_ACTIONS_SETUP.md")
for doc in "${DOCS[@]}"; do
    echo -n "$doc: "
    if [ -f "$doc" ]; then
        echo -e "${GREEN}✅${NC}"
    else
        echo -e "${YELLOW}⚠️${NC}"
    fi
done

echo ""
echo "=========================================="

if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✅ Tudo pronto para deploy!${NC}"
    echo ""
    echo "📖 Próximos passos:"
    echo "   1. npm run deploy:prod"
    echo "   2. git push (deploy automático)"
    echo ""
else
    echo -e "${RED}❌ $ERRORS erro(s) encontrado(s)${NC}"
    echo ""
    echo "Corrija os erros acima antes de fazer deploy."
fi

echo "=========================================="
