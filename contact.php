<?php

// Get Values from Contact form
$EmailFrom = "info@kobusswartz.co.za";
$EmailTo = "kobusswartz01@gmail.com";
$Subject = "Big Contact Form";
//$name = Trim(stripslashes($_POST['name']));
//$cemail = Trim(stripslashes($_POST['cemail']));
//$curl = Trim(stripslashes($_POST['url']));
//$ccomment = Trim(stripslashes($_POST['ccomment']));

/*// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.php\">";
  exit;
}
*/

// Assign retrived values to variables for email
$Body = "";
$Body .= "name: ";
$Body .= "Kobus";
$Body .= "\n";
$Body .= "email: ";
$Body .= "kobusswartz01@gmail.com";
$Body .= "\n";
$Body .= "url: ";
$Body .= "MyUrl";
$Body .= "\n";
$Body .= "comment: ";
$Body .= "My Cool Comment";
$Body .= "\n";

// Send mail
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// When email goes through, redirect to index.html
if ($success){
    print "<meta http-equiv=\"refresh\" content=\"0;URL=contact.php\">";
}
else{
    print "<meta http-equiv=\"refresh\" content=\"0;URL=sayhello.php\">";
}
?>


<!---->
<?php
//if(isset($_POST["SubmitBtn"])){
//
//    $to = "someone@example.com";
//    $subject = "Contact mail";
//    $from=$_POST["email"];
//    $msg=$_POST["msg"];
//    $headers = "From: $from";
//
//    mail($to,$subject,$msg,$headers);
//    echo "Email successfully sent.";
//}
//?>
