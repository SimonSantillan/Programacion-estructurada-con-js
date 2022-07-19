/* Leer un numero entero de tres dígitos y determinar si el primer dígito es igual al último */

function esIgualAlUltimo(num) {
    let cociente = Math.trunc(num/10);
    if (cociente < 0) {
        cociente *= (-1);
    }
    if (cociente >= 10 && cociente <= 99) {
        let digito1, digito3;
        digito1 = Math.trunc(num/100);
        digito3 = num % 10;

        if (digito1 === digito3) {
            console.log("El primer digito es igual al último");
        } else {
            console.log("El primer digito NO es igual al último");
        }
    } else {
        console.log("El número ingresado no tiene 3 cifras")
    }
}

console.log("");
esIgualAlUltimo(89);
esIgualAlUltimo(77);
esIgualAlUltimo(11);
esIgualAlUltimo(111);
esIgualAlUltimo(119);
esIgualAlUltimo(118);
esIgualAlUltimo(788);
esIgualAlUltimo(456);
esIgualAlUltimo(454);
esIgualAlUltimo(999);
esIgualAlUltimo(1000);