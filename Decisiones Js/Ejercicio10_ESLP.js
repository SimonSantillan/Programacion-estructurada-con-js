/* Leer un numero entero de dos digitos y determinar si los dos digitos son iguales */

function dosDigitosIguales(num) {
    if (num < 0) {
        num *= (-1);
    }
    if (num > 9 && num < 100) {
        let digito1 = Math.trunc(num/10);
        let digito2 = num % 10;
        if (digito1 === digito2) {
            console.log("Los digitos del numero ingresado son iguales");
        } else {
            console.log("Los digitos del numero ingresado NO son iguales");
        }
    } else {
        console.log("El número ingresado no tiene 2 digitos");
    }
}

console.log("");
dosDigitosIguales(11);
dosDigitosIguales(15);
dosDigitosIguales(22);
dosDigitosIguales(27);
dosDigitosIguales(33);
dosDigitosIguales(99);
dosDigitosIguales(100);