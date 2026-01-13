<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Capture and decode the JSON input
$data = json_decode(file_get_contents('php://input'), true);
$response = array();

// Sanitize the input
$fullname = htmlspecialchars($data['fullname'] ?? '');
$email    = htmlspecialchars($data['email'] ?? '');
$phone    = htmlspecialchars($data['phone'] ?? '');
$service  = htmlspecialchars($data['service'] ?? '');
$message  = nl2br(htmlspecialchars($data['message'] ?? ''));

// Prepare the email
$to = 'karthirs602@gmail.com'; // Replace with your email address
$subject = 'New Contact Form Submission';
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/html;charset=UTF-8\r\n";
$headers .= 'From: ' . $email . "\r\n";
$headers .= 'Reply-To: ' . $email . "\r\n";

// Email body
$body = '<html><body>';
$body .= '<h2>Contact Form Submission</h2>';
$body .= '<p><strong>Full Name:</strong> ' . $fullname . '</p>';
$body .= '<p><strong>Email:</strong> ' . $email . '</p>';
$body .= '<p><strong>Phone:</strong> ' . $phone . '</p>';
$body .= '<p><strong>Service:</strong> ' . $service . '</p>';
$body .= '<p><strong>Message:</strong></p>';
$body .= '<p>' . $message . '</p>';
$body .= '</body></html>';

// Send the email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['message' => 'Email sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email.']);
}
?>
