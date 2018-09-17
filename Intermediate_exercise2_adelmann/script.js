function average_sum() {
    var a = Number(document.getElementById("first_num").value);
    var b = Number(document.getElementById("second_num").value);
    var c = Number(document.getElementById("third_num").value);
    var average = (a + b + c) / 3;
    var sum = a + b + c;
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("average").innerHTML = average;
}

function minutes_into_hours() {
	var minutes = Number(document.getElementById("minutes").value);
	var hours = Math.round(minutes/60) +" hours : "+ minutes%60 +" minutes";
	document.getElementById("number_in_hours").innerHTML = hours;
}