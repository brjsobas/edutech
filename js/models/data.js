/**
 * MODEL - Data Layer
 * Contiene toda la lógica de datos y estado de la aplicación
 */

class DataModel {
    constructor() {
        this.courses = this.initCourses();
        this.testimonials = this.initTestimonials();
        this.faqs = this.initFAQs();
        this.methodology = this.initMethodology();
        this.aboutUs = this.initAboutUs();
        this.logos = this.initLogos();
    }

    // Inicializar cursos
    initCourses() {
        return [
            {
                id: 'Susurros-del-vacio',
                title: 'Susurros del Vacío',
                subtitle: 'Una experiencia inmersiva',
                description: 'Adéntrate en los misterios del cosmos. Descubre verdades que la humanidad no estaba destinada a conocer. ¿Estás preparado para enfrentar lo desconocido?',
                image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=500&fit=crop',
                heroImage: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80',
                testimonialImage: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=1920&q=80',
                duration: '125 horas',
                participants: 'Online',
                rating: '4.9/5',
                price: '€890',
                category: 'Inmersivo',
                featured: true,
                isLovecraft: true,
                features: [
                    {
                        icon: '💀',
                        title: 'Misterio Cósmico',
                        description: 'Sumérgete en una narrativa inspirada en los mitos de Lovecraft donde cada decisión te acerca a la verdad... o a la locura.'
                    },
                    {
                        icon: '👁️',
                        title: 'Puzzles Inmersivos',
                        description: 'Resuelve enigmas que desafían tu percepción de la realidad. Cada acertijo revela fragmentos de un conocimiento prohibido.'
                    },
                    {
                        icon: '🌙',
                        title: 'Atmósfera Única',
                        description: 'Escenografía, efectos de sonido y elementos interactivos que te transportan al corazón de lo desconocido.'
                    }
                ],
                modules: [
                    {
                        number: 'I',
                        title: 'El Despertar',
                        description: 'Los participantes descubren un antiguo manuscrito que los vincula a una secta olvidada.'
                    },
                    {
                        number: 'II',
                        title: 'Susurros en la Oscuridad',
                        description: 'Mensajes cifrados y voces de otro mundo guían el camino hacia revelaciones perturbadoras.'
                    },
                    {
                        number: 'III',
                        title: 'El Ritual',
                        description: 'La verdad se revela mientras el iniciado debe tomar decisiones que cambiarán todo.'
                    },
                    {
                        number: 'IV',
                        title: 'Más Allá del Umbral',
                        description: 'El desenlace donde el conocimiento adquirido se transforma en poder... o perdición.'
                    }
                ],
                testimonial: {
                    text: 'Nunca había experimentado nada igual. Durante horas me olvidé de que era un juego. Los susurros aún resuenan en mi mente...',
                    author: 'Miguel Ángel R.',
                    role: 'Participante',
                    rating: 5
                }
            },
            {
                id: 'liderazgo-inmersivo',
                title: 'Liderazgo Inmersivo',
                description: 'Desarrolla habilidades de liderazgo a través de simulaciones y retos en equipo. Aprende a liderar bajo presión y a tomar decisiones efectivas.',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
                duration: '12 horas',
                participants: '6-12 personas',
                category: 'Liderazgo',
                featured: false
            },
            {
                id: 'pensamiento-critico',
                title: 'Pensamiento Crítico',
                description: 'Aprende a analizar, evaluar y crear soluciones innovadoras mediante juegos de lógica y desafíos que ponen a prueba tu capacidad analítica.',
                image: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=800&h=500&fit=crop',
                duration: '6 horas',
                participants: '4-10 personas',
                category: 'Habilidades',
                featured: false
            },
            {
                id: 'comunicacion-efectiva',
                title: 'Comunicación Efectiva',
                description: 'Mejora tus habilidades comunicativas a través de dinámicas interactivas y role-playing. Aprende a transmitir ideas con claridad e impacto.',
                image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=500&fit=crop',
                duration: '10 horas',
                participants: '5-15 personas',
                category: 'Comunicación',
                featured: false
            },
            {
                id: 'innovacion-creativa',
                title: 'Innovación Creativa',
                description: 'Desbloquea tu potencial creativo con técnicas de design thinking y metodologías ágiles aplicadas a retos reales de tu organización.',
                image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=800&h=500&fit=crop',
                duration: '8 horas',
                participants: '6-12 personas',
                category: 'Innovación',
                featured: false
            },
            {
                id: 'gestion-conflictos',
                title: 'Gestión de Conflictos',
                description: 'Aprende a manejar situaciones difíciles y a convertir conflictos en oportunidades de crecimiento para tu equipo.',
                image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=500&fit=crop',
                duration: '6 horas',
                participants: '4-10 personas',
                category: 'Gestión',
                featured: false
            }
        ];
    }

