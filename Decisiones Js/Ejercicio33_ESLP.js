/* Leer un numero entero y determinar si termina en 7 */

function terminaEn7(num) {
    if (num % 10 === 7) {
        console.log("El numero ingresado termina en 7. ");
    } else {
        console.log("El numero ingresado NO termina en 7. ");
    }
}

console.log("");
terminaEn7(59)
terminaEn7(57)
terminaEn7(507)
terminaEn7(508)
terminaEn7(1508)
terminaEn7(1507)