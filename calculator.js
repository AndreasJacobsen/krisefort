function calculator () {

    var counter = 0;
    var id = "id";
     for(var i=0; i<3; ++i) {
         var input = document.getElementById("id" + i);
         var isChecked = input.checked;
         if (input.checked) {
             console.log("Checkbox ID " + i + " is checked");
             counter = counter+25;
             console.log("The counter is: " + counter);
         }
         var printCounter = counter.toString();
         // document.querySelector('results').innerHTML = 'Percentage complete: '+printCounter;
         document.getElementById("results").innerHTML = "The game is compatible " + counter +"% with GCAG" ;
     }

}