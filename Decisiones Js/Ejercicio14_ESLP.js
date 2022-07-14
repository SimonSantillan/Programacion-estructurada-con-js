/* Leer dos numeros enteros de dos dígitos y determinar a cuanto es igual la suma de todos los dígitos */

function sumaTodosSusDigitos(num1, num2) {
    if (num1 < 0) {
        num1 *= (-1);
    }
    if (num2 < 0) {
        num2 *= (-1);
    }
    if ((num1 > 9 && num1 < 100) && (num2 > 9 && num2 < 100)) {
        let digito11 = Math.trunc(num1/10);
        let digito12 = num1 % 10;
        let digito21 = Math.trunc(num2/10);
        let digito22 = num2 % 10;
        let suma = digito11 + digito12 + digito21 + digito22;
        console.log("La suma de los digitos de los numeros ingresados es: " + suma);
    } else {
        console.log("Alguno de los números ingresados no tiene 2 dígitos");
    }
}

console.log("");
sumaTodosSusDigitos(11,11);
sumaTodosSusDigitos(11,111);
sumaTodosSusDigitos(9,9);
sumaTodosSusDigitos(98,99);
sumaTodosSusDigitos(12,34);
sumaTodosSusDigitos(12,36);