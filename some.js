const array = [0,3];
/* 
const esNumeroPar = (numero) => numero % 2 === 0;
console.log(array.some(esNumeroPar)); */

let hayPares = array.some((numero) => numero % 2 === 0);

console.log(hayPares);
