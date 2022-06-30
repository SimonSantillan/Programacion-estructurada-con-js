/* Ingresar un número de 3 cifras y que el programa las separe */

function separar3Cifras(num) {
    if (num < 0 ) {
        num = (-1) * num;
    }
    if (num > 99 && num < 1000) {
        let c1 = Math.trunc(num / 100);
        let c2 = Math.trunc((num % 100) / 10);
        let c3 = num % 10;
        console.log(c1 + " " + c2 + " " + c3)
    } else {
        console.log("El numero ingresado no tiene 3 cifras")
    }
}

separar3Cifras(456);
separar3Cifras(788);
separar3Cifras(123);
separar3Cifras(132);
separar3Cifras(232);
separar3Cifras(232);
separar3Cifras(23);
separar3Cifras(2389);