/* Leer un numero entero menor que 50 y positivo y determinar si es un numero primo */

function esUnPrimo(num) {
    if (num > 0 && num < 51) {
        switch (num) {
            case 2: case 3: case 5: case 7: case 11: case 13: case 17: case 19: case 23: case 29: case 31: case 37: case 41: case 43: case 47:
                console.log("El numero ingresado es primo, positivo y menor que 50");
                break;
            default:
                console.log("El numero ingresado es positivo y menor que 50 pero no primo");
        }
    } else {
        console.log("El numero ingresado no es un numero entero menor que 50 y positivo");
    }
}

console.log("");
esUnPrimo(-1);
esUnPrimo(0);
esUnPrimo(13);
esUnPrimo(24);
esUnPrimo(17);
esUnPrimo(61);
esUnPrimo(50);
esUnPrimo(51);