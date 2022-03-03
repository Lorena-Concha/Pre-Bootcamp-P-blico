function cargando() {
  alert("Cargando informe meteorológico");
}
function hide() {
    document.querySelector(".cookie").classList.add("hide");
}
function change_grades() {
    var grado = document.querySelector("#temperaturas option:checked").value;
    if(grado=="Fahrenheit"){
        document.querySelector("#cel-1").textContent="93°";
        document.querySelector("#cel-2").textContent="53°";
        document.querySelector("#cel-3").textContent="93°";
        document.querySelector("#cel-4").textContent="53°";
        document.querySelector("#cel-5").textContent="93°";
        document.querySelector("#cel-6").textContent="53°";
        document.querySelector("#cel-7").textContent="77°";
        document.querySelector("#cel-8").textContent="55°";
    }
else {
    document.querySelector("#cel-1").textContent="34°";
    document.querySelector("#cel-2").textContent="12°";
    document.querySelector("#cel-3").textContent="34°";
    document.querySelector("#cel-4").textContent="12°";
    document.querySelector("#cel-5").textContent="34°";
    document.querySelector("#cel-6").textContent="12°";
    document.querySelector("#cel-7").textContent="25°";
    document.querySelector("#cel-8").textContent="13°";
}

}