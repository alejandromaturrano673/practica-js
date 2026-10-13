//Objetos = JSON (Javascript Object Notation)
//Estructura que guarda datos utilizando {key: value}
let perfil = {
  apellidos: "Francia Minaya",
  nombres: "Jhon",
  edad: 42,
  telefonos: ["956111222", "956333000", "956777000"],
  formacion: [
    { nivel: "Primaria", nombre: "San Jose", anio: 2000 },
    { nivel: "Secundaria", nombre: "JPB", anio: 2005 },
    { nivel: "Superior", nombre: "SENATI", anio: 2010 },
  ],
  habilidades: [
    { skill: "Base de datos", herramientas: ["MySQL", "Oracle", "SQLite"] },
    {
      skill: "Lenguajes programacion",
      herramientas: ["JavaScript", "PHP", "Java", "C#", "Python"],
    },
    {
      skill: "Sistemas operativos",
      herramientas: ["Windows", "Linux", "Android"],
    },
  ],
};

console.log(perfil.habilidades[1].herramientas);
console.log(perfil.formacion[1].nombre);
console.log(perfil.telefonos.length);

//Mostrar cada uno de los motores de Base de datos
const lista = perfil.habilidades[0].herramientas;
lista.forEach((element) => {
  console.log(element);
});
