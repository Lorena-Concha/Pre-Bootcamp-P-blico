const esPrimo = numero => {
 if (numero === 0 || numero === 1 || numero === 4) return false;
  for (let x = 2; x < numero / 2; x ++) {
    if (numero % x === 0) return false;
  }
  return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);