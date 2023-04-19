<?php
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['telephone'];
$message = $_POST['message'];

// Set up email parameters
$to = 'abdulazeezfaruq43@gmail.com';
$subject = 'New message from website contact form';
$body = "Name: $name\nEmail: $email\nMessage:\n$message\nTelephone: $tel";
$headers = 'From: ' . $email . "\r\n" .
           'Reply-To: ' . $email . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

// Send email
if (mail($to, $subject, $body, $headers)) {
  echo '<p>Thank you for your message. We will get back to you as soon as possible.</p>';
} else {
  echo '<p>Sorry, there was a problem sending your message. Please try again later.</p>';
}
?>
