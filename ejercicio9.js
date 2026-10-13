let edades = [58, 25, 19, 35, 33, 32, 26, 24, 52, 23, 55, 45, 20, 19, 23];

let mayor = edades[0];
let menor = edades[0];
let total = 0;
edades.forEach((edad) => {
  total += edad;
  if (edad > mayor) {
    mayor = edad;
  }
  if (edad < menor) {
    menor = edad;
  }
});

let promedio = total / edades.length;

console.log("Edad mayor:", mayor);
console.log("Edad menor:", menor);
console.log("Promedio:", promedio);
