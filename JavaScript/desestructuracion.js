
/* const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars */
//Deberia mostrar Tesla y Mercerdes, a la const randomCar le asignamos la primera posicion y a la otherramdoncar le estamos 
//asignado la posicion 1 informando que se salte la primera con la ,
/* console.log(randomCar)
console.log(otherRandomCar) */

/* const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee; */
//deberia dar error porque OtherName no esta definido 
/* console.log(name);
console.log(otherName); */

/* const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//deberia mostrar 12345 y undefined porque el valor pasword en objeto no existe
console.log(password);
console.log(hashedPassword); */

/* const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//deberia dar falso y verdadero, es 2 es igual a 5 y luego 2 es igual a 2
console.log(first == second);
console.log(first == third); */

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//deberia mostrar el valor, luego todo el arreglo, luego 1 y luego 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