    // Inicializar testimonios
    initTestimonials() {
        return [
            {
                id: 1,
                text: 'Una experiencia transformadora. Nunca había aprendido tanto mientras me divertía.',
                author: 'María González',
                position: 'CEO, Tech Solutions',
                avatar: 'https://i.pravatar.cc/150?img=1'
            },
            {
                id: 2,
                text: 'El equipo salió fortalecido y motivado. La metodología es innovadora y efectiva.',
                author: 'Carlos Martínez',
                position: 'HR Manager, Global Corp',
                avatar: 'https://i.pravatar.cc/150?img=2'
            },
            {
                id: 3,
                text: 'Increíble cómo combinan entretenimiento con aprendizaje real. Totalmente recomendable.',
                author: 'Ana López',
                position: 'Team Leader, StartupX',
                avatar: 'https://i.pravatar.cc/150?img=3'
            }
        ];
    }

    // Inicializar FAQs
    initFAQs() {
        return [
            {
                id: 1,
                question: '¿Qué hace única a Edutech?',
                answer: 'Combinamos metodologías de gamificación con narrativas inmersivas para crear experiencias de aprendizaje memorables. No son cursos tradicionales, son aventuras educativas.'
            },
            {
                id: 2,
                question: '¿Necesito experiencia previa?',
                answer: 'No, nuestros cursos están diseñados para todos los niveles. La experiencia se adapta al ritmo y conocimientos del equipo.'
            },
            {
                id: 3,
                question: '¿Cuál es el formato del proyecto?',
                answer: 'El recorrido está diseñado para realizarse de forma individual, permitiendo que cada participante tome decisiones propias, explore su ritmo de aprendizaje y construya una experiencia narrativa y gamificada personal, acompañada por la IA.'
            },
            {
                id: 4,
                question: '¿Puedo personalizar un curso para mi empresa?',
                answer: 'Absolutamente. Diseñamos experiencias a medida que se alinean con los objetivos específicos de tu organización.'
            },
            {
                id: 5,
                question: '¿Qué incluye el precio del curso?',
                answer: 'Todos los materiales, facilitadores expertos, espacio (si es presencial), y seguimiento post-curso. También incluimos un informe de competencias desarrolladas.'
            }
        ];
    }

    // Inicializar metodología
    initMethodology() {
        return {
            title: 'Nuestra Metodología',
            subtitle: 'Aprendizaje que trasciende lo convencional',
            description: 'En Edutech, creemos que el mejor aprendizaje ocurre cuando nos sumergimos completamente en la experiencia. Nuestra metodología combina elementos de gamificación, narrativa inmersiva y aprendizaje experiencial.',
            pillars: [
                {
                    title: 'Inmersión Total',
                    description: 'Creamos mundos y narrativas que envuelven a los participantes, generando un compromiso emocional con el aprendizaje.',
                    icon: '🎭'
                },
                {
                    title: 'Gamificación',
                    description: 'Utilizamos mecánicas de juego para motivar, desafiar y recompensar el progreso de los participantes.',
                    icon: '🎮'
                },
                {
                    title: 'Aprendizaje Experiencial',
                    description: 'Aprender haciendo. Los participantes enfrentan retos reales que requieren aplicar conocimientos de forma práctica.',
                    icon: '🚀'
                },
                {
                    title: 'Colaboración',
                    description: 'Fomentamos el trabajo en equipo y la comunicación efectiva a través de desafíos que requieren colaboración.',
                    icon: '🤝'
                }
            ]
        };
    }

