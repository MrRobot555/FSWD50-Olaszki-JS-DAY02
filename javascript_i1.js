var capital = (function(sentence) {  

   var firstchr = sentence.charAt(0);

   var rest = (sentence.substring(1));

   firstchr = firstchr.toUpperCase();

   document.write(firstchr+rest);

}("i am a developer"));