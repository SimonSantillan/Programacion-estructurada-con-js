/* Leer un numero entero de 4 digitos y determinar si el segundo digito es igual al penultimo */

function igualAlPenultimo(num) {
    let cociente = Math.trunc(num/10);
    if (cociente < 0) {
        cociente *= (-1);
    }
    if (cociente >= 100 && cociente <= 999) {
        let digito1, digito2, digito3, digito4;
        digito1 = Math.trunc(num/1000);
        digito2 = Math.trunc((num % 1000)/100);
        digito3 = Math.trunc((num % 100)/10);
        digito4 = num % 10;

        if (digito2 === digito3) {
            console.log("El segundo digito del numero ingresado es igual a su penultimo");
        } else {
            console.log("El segundo digito del numero ingresado NO es igual a su penultimo");
        }


    } else {
        console.log("El numero ingresado no tiene 4 digitos");
    }
}
console.log("");
igualAlPenultimo(7899);
igualAlPenultimo(999);
igualAlPenultimo(9999);
igualAlPenultimo(9339);
igualAlPenultimo(7559);
igualAlPenultimo(1234);
igualAlPenultimo(4567);
igualAlPenultimo(7894);
igualAlPenultimo(5612);
igualAlPenultimo(3216);
igualAlPenultimo(10000);