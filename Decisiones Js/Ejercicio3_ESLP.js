/* Leer un numero entero y determinar si es negativo */

function esNegativo(num) {
    if (num < 0) {
        console.log("El numero ingresado es negativo. ");
    } else {
        console.log("El numero ingresado es cero o es positivo. ");
    }
}

console.log("");
esNegativo(-1);
esNegativo(1);
esNegativo(0);
esNegativo(-0);
esNegativo(-2);
esNegativo(2);
console.log("");