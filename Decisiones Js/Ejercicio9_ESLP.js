/* Leer un numero entero de dos digitos y determinar si un dígito es múltiplo del otro */

function digitoMultiploDelOtro(num) {
    if (num < 0) {
        num *= (-1);
    }
    if (num > 9 && num < 100) {
        let digito1 = Math.trunc(num/10);
        let digito2 = num % 10;
        if (digito1 % digito2 === 0 || digito2 % digito1 === 0) {
            console.log("Alguno de los digitos es multiplo del otro");
        } else {
            console.log("Ningun digito es multiplo del otro");
        }
    } else {
        console.log("El número ingresado no tiene 2 digitos");
    }
}

console.log("");
digitoMultiploDelOtro(9);
digitoMultiploDelOtro(10);
digitoMultiploDelOtro(11);
digitoMultiploDelOtro(12);
digitoMultiploDelOtro(57);
digitoMultiploDelOtro(75);
digitoMultiploDelOtro(44);
digitoMultiploDelOtro(42);
digitoMultiploDelOtro(93);
digitoMultiploDelOtro(39);
digitoMultiploDelOtro(23);
digitoMultiploDelOtro(32);
digitoMultiploDelOtro(27);
digitoMultiploDelOtro(99);
digitoMultiploDelOtro(100);