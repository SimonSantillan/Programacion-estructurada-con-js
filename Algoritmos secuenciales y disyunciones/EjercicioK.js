/* Ingresar un numero entero cualquiera y determinar si es positivo o mulriplo de 3 */

function positivoOmultiploDe3(num) {

    if (num > 0 || num % 3 === 0) {
        console.log("El numero ingresado es positivo o multiplo de 3");
    } else {
        console.log("El numero ingresado NO es positivo NI múltiplo de 3");
    }
}
console.log("");
positivoOmultiploDe3(-6);
positivoOmultiploDe3(-5);
positivoOmultiploDe3(-4);
positivoOmultiploDe3(-3);
positivoOmultiploDe3(-2);
positivoOmultiploDe3(-1);
positivoOmultiploDe3(0);
positivoOmultiploDe3(1);
positivoOmultiploDe3(2);
positivoOmultiploDe3(3);
positivoOmultiploDe3(4);
positivoOmultiploDe3(5);
positivoOmultiploDe3(6);
console.log("");