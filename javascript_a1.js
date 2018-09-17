
function timeConvert(seconds) {
	var minutes = Math.floor(seconds/60);
	var sec = seconds-(minutes*60); 
	document.write(minutes+"<br>"+sec);


}

timeConvert(200);
