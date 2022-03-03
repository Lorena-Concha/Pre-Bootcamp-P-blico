function clickBtn(){
    var valor=document.getElementById("btnLogin").textContent;
    if(valor =="Login"){
        document.getElementById("btnLogin").textContent="Logout";
    }
    else {
        document.getElementById("btnLogin").textContent="Login";
    }
}

function clickLike(){
    alert ("Ninja was Liked");
}

function borraB(){
    var element=document.getElementById("btnAdd");
    element.parentNode.removeChild(element);
}
