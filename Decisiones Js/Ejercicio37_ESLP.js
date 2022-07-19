/* Leer dos numeros enteros y determinar cual es multiplo de cual */

function cualEsMultiplo(num1, num2) {
    if (num1 === num2) {
        console.log("Los numeros ingresados son iguales");
    } else if (num1 % num2 === 0) {
        console.log("El primer numero ingresado " + num1 + " es multiplo del segundo " + num2);
    } else if (num2 % num1 === 0) {
        console.log("El segundo numero ingresado " + num2 + " es multiplo del primero " + num1);
    } else {
        console.log("Ningún numero ingresado es multiplo del otro");
    }
}

console.log("");
cualEsMultiplo(23, 21);
cualEsMultiplo(7, 21);
cualEsMultiplo(21, 7);
cualEsMultiplo(32, 4);
cualEsMultiplo(4, 2);
cualEsMultiplo(2, 4);
cualEsMultiplo(2, 5);
cualEsMultiplo(5, 5);
cualEsMultiplo(4, 4);
