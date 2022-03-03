var contadoruno=9;
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
}

var arr =[9,12,9];

function like(pos){
    let valor = arr[pos] +1;
    arr[pos] = valor;
    document.getElementById('count'+post).textContent = valor + 'like(s)'
}