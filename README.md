# Academia Void - Versión Vanilla MVC

Una aplicación web moderna construida con **HTML5**, **CSS3** y **JavaScript Vanilla** siguiendo la arquitectura **MVC (Model-View-Controller)**.

## 🏗️ Arquitectura MVC

Este proyecto implementa una arquitectura MVC limpia y modular:

```
vanilla-mvc/
├── index.html              # Punto de entrada HTML
├── css/
│   └── styles.css          # Estilos globales
├── js/
│   ├── app.js             # Punto de entrada de la aplicación
│   ├── router.js          # Sistema de enrutamiento
│   ├── models/
│   │   └── data.js        # MODEL - Capa de datos
│   ├── views/
│   │   └── view.js        # VIEW - Capa de presentación
│   └── controllers/
│       └── controller.js  # CONTROLLER - Lógica de negocio
└── assets/
    └── images/            # Imágenes y recursos
```

### 📦 Componentes de la Arquitectura

#### MODEL (`js/models/data.js`)
- **Responsabilidad**: Gestión de datos y estado de la aplicación
- **Contiene**:
  - Datos de cursos
  - Testimonios
  - FAQs
  - Información sobre la empresa
  - Metodología
- **Patrón**: Singleton para mantener una única instancia del modelo

#### VIEW (`js/views/view.js`)
- **Responsabilidad**: Renderizado de la interfaz de usuario
- **Funciones principales**:
  - `renderHome()` - Página de inicio
  - `renderCourses()` - Lista de cursos
  - `renderCourseDetail()` - Detalle de curso
  - `renderAboutUs()` - Sobre nosotros
  - `renderMethodology()` - Metodología
  - `renderFAQ()` - Preguntas frecuentes
  - `renderNotFound()` - Página 404
- **No contiene lógica de negocio**, solo presenta datos

#### CONTROLLER (`js/controllers/controller.js`)
- **Responsabilidad**: Lógica de negocio y coordinación entre Model y View
- **Funciones principales**:
  - Manejo de rutas
  - Coordinación entre datos y presentación
  - Gestión de eventos globales
  - Control de navegación móvil

#### ROUTER (`js/router.js`)
- **Responsabilidad**: Sistema de enrutamiento basado en hash
- **Características**:
  - Enrutamiento SPA (Single Page Application)
  - Navegación sin recargar la página
  - Gestión de historial del navegador
  - Manejo de enlaces internos

## 🚀 Cómo Ejecutar

### Opción 1: Servidor Local Simple

Puedes usar cualquier servidor HTTP local. Aquí algunas opciones:

#### Python 3
```bash
cd vanilla-mvc
python3 -m http.server 8000
```

#### Node.js (con http-server)
```bash
npm install -g http-server
cd vanilla-mvc
http-server -p 8000
```

#### PHP
```bash
cd vanilla-mvc
php -S localhost:8000
```

### Opción 2: Live Server (VS Code)

1. Instala la extensión "Live Server" en VS Code
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

### Opción 3: Abrir directamente

Simplemente abre `index.html` en tu navegador. Sin embargo, algunas características pueden no funcionar correctamente debido a restricciones de CORS.

## 📱 Características

- ✅ **Responsive Design** - Adaptable a móviles, tablets y desktop
- ✅ **SPA (Single Page Application)** - Navegación sin recargas
- ✅ **Arquitectura MVC** - Código organizado y mantenible
- ✅ **JavaScript Vanilla ES6+** - Sin dependencias externas
- ✅ **CSS Moderno** - Variables CSS, Grid, Flexbox
- ✅ **Accesibilidad** - Navegación por teclado y ARIA labels
- ✅ **SEO Friendly** - Meta tags y estructura semántica

## 🎨 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS
- **JavaScript ES6+** - Módulos, clases, arrow functions
- **Hash-based Routing** - Navegación SPA

## 📄 Páginas Disponibles

- **Inicio** (`#/`) - Hero section, logos, testimonios, cursos destacados
- **Cursos** (`#/cursos`) - Lista completa de cursos
- **Detalle de Curso** (`#/cursos/:id`) - Información detallada de un curso
- **Sobre Nosotros** (`#/sobre-nosotros`) - Misión, visión y valores
- **Metodología** (`#/metodologia`) - Pilares de la metodología
- **FAQ** (`#/faq`) - Preguntas frecuentes
- **404** - Página no encontrada

## 🔧 Personalización

### Modificar Datos

Los datos están centralizados en `js/models/data.js`. Para modificar:

1. **Cursos**: Edita el método `initCourses()`
2. **Testimonios**: Edita el método `initTestimonials()`
3. **FAQs**: Edita el método `initFAQs()`
4. **Metodología**: Edita el método `initMethodology()`
5. **Sobre Nosotros**: Edita el método `initAboutUs()`

### Modificar Estilos

Los estilos están en `css/styles.css`:

- **Variables CSS**: Al inicio del archivo (colores, fuentes, espaciados)
- **Componentes**: Secciones organizadas por componente
- **Responsive**: Media queries al final

### Añadir Nuevas Páginas

1. Añade el renderizado en `js/views/view.js`
2. Añade el método en el controller `js/controllers/controller.js`
3. Añade el case en el switch del router
4. Añade el enlace en la navegación del `index.html`

## 📊 Flujo de Datos

```
Usuario interactúa con la UI
        ↓
    VIEW recibe evento
        ↓
    ROUTER captura navegación
        ↓
    CONTROLLER procesa la ruta
        ↓
    MODEL proporciona datos
        ↓
    CONTROLLER coordina
        ↓
    VIEW renderiza interfaz
        ↓
    Usuario ve el resultado
```

## 🎯 Ventajas de esta Arquitectura

1. **Separación de Responsabilidades**: Cada módulo tiene una responsabilidad clara
2. **Mantenibilidad**: Fácil de mantener y extender
3. **Testabilidad**: Cada capa puede ser testeada independientemente
4. **Reutilización**: Componentes reutilizables y modulares
5. **Escalabilidad**: Fácil añadir nuevas funcionalidades

## 🌟 Diferencias con la Versión React

| Aspecto | React (Original) | Vanilla MVC |
|---------|------------------|-------------|
| Framework | React + Vite | Vanilla JavaScript |
| Dependencias | +60 paquetes npm | 0 dependencias |
| Tamaño | ~500KB (bundle) | ~50KB (total) |
| Build | Requiere compilación | Directo al navegador |
| Curva de aprendizaje | Media-Alta | Baja |
| Compatibilidad | Moderna | Universal |

## 📝 Notas

- Los módulos JavaScript usan `type="module"` en el HTML
- El routing es basado en hash (`#/ruta`) para compatibilidad
- Las imágenes usan URLs de Unsplash (considera descargarlas localmente en producción)
- El código sigue los estándares ES6+ modernos

## 🤝 Contribuir

Este proyecto es educativo. Siéntete libre de:

1. Fork el proyecto
2. Crear una rama (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Añade nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Hecho con ❤️ usando HTML, CSS y JavaScript Vanilla**
