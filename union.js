let numeros1 = [1, 2, 3];
let numeros2 = [4, 5, 6];

//let nuevoArray = numeros1.concat(numeros2);
let nuevoArray = [...numeros1, ...numeros2]; // Spread

console.log(numeros1);
console.log(numeros2);
console.log(nuevoArray);
