/* Leer dos numeros enteros y determinar si la diferencia entre los dos es un numero primo */

function diferenciaNumPrimo() {
    let diferencia;
    if (arguments[0] > arguments [1]) {
        diferencia = arguments[0] - arguments[1];
        console.log(diferencia);
    } else {
        diferencia = arguments[1] - arguments[0];
        console.log(diferencia);
    }
    switch (diferencia) {
        case 2: case 3: case 5: case 7: case 11: case 13: case 17: case 19: case 23: case 29: case 31: case 37: case 41: case 43: case 47: case 53: case 59: case 61: case 67: case 71: case 73: case 79: case 83: case 89: case 97:
            console.log("La diferencia de los dos numeros ingresados origina un numero primo");
            break;
        default:
            console.log("La diferencia de los dos numeros ingresados NO origina un numero primo");
    }
}
console.log("");
diferenciaNumPrimo(56,50);
diferenciaNumPrimo(32,50);
diferenciaNumPrimo(32,30);
diferenciaNumPrimo(58,29);
diferenciaNumPrimo(27,77);
diferenciaNumPrimo(-15,77);
