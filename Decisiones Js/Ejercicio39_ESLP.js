/* Leer tres numeros enteros y determinar si el penultimo  digito de los tres numeros es igual*/

function penultimoIgual(num1, num2, num3) {
    let pDigito1, pDigito2, pDigito3;
    pDigito1 = Math.trunc((num1 % 100)/10);
    pDigito2 = Math.trunc((num2 % 100)/10);
    pDigito3 = Math.trunc((num3 % 100)/10);

    if (pDigito1 === pDigito2 && pDigito2 === pDigito3) {
        console.log("Los penúltimos digitos de los tres numeros ingresados son iguales.");
    } else {
        console.log("Los penúltimos digitos de los tres numeros ingresados NO son iguales.");
    }
}

console.log("");
penultimoIgual(2311,122,37353);
penultimoIgual(1235,1266,12899);
penultimoIgual(21,25,27);
penultimoIgual(23,25,24);