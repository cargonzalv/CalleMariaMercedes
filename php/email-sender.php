<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject']
    $message = $_POST['message'];
    $headers = "From:". $email . "\r\n" .

//send email
    mail("archivommc@gmail.com",$subject, $message,$headers);
}
?>