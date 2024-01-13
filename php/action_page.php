<?php
if ($_POST) {
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $message = $_POST['Message'];
    $to = "loukas.melissopoulos@yahoo.com";
    $subject = "New Message From Website";
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
    $headers = "From: " . $email;
    if (mail($to, $subject, $body, $headers)) {
        echo "Email Sent Successfully!";
    } else {
        echo "Email Sending Failed!";
    }
}
?>