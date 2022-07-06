/* Leer un numero entero de 2 dígitos y determinar a cuanto es igual la suma de sus dígitos */

function suma2Digitos(num) {
    if (num < 0) {
        num *= (-1);
    }
    if (num > 9 && num < 100) {
        let c1, c2;
        c1 = Math.trunc(num / 10);
        c2 = num % 10;
        console.log(`La suma de sus dígitos es: ${c1 + c2}`)
    } else {
        console.log("El número ingresado no tiene 2 dígitos");
    }
}

console.log("");
suma2Digitos(23);
suma2Digitos(24);
suma2Digitos(56);
suma2Digitos(5645);
suma2Digitos(45);
console.log("");