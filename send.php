<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$newsletter = $_POST['newsletter'];
$email = $_POST['email'];


if(isset($name) & isset($phone) & isset($email)) {
$title = "Subscribe to Cyber-IT";
$body = "
<h2>Subscribtion</h2>
<b>Name:</b> $name<br>
<b>Phone:</b> $phone<br>
<b>E-mail:</b> $email<br>";
}

else if(isset($newsletter)) {
$title = "Subscribe to Cyber-IT";
$body = "
<h2>Subscribtion</h2>
<b>Subscribtion news:</b> $newsletter<br>";
}


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'aivengocorp@gmail.com'; // Логин на почте
    $mail->Password   = 'YR5-2Et-yvP-fQ6'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('aivengocorp@gmail.com', 'Cyber-IT'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('aivengoalek@yandex.ru');  

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// header('Location: thankyou.html');