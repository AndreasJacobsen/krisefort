var printCounter = 0;
var input;
function calculator () {
    var counter = 0;
    var negativeCounter = 0;
    var positiveCounter =0;
     for(var i=0; i<26; ++i) {
         var input = document.getElementById("id" + i);
         // var isChecked = input.checked;

          if(input.checked)
         {
             console.log("Checkbox ID " + i + " is checked");
             // positiveCounter = 0;
             counter = counter+3.84615384615;
             console.log("The counter is: " + positiveCounter);
         }
          printCounter = counter;
          printCounter = Math.ceil(printCounter);
          // counter = positiveCounter;
         // document.querySelector('results').innerHTML = 'Percentage complete: '+printCounter;
         document.getElementById("results").innerHTML = "The game is compatible " + printCounter +"% with GCAG" ;
         document.getElementById("results1").innerHTML = "The game is compatible " + printCounter +"% with GCAG" ; }
         document.getElementById("results2").innerHTML = "The game is compatible " + printCounter +"% with GCAG" ;
         document.getElementById("results3").innerHTML = "The game is compatible " + printCounter +"% with GCAG" ;


}
