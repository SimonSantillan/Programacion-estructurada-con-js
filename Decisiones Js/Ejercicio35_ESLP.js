/* Leer un numero entero de dos digitos, guardar cada digito en una variable diferente y luego
    mostrarlos en pantalla */

function mostrarEnPantalla(num) {
    let cociente = Math.trunc(num/10);
    if (cociente < 0) {
        cociente *= (-1);
    }
    if (cociente >= 1 && cociente <= 9) {
        let digito1, digito2;
        digito1 = Math.trunc(num/10);
        digito2 = num % 10;

        console.log(`${digito1} ${digito2}`)
    } else {    
        console.log("El numero ingresado no tiene dos digitos. ");
    }
}
console.log("");
mostrarEnPantalla(100);
mostrarEnPantalla(99);
mostrarEnPantalla(88);
mostrarEnPantalla(45);
mostrarEnPantalla(58);
mostrarEnPantalla(-58);
mostrarEnPantalla(-45);
mostrarEnPantalla(10);
mostrarEnPantalla(-10);
mostrarEnPantalla(9);