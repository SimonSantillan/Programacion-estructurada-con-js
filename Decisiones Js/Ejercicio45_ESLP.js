/* Leer un numero entero de dos digitos y si es par mostrar en pantalla la suma de sus digitos, si es primo y menor que 10 mostrar en pantalla su ultimo digito y si es multiplo de 5 y menor que 30 mostrar en pantalla el primer dígito */

function dosDigitos(num){ 
    let cociente = Math.trunc(num/10);
    if (cociente < 0) {
        cociente *=(-1);
    }
    if (cociente >= 1 && cociente <= 9) {
        let d1, d2;
        d1 = Math.trunc(num/10);
        d2 = num % 10;
        let esPrimo = false;

        if (num % 2 === 0) {
            console.log("La suma de sus digitos es: " + (d1 + d2))
        }
        if (num % 5 === 0 && num < 30) {
            console.log("El primer digito del numero ingresado es: " + d1);
        }
    } else {
        switch (num) {
            case 2:
                esPrimo = true;
                break;
            case 3:
                esPrimo = true;
                break;
            case 5:
                esPrimo = true;
                break;
            case 7:
                esPrimo = true;
                break;
            default:
                esPrimo = false;
        }
        if (esPrimo && num < 10) {
            console.log("El ultimo digito del numero ingresado es: " + num);
        } else {
            console.log("El numero ingresado no tiene 2 digitos");
        }
    }
}
console.log("");
dosDigitos(-27);
dosDigitos(7);
dosDigitos(27);
dosDigitos(22);
dosDigitos(25);
dosDigitos(89);
dosDigitos(-56);
dosDigitos(64);
dosDigitos(9);
dosDigitos(10);
dosDigitos(99);
dosDigitos(100);