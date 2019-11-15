function storyTime(){
 let noun = document.getElementById("noun").value;
 let adjective = document.getElementById("adjective").value;
 let animal = document.getElementById("animal").value;
 let sound = document.getElementById("sound").value;
 let occupation =  document.getElementById("occupation").value;

  document.getElementById("story").innerHTML="There was a(n) " + adjective +" " + animal + ". His/her favourite saying was, '' " + sound + "!'' He/she said this every day until he went to the " + noun + ", where he/she lived the rest of his/her days as a(n) " + occupation + " and lived happily ever efter. <br> <br> The end.";
}