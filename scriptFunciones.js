
// function calcular (num1, num2) {
//  let res = num1 + num2;
//  document.write(res);
//  document.write("<br>");
// }

// calcular(5,6);


function calcular (num1, num2) {
    let res = num1 + num2;
    return res;
   }
   
   let resultado = calcular(5,6);
   document.write(resultado + "<br>");


//    function saludar (nombre) {
//     let frase = ` Hola estimado(a) ${nombre}`;
//     document.write(frase + "<br>");
//    }

let nombres = ["Heidi", "Pedro", "Juan"];

const saludar = (nombres) => document.write(`Hola querida ${nombres}` + "<br>");
saludar(nombres[0]);
saludar(nombres[1]);
saludar(nombres[2]);





