function average_sum(){
var a = Number(document.getElementById("first_num").value);
var b = Number(document.getElementById("second_num").value);
var c = Number(document.getElementById("third_num").value);
var average = (a+b+c)/3;
var sum = a+b+c;
document.getElementById("sum").innerHTML = sum;
document.getElementById("average").innerHTML = average;
}
