<?php
$to      = "info@kak.chs.chalmers.se";
$subject = "[kak.chs.chalmers.se] Ny aspjävel";
$headers = "Content-type: text/plain; charset=utf-8\r\n";

$message = "Namn: " . $_POST["name"] . "\n";
$message .= "E-post: " . $_POST["email"] . "\n";
$message .= "Telefonnummer: " . $_POST["tel"] . "\n";

mail($to, $subject, $message, $headers);
?>
