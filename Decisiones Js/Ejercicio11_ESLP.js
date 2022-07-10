/* Leer dos numeros enteros y determinar cual es el mayor */

function cualEsElMayor(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " es mayor que " + num2);
    } else {
        console.log(num2 + " es mayor que " + num1);
    }
}
console.log("");
cualEsElMayor(56,23);
cualEsElMayor(23,56);
cualEsElMayor(23,22);
cualEsElMayor(23,24);
cualEsElMayor(23,150);
cualEsElMayor(456,150);