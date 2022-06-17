
    var Original: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    var Nuevo: number[] = [];
    var numero: number = 4;
    for (var i = 0; i < Original.length; i++) {
        if (Original[i] > numero) {
            Nuevo.push(Original[i]);
        }
    }
    console.log('Dato Original: '+Original);
    console.log('Dato Nuevo: '+Nuevo);
    var suma: number = 0; if (Nuevo.length > 0) {    for (var i = 0; i < Nuevo.length; i++) {
        suma += Nuevo[i];
    }
    console.log('La suma de los elementos del arreglo es: '+suma);
}
else {
    console.log('El arreglo esta vacio');
}