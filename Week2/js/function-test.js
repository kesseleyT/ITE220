
//this is where we give the message value we call it (msg).//


var msg = "sign up to receive our newletter for 10% off.";

//

function updateMassage(){
	 var el = document.getElementById("heading-message");
	 el.textContent = msg;
}

updateMassage();