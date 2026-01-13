/**
 * VIEW - Presentation Layer
 * Contiene toda la lógica de renderizado de la interfaz de usuario
 */

class View {
    constructor() {
        this.app = document.getElementById('app');
    }

    // Limpiar el contenido de la aplicación
    clear() {
        // Limpiar eventos de Lovecraft si existen
        if (this.lovecraftCleanup) {
            this.lovecraftCleanup();
            this.lovecraftCleanup = null;
        }

        if (this.app) {
            this.app.innerHTML = '';
        }
    }

    // Actualizar la navegación activa
    updateActiveNav(path) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const href = link.getAttribute('href').substring(1); // Remove '#'
            if (href === path || (path === '/' && href === '/')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Renderizar página de inicio
    renderHome(courses, testimonials, logos) {
        this.clear();

        const html = `
            ${this.renderHeroSection()}
            ${this.renderLogosSection(logos)}
            ${this.renderTestimonialsSection(testimonials)}
            ${this.renderFeaturedCoursesSection(courses)}
        `;

        this.app.innerHTML = html;
        this.updateActiveNav('/');
    }

    // Renderizar Hero Section
    renderHeroSection() {
        return `
            <section class="hero-section">
                <video class="hero-video" autoplay muted loop playsinline poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80">
                    <source src="https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-1584/1080p.mp4" type="video/mp4">
                </video>
                <div class="hero-overlay"></div>
                <div class="hero-content">
                    <h1 class="heading-xl">
                        Aprende diferente.<br>
                        <span class="highlight">Vive la experiencia.</span>
                    </h1>
                    <p class="body-lg">
                        Cursos inmersivos y gamificados que transforman el aprendizaje
                        en una aventura inolvidable.
                    </p>
                    <div class="hero-buttons">
                        <a href="#/cursos" class="btn btn-hero" data-link>
                            Explorar Cursos
                            <span>→</span>
                        </a>
                        <button class="btn btn-outline" data-video-trigger style="color: white; border-color: white;">
                            <span>▶</span>
                            Video Susurros del Vacío
                        </button>
                    </div>
                </div>
                <div class="scroll-indicator"></div>
            </section>
        `;
    }

    // Renderizar sección de logos
    renderLogosSection(logos) {
        return `
            <section class="logos-section">
                <div class="container-narrow">
                    <div class="logos-grid">
                        ${logos.map(logo => `
                            <div class="logo-item">${logo}</div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    // Renderizar sección de testimonios
    renderTestimonialsSection(testimonials) {
        return `
            <section class="section bg-muted">
                <div class="container">
                    <div class="section-header">
                        <h2 class="heading-lg section-title">Lo que dicen nuestros alumnos</h2>
                        <p class="body-md section-description">
                            Testimonios reales de personas que han vivido la experiencia
                        </p>
                    </div>
                    <div class="testimonials-grid">
                        ${testimonials.map(testimonial => `
                            <div class="testimonial-card">
                                <p class="testimonial-text">"${testimonial.text}"</p>
                                <div class="testimonial-author">
                                    <img src="${testimonial.avatar}" alt="${testimonial.author}" class="testimonial-avatar">
                                    <div class="testimonial-info">
                                        <h4>${testimonial.author}</h4>
                                        <p>${testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    // Renderizar sección de cursos destacados
    renderFeaturedCoursesSection(courses) {
        return `
            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="heading-lg section-title">Cursos Destacados</h2>
                        <p class="body-md section-description">
                            Experiencias educativas diseñadas para transformar la forma en que aprendes
                        </p>
                    </div>
                    <div class="card-grid">
                        ${courses.slice(0, 4).map(course => this.renderCourseCard(course)).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    // Renderizar tarjeta de curso
    renderCourseCard(course) {
        return `
            <a href="#/cursos/${course.id}" class="card course-card" data-link>
                <div class="card-image">
                    <img src="${course.image}" alt="${course.title}">
                    ${course.featured ? '<span class="card-badge">Destacado</span>' : ''}
                </div>
                <div class="card-content">
                    <h3 class="card-title">${course.title}</h3>
                    <p class="card-description">${course.description}</p>
                    <div class="card-meta">
                        <span class="card-meta-item">
                            <span>⏱</span>
                            ${course.duration}
                        </span>
                        <span class="card-meta-item">
                            <span>👥</span>
                            ${course.participants}
                        </span>
                    </div>
                </div>
            </a>
        `;
    }

    // Renderizar página de cursos
    renderCourses(courses) {
        this.clear();

        const featuredCourse = courses.find(c => c.featured);
        const otherCourses = courses.filter(c => !c.featured);

        const html = `
            <div class="section bg-muted" style="padding-top: 8rem;">
                <div class="container-narrow section-header">
                    <h1 class="heading-xl section-title">Nuestros Cursos</h1>
                    <p class="body-lg section-description">
                        Experiencias educativas diseñadas para transformar equipos y desarrollar habilidades clave
                    </p>
                </div>
            </div>

            <section class="section">
                <div class="container">
                    ${this.renderFeaturedCourse(featuredCourse)}
                </div>
            </section>

            <section class="section bg-muted">
                <div class="container">
                    <h2 class="heading-md" style="margin-bottom: 3rem;">Todos los Cursos</h2>
                    <div class="card-grid">
                        ${otherCourses.map(course => this.renderCourseCard(course)).join('')}
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container-narrow" style="text-align: center;">
                    <h2 class="heading-md" style="margin-bottom: 1.5rem;">¿No encuentras lo que buscas?</h2>
                    <p class="body-md" style="color: var(--color-muted-foreground); margin-bottom: 2rem; max-width: 36rem; margin-left: auto; margin-right: auto;">
                        Diseñamos experiencias a medida para tu organización.
                        Cuéntanos tus objetivos y crearemos algo único para ti.
                    </p>
                    <button class="btn btn-primary">Contactar</button>
                </div>
            </section>
        `;

        this.app.innerHTML = html;
        this.updateActiveNav('/cursos');
    }

    // Renderizar curso destacado
    renderFeaturedCourse(course) {
        if (!course) return '';

        return `
            <div class="featured-course">
                <div class="featured-course-image">
                    <img src="${course.image}" alt="${course.title}">
                </div>
                <div class="featured-course-overlay"></div>
                <div class="featured-course-content">
                    <span class="featured-badge">Curso Destacado</span>
                    <h2 class="heading-lg">${course.title}</h2>
                    <p>${course.description}</p>
                    <div class="featured-meta">
                        <span>⏱ ${course.duration}</span>
                        <span>👥 ${course.participants}</span>
                    </div>
                    <a href="#/cursos/${course.id}" class="btn btn-hero" data-link>
                        Descubrir Experiencia
                        <span>→</span>
                    </a>
                </div>
            </div>
        `;
    }

    // Renderizar detalle de curso
    renderCourseDetail(course) {
        this.clear();

        if (!course) {
            this.renderNotFound();
            return;
        }

        // Si es el curso de Lovecraft, usar diseño especial
        if (course.isLovecraft) {
            this.renderLovecraftCourse(course);
            return;
        }

        // Diseño estándar para otros cursos
        const html = `
            <section class="section" style="padding-top: 8rem;">
                <div class="container-narrow">
                    <a href="#/cursos" class="btn" data-link style="margin-bottom: 2rem; display: inline-flex;">
                        <span>←</span> Volver a Cursos
                    </a>

                    <div class="featured-course" style="margin-bottom: 3rem;">
                        <div class="featured-course-image">
                            <img src="${course.image}" alt="${course.title}">
                        </div>
                        <div class="featured-course-overlay"></div>
                        <div class="featured-course-content">
                            <span class="featured-badge">${course.category}</span>
                            <h1 class="heading-xl">${course.title}</h1>
                            <p class="body-lg">${course.description}</p>
                            <div class="featured-meta">
                                <span>⏱ ${course.duration}</span>
                                <span>👥 ${course.participants}</span>
                            </div>
                        </div>
                    </div>

                    <div style="background: white; padding: 3rem; border-radius: var(--radius-xl); box-shadow: var(--shadow-soft);">
                        <p>Más información próximamente.</p>

                        <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--color-border);">
                            <h3 style="margin-bottom: 1rem;">¿Interesado en este curso?</h3>
                            <p style="color: var(--color-muted-foreground); margin-bottom: 1.5rem;">
                                Contáctanos para más información o para programar una sesión.
                            </p>
                            <button class="btn btn-primary">Solicitar Información</button>
                        </div>
                    </div>
                </div>
            </section>
        `;

        this.app.innerHTML = html;
        this.updateActiveNav('/cursos');
    }

    // Renderizar página especial de Lovecraft
    renderLovecraftCourse(course) {
        const html = `
            <main class="lovecraft-page">
                <!-- Hero Section with Parallax -->
                <section class="lovecraft-hero" id="lovecraft-hero">
                    <div class="lovecraft-hero-bg" style="background-image: url('${course.heroImage}')"></div>
                    <div class="lovecraft-hero-overlay"></div>

                    <!-- Floating orbs -->
                    <div class="lovecraft-floating-orb lovecraft-floating-orb-1"></div>
                    <div class="lovecraft-floating-orb lovecraft-floating-orb-2"></div>

                    <!-- Content -->
                    <div class="lovecraft-hero-content">
                        <span class="lovecraft-subtitle">${course.subtitle}</span>
                        <h1 class="lovecraft-title">
                            Susurros<br>
                            <span class="lovecraft-title-accent">del Vacío</span>
                        </h1>
                        <p class="lovecraft-description">${course.description}</p>
                        <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
                            <button class="btn btn-lovecraft">Responder a la llamada</button>
                            <button class="btn btn-lovecraft-outline" data-video-trigger>Ver Trailer</button>
                        </div>
                    </div>

                    <!-- Scroll indicator -->
                    <div class="scroll-indicator"></div>
                </section>

                <!-- Info Bar -->
                <section class="lovecraft-info-bar">
                    <div class="container">
                        <div class="lovecraft-info-grid">
                            <div class="lovecraft-info-item">
                                <span class="lovecraft-info-icon">⏱</span>
                                <span>${course.duration}</span>
                            </div>
                            <div class="lovecraft-info-item">
                                <span class="lovecraft-info-icon">👥</span>
                                <span>${course.participants}</span>
                            </div>
                            <div class="lovecraft-info-item">
                                <span class="lovecraft-info-icon">⭐</span>
                                <span>${course.rating} valoración</span>
                            </div>
                            <div class="lovecraft-price">${course.price}</div>
                        </div>
                    </div>
                </section>

                <!-- Features -->
                <section class="lovecraft-section">
                    <div class="container">
                        <div class="lovecraft-section-header">
                            <h2 class="lovecraft-section-title">La Experiencia</h2>
                            <p class="lovecraft-section-description">
                                Una fusión única de escape room, narrativa inmersiva y horror cósmico mediado por IA
                            </p>
                        </div>
                        <div class="lovecraft-features-grid">
                            ${course.features.map(feature => `
                                <div class="lovecraft-feature-card">
                                    <div class="lovecraft-feature-icon">${feature.icon}</div>
                                    <h3 class="lovecraft-feature-title">${feature.title}</h3>
                                    <p class="lovecraft-feature-description">${feature.description}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>

                <!-- Story Modules -->
                <section class="lovecraft-section">
                    <div class="container">
                        <div class="lovecraft-section-header">
                            <h2 class="lovecraft-section-title">El Viaje</h2>
                            <p class="lovecraft-section-description">
                                Cuatro actos que te llevarán al límite de la cordura
                            </p>
                        </div>
                        <div class="lovecraft-modules">
                            ${course.modules.map(module => `
                                <div class="lovecraft-module">
                                    <div class="lovecraft-module-number">${module.number}</div>
                                    <div class="lovecraft-module-content">
                                        <h3 class="lovecraft-module-title">${module.title}</h3>
                                        <p class="lovecraft-module-description">${module.description}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>

                <!-- Testimonial -->
                <section class="lovecraft-testimonial-section">
                    <div class="lovecraft-testimonial-bg" style="background-image: url('${course.testimonialImage}')"></div>
                    <div class="lovecraft-testimonial-overlay"></div>
                    <div class="lovecraft-testimonial-content">
                        <div class="lovecraft-stars">
                            ${Array(course.testimonial.rating).fill('⭐').map(star => `<span class="lovecraft-star">${star}</span>`).join('')}
                        </div>
                        <blockquote class="lovecraft-testimonial-quote">
                            "${course.testimonial.text}"
                        </blockquote>
                        <p class="lovecraft-testimonial-author">— ${course.testimonial.author}, ${course.testimonial.role}</p>
                    </div>
                </section>

                <!-- CTA -->
                <section class="lovecraft-cta">
                    <div class="lovecraft-cta-gradient"></div>
                    <div class="lovecraft-cta-content">
                        <h2 class="lovecraft-cta-title">¿Te atreves a escuchar?</h2>
                        <p class="lovecraft-cta-description">
                            Reserva tu experiencia y prepárate para un viaje que cambiará
                            tu percepción de la realidad.
                        </p>
                        <button class="btn btn-lovecraft" style="font-size: 1.125rem; padding: 1rem 3rem;">
                             Responder a la llamada
                        </button>
                        <p class="lovecraft-cta-note">
                            Plazas limitadas. La experiencia no es apta para menores de 16 años.
                        </p>
                    </div>
                </section>
            </main>
        `;

        this.app.innerHTML = html;
        this.updateActiveNav('/cursos');

        // Añadir efecto parallax simplificado
        this.initLovecraftParallax();
    }

    // Inicializar efectos parallax para la página Lovecraft
    initLovecraftParallax() {
        let scrollY = 0;

        const handleScroll = () => {
            scrollY = window.scrollY;

            // Efecto parallax en hero background
            const heroBg = document.querySelector('.lovecraft-hero-bg');
            if (heroBg) {
                heroBg.style.transform = `translateY(${scrollY * 0.5}px)`;
            }

            // Efecto parallax en floating orbs
            const orb1 = document.querySelector('.lovecraft-floating-orb-1');
            const orb2 = document.querySelector('.lovecraft-floating-orb-2');
            if (orb1) orb1.style.transform = `translateY(${scrollY * 0.3}px)`;
            if (orb2) orb2.style.transform = `translateY(${scrollY * 0.2}px)`;

            // Efecto parallax en testimonial background
            const testimonialBg = document.querySelector('.lovecraft-testimonial-bg');
            if (testimonialBg) {
                const offset = scrollY - 2000;
                testimonialBg.style.transform = `translateY(${offset * 0.1}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Limpiar evento cuando se cambie de página
        const cleanup = () => {
            window.removeEventListener('scroll', handleScroll);
        };

        // Guardar función de limpieza
        this.lovecraftCleanup = cleanup;
    }

    // Renderizar página Sobre Nosotros
    renderAboutUs(aboutData) {
        this.clear();

        const html = `
            <!-- Hero Section -->
            <section class="section-padding bg-muted">
                <div class="container-narrow" style="text-align: center;">
                    <h1 class="heading-xl text-foreground" style="margin-bottom: 1.5rem;">${aboutData.hero.title}</h1>
                    <p class="body-lg text-muted-foreground" style="max-width: 48rem; margin: 0 auto;">
                        ${aboutData.hero.subtitle}
                    </p>
                </div>
            </section>

            <!-- Nuestra Historia -->
            <section class="section-padding">
                <div class="container-narrow">
                    <div class="about-historia-grid">
                        <div class="about-historia-content">
                            <h2 class="heading-md text-foreground" style="margin-bottom: 1.5rem;">${aboutData.historia.title}</h2>
                            <div class="about-historia-text">
                                ${aboutData.historia.paragraphs.map(p => `<p>${p}</p>`).join('')}
                            </div>
                        </div>
                        <div class="about-historia-image-container">
                            <img src="${aboutData.historia.image}" alt="Equipo trabajando" class="about-historia-image">
                            <div class="about-historia-stat">
                                <p class="stat-number">${aboutData.historia.stat.number}</p>
                                <p class="stat-text">${aboutData.historia.stat.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Nuestro Equipo -->
            <section class="section-padding bg-muted">
                <div class="container-wide">
                    <div class="section-header" style="text-align: center; margin-bottom: 4rem;">
                        <h2 class="heading-lg text-foreground" style="margin-bottom: 1rem;">${aboutData.equipo.title}</h2>
                        <p class="body-md text-muted-foreground" style="max-width: 40rem; margin: 0 auto;">
                            ${aboutData.equipo.subtitle}
                        </p>
                    </div>
                    <div class="about-team-grid">
                        ${aboutData.equipo.members.map(member => `
                            <div class="about-team-card">
                                <div class="about-team-image">
                                    <img src="${member.image}" alt="${member.name}">
                                </div>
                                <div class="about-team-info">
                                    <h3 class="team-name">${member.name}</h3>
                                    <p class="team-role">${member.role}</p>
                                    <p class="team-description">${member.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Nuestros Valores -->
            <section class="section-padding">
                <div class="container-narrow">
                    <div class="section-header" style="text-align: center; margin-bottom: 4rem;">
                        <h2 class="heading-lg text-foreground">${aboutData.valores.title}</h2>
                    </div>
                    <div class="about-valores-grid">
                        ${aboutData.valores.items.map(valor => `
                            <div class="about-valor-card">
                                <h3 class="valor-title">${valor.title}</h3>
                                <p class="valor-description">${valor.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;

        this.app.innerHTML = html;
        this.updateActiveNav('/sobre-nosotros');
    }

    // Renderizar página Metodología
    renderMethodology(methodData) {
        this.clear();

        const html = `
            <section class="section bg-muted" style="padding-top: 8rem;">
                <div class="container-narrow section-header">
                    <h1 class="heading-xl section-title">${methodData.title}</h1>
                    <p class="body-lg section-description">${methodData.subtitle}</p>
                </div>
            </section>

            <section class="section">
                <div class="container-narrow">
                    <p class="body-lg" style="margin-bottom: 4rem; text-align: center;">${methodData.description}</p>

                    <div class="card-grid">
                        ${methodData.pillars.map(pillar => `
                            <div class="card">
                                <div style="font-size: 3rem; margin-bottom: 1rem;">${pillar.icon}</div>
                                <h3 class="heading-md" style="margin-bottom: 1rem;">${pillar.title}</h3>
                                <p style="color: var(--color-muted-foreground);">${pillar.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;

        this.app.innerHTML = html;
        this.updateActiveNav('/metodologia');
    }

    // Renderizar página FAQ
    renderFAQ(faqs) {
        this.clear();

        const html = `
            <section class="section bg-muted" style="padding-top: 8rem;">
                <div class="container-narrow section-header">
                    <h1 class="heading-xl section-title">Preguntas Frecuentes</h1>
                    <p class="body-lg section-description">
                        Encuentra respuestas a las preguntas más comunes sobre nuestros cursos
                    </p>
                </div>
            </section>

            <section class="section">
                <div class="container-narrow">
                    <div class="faq-list">
                        ${faqs.map(faq => `
                            <div class="faq-item" data-faq-id="${faq.id}">
                                <button class="faq-question">
                                    <span>${faq.question}</span>
                                    <span class="faq-icon">+</span>
                                </button>
                                <div class="faq-answer">
                                    <div class="faq-answer-content">
                                        ${faq.answer}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;

        this.app.innerHTML = html;
        this.updateActiveNav('/faq');

        // Añadir event listeners para los FAQs
        this.initFAQListeners();
    }

    // Inicializar listeners de FAQ
    initFAQListeners() {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
    }

    // Renderizar página 404
    renderNotFound() {
        this.clear();

        const html = `
            <section class="section" style="padding-top: 8rem; min-height: 60vh; display: flex; align-items: center; justify-content: center;">
                <div class="container-narrow" style="text-align: center;">
                    <h1 class="heading-xl" style="margin-bottom: 1rem;">404</h1>
                    <h2 class="heading-lg" style="margin-bottom: 2rem;">Página no encontrada</h2>
                    <p class="body-lg" style="color: var(--color-muted-foreground); margin-bottom: 2rem;">
                        La página que buscas no existe o ha sido movida.
                    </p>
                    <a href="#/" class="btn btn-primary" data-link>Volver al Inicio</a>
                </div>
            </section>
        `;

        this.app.innerHTML = html;
    }
}

export const view = new View();
