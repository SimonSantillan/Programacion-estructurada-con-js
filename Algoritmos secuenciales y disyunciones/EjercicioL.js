/* Ingresar un número mayor a 10 y menor a 30 */

function mayor10Ymenor30(num) {

    if (num > 10 && num < 30 ) {
        console.log("El numero ingresado es mayor a 10 y menor a 30");
    } else {
        console.log("El numero ingresado NO es mayor a 10 NI menor a 30");
    }

}

console.log("");
mayor10Ymenor30(8);
mayor10Ymenor30(9);
mayor10Ymenor30(10);
mayor10Ymenor30(11);
mayor10Ymenor30(29);
mayor10Ymenor30(30);
mayor10Ymenor30(31);
mayor10Ymenor30(32);
console.log("");