/* var contadoruno=9;
function sumaruno(){
    contadoruno= contadoruno + 1;
    document.getElementById("countuno").innerText=contadoruno+" like(s)";
}
var contadordos=12;
function sumardos(){
    contadordos= contadordos + 1;
    document.getElementById("countdos").innerText=contadordos+" like(s)";
}
var contadortres=9;
function sumartres(){
    contadortres= contadortres + 1;
    document.getElementById("counttres").innerText=contadortres+" like(s)";
} */
var contadores=[9,12,9]
var likes=[document.querySelector("#countuno"),document.querySelector("#countdos"),document.querySelector("#counttres")];
console.log(document.querySelector("#countdos"));
function sumar(id){
    console.log(id);
    contadores[id]=contadores[id]+1;
    console.log(contadores);
    likes[id].innerHTML=contadores[id]+"Likes";
console.log(likes);
}

