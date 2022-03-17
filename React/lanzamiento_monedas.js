function lanzamientoMoneda() {
    return Math.random() > 0.5 ? "cara" : "sello";
}

function cincoCaras() {
    return new Promise((resolve, reject) => {
        let contadorCaras = 0;
        let intentos = 0;
        while (contadorCaras < 5) {
            intentos++;
            let resultado = lanzamientoMoneda();
            console.log(`${resultado} ha girado`);
            if (resultado === "cara") {
                contadorCaras++;
            } else {
                contadorCaras = 0;
            }
            if (intentos > 100) {
                reject("Llegaste al limite de 100 intentos");
            }
        }
        resolve(`Tomo ${intentos} intentos para que mostrara cara`);

    });
}
cincoCaras()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("Cuando funciona esto ahora?");