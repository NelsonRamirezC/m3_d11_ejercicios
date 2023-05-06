let datosUsuarios = [
    { nombre: "Pedro", password: "12345" }, //indice 0
    { nombre: "José", password: "qwerty" }, //indice 1
    { nombre: "Mauricio", password: "asdfg" }, //indice 2
    { nombre: "Jorge", password: "54321" }, //indice 3
    5, //indice 4
];

let nuevoArray = datosUsuarios.slice(1);

nuevoArray[2].nombre = "JORGE";
console.log(nuevoArray);
console.log(datosUsuarios);
