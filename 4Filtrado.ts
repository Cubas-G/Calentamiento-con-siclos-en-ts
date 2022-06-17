
  var Original: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  var Nuevo: number[] = [];
  var numero: number = 4;
  for (var i = 0; i < Original.length; i++) {
      if (Original[i] < numero) {
        Nuevo.push(Original[i]);
      }
  }
  console.log(' El arreglo original es: ' + Original);
  console.log(' El arreglo filtrado es: ' + Nuevo); 