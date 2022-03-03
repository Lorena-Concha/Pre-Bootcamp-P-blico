class Ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(this.nombre);
    }
    showStats(){
        console.log('nombre : '+this.nombre);
        console.log('fuerza : '+this.fuerza);
        console.log('velocidad : '+this.velocidad);
        console.log('salud : '+this.salud);
    }
    drinkSake() {
        this.salud +=10;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();