<?php
include('contact.html');
if(isset($_POST['submitcust'])) {
     
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "htyagi01@gmail.com";
    $email_subject = "ArtPalateacademy Contact Us";
     
 
     
    // validation expected data exists
   if(!isset($_POST['name']) ||
        
        !isset($_POST['email']) ||
		!isset($_POST['city']) ||
        !isset($_POST['telephone'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
     
    $name = $_POST['frmNameCust']; // required
   
    $email_from = $_POST['frmEmailCust']; // required
	 $comments = $_POST['frmMsgCust']; // required
    $telephone = $_POST['frmNumCust']; // not required
    
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
 
  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
  
    $email_message = "ArtPalateacademy  Contact Us\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "Name: ".clean_string($name)."\n";
    
    $email_message .= "Email: ".clean_string($email_from)."\n";
   
	$email_message .= "Contact No.: ".clean_string($telephone)."\n";
    $email_message .= "Messages: ".clean_string($comments)."\n";
     
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
<script>

 
alert("Thank you for contacting us. We will be in touch with you very soon");
</script>
<?php
}
?>