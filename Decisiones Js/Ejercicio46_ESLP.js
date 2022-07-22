/* Leer un numero entero de 2 digitos y si termina en 1 mostrar en pantalla su primer digito, si termina en 2 mostrar en pantalla la suma de sus digitos y si termina en 3 mostrar en pantalla el producto de sus dos digitos */

function dosDigitos(num){ 
    let cociente = Math.trunc(num/10);
    if (cociente < 0) {
        cociente *=(-1);
    }
    if (cociente >= 1 && cociente <= 9) {
        let d1, d2;
        d1 = Math.trunc(num/10);
        d2 = num % 10;
        
        if (num % 10 === 1) {
            console.log("El primer digito del numero ingresado es: " + d1)
        } else if (num % 10 === 2) {
            console.log("La suma de los digitos del numero ingresado es: " + (d1 + d2));
        } else if (num % 10 === 3) {
            console.log("El producto de los digitos del numero ingresado es: " + (d1*d2));
        } else {
            console.log("El numero ingresado no termina con 1 o 2 o 3.")
        }
    } else {
        console.log("El numero ingresado no tiene 2 digitos");
    }
}

console.log("");
dosDigitos(11);
dosDigitos(9);
dosDigitos(10);
dosDigitos(14);
dosDigitos(50);
dosDigitos(51);
dosDigitos(52);
dosDigitos(53);
dosDigitos(54);
dosDigitos(23);
dosDigitos(-22);
dosDigitos(-53);
dosDigitos(-99);
dosDigitos(-93);