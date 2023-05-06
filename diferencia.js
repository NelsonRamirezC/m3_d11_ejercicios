let numeros1 = [1, 2, 3, 4];
let numeros2 = [2, 4, 5, 7];
//1, 3, 5, 7

let diferentes1 = numeros1.filter((numero) => !numeros2.includes(numero));
//console.log(diferentes1);

let diferentes2 = numeros2.filter((numero) => !numeros1.includes(numero));
//console.log(diferentes2);

let diferentes = diferentes1.concat(diferentes2);
console.log(diferentes);
