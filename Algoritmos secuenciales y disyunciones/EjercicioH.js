/* Ingresar un numero entero cualquiera y determinar si es par o no */

function esPar(num) {

    if (num % 2 === 0) {
        console.log("El numero ingresado es par");
    } else {
        console.log("El numero ingresado NO es par");
    }
}

console.log("");
esPar(0);
esPar(1);
esPar(2);
esPar(3);
esPar(4);
console.log("");