    // Inicializar sobre nosotros
    initAboutUs() {
        return {
            hero: {
                title: 'Sobre Nosotros',
                subtitle: 'Somos un equipo apasionado por la educación innovadora y las experiencias transformadoras.'
            },
            historia: {
                title: 'Nuestra Historia',
                paragraphs: [
                    'Edutech naceen 2025 con una idea revolucionaria: ¿qué pasaría si pudiéramos hacer que aprender fuera tan emocionante como jugar?',
                    'Desde entonces, hemos diseñado y ejecutado más de 200 experiencias educativas para empresas, universidades e instituciones de toda España y Latinoamérica.',
                    'Nuestro enfoque combina la gamificación, el escape room educativo y la narrativa inmersiva para crear momentos de aprendizaje que los participantes nunca olvidan.'
                ],
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop',
                stat: {
                    number: '200+',
                    text: 'Experiencias diseñadas'
                }
            },
            equipo: {
                title: 'Nuestro Equipo',
                subtitle: 'Profesionales apasionados que hacen posible cada experiencia',
                members: [
                    {
                        name: 'Borja Sobas',
                        role: 'Tecnología y calidad',
                        image: 'assets/images/250314_Borja_retrato.jpg',
                        description: 'Hace que la experiencia funcione: integra tecnología, contenidos y analítica para garantizar un entorno sólido, fluido y en mejora constante.',
                    },{
                        name: 'Nieves Ruíz',
                        role: 'Coordinación pedagógica',
                        image: 'assets/images/Foto Nieves.jpg',
                        description: 'Da forma al proyecto desde la estrategia educativa, alineando metodología, evaluación y experiencia de aprendizaje para que todo funcione con sentido, coherencia y calidad.',
                    },
                    {
                        name: 'Ginés Cánovas',
                        role: 'Diseño tecnopedagógico',
                        image: 'assets/images/Foto empresa Gines.jpg',
                        description: 'Transforma ideas y narrativas en experiencias formativas claras, atractivas y accesibles, cuidando cada paso del recorrido del alumnado.',
                    }
                ]
            },
            valores: {
                title: 'Nuestros Valores',
                items: [
                    {
                        title: 'Innovación',
                        description: 'Buscamos constantemente nuevas formas de hacer que el aprendizaje sea más efectivo y memorable.'
                    },
                    {
                        title: 'Excelencia',
                        description: 'Cada detalle cuenta. Diseñamos experiencias que superan las expectativas de nuestros clientes.'
                    },
                    {
                        title: 'Impacto',
                        description: 'Medimos nuestro éxito por la transformación que generamos en cada participante.'
                    }
                ]
            }
        };
    }

    // Inicializar logos de clientes
    initLogos() {
        return [
            '<img alt="Universidad Valenciana" title="Universidad Valenciana" src="assets/images/logo_univ_valencia.webp" style="width: 100%; height: auto; max-width: 200px; object-fit: contain;">',
            '<img alt="autodesk" title="autodesk" src="assets/images/logo_autodesk.webp" style="width: 100%; height: auto; max-width: 200px; object-fit: contain;">',
            '<img alt="Adobe" title="Adobe" src="assets/images/adobe-certified-associate-web-deusto.webp" style="width: 100%; height: auto; max-width: 200px; object-fit: contain;">',
            '<img alt="Universidad de Salamanca" title="Universidad de Salamanca" src="assets/images/logo-color-horizontal-universidad-d-salamanca.webp" style="width: 100%; height: auto; max-width: 200px; object-fit: contain;">'
        ];
    }

    // Métodos para obtener datos
    getAllCourses() {
        return this.courses;
    }

    getFeaturedCourses() {
        return this.courses.filter(course => course.featured);
    }

    getCourseById(id) {
        return this.courses.find(course => course.id === id);
    }

    getAllTestimonials() {
        return this.testimonials;
    }

    getAllFAQs() {
        return this.faqs;
    }

    getMethodology() {
        return this.methodology;
    }

    getAboutUs() {
        return this.aboutUs;
    }

    getLogos() {
        return this.logos;
    }
}

// Exportar instancia única del modelo (Singleton pattern)
export const dataModel = new DataModel();
