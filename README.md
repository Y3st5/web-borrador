# TECNOLOGÍA & TALLERES REPRESENTACIONES S.A.C. — Sitio web

Sitio web estático de ingeniería metalmecánica (Ate, Lima, Perú).

**Dominio público:** [https://ttalsac.com/](https://ttalsac.com/)

## Estructura

- `index.html` — Página principal (hero, nosotros, servicios, contacto)
- `Nosotros.html` — Historia y propuesta de valor
- `servicios.html` — Servicios de ingeniería metalmecánica
- `products.html` — Catálogo de productos con filtros y búsqueda
- `css/` — `styles.css` (común), `products.css`, `servicios.css`, `Nosotros.css`
- `js/` — `script.js` (común), `products.js` (catálogo)
- `img/` — Imágenes (webp/png)
- `Envio.php` — Backend del formulario de contacto (PHP `mail()`)
- `server.js` — Servidor de prueba estático (solo archivos; el formulario requiere PHP)

## Notas

- El buscador funciona desde cualquier página: el formulario de cabecera envía `?q=` a `products.html` y `js/products.js` lo aplica al cargar.
- Header/navegación/footer son idénticos en las 4 páginas; los menús móviles y el año de copyright los maneja `js/script.js`.
- Contrastes, foco visible, `prefers-reduced-motion` y skip-links forman parte del núcleo de `css/styles.css`.
- El formulario de contacto apunta a `Envio.php` (validación y `mail()`). En el hosting es necesario que el dominio permita envíos desde `ventas@ttalsac.com` (cabecera `From` fija; el remitente real va en `Reply-To`).
- No usar `node server.js` para probar el formulario: devuelve 405 a propósito (no simula envíos exitosos).