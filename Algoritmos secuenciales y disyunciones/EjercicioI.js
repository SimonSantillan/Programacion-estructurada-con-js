/* Ingresar un numero entero cualquiera y determinar si es múltiplo de 3 o no */

function esMultiploDe3(num) {

    if (num % 3 === 0) {
        console.log("El numero ingresado es múltiplo de 3");
    } else {
        console.log("El numero ingresado NO es múltiplo de 3");
    }

}

console.log("");
esMultiploDe3(1);
esMultiploDe3(2);
esMultiploDe3(3);
esMultiploDe3(4);
esMultiploDe3(5);
esMultiploDe3(6);
console.log("");