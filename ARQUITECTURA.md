# Arquitectura MVC - Edutech

## 📐 Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────────────────────┐
│                         NAVEGADOR                                │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                      index.html                             │ │
│  │  • Estructura HTML base                                     │ │
│  │  • Navegación (Navbar)                                      │ │
│  │  • Contenedor principal (#app)                              │ │
│  │  • Footer                                                    │ │
│  │  • Importa módulos JS                                       │ │
│  └────────────────────────────────────────────────────────────┘ │
│                              │                                    │
│                              ▼                                    │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                        app.js                               │ │
│  │  • Punto de entrada                                         │ │
│  │  • Inicializa la aplicación                                 │ │
│  │  • Importa router                                           │ │
│  └────────────────────────────────────────────────────────────┘ │
│                              │                                    │
│                              ▼                                    │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                      router.js                              │ │
│  │  • Hash-based routing                                       │ │
│  │  • Escucha cambios de URL                                   │ │
│  │  • Gestiona navegación                                      │ │
│  │  • Delega a Controller                                      │ │
│  └────────────────────────────────────────────────────────────┘ │
│                              │                                    │
│                              ▼                                    │
│       ┌─────────────────────────────────────────┐               │
│       │                                          │               │
│       │           ARQUITECTURA MVC               │               │
│       │                                          │               │
│       │  ┌────────────────────────────────────┐ │               │
│       │  │         CONTROLLER                  │ │               │
│       │  │   (controllers/controller.js)       │ │               │
│       │  │                                     │ │               │
│       │  │  • Lógica de negocio               │ │               │
│       │  │  • Maneja rutas                    │ │               │
│       │  │  • Coordina Model y View           │ │               │
│       │  │  • Gestiona eventos                │ │               │
│       │  └────────────────────────────────────┘ │               │
│       │           │              │               │               │
│       │           │              │               │               │
│       │     obtiene datos    envía datos        │               │
│       │           │              │               │               │
│       │           ▼              ▼               │               │
│       │  ┌──────────────┐  ┌─────────────────┐ │               │
│       │  │    MODEL     │  │      VIEW       │ │               │
│       │  │  (data.js)   │  │    (view.js)    │ │               │
│       │  │              │  │                 │ │               │
│       │  │ • Cursos     │  │ • renderHome()  │ │               │
│       │  │ • Testimonios│  │ • renderCourses│ │               │
│       │  │ • FAQs       │  │ • renderDetail()│ │               │
│       │  │ • Metodología│  │ • renderFAQ()   │ │               │
│       │  │ • AboutUs    │  │ • etc...        │ │               │
│       │  └──────────────┘  └─────────────────┘ │               │
│       │                                          │               │
│       └─────────────────────────────────────────┘               │
│                              │                                    │
│                              ▼                                    │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                      styles.css                             │ │
│  │  • Variables CSS                                            │ │
│  │  • Componentes                                              │ │
│  │  • Responsive Design                                        │ │
│  │  • Animaciones                                              │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

## 🔄 Flujo de Ejecución

### 1. Inicialización
```
index.html carga
    ↓
app.js se ejecuta
    ↓
router.js se inicializa
    ↓
Escucha eventos de navegación
```

### 2. Navegación del Usuario
```
Usuario hace clic en enlace
    ↓
Router captura el evento
    ↓
Router actualiza hash de URL (#/ruta)
    ↓
Router llama a controller.handleRoute()
    ↓
Controller determina qué mostrar
```

### 3. Renderizado de Página
```
Controller recibe ruta
    ↓
Controller obtiene datos del Model
    ↓
Controller llama al método de View apropiado
    ↓
View genera HTML
    ↓
View actualiza el DOM (#app)
    ↓
Usuario ve la página actualizada
```

## 📦 Responsabilidades Detalladas

### MODEL (js/models/data.js)

**Responsabilidad única**: Gestionar y proporcionar datos

```javascript
class DataModel {
    // Almacena datos
    - courses
    - testimonials
    - faqs
    - methodology
    - aboutUs
    - logos

    // Proporciona acceso
    + getAllCourses()
    + getFeaturedCourses()
    + getCourseById(id)
    + getAllTestimonials()
    + getAllFAQs()
    + getMethodology()
    + getAboutUs()
    + getLogos()
}
```

**No hace**:
- ❌ No renderiza HTML
- ❌ No manipula el DOM
- ❌ No maneja rutas

### VIEW (js/views/view.js)

**Responsabilidad única**: Renderizar interfaz de usuario

```javascript
class View {
    // Renderiza páginas completas
    + renderHome(data)
    + renderCourses(data)
    + renderCourseDetail(data)
    + renderAboutUs(data)
    + renderMethodology(data)
    + renderFAQ(data)
    + renderNotFound()

    // Renderiza componentes
    + renderHeroSection()
    + renderCourseCard(course)
    + renderFeaturedCourse(course)

    // Utilidades
    + clear()
    + updateActiveNav(path)
}
```

**No hace**:
- ❌ No obtiene datos directamente
- ❌ No contiene lógica de negocio
- ❌ No maneja rutas

### CONTROLLER (js/controllers/controller.js)

**Responsabilidad única**: Coordinar Model y View

```javascript
class Controller {
    // Maneja rutas
    + handleRoute(route)

    // Muestra páginas
    + showHome()
    + showCourses()
    + showCourseDetail(id)
    + showAboutUs()
    + showMethodology()
    + showFAQ()
    + showNotFound()

    // Gestiona eventos
    + initEventListeners()
    + initMobileNav()
}
```

**Flujo típico**:
```javascript
showCourses() {
    const courses = dataModel.getAllCourses()  // Obtiene del MODEL
    view.renderCourses(courses)                // Renderiza con VIEW
}
```

### ROUTER (js/router.js)

**Responsabilidad única**: Gestionar navegación

```javascript
class Router {
    // Maneja navegación
    + init()
    + handleRouteChange()
    + navigate(path)

    // Utilidades
    + getCurrentRoute()
    + getParams()
    + getParam(key)
    + back()
    + forward()
}
```

## 🎯 Principios SOLID Aplicados

### Single Responsibility Principle (SRP)
✅ Cada clase tiene una única responsabilidad
- Model: datos
- View: presentación
- Controller: coordinación
- Router: navegación

### Open/Closed Principle (OCP)
✅ Abierto para extensión, cerrado para modificación
- Fácil añadir nuevas vistas
- Fácil añadir nuevas rutas
- No requiere modificar código existente

### Dependency Inversion Principle (DIP)
✅ Controller depende de abstracciones (interfaces)
- No está acoplado a implementaciones específicas
- Puede cambiar Model o View sin afectar Controller

## 🔌 Patrón de Diseño: Singleton

Todos los módulos principales usan el patrón Singleton:

```javascript
// Instancia única del modelo
export const dataModel = new DataModel();

// Instancia única de la vista
export const view = new View();

// Instancia única del controller
export const controller = new Controller();

// Instancia única del router
export const router = new Router();
```

**Ventajas**:
- Una sola instancia en toda la aplicación
- Estado consistente
- Fácil acceso global

## 📊 Comparación con otros Patrones

### MVC vs MVP (Model-View-Presenter)
- **MVC**: View puede acceder directamente al Model (no en nuestra implementación)
- **MVP**: Presenter es intermediario obligatorio (más cercano a nuestra implementación)

### MVC vs MVVM (Model-View-ViewModel)
- **MVC**: Controller maneja lógica
- **MVVM**: ViewModel maneja binding de datos (más reactivo)

Nuestra implementación es un híbrido MVC/MVP adaptado a JavaScript Vanilla.

## 🚀 Ventajas de esta Arquitectura

1. **Mantenibilidad**: Código organizado y fácil de mantener
2. **Escalabilidad**: Fácil añadir nuevas funcionalidades
3. **Testabilidad**: Cada módulo puede testearse por separado
4. **Reusabilidad**: Componentes reutilizables
5. **Claridad**: Flujo de datos claro y predecible
6. **Sin Dependencias**: No requiere frameworks externos

## 🎓 Conceptos Clave

### Separation of Concerns (SoC)
Cada módulo se encarga de una preocupación específica

### Single Source of Truth (SSOT)
El Model es la única fuente de verdad para los datos

### Unidirectional Data Flow
Los datos fluyen en una dirección: Model → Controller → View

### Hash-based Routing
Usa el hash de la URL (#/ruta) para navegación SPA

## 📚 Referencias

- [MVC Pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- [JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [ES6+ Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
