/* Leer un numero entero y si es multiplo de 4 determinar si su ultimo digito es primo */

function ultimoDigitoPrimo(num) {
    if (num % 4 === 0) {
        let uDigito = num % 10;
        switch (uDigito) {
            case 2: case 3: case 5: case 7:
                console.log("Es multiplo de 4 y su ultimo digito es primo");
                break;
            default:
                console.log("Es multiplo de 4 y su ultimo digito no es primo");
        }
    } else {
        console.log("El numero ingresado no es multiplo de 4");
    }
}

console.log("");
ultimoDigitoPrimo(12);
ultimoDigitoPrimo(13);
ultimoDigitoPrimo(15);
ultimoDigitoPrimo(32);
ultimoDigitoPrimo(36);