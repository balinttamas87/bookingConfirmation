function bookingConfirmation () {	
	
	// copy the text(reference number) from the input field under the QrCode and into the booking confirmation text
	
	var x = document.getElementById("textInput").value;
	document.getElementById("getInfoFrom").innerHTML = x;
	document.getElementById("refUnderQrCode").innerHTML = x;
	
	// update the date according to the reference number
	
	document.getElementById("dateFromRef").innerHTML = x.charAt(10) + x.charAt(11) +
	"/" + x.charAt(8) + x.charAt(9) + "/20" + x.charAt(6) +  x.charAt(7);

	// change the source of the qrcode to be able to change it according to the user input
	
	var qrcode = document.getElementById("qrCodeImg");
	qrcode.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + x + "&size=150x150";
};

// Run functions when the user clicks out of or tab away from the input field or when the enter button gets pressed 
	
$("#textInput").
	on("blur", function () {
		bookingConfirmation();	
	}).
	on("keydown", function (e) {
		if (e.keyCode == 13) {
			bookingConfirmation();	
		}
	});