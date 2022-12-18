// let edad = parseInt(prompt("introduzca su edad"));
// let hora = parseInt(prompt("introduzca su hora"));

// if (edad >= 18 && hora == 2 ){
//     document.write ("Usted puede pasar gratis. ");   
// }else if(edad >= 18 && hora > 2 || edad >= 18 && hora < 2){
    
//     document.write("Adelante la entrada cuesta 20 dolares");

// }else{
//     document.write("Usted no puede pasar es menor de edad");
// }

let free = false;

const validarCliente = (time) => {
    let edad = prompt("¿Cual es tu edad?");
    if (edad >= 18){
        if (time >= 2 && time < 7 && free == false){
            alert("poder pasar gratis porque sos la primer persona despues de las 2");
            free = true;
        } else {
            alert(`son las ${time}:00Hs y podes pasar, pero tenes que pagar entrada`);
        } 
    }else {
        alert("sos menor de edad por ende no vas a pasar, Maquinola");
    }
}

validarCliente(23);
validarCliente(2);
validarCliente(2);
validarCliente(2.1);
validarCliente(13);
validarCliente(5);


