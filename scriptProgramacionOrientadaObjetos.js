class persona{
    constructor(nombre, edad,hobby){
        this.nombre = nombre;
        this.edad = edad;
        this.hobby = hobby;
        this.bio = `Soy ${this.nombre}, tengo ${this.edad} años y me encanta ${this.hobby}`;

    }
}

let mujer = new persona("Ana", 29, "nadar");
let hombre = new persona( "Luis", 39, "correr en las carreras");

document.write(mujer.bio + "<br>");
document.write(hombre.bio + "<br>")