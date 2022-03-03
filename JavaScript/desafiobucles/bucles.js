function de1a20impares() {
    let impares = 1;
    while (impares <= 20) {
        if (impares % 2 != 0) {
            console.log(impares);
        }
        impares++;
    }
}
de1a20impares();

function disminuirde3() {
    for (var mtres = 100; mtres >= 0; mtres--) {
        if (mtres % 3 == 0) {
            console.log(mtres);
        }
    }
}
disminuirde3();

function restar() {
    for (var num = 4; num >= -3.5; num = num - 1.5) {
        console.log(num);
    }
}
restar();

function sigma(){
    let suma=0;
    for (sum=1;sum<=100;sum++){
        suma=suma+sum;
    }
    console.log(suma);
}
sigma();

function multi(){
    let product=1;
    let add=0;
    for (i=1;i<=12;i++){
        product=product*i;
    }
    console.log(product);
}
multi();