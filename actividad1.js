// construir un objeto con los datos una pelicula

let pelicula = {
  titulo: "el extraño mundo de Jack",
  anio: 1993,
  idiomas: ["español", "ingles"],
  duracionMin: 76,
  generos: [
    "animacion",
    "musical",
    "comedia",
    "monstruos",
    "infantil",
    "gotico",
  ],
  presupuesto: 18000000, // 18 millones
  recaudacion: 109000000, // 109 millones
  elenco: [
    {
      nombre: "Chris Sarandon",
      personaje: "Jack Skellington",
      rol: "principal",
    },
    {
      nombre: "Catherine O'Hara",
      personaje: "Sally",
      rol: "principal",
    },
    {
      nombre: "William Hickey",
      personaje: "Doctor Finkelstein",
      rol: "secundario",
    },
    {
      nombre: "Ken Page",
      personaje: "Oogie Boogie",
      rol: "antagonista",
    },
  ],
  sinopsis:
    "Jack descubre la ciudad de la navidad y decide secuestrar a Santa Claus" +
    "y tomar el control de la navidad",
  direccion: ["Henry Selick"],
  escritores: ["Tim Burton", "Caroline Thompson"],
};
