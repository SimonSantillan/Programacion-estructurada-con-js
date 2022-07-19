/* Leer un numero entero de 5 digitos y determinar si es un numero capicuo
    ej: 15651
        59895 */

function esCapicuo(num) {
    let cociente = Math.trunc(num/10);
    if (cociente < 0) {
        cociente *= (-1);
    }
    if (cociente >= 1000 && cociente <= 9999) {
        let digito1, digito2, digito3, digito4, digito5;

        digito1 = Math.trunc(num/10000);
        digito2 = Math.trunc((num % 10000)/1000);
        digito3 = Math.trunc((num % 1000)/100);
        digito4 = Math.trunc((num % 100)/10);
        digito5 = num % 10;


        if ( digito1 === digito5 && digito2 === digito4) {
            console.log("El numero ingresado es capicuo");
        } else {
            console.log("El numero ingresado NO es capicuo");
        }


    } else {
        console.log("El numero ingresado no tiene 5 digitos");
    }
}

console.log("");
esCapicuo(9999);
esCapicuo(10000);
esCapicuo(10001);
esCapicuo(10801);
esCapicuo(16061);
esCapicuo(15061);
esCapicuo(12345);
esCapicuo(99999);
esCapicuo(100000);