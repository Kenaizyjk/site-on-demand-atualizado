#!/bin/bash

# ========================================
# Deploy Rápido - Netlify
# Execute: npm run deploy:prod
# ========================================

set -e

echo "🚀 Deploy Rápido para Netlify"
echo ""

# Verificar Netlify CLI
if ! command -v netlify &> /dev/null; then
    echo "⚠️  Instalando Netlify CLI..."
    npm install -g netlify-cli
fi

# Build
echo "🔨 Building..."
npm run build

# Deploy
echo "🚀 Deploying..."
netlify deploy --prod

echo ""
echo "✅ Deploy concluído!"
