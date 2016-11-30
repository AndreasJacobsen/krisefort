function calculator() {

    var counter = 0;
    //the for-loop has hard coded number of checkboxes, this can be solved in other more automated ways. We see the GCAG rules as rather static so we did not implemented with an auto-counter.
    for (var i = 0; i <= 27; ++i) {
        //IDs are numbered from 0-26, the for-loop appends id numbers matching the ID-numbers in the form.
        var input = document.getElementById("id" + i);

        //checks if counter is checked, here we also hardcoded the value (sum of checkboxes divided by 100%), this could of course be done in a more automated way; but as the rules are rather static we didn't spend any time on that.
        if (input.checked) {
            counter = counter + 3.57;
        }
        var printCounter = counter;
        printCounter = Math.ceil(printCounter);
    }
    document.getElementById("results").innerHTML = "<b>The game is " + printCounter + "% compatible with GCAG</b>";
    document.getElementById("results1").innerHTML = "<b>The game is " + printCounter + "% compatible with GCAG</b>";
    document.getElementById("results2").innerHTML = "<b>The game is " + printCounter + "% compatible with GCAG</b>";
    document.getElementById("results3").innerHTML = "<b>The game is " + printCounter + "% compatible with GCAG</b>";

}
