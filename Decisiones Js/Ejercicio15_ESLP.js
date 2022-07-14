/* Leer un numero entero de tres digitos y determinar a cuanto es igual la suma de sus dígitos */

function sumaTresDigitos(num) {
    if (num < 0) {
        num *= (-1);
    }
    if (num > 99 && num < 1000) {
        let digito1 = Math.trunc(num/100);
        let digito2 = Math.trunc((num % 100) / 10);
        let digito3 = num % 10;
        let suma = digito1 + digito2 + digito3;
        console.log("La suma de los 3 digitos es: " + suma);
    } else {
        console.log("El número ingresado no tiene 3 dígitos")
    }
}

console.log("");
sumaTresDigitos(12);
sumaTresDigitos(123);
sumaTresDigitos(456);
sumaTresDigitos(985);
sumaTresDigitos(9851);