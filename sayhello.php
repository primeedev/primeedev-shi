<?php
  $fname = Trim(stripslashes($_POST['fname']));
  $mail = Trim(stripslashes($_POST['mail']));
  $tel = Trim(stripslashes($_POST['tel']));
  $msg = Trim(stripslashes($_POST['msg']));

  $to = "kobusswartz01@gmail.com";
  $subject = "Shifter Feedback";
  $from = $mail;    
  $headers = "From:" . $mail;

  $Body = "";
  $Body .= "Contact Person: ";
  $Body .= $fname;
  $Body .= "\n";
  $Body .= "Email Address: ";
  $Body .= $mail;
  $Body .= "\n";
  $Body .= "Contact Number: ";
  $Body .= $tel;
  $Body .= "\n";
  $Body .= "Message: ";
  $Body .= $msg;
  $Body .= "\n";

  mail($to, $subject, $Body);   

  echo ("Oops, something went wrong, please try again.");

?>