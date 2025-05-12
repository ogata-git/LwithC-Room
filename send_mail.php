<?php
header('Content-Type: application/json');
// JSON ボディを取得
$data = json_decode(file_get_contents('php://input'), true);

// 入力のサニタイズとバリデーション
$name = filter_var($data['name'], FILTER_SANITIZE_STRING);
$email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
$message = filter_var($data['message'], FILTER_SANITIZE_STRING);

if (!$name || !$email || !$message) {
  echo json_encode(['success' => false, 'error' => '入力内容に誤りがあります。']);
  exit;
}

$to      = 'ogaogayu01@gmail.com';    // 受信先メールアドレスに変更
$subject = '新しいお問い合わせ';
$body    = "名前: {$name}\nメール: {$email}\n\n{$message}";
$headers = "From: {$email}\r\n" .
           "Reply-To: {$email}\r\n";

if (mail($to, $subject, $body, $headers)) {
  echo json_encode(['success' => true]);
} else {
  echo json_encode(['success' => false, 'error' => 'メール送信に失敗しました。']);
}