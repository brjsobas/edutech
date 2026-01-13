/**
 * APP - Application Entry Point
 * Punto de entrada de la aplicación que inicializa todos los módulos MVC
 */

import { router } from './router.js';

/**
 * Inicializar la aplicación
 */
class App {
    constructor() {
        this.init();
    }

    init() {
        console.log('🚀 Edutech - Aplicación inicializada');
        console.log('📁 Arquitectura: MVC (Model-View-Controller)');
        console.log('🎨 Tecnologías: HTML5, CSS3, JavaScript Vanilla ES6+');

        // El router ya se inicializa automáticamente al importarse
        // No necesitamos hacer nada más aquí

        // Mensaje de bienvenida en consola
        this.showWelcomeMessage();
    }

    showWelcomeMessage() {
        const styles = [
            'color: #e67e50',
            'font-size: 20px',
            'font-weight: bold',
            'text-shadow: 2px 2px 4px rgba(0,0,0,0.1)'
        ].join(';');

        console.log('%cBienvenido a Academia Void', styles);
        console.log('Una experiencia de aprendizaje inmersiva');
    }
}

// Inicializar la aplicación cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new App();
    });
} else {
    new App();
}
