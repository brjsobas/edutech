# 🚀 Guía de Despliegue - Academia Void

## 📋 Preparación para Producción

### 1. Verificación Previa
```bash
# Verificar que todos los archivos están presentes
./verify.sh

# Probar localmente
python3 -m http.server 8000
```

### 2. Optimización de Imágenes
Las imágenes actuales están hospedadas en Unsplash. Para producción:

```bash
# Descargar imágenes localmente
mkdir -p assets/images/courses
mkdir -p assets/images/hero

# Actualizar rutas en js/models/data.js
# Reemplazar URLs de Unsplash por rutas locales
```

---

## 🌐 Opciones de Despliegue

### Opción 1: GitHub Pages (GRATIS)

#### Paso 1: Crear repositorio
```bash
git init
git add .
git commit -m "Initial commit - Academia Void"
```

#### Paso 2: Subir a GitHub
```bash
# Crear repo en GitHub primero
git remote add origin https://github.com/tu-usuario/academia-void.git
git branch -M main
git push -u origin main
```

#### Paso 3: Activar GitHub Pages
1. Ve a Settings > Pages
2. Source: Deploy from a branch
3. Branch: main / root
4. Save

**URL:** `https://tu-usuario.github.io/academia-void`

#### Configuración adicional:
- No requiere cambios en el código
- El hash routing funciona perfectamente
- Gratis e ilimitado

---

### Opción 2: Netlify (GRATIS)

#### Método 1: Drag & Drop
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta del proyecto
3. Listo!

#### Método 2: Git
```bash
# Conectar con Git
netlify init
```

#### netlify.toml (opcional)
```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Ventajas:**
- Deploy automático en cada push
- HTTPS gratis
- CDN global
- Formularios funcionales

---

### Opción 3: Vercel (GRATIS)

#### Deploy
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### vercel.json (opcional)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Ventajas:**
- Deploy instantáneo
- Preview URLs
- Analytics gratis
- Edge Functions

---

### Opción 4: Servidor Propio

#### Nginx
```nginx
server {
    listen 80;
    server_name academiavoid.com;
    root /var/www/academia-void;
    index index.html;

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(css|js|jpg|png|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
}
```

#### Apache (.htaccess)
```apache
# SPA routing
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
</IfModule>
```

---

## ⚡ Optimizaciones de Performance

### 1. Minificar CSS
```bash
# Instalar cssnano
npm install -g cssnano-cli

# Minificar
cssnano css/styles.css css/styles.min.css
```

### 2. Minificar JavaScript
```bash
# Instalar terser
npm install -g terser

# Minificar cada archivo
terser js/app.js -o js/app.min.js -c -m
terser js/router.js -o js/router.min.js -c -m
# ... repetir para todos los archivos
```

### 3. Optimizar Imágenes
```bash
# Instalar imagemin
npm install -g imagemin-cli

# Optimizar
imagemin assets/images/* --out-dir=assets/images/optimized
```

### 4. Actualizar index.html
```html
<!-- Usar versiones minificadas -->
<link rel="stylesheet" href="css/styles.min.css">
<script type="module" src="js/app.min.js"></script>
```

---

## 🔒 Seguridad

### Headers de Seguridad (Netlify)
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "no-referrer-when-downgrade"
```

### HTTPS
- GitHub Pages: Automático
- Netlify: Automático
- Vercel: Automático
- Servidor propio: Let's Encrypt

---

## 📊 Analytics (Opcional)

### Google Analytics
```html
<!-- En index.html, antes de </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Plausible Analytics (Privacy-friendly)
```html
<script defer data-domain="academiavoid.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🔍 SEO

### 1. Meta Tags
Ya incluidos en `index.html`:
- ✅ Title
- ✅ Description
- ✅ Open Graph
- ✅ Author

### 2. Sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://academiavoid.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://academiavoid.com/#/cursos</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://academiavoid.com/#/cursos/susurradores-del-vacio</loc>
    <priority>0.9</priority>
  </url>
  <!-- ... más URLs -->
</urlset>
```

### 3. robots.txt
```
User-agent: *
Allow: /
Sitemap: https://academiavoid.com/sitemap.xml
```

---

## 📱 PWA (Progressive Web App) - Opcional

### manifest.json
```json
{
  "name": "Academia Void",
  "short_name": "Academia Void",
  "description": "Cursos inmersivos y gamificados",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#f9f5f0",
  "theme_color": "#e67e50",
  "icons": [
    {
      "src": "/assets/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/assets/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### service-worker.js (básico)
```javascript
const CACHE_NAME = 'academia-void-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/app.js',
  '/js/router.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

---

## ✅ Checklist de Deploy

### Pre-Deploy
- [ ] Código testeado localmente
- [ ] Sin errores en consola
- [ ] Responsive verificado
- [ ] Todas las páginas funcionan
- [ ] Links funcionan correctamente

### Optimización
- [ ] CSS minificado (opcional)
- [ ] JS minificado (opcional)
- [ ] Imágenes optimizadas
- [ ] Assets comprimidos

### Configuración
- [ ] Meta tags actualizados
- [ ] URLs de producción configuradas
- [ ] Analytics configurado (opcional)
- [ ] Dominio personalizado (opcional)

### Post-Deploy
- [ ] Sitio accesible
- [ ] HTTPS funcionando
- [ ] Todas las páginas cargan
- [ ] No hay errores 404
- [ ] Performance aceptable
- [ ] SEO verificado

---

## 🎯 Recomendación

Para empezar rápido:
1. **Netlify** - Más fácil, drag & drop
2. **Vercel** - Mejor para developers
3. **GitHub Pages** - Gratis y simple

Para producción seria:
1. **Vercel** - Performance + Analytics
2. **Cloudflare Pages** - CDN global
3. **Servidor propio** - Control total

---

## 📞 Soporte

Si encuentras problemas:
1. Revisa la consola del navegador
2. Verifica que todos los archivos estén presentes
3. Comprueba las rutas de los recursos
4. Revisa la documentación de la plataforma

---

**¡Tu sitio está listo para el mundo!** 🌍

*Última actualización: 2024-01-13*
