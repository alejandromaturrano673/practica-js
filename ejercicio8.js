const alimentos = [
  ["manzana", "pera", "mango", "sandía", "melón"],
  ["lechuga", "coliflor", "espárrago"],
  ["pescado", "cerdo"],
  ["arroz"],
];

// ¿Cuántos elementos tiene la matriz?
// ¿Cuál es el array de la matriz que tiene más datos?
// ¿Cuál es el array de la matriz que tiene menos datos?
// ¿Cuántos elementos en total tiene la matriz? considerando todos los arreglos

let cantidad = alimentos.length;
let mayor = alimentos[0];
let menor = alimentos[0];
let total = 0;

alimentos.forEach((categoriaAlimentos) => {
  total += categoriaAlimentos.length;
  if (categoriaAlimentos.length > mayor.length) {
    mayor = categoriaAlimentos;
  }
  if (categoriaAlimentos.length < menor.length) {
    menor = categoriaAlimentos;
  }
});

console.log("cantidad elementos", cantidad);
console.log("array con mas datos", mayor);
console.log("array con menos datos", menor);
console.log("elementos en total", total);
