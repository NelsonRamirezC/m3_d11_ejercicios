let empleados1 = ["Carlos", "José", , "María"];
let empleados2 = ["Carla", "Jaime", "Pedro", "Carlos"];

let repetidos = [];
empleados2.forEach((empleado) => {
    let pagado = empleados1.includes(empleado);
    if (pagado) {
        repetidos.push(empleado);
    }
});

console.log(repetidos);

let indice = empleados2.indexOf("Carlos");

console.log(indice);
