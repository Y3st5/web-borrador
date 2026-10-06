// =====================================================================
// Scripts comunes del sitio (todas las páginas)
// TECNOLOGÍA & TALLERES REPRESENTACIONES S.A.C.
// =====================================================================

document.addEventListener('DOMContentLoaded', () => {
    initHeroCarousel();
    initMobileMenu();
    initSmoothScroll();
    initContactForm();
    initRevealAnimations();
    initActiveNav();
    initCurrentYear();
});

// ===== Carrusel del hero (solo existe en index.html) =====
function initHeroCarousel() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;

    const indicators = document.querySelectorAll('.hero-indicator');
    const carousel = document.querySelector('.hero-carousel');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const autoplayDelay = 6000;
    const SWIPE_THRESHOLD = 50;

    let currentSlide = 0;
    let autoplayTimer = null;

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentSlide);
            slide.style.transform = '';
        });

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentSlide);
            if (i === currentSlide) {
                indicator.setAttribute('aria-current', 'true');
            } else {
                indicator.removeAttribute('aria-current');
            }
        });
    }

    function startAutoplay() {
        stopAutoplay();
        if (reduceMotion) return;
        autoplayTimer = setInterval(() => showSlide(currentSlide + 1), autoplayDelay);
    }

    function stopAutoplay() {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            startAutoplay();
        });
    });

    // ===== Arrastre (touch swipe + mouse drag) =====
    if (carousel) {
        let startX = 0;
        let deltaX = 0;
        let isDragging = false;
        let didDrag = false;

        const activeSlide = () => slides[currentSlide];

        function dragStart(clientX) {
            startX = clientX;
            deltaX = 0;
            isDragging = true;
            didDrag = false;
            carousel.classList.add('is-dragging');
            stopAutoplay();
        }

        function dragMove(clientX) {
            if (!isDragging) return;
            deltaX = clientX - startX;
            if (Math.abs(deltaX) > 5) didDrag = true;
            const slide = activeSlide();
            if (slide && !reduceMotion) {
                slide.style.transform = `translateX(${deltaX}px)`;
            }
        }

        function dragEnd() {
            if (!isDragging) return;
            isDragging = false;
            carousel.classList.remove('is-dragging');

            const slide = activeSlide();
            if (slide) slide.style.transform = '';

            if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
                showSlide(deltaX < 0 ? currentSlide + 1 : currentSlide - 1);
            }
            deltaX = 0;
            startAutoplay();

            if (didDrag) {
                setTimeout(() => { didDrag = false; }, 300);
            }
        }

        // Touch (móvil / tablet)
        carousel.addEventListener('touchstart', (e) => {
            if (e.target.closest('.hero-indicator')) return;
            dragStart(e.touches[0].clientX);
        }, { passive: true });

        carousel.addEventListener('touchmove', (e) => {
            dragMove(e.touches[0].clientX);
        }, { passive: true });

        carousel.addEventListener('touchend', dragEnd);
        carousel.addEventListener('touchcancel', dragEnd);

        // Mouse (desktop)
        carousel.addEventListener('mousedown', (e) => {
            if (e.target.closest('.hero-indicator')) return;
            dragStart(e.clientX);
        });

        carousel.addEventListener('mousemove', (e) => {
            dragMove(e.clientX);
        });

        carousel.addEventListener('mouseup', dragEnd);
        carousel.addEventListener('mouseleave', dragEnd);

        // Cancelar el clic accidental tras un arrastre (enlaces, botones)
        carousel.addEventListener('click', (e) => {
            if (didDrag) {
                e.preventDefault();
                e.stopPropagation();
                didDrag = false;
            }
        }, true);

        // Pausar el autoplay al pasar el mouse o al enfocar
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);
        carousel.addEventListener('focusin', stopAutoplay);
        carousel.addEventListener('focusout', startAutoplay);

        // Evitar el arrastre nativo de las imágenes
        carousel.querySelectorAll('img').forEach((img) => {
            img.addEventListener('dragstart', (e) => e.preventDefault());
        });
    }

    // Flechas del teclado solo cuando el foco no está en un campo de texto
    document.addEventListener('keydown', (e) => {
        const tag = document.activeElement ? document.activeElement.tagName : '';
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
        if (e.key === 'ArrowRight') showSlide(currentSlide + 1);
        if (e.key === 'ArrowLeft') showSlide(currentSlide - 1);
    });

    startAutoplay();
}

// ===== Menú móvil =====
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMobile = document.getElementById('navMobile');
    const mobileClose = document.getElementById('mobileClose');

    if (!menuToggle || !navMobile) return;

    let lastFocused = null;

    function openMenu() {
        lastFocused = document.activeElement;
        menuToggle.classList.add('active');
        navMobile.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        const firstLink = navMobile.querySelector('a');
        if (firstLink) firstLink.focus();
    }

    function closeMenu() {
        menuToggle.classList.remove('active');
        navMobile.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        if (lastFocused && typeof lastFocused.focus === 'function') {
            lastFocused.focus();
        }
    }

    menuToggle.addEventListener('click', () => {
        if (navMobile.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    if (mobileClose) {
        mobileClose.addEventListener('click', closeMenu);
    }

    navMobile.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (e) => {
        if (
            navMobile.classList.contains('active') &&
            !navMobile.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMobile.classList.contains('active')) {
            closeMenu();
        }
    });
}

// ===== Desplazamiento suave a anclas de la misma página =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.length < 2) return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            target.scrollIntoView({
                behavior: reduceMotion ? 'auto' : 'smooth',
            });
            // Mover el foco para lectores de pantalla
            if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
        });
    });
}

