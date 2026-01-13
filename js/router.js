/**
 * ROUTER - Navigation Logic
 * Maneja el enrutamiento de la aplicación usando hash-based routing
 */

import { controller } from './controllers/controller.js';

class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        this.init();
    }

    // Inicializar el router
    init() {
        // Escuchar cambios en el hash de la URL
        window.addEventListener('hashchange', () => {
            this.handleRouteChange();
        });

        // Escuchar clics en enlaces con data-link
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-link]') || e.target.closest('[data-link]')) {
                const link = e.target.matches('[data-link]')
                    ? e.target
                    : e.target.closest('[data-link]');

                const href = link.getAttribute('href');

                // Solo prevenir si es un enlace interno (hash)
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    window.location.hash = href.substring(1);
                }
            }
        });

        // Manejar el evento de carga inicial
        window.addEventListener('load', () => {
            this.handleRouteChange();
        });

        // Si no hay hash, redirigir a la página de inicio
        if (!window.location.hash) {
            window.location.hash = '#/';
        }
    }

    // Manejar cambio de ruta
    handleRouteChange() {
        // Obtener el hash actual sin el '#'
        const hash = window.location.hash.slice(1) || '/';

        // Limpiar la ruta (remover query params y trailing slash)
        const cleanRoute = hash.split('?')[0].replace(/\/$/, '') || '/';

        this.currentRoute = cleanRoute;

        // Pasar la ruta al controller
        controller.handleRoute(cleanRoute);
    }

    // Navegar a una ruta programáticamente
    navigate(path) {
        window.location.hash = '#' + path;
    }

    // Obtener la ruta actual
    getCurrentRoute() {
        return this.currentRoute;
    }

    // Obtener parámetros de la URL
    getParams() {
        const hash = window.location.hash.slice(1);
        const queryString = hash.split('?')[1];

        if (!queryString) return {};

        const params = {};
        const pairs = queryString.split('&');

        pairs.forEach(pair => {
            const [key, value] = pair.split('=');
            params[decodeURIComponent(key)] = decodeURIComponent(value || '');
        });

        return params;
    }

    // Obtener un parámetro específico de la URL
    getParam(key) {
        const params = this.getParams();
        return params[key] || null;
    }

    // Ir atrás en el historial
    back() {
        window.history.back();
    }

    // Ir adelante en el historial
    forward() {
        window.history.forward();
    }
}

// Crear y exportar instancia única del router
export const router = new Router();
