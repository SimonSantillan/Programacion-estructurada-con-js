/* Leer un numero entero de 4 digitos y determinar si tiene mas digitos pares o impares */

function digitosParesImpares(num) {
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
        let par = 0;
        let impar = 0;
        if (digito1 % 2 === 0) {
            par++;
        } else {
            impar++;
        }
        if (digito2 % 2 === 0) {
            par++;
        } else {
            impar++;
        }
        if (digito3 % 2 === 0) {
            par++;
        } else {
            impar++;
        }
        if (digito4 % 2 === 0) {
            par++;
        } else {
            impar++;
        }

        if (par === 0) {
            console.log("Todos los digitos del numero ingresado son impares");
        } else if (impar === 0) {
            console.log("Todos los digitos del numero ingresado son pares");
        } else if (par === impar) {
            console.log("El numero ingresado tiene igual cantidad de digitos pares e impares");
        } else if (par > impar ) {
            console.log("El numero ingresado tiene mas digitos pares que impares");
        } else {
            console.log("El numero ingresado tiene mas digitos impares que pares");
        }

    } else {
        console.log("El numero ingresado no tiene 4 digitos");
    }
}
console.log("");
digitosParesImpares(7899);
digitosParesImpares(999);
digitosParesImpares(9999);
digitosParesImpares(9339);
digitosParesImpares(7559);
digitosParesImpares(7558);
digitosParesImpares(1234);
digitosParesImpares(4567);
digitosParesImpares(7894);
digitosParesImpares(5612);
digitosParesImpares(3216);
digitosParesImpares(2216);
digitosParesImpares(2286);
digitosParesImpares(10000);