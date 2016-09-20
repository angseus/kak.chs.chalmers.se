<?php
$to      = "info@kak.chs.chalmers.se";
$subject = "[kak.chs.chalmers.se] Nytt meddelande";
$message = $_POST["message"] . "\r\n";
$headers = "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: " . $_POST["name"] . " <" . $_POST["email"] . ">\r\n";

mail($to, $subject, $message, $headers);
?>
