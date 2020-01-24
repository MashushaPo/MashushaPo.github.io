<?php 
if(!empty($_POST["name"]) AND !empty($_POST["email"]) AND !empty($_POST["message"]) ){
	$to="barbariki-cake@mail.ru";
	$theme="forma";
	$message="name:" .$_POST["name"]."<br>";
	$message.="email" .$_POST["email"]."<br>";
	$message.="message:" .$_POST["message"]."<br>";
	mail($to, $theme, $message);
}











?>