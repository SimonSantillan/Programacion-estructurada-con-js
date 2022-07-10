/* Leer un numero entero de dos digitos y determinar si sus dos dígitos son primos */

function dosDigitosPrimos(num) {
    if (num < 0) {
        num *= (-1);
    }
    if (num > 9 && num < 100) {
        let digito1 = Math.trunc(num/10);
        let digito2 = num % 10;
        let esPrimo1, esPrimo2;
        switch (digito1) {
            case 2:
                esPrimo1 = true;
                break;
            case 3:
                esPrimo1 = true;
                break;
            case 5:
                esPrimo1 = true;
                break;
            case 7:
                esPrimo1 = true;
                break;
            default:
                esPrimo1 = false;            
        }
        switch (digito2) {
            case 2:
                esPrimo2 = true;
                break;
            case 3:
                esPrimo2 = true;
                break;
            case 5:
                esPrimo2 = true;
                break;
            case 7:
                esPrimo2 = true;
                break;
            default:
                esPrimo2 = false;   
        }
        if (esPrimo1 && esPrimo2) {
            console.log("Ambos digitos del numero ingresado son primos.");
        } else {
            console.log("Alguno de los digitos del numero ingresado no es primo.");
        }

    } else {
        console.log("El número ingresado no tiene dos dígitos");
    }
}

console.log("");
dosDigitosPrimos(9);
dosDigitosPrimos(23);
dosDigitosPrimos(57);
dosDigitosPrimos(75);
dosDigitosPrimos(99);
dosDigitosPrimos(88);
dosDigitosPrimos(7);
dosDigitosPrimos(75);
dosDigitosPrimos(74);
dosDigitosPrimos(73);
dosDigitosPrimos(76);
dosDigitosPrimos(67);
dosDigitosPrimos(65);
dosDigitosPrimos(100);
