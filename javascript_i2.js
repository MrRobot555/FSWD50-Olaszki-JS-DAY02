var math = prompt("Math", "");
var physics = prompt("Physics", "");
var english = prompt("English", "");


if ((math != null) && (physics != null) && (english != null)) {

document.write("Sum: "+(Number(math)+Number(physics)+Number(english))+"<br>");
document.write("Average: "+(Number(math)+Number(physics)+Number(english)) / 3);


 }