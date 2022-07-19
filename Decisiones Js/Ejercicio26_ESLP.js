/* Leer un numero entero de cuatro digitos y determinar a cuanto es igual la suma de sus digitos */

function sumaDigitos(num) {
    let cociente = Math.trunc(num/10);
    if (cociente < 0) {
        cociente *= (-1);
    }
    if (cociente > 100 && cociente < 999) {
        let digito1, digito2, digito3, digito4;
        digito1 = Math.trunc(num/1000);
        digito2 = Math.trunc((num % 1000)/100);
        digito3 = Math.trunc((num % 100)/10);
        digito4 = num % 10;

        console.log(`La suma de los digitos del numero ingresado es: ${digito1+digito2+digito3+digito4}`);

    } else {
        console.log("El numero ingresado no tiene 4 digitos");
    }
}

console.log("");
sumaDigitos(7899);
sumaDigitos(999);
sumaDigitos(9999);
sumaDigitos(1234);
sumaDigitos(4567);
sumaDigitos(7894);
sumaDigitos(5612);
sumaDigitos(3216);
sumaDigitos(10000);