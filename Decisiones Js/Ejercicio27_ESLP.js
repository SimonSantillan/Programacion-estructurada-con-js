/* Leer un numero entero de 4 digitos y determinar cuantos digitos pares tiene */

function cuanDigitosPares(num) {
    let cociente = Math.trunc(num/10);
    if (cociente < 0) {
        cociente *= (-1);
    }
    if (cociente >= 100 && cociente <= 999) {
        let digito1, digito2, digito3, digito4;
        digito1 = Math.trunc(num/1000);
        digito2 = Math.trunc((num % 1000)/100);
        digito3 = Math.trunc((num % 100)/10);
        digito4 = num % 10;
        let espar = 0;
        if (digito1 % 2 === 0) {
            espar++;
        }
        if (digito2 % 2 === 0) {
            espar++;
        }
        if (digito3 % 2 === 0) {
            espar++;
        }
        if (digito4 % 2 === 0) {
            espar++;
        }
        console.log("El número ingresado tiene " + espar + " digitos pares.");
    } else {
        console.log("El numero ingresado no tiene 4 digitos");
    }
}

console.log("");
cuanDigitosPares(7899);
cuanDigitosPares(999);
cuanDigitosPares(9999);
cuanDigitosPares(1234);
cuanDigitosPares(4567);
cuanDigitosPares(7894);
cuanDigitosPares(5612);
cuanDigitosPares(3216);
cuanDigitosPares(3226);
cuanDigitosPares(4226);
cuanDigitosPares(10000);