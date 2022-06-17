var Personas = [
  { Nombre: "Juan", Sexo: "M" },
  { Nombre: "Martha", Sexo: "F" },
];

var Nuevo = [];
for (var i = 0; i < Personas.length; i++) {
  if (Personas [i].Sexo == "M") {
    Nuevo.push({ Nombre: " Sr. " + Personas [i].Nombre });
  } else {
    Nuevo.push({ Nombre: " Srta. " + Personas [i].Nombre });
  }
}

console.log("Original", Personas);
console.log("Nuevo", Nuevo);
