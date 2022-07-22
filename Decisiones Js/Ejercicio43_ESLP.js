/* Leer dos numeros enteros y determinar si la diferencia entre los dos es un numero 
   divisor exacto de alguno de los dos numeros */

function diferenciaDivExacto() {
    let diferencia;
    if (arguments[0] > arguments [1]) {
        diferencia = arguments[0] - arguments[1];
        console.log(diferencia);
    } else {
        diferencia = arguments[1] - arguments[0];
        console.log(diferencia);
    }
    if (arguments[0] % diferencia === 0 || arguments[1] % diferencia === 0) {
        console.log("La diferencia de los dos numeros ingresados es divisor exacto de alguno de los dos numeros");
    } else {
        console.log("La diferencia de los dos numeros ingresados NO es un divisor exacto de alguno de los dos numeros");
    }
}
console.log("");
diferenciaDivExacto(56,50);
diferenciaDivExacto(32,50);
diferenciaDivExacto(32,30);
diferenciaDivExacto(58,29);
diferenciaDivExacto(48,24);
diferenciaDivExacto(27,77);
diferenciaDivExacto(-15,77);