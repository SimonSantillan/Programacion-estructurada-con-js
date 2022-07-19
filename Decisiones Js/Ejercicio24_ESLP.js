/* Leer un numero de tres digitos y determinar cuantos digitos pares tiene */
function cuanDigitoPar(num) {
    let cociente = Math.trunc(num/10);
    if (cociente < 0) {
        cociente *= (-1);
    }
    if (cociente > 10 && cociente < 99) {
        let digito1, digito2, digito3;
        digito1 = Math.trunc(num/100);
        digito2 = Math.trunc((num % 100) / 10);
        digito3 = num % 10;
        let digitoPar = 0;

        if (digito1 % 2 === 0) {
            digitoPar++;
        }
        if (digito2 % 2 === 0) {
            digitoPar++;
        }
        if (digito3 % 2 === 0) {
            digitoPar++;
        }
        if (digitoPar === 0) {
            console.log("El numero ingresado no tiene digitos pares. ");
        } else {
            console.log("El numero ingresado tiene " + digitoPar + " digitos pares.")
        }
    } else {
        console.log("El numero ingresado no tiene 3 digitos");
    }
}
console.log("");
cuanDigitoPar(0);
cuanDigitoPar(99);
cuanDigitoPar(77);
cuanDigitoPar(11);
cuanDigitoPar(111);
cuanDigitoPar(119);
cuanDigitoPar(118);
cuanDigitoPar(788);
cuanDigitoPar(456);
cuanDigitoPar(357);
cuanDigitoPar(247);
cuanDigitoPar(454);
cuanDigitoPar(444);
cuanDigitoPar(999);
cuanDigitoPar(1000);