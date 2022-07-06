/* Leer un numero entero de dos dígitos y determinar si ambos dígitos son pares */

function suma2Digitos(num) {
    if (num < 0) {
        num *= (-1);
    }
    if (num > 9 && num < 100) {
        let c1, c2;
        c1 = Math.trunc(num / 10);
        c2 = num % 10;
        if (c1 % 2 === 0 && c2 % 2 === 0) {
            console.log("Ambos dígitos son pares. ");
        } else {
            console.log("Alguno de sus digitos no es par. ");
        }
    } else {
        console.log("El número ingresado no tiene 2 dígitos");
    }
}

console.log("");
suma2Digitos(23);
suma2Digitos(24);
suma2Digitos(56);
suma2Digitos(5645);
suma2Digitos(100);
suma2Digitos(101);
suma2Digitos(9);
suma2Digitos(10);
suma2Digitos(45);
suma2Digitos(64);
console.log("");