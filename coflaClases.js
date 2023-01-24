let cantidad = prompt("¿cuantos alumnos son?");
let alumnosTotales = [];

const tomarAsistencia = (nombre, p) => {
  let presencia = prompt(nombre);
  if (presencia == "p" || presencia == "P") {
    alumnosTotales[i][1]++;
  }
};

for (i = 0; i < 30; i++) {
  for (alumno in alumnosTotales) {
    tomarAsistencia(alumnosTotales[alumno][0], alumno);
  }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________Presentes: ${alumnosTotales[1]} <br>
    ________Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}`;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado += "<b style = ' color:red' > Reprobado por inasistencias</b><br><br>";
    }else {
        resultado+= "<br><br>"
    }
    document.write(resultado);
}
