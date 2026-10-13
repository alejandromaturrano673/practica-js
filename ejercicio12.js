// conjunto de instrucciones que se pueden reutitizar
//Acepta parámetros de salida y puede devolver algún valor (opcional)

//Pruebas, test
function saludar() {
  console.log("Hola");
}
// Correcto
function despedirse() {
  return "adios";
}
function verificarNota(calificacion = 0) {
  return calificacion < 10.5 ? "desaprobado" : "aprobado";
}
//La función retorna el neto, incrementando +150 por cada hijo
function calcularNeto(sueldoBasico, numeroHijos) {
  return sueldoBasico + numeroHijos * 150;
}
// >= 65 "jubilación activa", contrario, "fase laboral"
function verificarJubilacion(edad) {
  return edad >= 65 ? "jubilación activa" : "fase laboral";
}

//esta función recibe una lista de sueldos (no sabemos la cantidad de elementos)
//también se debe indicar si obtendremos el mayor
//la función retorna el mayor o menor sueldo dependiendo de su configuración
function analizarSueldos(listaSueldos = [], obtenerMayor = true) {
  let resultado = listaSueldos[0];
  if (obtenerMayor) {
    listaSueldos.forEach((sueldo) => {
      if (sueldo > resultado) resultado = sueldo;
    });
  } else {
    listaSueldos.forEach((sueldo) => {
      if (sueldo < resultado) resultado = sueldo;
    });
  }
  return resultado;
}

//recibe un objeto, retorn un arreglo
function obtenerTelefonos(objeto = {}) {
  return objeto.telefonos;
}

//Retornar un objeto con los parámetros
function crearObjeto(apellidos = "", nombres = "", edad = 0) {
  return {
    apellidos: apellidos,
    nombres: nombres,
    edad: edad,
  };
}

saludar();
console.log(despedirse());
console.log(verificarNota(16));
console.log(calcularNeto(3500, 0));
console.log(verificarJubilacion(45));
console.log(analizarSueldos([3500, 1800, 4100, 2200], false));
console.log(analizarSueldos([3500, 1800, 4100, 2200], true));

const perfil = {
  nombres: "Luis Mateo",
  dni: "41454400",
  telefonos: ["956000111", "956000222"],
};

console.log(obtenerTelefonos(perfil));
console.log(crearObjeto("Martinez Perez", "Luis Miguel", 20));
