/* Leer tres numeros enteros y mostrarlos ascendentemente */

function ascendente(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
        console.log("Los numeros ingresados son iguales");
    } else {
        if (num1 >= num2 && num1 >= num3) {
            if (num2 > num3) {
                console.log(`${num3} ${num2} ${num1}`);
            } else {
                console.log(`${num2} ${num3} ${num1}`);
            }
        }
        if (num2 >= num1 && num2 >= num3) {
            if (num1 > num3) {
                console.log(`${num3} ${num1} ${num2}`);
            } else {
                console.log(`${num1} ${num3} ${num2}`);
            }
        }
        if (num3 >= num1 && num3 >= num2) {
            if (num2 > num1) {
                console.log(`${num1} ${num2} ${num3}`);
            } else {
                console.log(`${num2} ${num1} ${num3}`);
            }
        }
    }
}

ascendente(1,2,3);
ascendente(1,3,2);
ascendente(2,3,1);
ascendente(2,1,3);
ascendente(3,1,2);
ascendente(3,2,1);
ascendente(1,3,3);
ascendente(3,1,3);
ascendente(3,3,1);
ascendente(3,3,3);
ascendente(1,1,3);
ascendente(1,3,1);
ascendente(3,1,1);