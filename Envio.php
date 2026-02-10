<?php
// Configuración de headers para evitar errores de CORS y definir tipo de contenido
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Solo procesar si es una petición POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Función para sanitizar input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Función para validar email
function is_valid_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Función para validar teléfono (opcional)
function is_valid_phone($phone) {
    if (empty($phone)) return true; // Teléfono es opcional
    $phone = preg_replace('/\s+/', '', $phone); // Remover espacios
    return preg_match('/^\+?\d{7,15}$/', $phone);
}

// Recibir y sanitizar datos del formulario
$nombre = isset($_POST['nombre']) ? sanitize_input($_POST['nombre']) : '';
$email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
$telefono = isset($_POST['telefono']) ? sanitize_input($_POST['telefono']) : '';
$mensaje = isset($_POST['mensaje']) ? sanitize_input($_POST['mensaje']) : '';

// Validaciones del lado servidor
$errors = [];

if (empty($nombre)) {
    $errors[] = 'El nombre es obligatorio';
} elseif (!preg_match('/^[a-zA-ZÀ-ÿ\s]+$/', $nombre)) {
    $errors[] = 'El nombre solo puede contener letras y espacios';
}

if (empty($email)) {
    $errors[] = 'El email es obligatorio';
} elseif (!is_valid_email($email)) {
    $errors[] = 'El email no tiene un formato válido';
}

if (!is_valid_phone($telefono)) {
    $errors[] = 'El teléfono no tiene un formato válido';
}

if (empty($mensaje)) {
    $errors[] = 'El mensaje es obligatorio';
} elseif (strlen($mensaje) < 10) {
    $errors[] = 'El mensaje debe tener al menos 10 caracteres';
}

// Si hay errores, devolverlos
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Errores de validación',
        'errors' => $errors
    ]);
    exit;
}

// Configuración del email
$to = 'ttalsac@hotmail.com'; // Cambia esto por tu email real
$subject = 'Consulta desde sitio web - ' . $nombre;
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: ' . $email,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
];

// Cuerpo del email en HTML
$message = '
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta desde sitio web</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1a1a2e, #16213e); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f8f9fa; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1a1a2e; }
        .footer { background: #e0e0e0; padding: 10px; text-align: center; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>TECNOLOGÍA & TALLERES REPRESENTACIONES S.A.C.</h1>
            <p>Nueva consulta desde el sitio web</p>
        </div>
        <div class="content">
            <div class="field">
                <span class="label">Nombre:</span> ' . htmlspecialchars($nombre) . '
            </div>
            <div class="field">
                <span class="label">Email:</span> <a href="mailto:' . htmlspecialchars($email) . '">' . htmlspecialchars($email) . '</a>
            </div>
            <div class="field">
                <span class="label">Teléfono:</span> ' . (empty($telefono) ? 'No proporcionado' : htmlspecialchars($telefono)) . '
            </div>
            <div class="field">
                <span class="label">Mensaje:</span><br>
                ' . nl2br(htmlspecialchars($mensaje)) . '
            </div>
            <div class="field">
                <span class="label">Fecha de envío:</span> ' . date('d/m/Y H:i:s') . '
            </div>
        </div>
        <div class="footer">
            <p>Este mensaje fue enviado desde el formulario de contacto del sitio web de TECNOLOGÍA & TALLERES REPRESENTACIONES S.A.C.</p>
        </div>
    </div>
</body>
</html>';

// Intentar enviar el email
$mail_sent = mail($to, $subject, $message, implode("\r\n", $headers));

// También enviar una copia al remitente si se desea (opcional)
// $copy_sent = mail($email, 'Copia de su consulta - ' . $subject, $message, implode("\r\n", $headers));

// Preparar respuesta
if ($mail_sent) {
    // Log del envío exitoso (opcional)
    $log_message = date('Y-m-d H:i:s') . " - Email enviado exitosamente a $to desde $email\n";
    file_put_contents('contact_log.txt', $log_message, FILE_APPEND);

    echo json_encode([
        'success' => true,
        'message' => '¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.'
    ]);
} else {
    // Log del error
    $log_message = date('Y-m-d H:i:s') . " - Error al enviar email desde $email\n";
    file_put_contents('contact_log.txt', $log_message, FILE_APPEND);

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos directamente.'
    ]);
}
?>
