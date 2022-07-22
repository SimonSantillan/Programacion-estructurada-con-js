/* Leer dos numeros enteros y si la diferencia entre los dos es menor o igual a 10
   entonces mostrar en pantalla todos los enteros comprendidos entre el menor y el
   mayor de los números leídos */

function diferenciaMenorIgualA10(num1, num2) {
    if ((num1 - num2) <= 10) {
        if (num1 > num2) {
            console.log("Los numeros comprendidos entre " + num2 + " y " + num1 + " son:");
            for (let i = num2; i <= num1; i++) {
                console.log(i)
            }
        } else {
            if (num1 === num2) {
                console.log("Los numeros ingresados son iguales");
            } else {
                console.log("Los numeros comprendidos entre " + num1 + " y " + num2 + " son:")
                for (let i = num1; i <= num2; i++) {
                    console.log(i)
                }
            }
        }
    } else {
        console.log("Hubo algún error en la diferencia");
    }
}
console.log("");
diferenciaMenorIgualA10(89,89);
diferenciaMenorIgualA10(85,77);
diferenciaMenorIgualA10(77,85);
diferenciaMenorIgualA10(80,89);
diferenciaMenorIgualA10(-80,89);
diferenciaMenorIgualA10(80,89);