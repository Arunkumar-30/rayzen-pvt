<?php
header("Content-Type: application/json");

// Allow multiple origins
$allowedOrigins = [
    "https://web.rayzenpower.com",
    "https://www.web.rayzenpower.com",
    "https://rayzenpower.com",
    "https://www.rayzenpower.com"
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
}

// Allow POST requests and headers
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true"); // optional if you use cookies

// Handle OPTIONS preflight (important for POST JSON requests)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// -----------------------------
// Your existing code here
// -----------------------------
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
  http_response_code(400);
  echo json_encode(["error" => "Invalid request data"]);
  exit;
}

// Sanitize inputs
$fullname = htmlspecialchars(trim($data['fullname'] ?? ''));
$email    = htmlspecialchars(trim($data['email'] ?? ''));
$phone    = htmlspecialchars(trim($data['phone'] ?? ''));
$service  = htmlspecialchars(trim($data['service'] ?? ''));
$message  = nl2br(htmlspecialchars(trim($data['message'] ?? '')));

// Validation
$errors = [];

if (empty($fullname)) $errors[] = "Full name is required";
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Valid email required";
if (empty($phone)) $errors[] = "Phone number required";
if (empty($service)) $errors[] = "Service is required";
if (empty($message)) $errors[] = "Message is required";

if (!empty($errors)) {
  http_response_code(422);
  echo json_encode(["error" => $errors]);
  exit;
}

// Email setup
$to = "Selvam.arun100@gmail.com";
$subject = "New Contact Form Submission - Rayzen Power";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/html;charset=UTF-8\r\n";
$headers .= "From: Rayzen Power <no-reply@rayzenpower.com>\r\n";
$headers .= "Reply-To: $email\r\n";

// Email body
$body = "
<html>
<body>
  <h2>Contact Form Submission</h2>
  <p><strong>Full Name:</strong> {$fullname}</p>
  <p><strong>Email:</strong> {$email}</p>
  <p><strong>Phone:</strong> {$phone}</p>
  <p><strong>Service:</strong> {$service}</p>
  <p><strong>Message:</strong></p>
  <p>{$message}</p>
</body>
</html>
";

// Send email
if (mail($to, $subject, $body, $headers)) {
  echo json_encode(["success" => true, "message" => "Email sent successfully"]);
} else {
  http_response_code(500);
  echo json_encode(["error" => "Failed to send email"]);
}
