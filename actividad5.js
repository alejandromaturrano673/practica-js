// Presentar en pdf, en total son 8 ejercicio
// example:
// Tarea 6
// Ejercicio #1
//   Enunciado
//   Captura y debajo Resultado
//
// Debajo del 8, poner enlace al repositorio con hipervinculo:
// Repositorio: http://github

// crear una funcion autoejecutable, que imprima cuantas horas, minutos y segundos
// faltan para terminar el dia

(function () {
  let ahora = new Date();

  let mañana = new Date();
  mañana.setDate(ahora.getDate() + 1);
  mañana.setHours(0, 0, 0, 0);

  let milisegundosRestantes = mañana - ahora;
  let segundosRestantes = Math.floor(milisegundosRestantes / 1000);

  let horas = Math.floor(segundosRestantes / (60 * 60));
  let minutos = Math.floor((segundosRestantes % (60 * 60)) / 60);
  let segundos = segundosRestantes % 60;

  console.log(
    `Son las ${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`,
  );
  console.log(`Quedan ${horas} horas ${minutos} minutos ${segundos} segundos`);
})();

// crear una funcion autoejecutable que solicite un numero (expresado en segundos) y nos
// devuelvo un saludo, despues del tiempo indicado

(function (segundos) {
  console.log(`Esperando ${segundos} segundos...`);

  let milisegundos = segundos * 1000;
  setTimeout(function () {
    console.log("Hola");
  }, milisegundos);
})(3);
