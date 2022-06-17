let palabra = "RAYAR";

if (palabra == palabra.split("").reverse().join("")) {
  console.log("La palabra se escribe igual al derecho y al reves: ", palabra, ": Es correcta");
} else {
  console.log(
    "El dato ingresado solo no de escribe igual al revez : " + palabra,
    ": revise su escritura"
  );
}
