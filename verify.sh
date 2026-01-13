#!/bin/bash

echo "🔍 Verificando estructura del proyecto Academia Void - Vanilla MVC"
echo ""

# Colores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Contador de archivos
total=0
found=0

# Archivos requeridos
files=(
    "index.html"
    "README.md"
    "ARQUITECTURA.md"
    "QUICKSTART.md"
    "package.json"
    "css/styles.css"
    "js/app.js"
    "js/router.js"
    "js/models/data.js"
    "js/views/view.js"
    "js/controllers/controller.js"
)

echo "📁 Verificando archivos principales..."
echo ""

for file in "${files[@]}"; do
    total=$((total + 1))
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file"
        found=$((found + 1))
    else
        echo -e "${RED}✗${NC} $file - NO ENCONTRADO"
    fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Resultados
if [ $found -eq $total ]; then
    echo -e "${GREEN}✓ Todos los archivos encontrados ($found/$total)${NC}"
    echo ""
    echo "🚀 Para ejecutar el proyecto:"
    echo "   python3 -m http.server 8000"
    echo ""
    echo "📖 Documentación:"
    echo "   • README.md - Guía completa"
    echo "   • ARQUITECTURA.md - Diseño técnico"
    echo "   • QUICKSTART.md - Inicio rápido"
else
    echo -e "${RED}✗ Faltan archivos: $((total - found))/$total${NC}"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Mostrar estructura
echo "📂 Estructura del proyecto:"
echo ""
tree -L 2 -I 'node_modules' 2>/dev/null || find . -type d -maxdepth 2 | grep -v "^\.$" | sed 's/^\.\///' | sort

echo ""
echo "✨ Proyecto verificado exitosamente!"
