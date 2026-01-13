# 🚀 Guía de Inicio Rápido

## ⚡ Ejecutar en 30 segundos

### Método 1: Python (Recomendado)
```bash
python3 -m http.server 8000
```
Luego abre: http://localhost:8000

### Método 2: PHP
```bash
php -S localhost:8000
```
Luego abre: http://localhost:8000

### Método 3: Node.js
```bash
npx http-server -p 8000
```
Luego abre: http://localhost:8000

## 📁 Estructura de Archivos

```
vanilla-mvc/
├── index.html              ← Punto de entrada
├── css/
│   └── styles.css          ← Todos los estilos
├── js/
│   ├── app.js             ← Inicialización
│   ├── router.js          ← Enrutamiento
│   ├── models/
│   │   └── data.js        ← Datos (MODEL)
│   ├── views/
│   │   └── view.js        ← Interfaz (VIEW)
│   └── controllers/
│       └── controller.js  ← Lógica (CONTROLLER)
└── assets/
    └── images/            ← Recursos
```

## 🎯 Páginas Disponibles

| Ruta | Descripción |
|------|-------------|
| `#/` | Página de inicio |
| `#/cursos` | Lista de cursos |
| `#/cursos/susurradores-del-vacio` | Detalle de curso |
| `#/sobre-nosotros` | Información de la empresa |
| `#/metodologia` | Metodología de enseñanza |
| `#/faq` | Preguntas frecuentes |

## ✏️ Modificar Contenido

### Cambiar datos de cursos
Edita: `js/models/data.js` → método `initCourses()`

### Cambiar colores
Edita: `css/styles.css` → variables CSS al inicio

### Añadir nueva página
1. Añade renderizado en `js/views/view.js`
2. Añade método en `js/controllers/controller.js`
3. Actualiza router en el switch case
4. Añade enlace en navegación

## 🐛 Solución de Problemas

### ❌ Módulos JS no cargan
**Solución**: Debes usar un servidor HTTP. No funciona abriendo el archivo directamente.

### ❌ Imágenes no cargan
**Solución**: Verifica que las URLs de las imágenes sean correctas o descarga las imágenes localmente.

### ❌ CORS errors
**Solución**: Usa un servidor HTTP local (ver métodos arriba).

## 📚 Más Información

- Ver `README.md` para documentación completa
- Ver `ARQUITECTURA.md` para entender el diseño MVC

## 💡 Consejos

1. **Abre la consola del navegador** (F12) para ver mensajes de debug
2. **Usa Live Server** en VS Code para desarrollo más rápido
3. **Modifica y guarda** - los cambios se ven inmediatamente
4. **No hay build step** - es JavaScript puro

## ✅ Checklist de Verificación

- [ ] Servidor HTTP ejecutándose
- [ ] Navegador abierto en http://localhost:8000
- [ ] Consola del navegador abierta (F12)
- [ ] No hay errores en consola
- [ ] Navegación funciona correctamente
- [ ] Responsive design funciona (prueba en móvil)

## 🎨 Personalización Rápida

### Cambiar nombre de la academia
Busca "Academia Void" y reemplaza en:
- `index.html` (título, navegación, footer)
- `js/views/view.js` (sin cambios necesarios)

### Cambiar colores principales
En `css/styles.css`, modifica:
```css
--color-primary: hsl(15, 80%, 55%);     /* Color principal */
--color-accent: hsl(175, 50%, 35%);     /* Color acento */
--color-background: hsl(40, 30%, 97%);  /* Fondo */
```

### Cambiar fuentes
En `css/styles.css`, modifica:
```css
--font-heading: 'Playfair Display', serif;
--font-body: 'DM Sans', sans-serif;
```

Luego actualiza el import en `index.html`

---

**¿Problemas?** Revisa `README.md` o abre un issue.
