/* Leer 2 valores y mostrar el mayor de ellos, si son iguales mostrar cualquiera de los dos */

function cualEsMayor(num1, num2) {

    if (num1 === num2) {
        console.log("Los numeros ingresados son iguales, " + num1);
    } else if (num1 > num2) {
        console.log("El mayor de los numeros ingresados es " + num1);
    } else {
        console.log("El mayor de los numeros ingresados es " + num2);
    }

}

console.log("");
cualEsMayor(5,6);
cualEsMayor(7,6);
cualEsMayor(7,7);
console.log("");