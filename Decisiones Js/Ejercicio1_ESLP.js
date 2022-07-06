/* Leer un numero entero y determinar si es un número terminado en 4 */

function terminaEn4(num) {
    if (num % 10 === 4) {
        console.log("El numero ingresado termina en 4.");
    } else {
        console.log("El número ingresado NO termina en 4");
    }
}

console.log("");
terminaEn4(234);
terminaEn4(233);
terminaEn4(1234);
terminaEn4(1233);
terminaEn4(34);
terminaEn4(4);
console.log("");