<?php
if(isset($_POST['submitcust'])) {
    $name =$_POST['frmNameCust'];
    $email=$_POST['frmEmailCust'];
    $phoneNumner =$_POST['frmNumCust'];
    $msg=$_POST['message'];
    $to ='htyagi01@gmail.com';
    $subject='Enquiry';
    $message ="Name:".$name."\n"."email:".$email."\n"."phoneNumber:".$phoneNumber."\n"."msg:".$msg;
}


?>