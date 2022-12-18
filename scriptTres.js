let youtubeURl = "http://youtube.com";

respuesta = confirm("¿estas seguro que deseas salir del sitio?");

console.log(respuesta);

numero = 1;

while (numero < 20) {
  numero++;
  document.write(numero + "<br>");
}

for (let i = 0; i <= 6; i++) {
  document.write(i);
}

let paises = ["Venezuela", "Alemania", "España", "Colombia"];

for (pais in paises) {
  document.write(pais + "<br>");
}

for (pais of paises) {
  document.write(pais);
}

// Ejercicio continue con arrays

array1 = ["mario", "pedro", "juan"];
array2 = ["aithana", "laura", array1, "dayanara"];

forRancio: for (let array in array2) {
  if (array == 2) {
    for (let array of array1) {
      continue forRancio;
      document.write(array + "<br>");
    }
  } else {
    document.write(array2[array] + "<br>");
  }
}


// Ejercicio break con arrays

array1 = ["mario", "pedro", "juan"];
array2 = ["aithana", "laura", array1, "dayanara"];

forRancio: for (let array in array2) {
  if (array == 2) {
    for (let array of array1) {
      break forRancio;
      document.write(array + "<br>");
    }
  } else {
    document.write(array2[array] + "<br>");
  }
}
