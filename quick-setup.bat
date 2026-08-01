#!/bin/bash

echo "🚀 Portfolio Quick Setup"
echo "======================="

# Check Node.js
command -v node >/dev/null 2>&1 || { echo "❌ Node.js is required. Install from nodejs.org"; exit 1; }
echo "✅ Node.js found: $(node --version)"

# Check Yarn
command -v yarn >/dev/null 2>&1 || { echo "⚠️  Yarn not found. Installing..."; npm install -g yarn; }
echo "✅ Yarn found: $(yarn --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
yarn install

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Customize src/config.js with your information"
echo "2. Update src/projectsData.js with your projects"
echo "3. Replace profile placeholder with your photo"
echo "4. Run: yarn start"
echo ""
echo "Your portfolio will open at http://localhost:3000"
