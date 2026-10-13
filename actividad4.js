// funcion 3:
// crear una funcion que solicite dos arreglos numericos, debera retornar
// la suma de ambos arreglos siempre que tengan el mismo numero de elementos
// de lo contrario devolver un array vacio

// funcion 4:
// crear una funcion que solicite un numero positivo y retorne todos los
// divisores desde 1 hasta el numero que hayas indicado. El resultado se obtiene
// como arreglo. Ejemplo: 22 -> [1,2,11,22], ejemplo 40 -> [1,2,4,5,8,10,20,40]

function sumarArreglos(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return [];
  }
  let resultado = [];
  for (let i = 0; i < arr1.length; i++) {
    resultado.push(arr1[i] + arr2[i]);
  }
  return resultado;
}

let arrayA = [1, 2, 3];
let arrayB = [4, 5, 6];
console.log(arrayA, "+", arrayB, "=", sumarArreglos(arrayA, arrayB));

let arrayC = [1, 2];
let arrayD = [4, 5, 6];
console.log("  ", arrayC, "+", arrayD, "=", sumarArreglos(arrayC, arrayD));

console.log("------------------------------------");

function obtenerDivisores(numero) {
  if (numero < 0) {
    console.log("el numero debe ser positivo");
    return [];
  }
  let divisores = [];
  for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      divisores.push(i);
    }
  }
  return divisores;
}
console.log("divisores de 22:", obtenerDivisores(22));
console.log("divisores de 40:", obtenerDivisores(40));
