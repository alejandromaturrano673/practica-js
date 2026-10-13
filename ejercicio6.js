const peliculas = [
  [
    "El Exorcista",
    "Hereditary",
    "El Conjuro",
    "Psicosis",
    "Un Lugar en Silencio",
  ],
  ["Toy Story", "El Rey León", "Frozen", "Mi Villano Favorito", "Coco"],
  [
    "¿Qué pasó ayer?",
    "Son como niños",
    "Supercool",
    "La Máscara",
    "Una loca película de miedo",
  ],
];

// for (let i = 0; i < peliculas.length; i++) {
//   for (let j = 0; j < peliculas[i].length; j++) {
//     console.log(peliculas[i][j]);
//   }
// }

peliculas.forEach((generoPeliculas) => {
  generoPeliculas.forEach((pelicula) => {
    console.log(pelicula);
  });
});
