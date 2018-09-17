function areaAndVolume(width, height, depth) {

   area = width * height;

   volume = width * height * depth;

  return(area, volume);

}

areaAndVolume(100, 100, 20);

document.write("The area of the box is: "+area+"<br><br>");

document.write("The volume of the box is:"+volume);

