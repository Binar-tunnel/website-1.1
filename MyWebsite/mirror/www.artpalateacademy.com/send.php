<?php

if(isset($_POST['submitcust'])) {
    $name =$_POST['frmNameCust'];
    $email=$_POST['frmEmailCust'];
    $phoneNumber =$_POST['frmNumCust'];
    $msg=$_POST['frmMsgCust'];
    $to ='htyagi01@gmail.com';
    $subject='Enquiry';
    $message ="Name:".$name."\n"."email:".$email."\n"."phoneNumber:".$phoneNumber."\n"."msg:".$msg;
	try{
	mail($to,$subject,$message);
	}catch(Exception $e){
	echo $e;
	}
}


?>