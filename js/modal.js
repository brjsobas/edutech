/**
 * MODAL - Disclaimer Pop-up
 * Controla el modal de aviso educativo
 */

class Modal {
    constructor() {
        this.modal = document.getElementById('disclaimerModal');
        this.continueBtn = document.getElementById('modalContinueBtn');
        this.init();
    }

    init() {
        // Mostrar el modal al cargar la página
        this.show();

        // Event listener para el botón de continuar
        if (this.continueBtn) {
            this.continueBtn.addEventListener('click', () => {
                this.hide();
            });
        }

        // Cerrar con tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
                this.hide();
            }
        });

        // Prevenir scroll cuando el modal está abierto
        if (!this.modal.classList.contains('hidden')) {
            document.body.style.overflow = 'hidden';
        }
    }

    show() {
        if (this.modal) {
            this.modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    hide() {
        if (this.modal) {
            this.modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }
}

// Inicializar el modal cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new Modal();
    });
} else {
    new Modal();
}
