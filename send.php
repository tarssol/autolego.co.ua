<?php

ini_set('display_errors','On');
error_reporting('E_ALL');

$to = 'tarassolyarevich@gmail.com, autolego746@gmail.com'; //Адреса, куда будут приходить письма. две почты указываем через запятую
$sitename = $_SERVER['SERVER_NAME'];

$nameClient  = strip_tags($_POST['nameClient']);
$nameSpare  = strip_tags($_POST['nameSpare']);
$vinNumber  = strip_tags($_POST['vinNumber']);
$phone  = strip_tags($_POST['phone']);

if (isset($_POST['phone']) && !empty($_POST['phone']))
{

// Формирование заголовка письма
    $subject  = "[Заявка з сайту ".$sitename."]";
    $headers  = "From: mail@".$sitename." \r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
    $msg  = "<html><body style='font-family:Arial,sans-serif;'>";
    $msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Нова заявка:</h2>\r\n";
    if(isset($_POST['nameClient']) && !empty($_POST['nameClient'])){
      $msg .= "<p><strong>Ім'я:</strong> ".$nameClient."</p>\r\n";
    }
    if(isset($_POST['phone']) && !empty($_POST['phone'])){
      $msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
    }
    if(isset($_POST['nameSpare']) && !empty($_POST['nameSpare'])){
      $msg .= "<p><strong>Назва запчастини:</strong> ".$nameSpare."</p>\r\n";
    }
    if(isset($_POST['vinNumber']) && !empty($_POST['vinNumber'])){
      $msg .= "<p><strong>VIN номер кузова:</strong> ".$vinNumber."</p>\r\n";
    }
    $msg .= "</body></html>";
// отправка сообщения
    mail($to, $subject, $msg, $headers);
    header('location: thanks.html');
  }
else
{
    echo "Заявка не відправлена :(";
    header('location: repeat.html');
}
?>