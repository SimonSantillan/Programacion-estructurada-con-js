/* Leer tres numeros enteros y determinar si el último dígito de los tres números es igual */

function terminanIgual(num1, num2, num3) {
    let uDigito1, uDigito2, uDigito3;
    uDigito1 = num1 % 10;
    uDigito2 = num2 % 10;
    uDigito3 = num3 % 10;

    if (uDigito1 === uDigito2 && uDigito2 === uDigito3) {
        console.log("Los ultimos digitos de los tres numeros ingresados son iguales.");
    } else {
        console.log("Los ultimos digitos de los tres numeros ingresados NO son iguales.");
    }
}

console.log("");
terminanIgual(11,12,13);
terminanIgual(12,12,12);
terminanIgual(21,25,27);
terminanIgual(23,25,24);