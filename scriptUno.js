frutas = ["banana", "pera", "uvas","piña"];
document.write(frutas[2]);

let numero = 0;

while (numero < 6) {
    numero++;
    document.write(numero);
};

let numeroDos = 0 ;
do {

    numeroDos++;
    document.write( numeroDos + "<br>")

}
while (numeroDos <= 3);

for(let i = 0; i < 3; i++){
    document.write(i)
}

for (let i = 1; i <= 10; i++){
    if (i== 4){
        continue;
    }
document.write( i + " agregar al diccionario")
}

array1 = ["maria","josefa","roberta"];
array2 = ["luisa", "irania", array1];

for (let array in array2) {
    if (array == 2) {
        for (let array of array1){
          document.write(array + "<br>");
        }
    } else {
            document.write(array2[array] + "<br>");

    } 
}