// ===== Formulario de contacto (index.html) =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        clearFormMessages();

        try {
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (!nombre || !email || !mensaje) {
                showFormMessage('Por favor completa todos los campos requeridos', 'error');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Por favor ingresa un email válido', 'error');
                return;
            }

            if (mensaje.length < 10) {
                showFormMessage('El mensaje debe tener al menos 10 caracteres', 'error');
                return;
            }

            const nombreRegex = /^[a-zA-ZÀ-ÿ ]+$/;
            if (!nombreRegex.test(nombre)) {
                showFormMessage('El nombre solo puede contener letras y espacios', 'error');
                return;
            }

            if (telefono && !/^\+?\d{7,15}$/.test(telefono.replace(/\s/g, ''))) {
                showFormMessage('Por favor ingresa un teléfono válido', 'error');
                return;
            }

            showFormMessage('Enviando mensaje...', 'info');

            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';

            const formData = new FormData();
            formData.append('nombre', nombre);
            formData.append('email', email);
            formData.append('telefono', telefono);
            formData.append('mensaje', mensaje);

            const response = await fetch('Envio.php', {
                method: 'POST',
                body: formData,
            });

            // Si el endpoint no existe o no responde JSON (hosting estático),
            // degradar a las alternativas de contacto en lugar de fallar en silencio
            const contentType = response.headers.get('content-type') || '';
            if (!response.ok || !contentType.includes('application/json')) {
                showFormFallback();
                return;
            }

            const result = await response.json();

            if (result.success) {
                showFormMessage(result.message, 'success');
                setTimeout(() => {
                    contactForm.reset();
                    clearFormMessages();
                }, 3000);
            } else if (result.errors && result.errors.length > 0) {
                showFormMessage('Errores de validación: ' + result.errors.join(', '), 'error');
            } else {
                showFormMessage(result.message || 'Error desconocido del servidor', 'error');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            showFormFallback();
        } finally {
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar Mensaje';
        }
    });
}

function showFormMessage(message, type) {
    clearFormMessages();

    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    messageDiv.setAttribute('role', type === 'error' ? 'alert' : 'status');

    const form = document.getElementById('contactForm');
    form.appendChild(messageDiv);

    if (type === 'error') {
        setTimeout(() => {
            if (messageDiv.parentNode) messageDiv.remove();
        }, 5000);
    }
}

function clearFormMessages() {
    document.querySelectorAll('.form-message').forEach((msg) => msg.remove());
}

// Fallback cuando el backend no está disponible (hosting estático, caída, etc.):
// ofrece enviar la consulta por correo o WhatsApp con los datos ya ingresados
function showFormFallback() {
    clearFormMessages();

    const getValue = (id) => (document.getElementById(id)?.value || '').trim();
    const nombre = getValue('nombre');
    const email = getValue('email');
    const telefono = getValue('telefono');
    const mensaje = getValue('mensaje');

    let body = '';
    if (nombre) body += `Nombre: ${nombre}\n`;
    if (email) body += `Email: ${email}\n`;
    if (telefono) body += `Teléfono: ${telefono}\n`;
    body += `\n${mensaje}`;

    const subject = encodeURIComponent('Consulta desde la web' + (nombre ? ` - ${nombre}` : ''));
    const encodedBody = encodeURIComponent(body);
    const mailHref = `mailto:ventas@ttalsac.com?subject=${subject}&body=${encodedBody}`;
    const whatsappHref = `https://wa.me/51980088991?text=${encodedBody}`;

    const messageDiv = document.createElement('div');
    messageDiv.className = 'form-message fallback';
    messageDiv.setAttribute('role', 'alert');
    messageDiv.innerHTML =
        'No pudimos recibir tu mensaje automáticamente. Contáctanos directamente: ' +
        '<div class="fallback-actions">' +
        `<a class="fallback-link" href="${mailHref}">Enviar por correo</a>` +
        `<a class="fallback-link" href="${whatsappHref}" target="_blank" rel="noopener">Enviar por WhatsApp</a>` +
        '</div>';

    document.getElementById('contactForm').appendChild(messageDiv);
}

// ===== Animación de aparición al hacer scroll =====
function initRevealAnimations() {
    const elements = document.querySelectorAll('.product-card, .catalog-card, .info-block');
    if (!elements.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    elements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== Enlace activo según la página actual =====
function initActiveNav() {
    let page = window.location.pathname.split('/').pop();
    if (!page) page = 'index.html';

    document.querySelectorAll('.nav-desktop a, .nav-mobile a').forEach((link) => {
        const href = (link.getAttribute('href') || '').split('#')[0];
        if (href === page) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

// ===== Año actual en el pie de página =====
function initCurrentYear() {
    document.querySelectorAll('.footer-year').forEach((el) => {
        el.textContent = new Date().getFullYear();
    });
}
