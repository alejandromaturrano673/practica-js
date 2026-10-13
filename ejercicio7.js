const paises = [
  ["Argentina", "Canadá", "México"],
  ["España", "Francia", "Italia"],
  ["Japón", "China", "Corea del Sur"],
  ["Egipto", "Nigeria", "Kenia"],
];

paises[2].forEach((pais) => {
  console.log(pais);
});

console.log();

// Agregar 2 países en La Lista de América
paises[0].push("Bolivia");
paises[0].push("Ecuador");

paises[0].forEach((pais) => {
  console.log(pais);
});