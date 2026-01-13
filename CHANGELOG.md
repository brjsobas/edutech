# Changelog - Academia Void Vanilla MVC

## [1.3.6] - 2024-01-13

### 🐛 Corrección Rutas GitHub Pages
- **Rutas corregidas**: Removido `../` de todas las rutas de assets
- **Video**: Codificación URL para espacios (`%20`) en nombre de archivo
- **Imágenes logos**: Corregidas 4 rutas de logos de clientes
- **Imágenes equipo**: Corregidas 3 fotos del equipo
- Todas las rutas ahora son relativas desde la raíz: `assets/...`
- Compatible con GitHub Pages y servidores locales

## [1.3.5] - 2024-01-13

### 🔧 Ajustes Modal de Video
- **Tamaño reducido**: Video ahora más pequeño (max-width: 900px vs 1200px)
- **Click fuera cierra**: Click en cualquier parte fuera del video cierra el modal
- **Prevención de propagación**: Clicks dentro del video no cierran el modal
- **Overlay menos opaco**: Fondo negro 90% (antes 95%)
- **Responsive mejorado**:
  - Tablet: max-width 600px
  - Mobile: 95% del ancho disponible
- **Cursor**: Pointer en overlay, default en video

## [1.3.4] - 2024-01-13

### 🎬 Modal de Video
- **Modal de video** para reproducir trailer de "Susurros del Vacío"
- Video ubicado en: `assets/video/Reel_SusurrosDelVacio.mp4`
- Botón de cierre redondo (X) en la esquina superior derecha
- Funcionalidades:
  - Reproducción automática al abrir el modal
  - Pausa y reset al cerrar
  - Cierre con botón X, click fuera del video, o tecla ESC
  - Previene scroll del body mientras está abierto
- Triggers:
  - Página inicio: botón "▶ Video Susurros del Vacío"
  - Página curso Lovecraft: botón "Ver Trailer"
- Responsive: Se adapta a tablets y móviles
- Animaciones: fadeIn para overlay, slideUp para contenido
- Z-index: 10001 (sobre todos los elementos)

### 📝 Componentes Video Modal
- **js/video-modal.js**: Clase VideoModal con gestión completa
- **CSS**: Estilos con overlay oscuro (90% negro), botón circular, ratio 16:9
- Atributo `data-video-trigger` para activar el modal desde cualquier botón

## [1.3.3] - 2024-01-13

### 🎨 Logo con Imagen
- **Logo EduTech** ahora usa imagen en lugar de texto
- Ubicación: `assets/images/EduTech_logo.png`
- Tamaño responsive: 2.5rem en desktop, 2rem en mobile
- Hover effect con transición de opacidad
- Mantiene proporciones con `object-fit: contain`

## [1.3.2] - 2024-01-13

### ✨ Fuente Custom Requiem
- **Fuente Requiem Regular** aplicada al título "Susurros del Vacío"
- Agregada declaración `@font-face` para fuente custom
- Ubicación: `assets/fonts/Requiem/Requiem Regular.otf`
- Clase `.lovecraft-title` ahora usa `font-family: 'Requiem'`
- Font-display: swap para mejor rendimiento

## [1.3.1] - 2024-01-13

### 🎨 Layout Metodología - Cards 2x2
- **Grid de 2 columnas** para las cards de metodología
- Layout en filas: 2 cards arriba, 2 cards abajo
- Migrado de estilos inline a clases CSS (`.card-grid` y `.card`)
- Responsive adaptativo:
  - Desktop y Tablet (>480px): 2 columnas (2x2 grid)
  - Mobile (<480px): 1 columna (stack vertical)
- Gap de 2rem en desktop, 1.5rem en tablet, 1.25rem en móvil

### 🔧 Refactorización CSS
- Añadido padding y text-align a clase `.card` base
- Nueva clase `.course-card` para cards con imagen (cursos)
- Cards de metodología usan clases CSS en lugar de estilos inline
- Mejor separación de estilos para diferentes tipos de cards

## [1.3.0] - 2024-01-13

### ✨ Countdown Banner
- **Banner de cuenta atrás promocional** fijo en la parte superior
- Cuenta atrás hasta medianoche (00:00:00)
- Desaparece automáticamente al hacer scroll hacia abajo
- Reaparece al volver arriba de la página
- CTA button "Matricúlate" que enlaza a página de cursos
- Diseño responsive para móviles y tablets

### 🎨 Estilos Añadidos - Countdown Banner
- `.countdown-banner`: Banner fijo con gradiente naranja
- `.countdown-banner.hidden`: Estado oculto con transform
- `.countdown-timer`: Timer con boxes semi-transparentes
- `.countdown-cta`: Botón blanco con hover effects
- Ajuste automático de posición del navbar
- Responsive: Stack vertical en móviles pequeños

