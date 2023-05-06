let empleados = ["Carla", "Jaime", "Pedro", "Carlos"];

//CÓDIGO PARA ELIMINAR A PEDRO
/* let indice = empleados.indexOf("Pedro");
console.log(indice);
empleados.splice(indice, 1);
console.log(empleados);
 */

/* empleados.splice(1, 0, "Jonathan", "José");

console.log(empleados); */

/* let found = empleados.find((empleado) => empleado == "Pedro"); */

/* let indice = empleados.indexOf("Pedro");
empleados[indice] = "PEDRO";
console.log(empleados);
 */

empleados.forEach((empleado, index) => {
    if (empleado.toUpperCase() == "PEDRO") {
        empleados[index] = "PEDRO";
    }
});

console.log(empleados);
