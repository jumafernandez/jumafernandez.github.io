// ============================================
// NAVEGACIÓN MÓVIL
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.flexDirection = 'column';
        navMenu.style.backgroundColor = 'white';
        navMenu.style.padding = '1rem';
        navMenu.style.gap = '1rem';
        navMenu.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    });

    // Cerrar menú al hacer click en un link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.style.display = 'none';
        });
    });
}

// ============================================
// BLOG - Cargar posts dinámicamente
// ============================================
const blogPosts = [
    {
        title: "Fine-tuning de Modelos de Lenguaje: Guía Práctica",
        date: "20 de Abril, 2025",
        excerpt: "Una exploración profunda sobre cómo adaptar modelos de lenguaje pre-entrenados a tareas específicas de dominio, con ejemplos prácticos usando infraestructura HPC.",
        slug: "fine-tuning-llms"
    },
    {
        title: "IA Generativa en la Nube: Oportunidades y Desafíos",
        date: "10 de Abril, 2025",
        excerpt: "Análisis de las últimas tendencias en IA generativa, escalabilidad en la nube y cómo las universidades pueden aprovecharlo para investigación.",
        slug: "ia-generativa-nube"
    },
    {
        title: "NLP y Análisis de Sentimientos en Redes Sociales",
        date: "1 de Abril, 2025",
        excerpt: "Técnicas modernas de procesamiento de lenguaje natural para extraer insights de datos textuales en redes sociales y análisis de opinión pública.",
        slug: "nlp-sentimientos"
    },
    {
        title: "Reduciendo el Abandono Universitario con Machine Learning",
        date: "25 de Marzo, 2025",
        excerpt: "Cómo utilizar técnicas de ML para identificar patrones de abandono estudiantil y diseñar intervenciones efectivas en sistemas universitarios.",
        slug: "ml-abandono-universitario"
    }
];

function renderBlogPosts() {
    const blogGrid = document.getElementById('blog-posts');

    if (blogGrid) {
        blogGrid.innerHTML = blogPosts.map(post => `
            <article class="blog-post">
                <div class="blog-post-header">
                    <p class="blog-post-date">📅 ${post.date}</p>
                    <h3 class="blog-post-title">${post.title}</h3>
                </div>
                <div class="blog-post-content">
                    <p class="blog-post-excerpt">${post.excerpt}</p>
                    <a href="#" class="blog-post-link">Leer más →</a>
                </div>
            </article>
        `).join('');
    }
}

// Renderizar blog al cargar
document.addEventListener('DOMContentLoaded', renderBlogPosts);

// ============================================
// FORMULARIO DE CONTACTO
// ============================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const nombre = contactForm.querySelector('input[type="text"]').value;

        // Crear mailto link con los datos
        const email = 'jmfernandez@unlu.edu.ar';
        const subject = 'Nuevo mensaje desde mi tarjeta profesional';
        const body = encodeURIComponent(
            `Nombre: ${nombre}\n` +
            `Email: ${formData.get('email') || contactForm.querySelector('input[type="email"]').value}\n\n` +
            `Mensaje:\n${contactForm.querySelector('textarea').value}`
        );

        // Mostrar mensaje de confirmación
        const submitBtn = contactForm.querySelector('.btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Mensaje enviado';
        submitBtn.style.background = '#00a86b';

        // Resetear formulario
        contactForm.reset();

        // Restablecer botón después de 3 segundos
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
        }, 3000);

        // En una aplicación real, aquí enviarías los datos a un servidor
        console.log('Formulario enviado:', {
            nombre,
            email: contactForm.querySelector('input[type="email"]').value,
            mensaje: contactForm.querySelector('textarea').value
        });
    });
}

// ============================================
// SCROLL SUAVE Y ANIMACIONES
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.research-card, .publication-item, .teaching-card, .blog-post').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// DESTACAR LINK ACTIVO EN NAVEGACIÓN
// ============================================
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
            link.style.fontWeight = '700';
        }
    });
});

// ============================================
// EFECTO PARALAX SUTIL
// ============================================
const heroAccent = document.querySelector('.hero-accent');

if (heroAccent) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            heroAccent.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
}

// ============================================
// ANIMACIÓN DE NÚMEROS (STATS)
// ============================================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// COPIAR EMAIL AL CLICKEAR
// ============================================
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', (e) => {
        const email = item.querySelector('p:last-child');
        if (email && email.textContent.includes('@')) {
            const emailText = email.textContent.trim();
            navigator.clipboard.writeText(emailText).then(() => {
                const originalText = email.textContent;
                email.textContent = '✓ Copiado';
                setTimeout(() => {
                    email.textContent = originalText;
                }, 2000);
            });
        }
    });
});

// ============================================
// LAZY LOADING DE IMÁGENES (si las hay)
// ============================================
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');

    images.forEach(image => {
        observer.observe(image);
    });

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
}

console.log('✓ Script cargado correctamente');