### 🔧 Funcionalidad
- Actualización del timer cada segundo
- Cálculo automático de tiempo hasta medianoche
- Detección de scroll con threshold de 100px
- Event listeners optimizados
- Limpieza de intervalos al destruir componente
- Formato de números con padding (00:00:00)

### 📝 Componentes
- **js/countdown.js**: Lógica del countdown y scroll behavior
- Timer automático que se resetea a medianoche
- Clase `CountdownBanner` con métodos:
  - `updateCountdown()`: Actualiza los números del timer
  - `handleScroll()`: Maneja el comportamiento de mostrar/ocultar
  - `destroy()`: Limpia intervalos

## [1.2.0] - 2024-01-13

### ✨ Página "Sobre Nosotros" Rediseñada
- **Diseño simplificado y limpio** siguiendo el nuevo estándar
- Hero section centrado con título grande
- Grid de 3 valores con tarjetas
- Tarjeta "Impacto" destacada con borde de color primario
- Eliminados elementos innecesarios (misión, visión, descripción larga)
- Hover effects en las tarjetas con elevación
- Responsive design: Grid de 1 columna en móvil

### 🎨 Estilos Añadidos - About Us
- `.about-hero`: Hero section minimalista con fondo blanco
- `.about-hero-title`: Título grande con tipografía Playfair Display
- `.about-valores-section`: Sección de valores con fondo blanco
- `.about-valores-container`: Grid de 3 columnas (max-width 1200px)
- `.about-valor-card`: Tarjetas con borde, padding y hover effect
- `.about-valor-card.destacado`: Tarjeta destacada con borde primario
- Responsive: Grid adaptativo para móviles

### 📝 Datos Actualizados
- Modelo simplificado: solo título y valores
- 3 valores principales:
  - **Innovación**: Nuevas formas de aprendizaje efectivo
  - **Excelencia**: Diseño que supera expectativas
  - **Impacto**: Transformación real en participantes (destacado)
- Flag `destacado: true` para resaltar valor principal
- Textos actualizados según especificación del cliente

## [1.1.0] - 2024-01-13

### ✨ Añadido
- **Página Lovecraft completa** para "Susurradores del Vacío"
  - Hero section con parallax effects
  - Background de video/imagen con overlay
  - Floating orbs animados
  - Info bar con rating y precio
  - Sección de features (3 características)
  - Módulos del viaje (4 actos)
  - Testimonial con estrellas
  - CTA final con gradiente

### 🎨 Estilos
- Variables CSS para temática Lovecraft:
  - `--lovecraft-bg`: Fondo oscuro
  - `--lovecraft-surface`: Superficie secundaria
  - `--lovecraft-text`: Texto principal
  - `--lovecraft-accent`: Color de acento verde
  - `--lovecraft-glow`: Efecto de brillo
  - `--lovecraft-muted`: Color apagado
  - `--lovecraft-cosmic`: Color cósmico morado

- Clases CSS específicas:
  - `.lovecraft-page`: Contenedor principal
  - `.lovecraft-hero`: Hero section inmersivo
  - `.lovecraft-floating-orb`: Orbs animados
  - `.lovecraft-info-bar`: Barra de información
  - `.lovecraft-feature-card`: Tarjetas de características
  - `.lovecraft-module`: Módulos del curso
  - `.lovecraft-testimonial-section`: Sección de testimonio
  - `.lovecraft-cta`: Call to action final

### 🔧 Funcionalidad
- Efecto parallax en scroll implementado con JavaScript Vanilla
- Sistema de limpieza de event listeners al cambiar de página
- Detección automática de curso Lovecraft basado en flag `isLovecraft`
- Animaciones de hover en tarjetas y módulos
- Responsive design completo para móviles

### 📝 Datos
- Modelo de datos extendido para "Susurradores del Vacío":
  - `subtitle`: Subtítulo del curso
  - `heroImage`: Imagen de hero
  - `testimonialImage`: Imagen de testimonio
  - `rating`: Valoración del curso
  - `price`: Precio del curso
  - `isLovecraft`: Flag para detectar temática
  - `features[]`: Array de características
  - `modules[]`: Array de módulos del viaje
  - `testimonial{}`: Objeto con testimonio

## [1.0.0] - 2024-01-13

### 🎉 Lanzamiento Inicial
- Arquitectura MVC completa
- Sistema de routing basado en hash
- Páginas implementadas:
  - Inicio
  - Cursos
  - Sobre Nosotros
  - Metodología
  - FAQ
  - 404
- Navegación responsive
- Estilos CSS modernos
- JavaScript Vanilla ES6+

---

**Notas de Versión:**
- La página de Lovecraft ahora replica fielmente el diseño original de Lovable
- Todos los efectos visuales funcionan con JavaScript puro, sin dependencias
- El código es totalmente responsive y funciona en todos los navegadores modernos
