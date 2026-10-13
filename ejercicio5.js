let frutas = [
  "manzana",
  "plátano",
  "naranja",
  "fresa",
  "uva",
  "mango",
  "piña",
  "sandía",
  "melón",
  "limón",
];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

//Mostrar la lista invertida (último al primero)
for (let i = frutas.length - 1; i >= 0; i--) {
  console.log(frutas[i]);
}

//Verificar si existe un elemento = "fresa"
let frutaBuscada = "uva"
const resultado = frutas.find((fruta) => fruta == frutaBuscada);
const encontrado = frutas.includes(frutaBuscada);
console.log(resultado, encontrado);
