

var color1 = Math.floor(Math.random()*255);
var color2 = Math.floor(Math.random()*255);
var color3 = Math.floor(Math.random()*255);

var rgbcolor = "rgb("+color1+","+color2+","+color3+")";


document.write(rgbcolor);

document.body.style.background=rgbcolor;