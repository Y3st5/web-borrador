const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const multiparty = require('multiparty');

const server = http.createServer((req, res) => {
    // Handle static files
    if (req.method === 'GET') {
        let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

        // Remove query parameters
        filePath = filePath.split('?')[0];

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('File not found');
                return;
            }

            // Set content type based on file extension
            const ext = path.extname(filePath);
            let contentType = 'text/html';
            if (ext === '.css') contentType = 'text/css';
            if (ext === '.js') contentType = 'application/javascript';
            if (ext === '.png') contentType = 'image/png';

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
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
