function calculator () {
    var counter = 0;
     for(var i=0; i<=26; ++i) {
         var input = document.getElementById("id" + i);


          if(input.checked)
         {
             counter = counter+3.7037037037;
         }
          var printCounter = counter;
          printCounter = Math.ceil(printCounter);

         document.getElementById("results").innerHTML = "The game is compatible " + printCounter +"% with GCAG" ;
         document.getElementById("results1").innerHTML = "The game is compatible " + printCounter +"% with GCAG" ; }
         document.getElementById("results2").innerHTML = "The game is compatible " + printCounter +"% with GCAG" ;
         document.getElementById("results3").innerHTML = "The game is compatible " + printCounter +"% with GCAG" ;


}
