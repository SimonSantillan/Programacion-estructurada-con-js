/* Leer un numero entero y determinar si es múltiplo de 7 */

function esMultiploDe7(num) {
    if (num % 7 === 0) {
        console.log("El numero ingresado es multiplo de 7. ");
    } else {
        console.log("El numero ingresado NO es multiplo de 7. ");
    }
}


console.log("");
esMultiploDe7(5);
esMultiploDe7(-7);
esMultiploDe7(24);
esMultiploDe7(28);
esMultiploDe7(-28);
esMultiploDe7(-21);
esMultiploDe7(49);
esMultiploDe7(48);