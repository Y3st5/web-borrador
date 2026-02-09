// ===== Hero Carousel =====
class HeroCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.hero-slide');
        this.indicators = document.querySelectorAll('.hero-indicator');
        this.nextBtn = document.querySelector('.hero-next');
        this.prevBtn = document.querySelector('.hero-prev');
        this.autoPlayInterval = null;
        this.autoPlayDelay = 6000; // 6 segundos

        this.init();
    }

    init() {
        // Event listeners
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevSlide());

        // Indicators
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Auto play
        this.startAutoPlay();

        // Pausa al hover
        const heroCarousel = document.querySelector('.hero-carousel');
        if (heroCarousel) {
            heroCarousel.addEventListener('mouseenter', () => this.stopAutoPlay());
            heroCarousel.addEventListener('mouseleave', () => this.startAutoPlay());
        }

        // Teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }

    showSlide(index) {
        // Remover clase active de todos
        this.slides.forEach((slide) => {
            slide.classList.remove('active', 'prev');
        });
        this.indicators.forEach((ind) => {
            ind.classList.remove('active');
        });

        // Calcular dirección
        const direction = index > this.currentSlide ? 'next' : 'prev';

        // Agregar clases apropiadas
        this.slides[index].classList.add('active');
        this.indicators[index].classList.add('active');

        // Actualizar índice
        this.currentSlide = index;
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prevIndex);
    }

    goToSlide(index) {
        this.showSlide(index);
        this.restartAutoPlay();
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }

    restartAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}

// Inicializar carrusel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new HeroCarousel();
});

// ===== Mobile Menu Toggle =====
class MobileMenu {
    constructor() {
        this.menuToggle = document.getElementById('menuToggle');
        this.navMobile = document.getElementById('navMobile');
        this.body = document.body;

        if (this.menuToggle && this.navMobile) {
            this.init();
        }
    }

    init() {
        // Toggle menú al hacer click en el botón
        this.menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMenu();
        });

        // Cerrar menú con botón de cierre
        const mobileClose = document.getElementById('mobileClose');
        if (mobileClose) {
            mobileClose.addEventListener('click', () => {
                this.closeMenu();
            });
        }

        // Cerrar menú al hacer clic en un enlace
        const mobileLinks = this.navMobile.querySelectorAll('a');
        mobileLinks.forEach((link) => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Cerrar menú al hacer clic fuera (en el body)
        document.addEventListener('click', (e) => {
            if (this.navMobile.classList.contains('active') && 
                !this.navMobile.contains(e.target) && 
                !this.menuToggle.contains(e.target)) {
                this.closeMenu();
            }
        });

        // Cerrar menú con tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.navMobile.classList.contains('active')) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        if (this.navMobile.classList.contains('active')) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.menuToggle.classList.add('active');
        this.navMobile.classList.add('active');
        this.body.style.overflow = 'hidden';
    }

    closeMenu() {
        this.menuToggle.classList.remove('active');
        this.navMobile.classList.remove('active');
        this.body.style.overflow = '';
    }
}

// Inicializar menú móvil cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
});

// ===== Search Bar Toggle =====
const searchButton = document.querySelector('.search-button');
if (searchButton) {
    searchButton.addEventListener('click', function () {
        const searchInput = this.parentElement.querySelector('.search-input');
        if (searchInput) {
            searchInput.classList.toggle('active');
        }
    });
}

// ===== Smooth Scroll Fix =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
            });
        }
    });
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const mensaje = document.getElementById('mensaje').value;

        // Validación básica
        if (!nombre || !email || !mensaje) {
            alert('Por favor completa todos los campos requeridos');
            return;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor ingresa un email válido');
            return;
        }

        // Construir mensaje para mailto
        const mailtoLink = `mailto:info@bhpperu.com?subject=${encodeURIComponent(
            'Consulta desde sitio web'
        )}&body=${encodeURIComponent(
            `Nombre: ${nombre}\nEmail: ${email}\nTelefono: ${telefono}\n\nMensaje:\n${mensaje}`
        )}`;

        // Por ahora, abrir mailto
        window.location.href = mailtoLink;

        // Mostrar confirmación
        alert('Tu mensaje será enviado a través de tu cliente de email predeterminado');
        contactForm.reset();
    });
}

// ===== Botones del Hero =====
const heroBtns = document.querySelectorAll('.hero .btn-primary');
heroBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
        const buttonText = this.textContent.trim();

        if (buttonText.includes('Conoce Nuestros Productos')) {
            const productosSection = document.getElementById('servicios');
            if (productosSection) {
                productosSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (buttonText.includes('Solicitar Cotización')) {
            const contactoSection = document.getElementById('contacto');
            if (contactoSection) {
                contactoSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (buttonText.includes('Nuestra Historia')) {
            const sobreNosotrosSection = document.getElementById('sobre-nosotros');
            if (sobreNosotrosSection) {
                sobreNosotrosSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ===== Animación al hacer scroll =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.product-card, .catalog-card, .info-block').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Activar enlace de navegación según scroll =====
window.addEventListener('scroll', function () {
    let current = '';

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    // Actualizar enlaces activos
    document.querySelectorAll('.nav-desktop a, .nav-mobile a').forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ===== Logging para debug =====
console.log('Script cargado correctamente');
console.log('Página TECNOLOGÍA & TALLERES REPRESENTACIONES S.A.C. lista para interactuar');
