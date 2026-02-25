<?php
// public/api/send-mail.php

header('Content-Type: application/json; charset=utf-8');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

// Read JSON
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Invalid JSON']);
  exit;
}

// Basic sanitize helper
function clean($v) {
  if (!is_string($v)) return '';
  $v = trim($v);
  $v = str_replace(["\r", "\n"], ' ', $v);
  return $v;
}

$fullName = clean($data['fullName'] ?? '');
$companyName = clean($data['companyName'] ?? '');
$phone = clean($data['phone'] ?? '');
$email = clean($data['email'] ?? '');
$service = clean($data['service'] ?? '');
$subService = clean($data['subService'] ?? '');
$preferredDate = clean($data['preferredDate'] ?? '');
$preferredTime = clean($data['preferredTime'] ?? '');
$message = clean($data['message'] ?? '');

if (strlen($fullName) < 2 || strlen($phone) < 8 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Validation failed']);
  exit;
}

// ✅ CHANGE THIS to YOUR inbox:
$to = 'inquiry@tgec.co.za';

// Subject
$subject = "TGEC Consultation Request — {$service} / {$subService}";

// Email body (plain text)
$body = "TGEC Consultation Request\n\n";
$body .= "Name: {$fullName}\n";
$body .= "Company: " . ($companyName !== '' ? $companyName : '-') . "\n";
$body .= "Phone: {$phone}\n";
$body .= "Email: {$email}\n";
$body .= "Service: {$service}\n";
$body .= "Sub-service: {$subService}\n";
$body .= "Preferred Date: {$preferredDate}\n";
$body .= "Preferred Time: {$preferredTime}\n";
$body .= "Message: " . ($message !== '' ? $message : '-') . "\n";

// Headers
$from = 'no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'tgec.co.za');
$headers = [];
$headers[] = "From: TGEC Website <{$from}>";
$headers[] = "Reply-To: {$email}";
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";

// Send
$sent = @mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Mail failed']);
  exit;
}

echo json_encode(['ok' => true]);