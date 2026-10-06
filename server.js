const http = require('http');
const fs = require('fs');
const path = require('path');

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
    // Servir archivos estáticos
    if (req.method === 'GET' || req.method === 'HEAD') {
        let urlPath;
        try {
            urlPath = decodeURIComponent(req.url.split('?')[0]);
        } catch (e) {
            res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Bad request');
            return;
        }

        // Resolver y bloquear path traversal (ej. /../../etc/passwd)
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
        return;
    }

    // En producción el formulario lo procesa Envio.php (PHP).
    // Este servidor de prueba no simula envíos exitosos.
    if (req.method === 'POST') {
        res.writeHead(405, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({
            success: false,
            message: 'El envío del formulario requiere PHP (Envio.php). Este servidor solo sirve archivos estáticos.'
        }));
        return;
    }

    res.writeHead(404);
    res.end('Not found');
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Servidor de prueba corriendo en http://localhost:${PORT}`);
    console.log('Sirve archivos estáticos. El formulario requiere PHP (Envio.php) en el hosting.');
});