/* Leer un numero entero de 3 digitos y determinar cuantos digitos primos tiene */

function tresDigitosPrimos(num) {
    let cociente = Math.trunc(num/10);
    if (cociente < 0) {
        cociente *= (-1);
    }
    if (cociente > 10 && cociente < 99) {
        let digito1, digito2, digito3;
        digito1 = Math.trunc(num/100);
        digito2 = Math.trunc((num % 100) / 10);
        digito3 = num % 10;
        let esPrimo = 0;
        switch (digito1) {
            case 2:
                esPrimo++;
                break;
            case 3:
                esPrimo++;
                break;
            case 5:
                esPrimo++;
                break;
            case 7:
                esPrimo++;
                break;
            default:
                esPrimo += 0;
        }
        switch (digito2) {
            case 2:
                esPrimo++;
                break;
            case 3:
                esPrimo++;
                break;
            case 5:
                esPrimo++;
                break;
            case 7:
                esPrimo++;
                break;
            default:
                esPrimo += 0;
        }
        switch (digito3) {
            case 2:
                esPrimo++;
                break;
            case 3:
                esPrimo++;
                break;
            case 5:
                esPrimo++;
                break;
            case 7:
                esPrimo++;
                break;
            default:
                esPrimo += 0;
        }
        switch (esPrimo) {
            case 1:
                console.log("El numero ingresado tiene un digito primo");
                break;
            case 2:
                console.log("El numero ingresado tiene dos digitos primos");
                break;
            case 3:
                console.log("Todos los digitos del numero ingresado son primos");
                break;
            default:
                console.log("El numero ingresado no tiene digitos primos");
        }
    } else {
        console.log("El número ingresado no tiene 3 digitos");
    }
}
console.log("");
tresDigitosPrimos(89);
tresDigitosPrimos(77);
tresDigitosPrimos(11);
tresDigitosPrimos(111);
tresDigitosPrimos(119);
tresDigitosPrimos(118);
tresDigitosPrimos(788);
tresDigitosPrimos(456);
tresDigitosPrimos(357);
tresDigitosPrimos(247);
tresDigitosPrimos(454);
tresDigitosPrimos(999);
tresDigitosPrimos(1000);