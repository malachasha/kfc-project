<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-6.8.0/src/Exception.php';
require 'PHPMailer-6.8.0/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail -> CharSet = 'UTF-8';
$mail -> IsHTML(true);

$mail ->setFrom('info@kfc.ua', 'KFC website form');
$mail ->addAddress('michala.fitu19@kubg.edu.ua');
$mail-> Subject = 'KFC website Form';

$body = '<h1>Here is the new letter from website!</h1>';

if(trim(!empty($_POST['fname']))){
    $body.= '<p><strong>Full name:</strong> ' .$_POST['fname']. '</p>';   
}
if(trim(!empty($_POST['email']))){
    $body.= '<p><strong>E-mail:</strong> ' .$_POST['email']. '</p>';   
}
if(trim(!empty($_POST['subject']))){
    $body.= '<p><strong>Subject:</strong> ' .$_POST['subject']. '</p>';   
}
if(trim(!empty($_POST['company']))){
    $body.= '<p><strong>Company:</strong> ' .$_POST['company']. '</p>';   
}
if(trim(!empty($_POST['message']))){
    $body.= '<p><strong>Message:</strong> ' .$_POST['message']. '</p>';   
}

$mail ->Body = $body;
if(!$mail->send()){
    $message = 'ERROR';
}else{
    $message = 'Form has been sent.';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>