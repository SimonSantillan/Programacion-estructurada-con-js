/* Leer dos numeros enteros de dos digitos y determinar 
si la suma de los dos numeros origina un numero par */

function sumaDosNumerosPar(num1, num2) {
    if (num1 < 0) {
        num1 *= (-1);
    }
    if (num2 < 0) {
        num2 *= (-1);
    }
    if ((num1 > 9 && num1 < 100) && (num2 > 9 && num2 < 100) ) {
        let suma = num1 + num2;
        if (suma % 2 === 0) {
            console.log("La suma de los dos numeros ingresados origina un numero par");
        } else {
            console.log("La suma de los dos numeros ingresados NO origina un numero par");
        } 
    } else {
        console.log("Alguno de los numeros ingresados no tiene 2 digitos");
    }
}

sumaDosNumerosPar(9,10);
sumaDosNumerosPar(10,9);
sumaDosNumerosPar(9,9);
sumaDosNumerosPar(12,13);
sumaDosNumerosPar(12,12);
sumaDosNumerosPar(-21,23);
sumaDosNumerosPar(20,23);
sumaDosNumerosPar(20,20);