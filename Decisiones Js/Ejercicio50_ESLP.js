/* Leer un numero entero y si es multiplo de 4 mostrar en pantalla su mitad, si es multiplo de 5 mostrar en pantalla su cuadrado y si es multiplo de 6 mostrar en pantalla su primer digito.
Asumir que el numero no es mayor que 100*/

function enteroConCondicion(num){ 
    if (num > 0 && num < 100) {
        if (num % 4 === 0) {
            console.log("La mitad del numero ingresado es: " + (num/2));
        }
        if (num % 5 === 0) {
            console.log("El cuadrado del numero ingresado es: " + (num*num));
        }
        if (num % 6 === 0) {
            console.log("El primer digito del numero ingresado es: " + Math.trunc(num/10));
        }
    } else {
        console.log("El numero ingresado no es menor que 100 o es negativo");
    }
}