/* Leer un numero entero de tres digitos y  determinar si al menos dos de sus tres digitos son iguales */

function dosDigitosIguales(num) {
    if (num < 0) {
        num *= (-1);
    }
    if (num > 99 && num < 1000) {
        let digito1 = Math.trunc(num/100);
        let digito2 = Math.trunc((num % 100) / 10);
        let digito3 = num % 10;
        if (digito1 === digito2 && digito2 === digito3) {
            console.log("Todos los digitos del numero ingresado son iguales");
        } else if (digito1 === digito2 || digito1 === digito3 || digito2 === digito3) {
            console.log("Al menos 2 de sus 3 dígitos son iguales.");
        } else {
            console.log("Ninguno de los 3 digitos del numero ingresado son iguales.");
        }
    } else {
        console.log("El número ingresado no tiene 3 dígitos")
    }
}

console.log("");
dosDigitosIguales(123); 
dosDigitosIguales(223); 
dosDigitosIguales(233); 
dosDigitosIguales(333); 
dosDigitosIguales(343); 
dosDigitosIguales(345); 
dosDigitosIguales(151); 