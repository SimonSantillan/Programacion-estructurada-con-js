/* Leer un numero entero de tres digitos y determinar si alguno de sus dígitos es igual a la suma de los otros dos */

function sumaDigitosIgual(num) {
    let cociente = Math.trunc(num/10);
    if (cociente < 0) {
        cociente *= (-1);
    }
    if (cociente >= 10 && cociente <= 99) {
        let digito1, digito2, digito3;
        digito1 = Math.trunc(num/100);
        digito2 = Math.trunc((num % 100) / 10);
        digito3 = num % 10;
        
        if (digito1 + digito2 === digito3 || digito1 + digito3 === digito2 || digito2 + digito3 === digito1 ) {
            console.log("Alguno de los digitos del numero ingresado es igual a la suma de los otros dos");
        } else {
            console.log("Ningun digito del numero ingresado es igual a la suma de los otros dos");
        }

    } else {
        console.log("El numero ingresado no tiene 3 digitos");
    }
}
console.log("");
sumaDigitosIgual(0);
sumaDigitosIgual(99);
sumaDigitosIgual(77);
sumaDigitosIgual(11);
sumaDigitosIgual(111);
sumaDigitosIgual(119);
sumaDigitosIgual(118);
sumaDigitosIgual(788);
sumaDigitosIgual(448);
sumaDigitosIgual(484);
sumaDigitosIgual(844);
sumaDigitosIgual(454);
sumaDigitosIgual(444);
sumaDigitosIgual(999);
sumaDigitosIgual(1000);