/* Ingresar un numero entero cualquiera y determinar si es positivo y múltiplo de 3 */

function positivoYmultiploDe3(num) {

    if (num > 0 && num % 3 ===0) {
        console.log("El numero ingresado es positivo y múltiplo de 3");
    } else {
        console.log("El numero ingresado NO es positivo o NO es multiplo de 3");
    }
}

console.log("");
positivoYmultiploDe3(-3);
positivoYmultiploDe3(-2);
positivoYmultiploDe3(-1);
positivoYmultiploDe3(0);
positivoYmultiploDe3(1);
positivoYmultiploDe3(2);
positivoYmultiploDe3(3);
positivoYmultiploDe3(4);
positivoYmultiploDe3(5);
positivoYmultiploDe3(6);
console.log("");