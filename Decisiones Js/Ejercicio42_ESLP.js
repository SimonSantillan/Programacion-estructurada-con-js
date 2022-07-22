/* Leer dos numeros enteros y determinar si la diferencia entre los dos es un numero par */

function diferenciaNumPar() {
    let diferencia;
    if (arguments[0] > arguments [1]) {
        diferencia = arguments[0] - arguments[1];
        console.log(diferencia);
    } else {
        diferencia = arguments[1] - arguments[0];
        console.log(diferencia);
    }
    if (diferencia % 2 === 0) {
        console.log("La diferencia de los dos numeros ingresados origina un número par");
    } else {
        console.log("La diferencia de los dos numeros ingresados NO origina un número par");
    }
}
console.log("");
diferenciaNumPar(56,50);
diferenciaNumPar(32,50);
diferenciaNumPar(32,30);
diferenciaNumPar(58,29);
diferenciaNumPar(27,77);
diferenciaNumPar(-15,77);