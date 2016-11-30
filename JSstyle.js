var guntext = "Here we see a weapon displayed in menu in a game. <br>" +
    "How rare the waepon is is displayed ony using the color purple, normal weapons are blue. "

function ShowExample1() {
    document.getElementById("guntext").innerHTML = "The image below shows a weapon in an actual game. The game uses color coding to show how rare a weapon is, this is purple so it is rare. There is no other way for the player to know the rarity of a weapon than the color coding. <br>" +
        "We can also see blue text and blue icons on a blue background providing poor contrast";
    document.getElementById('loadingImage').style.display = 'block';
}
function HideExample1() {
    document.getElementById("guntext").style.display = 'none';
    document.getElementById('loadingImage').style.display = 'none';
    document.getElementById("loadText").style.display = 'none';
}
function ShowExample2(){
    document.getElementById("sourceText").innerHTML = "Image taken from <a href=\"https://us.battle.net/support/en/article/7635\">Battlened support</a>";
    document.getElementById('loadingImage1').style.display='block';
    document.getElementById("loadText1").style.display='block';
}

function HideExample2() {
    document.getElementById("sourceText").style.display='none';
    document.getElementById('loadingImage1').style.display = 'none';
    document.getElementById("loadText1").style.display = 'none';
}
function ShowExample3(){
    document.getElementById("sourceText1").innerHTML = "Image taken from <a href=\"http://www.eliteownage.com/images/mouse/rawinput_small.jpg\">eliteownage.com</a>";
    document.getElementById('loadingImage2').style.display='block';
    document.getElementById("loadText2").style.display='block';
}

function HideExample3() {
    document.getElementById("sourceText1").style.display='none';
    document.getElementById('loadingImage2').style.display = 'none';
    document.getElementById("loadText2").style.display = 'none';
}