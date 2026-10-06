const http = require('http');
const fs = require('fs');
const path = require('path');
const multiparty = require('multiparty');

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
    // Handle static files
    if (req.method === 'GET' || req.method === 'HEAD') {
        let urlPath;
        try {
            urlPath = decodeURIComponent(req.url.split('?')[0]);
        } catch (e) {
            res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Bad request');
            return;
        }

        // Resolve and block path traversal (e.g. /../../etc/passwd)
        const filePath = path.resolve(__dirname, '.' + path.posix.normalize(urlPath));
        if (filePath !== __dirname && !filePath.startsWith(__dirname + path.sep)) {
            res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Forbidden');
            return;
        }

        fs.stat(filePath, (statErr, stats) => {
            const target = !statErr && stats.isDirectory()
                ? path.join(filePath, 'index.html')
                : filePath;

            fs.readFile(target, (err, data) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                    res.end('File not found');
                    return;
                }

                const contentType = MIME_TYPES[path.extname(target).toLowerCase()] || 'application/octet-stream';
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(req.method === 'HEAD' ? undefined : data);
            });
        });
    }

    // Handle form submission
    else if (req.method === 'POST' && req.url === '/Envio.php') {
        const form = new multiparty.Form();

        form.parse(req, (err, fields, files) => {
            if (err) {
                console.error('Error parsing form data:', err);
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    success: false,
                    message: 'Error al procesar los datos del formulario'
                }));
                return;
            }

            // multiparty returns arrays for fields, so we take the first element
            const postData = {
                nombre: fields.nombre ? fields.nombre[0] : '',
                email: fields.email ? fields.email[0] : '',
                telefono: fields.telefono ? fields.telefono[0] : '',
                mensaje: fields.mensaje ? fields.mensaje[0] : ''
            };

            console.log('📧 Form submission received:', postData);

            // Simulate validation
            const errors = [];
            if (!postData.nombre || postData.nombre.trim() === '') {
                errors.push('El nombre es obligatorio');
            }
            if (!postData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(postData.email)) {
                errors.push('El email no es válido');
            }
            if (!postData.mensaje || postData.mensaje.trim().length < 10) {
                errors.push('El mensaje debe tener al menos 10 caracteres');
            }

            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'POST');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'close' });

            if (errors.length > 0) {
                res.end(JSON.stringify({
                    success: false,
                    message: 'Errores de validación',
                    errors: errors
                }));
            } else {
                res.end(JSON.stringify({
                    success: true,
                    message: '¡Mensaje enviado exitosamente! (Simulado por Node.js)'
                }));
            }
        });
    }

    else {
        res.writeHead(404);
        res.end('Not found');
    }
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`🚀 Servidor de prueba corriendo en http://localhost:${PORT}`);
    console.log(`📝 Abre http://localhost:${PORT} en tu navegador para probar el formulario`);
    console.log(`⚡ El formulario enviará datos a /Envio.php (simulado)`);
});
