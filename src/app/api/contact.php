<?php

$allowed_origins = [
    'https://web.rayzenpower.com',
    'https://www.web.rayzenpower.com',
    'https://rayzenpower.com',
    'https://www.rayzenpower.com'
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
}

header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
// Read JSON input
$data = json_decode(file_get_contents('php://input'), true);

// Basic validation
if (
    empty($data['fullname']) ||
    empty($data['email']) ||
    empty($data['phone']) ||
    empty($data['service']) ||
    empty($data['message'])
) {
    http_response_code(400);
    echo json_encode(['error' => ['All fields are required.']]);
    exit;
}

// Sanitize input
$fullname = htmlspecialchars($data['fullname']);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($data['phone']);
$service = htmlspecialchars($data['service']);
$message = nl2br(htmlspecialchars($data['message']));

// Prepare email
$to = 'karthirs602@gmail.com'; // Replace with your email
$subject = 'New Contact Form Submission';
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/html;charset=UTF-8\r\n";
$headers .= "From: {$email}\r\n";
$headers .= "Reply-To: {$email}\r\n";

// Email body
$body = '<html><body>';
$body .= '<h2>Contact Form Submission</h2>';
$body .= '<p><strong>Name:</strong> ' . $fullname . '</p>';
$body .= '<p><strong>Email:</strong> ' . $email . '</p>';
$body .= '<p><strong>Phone:</strong> ' . $phone . '</p>';
$body .= '<p><strong>Service:</strong> ' . $service . '</p>';
$body .= '<p><strong>Message:</strong></p>';
$body .= '<p>' . $message . '</p>';
$body .= '</body></html>';

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['message' => 'Email sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['error' => ['Failed to send email.']]);
}
?>
