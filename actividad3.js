// funcion 1:
// crear una funcion que reciba un arreglo de numeros y retorne como resultado
// un objeto indicando cuantos valores son pares e impares

// funcion 2:
// escribir una funcion que retorne true o false dependiendo si el valor de entrada
// corresponde a un numero capicua: 121, 444, 3223. Solo permite analizar valores
// de hasta 5 digitos (99999)

function contarParesImpares(numeros) {
  let pares = 0;
  let impares = 0;
  numeros.forEach((numero) => {
    if (numero % 2 == 0) {
      pares++;
    } else {
      impares++;
    }
  });
  return { pares: pares, impares: impares };
}

let array1 = [5, 4, 1, 8, 9];
console.log(array1, "\t", contarParesImpares(array1));

let array2 = [10, 2, 6, 1, 9, 7];
console.log(array2, "\t", contarParesImpares(array2));

let array3 = [15, 6, 7, 9, 9];
console.log(array3, "\t", contarParesImpares(array3));

console.log("------------------------------------");

function esCapicua(numero) {
  if (numero < 0 || numero > 99999) {
    console.log("el numero no puede tener mas de 5 digitos");
    return false;
  }
  let textoOriginal = numero.toString();
  let textoVolteado = textoOriginal.split("").reverse().join("");
  return textoOriginal == textoVolteado;
}
console.log("121 es capicua?   :", esCapicua(121));
console.log("444 es capicua?   :", esCapicua(444));
console.log("3223 es capicua?  :", esCapicua(3223));
console.log("12345 es capicua? :", esCapicua(12345));
console.log();
console.log("100005 es capicua?:", esCapicua(100005));
