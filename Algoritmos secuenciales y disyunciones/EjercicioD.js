/* Ingresar un numero entero cualquiera y determinar si es positivo o no */

function esPositivo(num) {

    if (num > 0) {
        console.log("El numero ingresado es positivo");
    } else if (num < 0) {
        console.log("El numero ingresado es negativo")
    } else {
        console.log("El numero ingresado es 0");
    }

}

console.log("");
esPositivo(1);
esPositivo(-2);
esPositivo(0);
console.log("");