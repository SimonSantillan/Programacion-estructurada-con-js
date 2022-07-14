/* Leer un numero entero y determinar si tiene 3 dígitos */

function tiene3Digitos(num) {
    if (num < 0) {
        num *= (-1);
    }
    if (num > 99 && num < 1000) {
        console.log("El número ingresado tiene 3 dígitos");
    } else {
        console.log("El número ingresado no tiene 3 dígitos");
    }
}
console.log("");
tiene3Digitos(99);
tiene3Digitos(100);
tiene3Digitos(-123);
tiene3Digitos(999);
tiene3Digitos(1000);
tiene3Digitos(12);
console.log("");