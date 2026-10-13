const persona = {
  apellidos: "Francia Minaya",
  nombres: "Jhon Edward",
  hablar: function () {
    return "Hola que tal";
  },
  locacion: {
    departamento: "Ica",
    provincia: "Chincha",
    distrito: "Grocio Prado",
    direccion: "Calle San Martin 123",
    mostrar: function () {
      return `${this.departamento} - ${this.provincia} - ${this.distrito} - ${persona.apellidos}`;
    },
  },
};

console.log(persona.hablar());
console.log(persona.locacion["departamento"]);
console.log(persona.locacion.mostrar());

