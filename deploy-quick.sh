#!/bin/bash

# ========================================
# Deploy Rápido - Vercel
# Execute: npm run deploy:prod
# ========================================

set -e

echo "🚀 Deploy Rápido para Vercel"
echo ""

# Verificar Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "⚠️  Instalando Vercel CLI..."
    npm install -g vercel
fi

# Build
echo "🔨 Building..."
npm run build

# Deploy
echo "🚀 Deploying para Vercel..."
vercel --prod

echo ""
echo "✅ Deploy concluído! Acesse https://vercel.com/deployments para monitorar"
