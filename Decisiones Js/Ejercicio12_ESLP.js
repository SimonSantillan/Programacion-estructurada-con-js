/* Leer dos numeros enteros de dos digitos y determinar si tienen digitos comunes */

function dosDigitosComunes(num1, num2) {
    if (num1 < 0) {
        num1 *= (-1);
    }
    if (num2 < 0) {
        num2 *= (-1);
    }
    if ((num1 > 9 && num1 < 100) && (num2 > 9 && num2 < 100) ) {
        let digito11 = Math.trunc(num1/10);
        let digito21 = num1 % 10;
        let digito12 = Math.trunc(num2/10);
        let digito22 = num2 % 10;
        if (digito11===digito12 || digito11===digito22 || digito21===digito12 || digito21===digito22) {
            console.log("Los dos numeros enteros ingresados tienen digitos comunes");
        } else {
            console.log("Los dos numeros enteros ingresados NO tienen digitos comunes");
        }
    } else {
        console.log("El número ingresado no tiene 2 digitos");
    }
}

console.log("");
dosDigitosComunes(23,32);
dosDigitosComunes(23,14);
dosDigitosComunes(21,17);
dosDigitosComunes(22,44);
dosDigitosComunes(22,22);
dosDigitosComunes(22,78);
dosDigitosComunes(28,78);