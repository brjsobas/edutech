/**
 * CONTROLLER - Business Logic Layer
 * Maneja la lógica de negocio y coordina entre Model y View
 */

import { dataModel } from '../models/data.js';
import { view } from '../views/view.js';

class Controller {
    constructor() {
        this.currentRoute = '/';
        this.initEventListeners();
    }

    // Inicializar event listeners globales
    initEventListeners() {
        // Mobile navigation toggle
        this.initMobileNav();

        // Scroll to top on route change
        window.addEventListener('hashchange', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Inicializar navegación móvil
    initMobileNav() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });

            // Cerrar menú al hacer clic en un enlace
            document.addEventListener('click', (e) => {
                if (e.target.hasAttribute('data-link')) {
                    navMenu.classList.remove('active');
                }
            });
        }
    }

    // Manejar ruta y renderizar vista correspondiente
    handleRoute(route) {
        this.currentRoute = route;

        // Extraer ruta base y parámetros
        const routeParts = route.split('/').filter(part => part);
        const routeBase = routeParts[0] || 'home';
        const routeParam = routeParts[1];

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Renderizar según la ruta
        switch (routeBase) {
            case 'home':
            case '':
                this.showHome();
                break;
            case 'cursos':
                if (routeParam) {
                    this.showCourseDetail(routeParam);
                } else {
                    this.showCourses();
                }
                break;
            case 'sobre-nosotros':
                this.showAboutUs();
                break;
            case 'metodologia':
                this.showMethodology();
                break;
            case 'faq':
                this.showFAQ();
                break;
            default:
                this.showNotFound();
        }
    }

    // Mostrar página de inicio
    showHome() {
        const courses = dataModel.getFeaturedCourses();
        const testimonials = dataModel.getAllTestimonials();
        const logos = dataModel.getLogos();

        view.renderHome(courses, testimonials, logos);
    }

    // Mostrar página de cursos
    showCourses() {
        const courses = dataModel.getAllCourses();
        view.renderCourses(courses);
    }

    // Mostrar detalle de curso
    showCourseDetail(courseId) {
        const course = dataModel.getCourseById(courseId);

        if (course) {
            view.renderCourseDetail(course);
        } else {
            this.showNotFound();
        }
    }

    // Mostrar página Sobre Nosotros
    showAboutUs() {
        const aboutData = dataModel.getAboutUs();
        view.renderAboutUs(aboutData);
    }

    // Mostrar página Metodología
    showMethodology() {
        const methodData = dataModel.getMethodology();
        view.renderMethodology(methodData);
    }

    // Mostrar página FAQ
    showFAQ() {
        const faqs = dataModel.getAllFAQs();
        view.renderFAQ(faqs);
    }

    // Mostrar página 404
    showNotFound() {
        view.renderNotFound();
    }

    // Obtener ruta actual
    getCurrentRoute() {
        return this.currentRoute;
    }
}

export const controller = new Controller();
