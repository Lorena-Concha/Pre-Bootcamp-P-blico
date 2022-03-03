class Ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.table(this.nombre);
    }
    showStats(){
        console.table('nombre : '+this.nombre);
        console.table('fuerza : '+this.fuerza);
        console.table('velocidad : '+this.velocidad);
        console.table('salud : '+this.salud);
    }
    drinkSake() {
        this.salud +=10;
    }
}
const ninja1 = new Ninja("Hyabusa");
const ninja2 = new Ninja("Kleyna");
ninja1.sayName();
ninja1.showStats();
ninja2.sayName();
ninja2.showStats();

console.table({ninja1,ninja2});

class Sensei extends Ninja {
    constructor(nombre) {
        super (nombre);
        this.sabiduria = 10; 
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
    }
    speakWisdom () {
        super.drinkSake();
        console.table("la ignorancia cuesta cara");
    }
    showStats(){
        console.table('nombre : '+this.nombre);
        console.table('fuerza : '+this.fuerza);
        console.table('velocidad : '+this.velocidad);
        console.table('salud : '+this.salud);
        console.table('sabiduria : '+this.sabiduria);
    }
}
const superninja = new Sensei ("Miyagi");
superninja.speakWisdom();
superninja.showStats();
superninja.sayName();