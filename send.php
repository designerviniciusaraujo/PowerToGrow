<?php 
$headers = "MIME-Version: 1.1\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";
$headers .= "From: rioslum@wec.org\r\n"; // remetente
$headers .= "Return-Path: rioslum@wec.org\r\n"; // return-path
$envio = mail("designerviniciusaraujo@gmai.com", "Assunto", "Texto", $headers);
 
if($envio)
 echo "Done!";
else
 echo "Err";
?>
