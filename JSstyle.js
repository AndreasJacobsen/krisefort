var guntext = "Here we see a weapon displayed in menu in a game. <br>" +
    "How rare the waepon is is displayed ony using the color purple, normal weapons are blue. "

function ShowImage(){
    document.getElementById("guntext").innerHTML = "ostekake";
    document.getElementById('loadingImage').style.display='block';
    document.getElementById("loadText").style.display='block';


}
function HideImage(){
    document.getElementById('loadingImage').style.display='none';
    document.getElementById("loadText").style.display='none';
}
