function checkForm() {
	var x = document.forms["contactus"]["firstname"].value;
	var y = document.forms["contactus"]["lastname"].value;
	var em = document.forms["contactus"]["email"].value;
	var s = document.forms["contactus"]["message"].value;

	if (x == null || x == "") {
        	alert("Please provide a First name");
        	return false;
	}
	if (y == null || y == "") {
        	alert("Please provide a Last name");
        	return false;
    	}
	if (em == null || em == "") {
		alert("Please enter an email address");
		return false;
	}
	if (s == null || s == "") {
		alert("Please enter a suggestion");
		return false;
	}
}
function checkEmail(){
	var email = document.getElementById("e");
	if (email.checkValidity() == false){
		alert("You must enter a valid email address you may be missing the '@' sign or domain name");

	}
}
function popiOS(){
	alert("Not available for iOS yet still coming soon");
}
function popDroid(){
	alert("Not available for Android yet still coming soon");
}
function popWin(){
	alert("Not available for Windows Phone yet still coming soon");
}
function popPC(){
	alert("Not available for PC yet still coming soon");
}
