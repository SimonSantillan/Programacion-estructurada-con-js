/* Leer dos numeros enteros de dos digitos cada uno y si la diferencia entre los dos numeros es par mostrar en pantalla la suma de los digitos de los numeros, si dicha diferencia es un numero primo menor que 10 entonces mostrar en pantalla el producto de los dos numeros y si la diferencia entre ellos termina en 4 mostrar en pantalla todos los digitos por separado */

function dosDigitos(num1, num2) {
    let cociente, cociente1;
    cociente = Math.trunc(num1/10);
    cociente1 = Math.trunc(num2/10);
    if (cociente < 0) {
        cociente *= (-1);
    }
    if (cociente1 < 0) {
        cociente1 *= (-1);
    }
    if ((cociente >= 1 && cociente <= 9) && (cociente1 >= 1 && cociente1 <= 9)) {
        let digito11, digito12, digito21, digito22, diferencia;
        digito11 = Math.trunc(num1/10);
        digito12 = num1 % 10;
        digito21 = Math.trunc(num2/10);
        digito22 = num2 % 10;
        if (num1 > num2) {
            diferencia = num1 - num2;
        } else {
            diferencia = num2 - num1;
        }
        if ((diferencia) % 2 === 0) {
            console.log("La suma de los digitos de los numeros ingresados es: " + (digito11 + digito12 + digito21 + digito22));
        }  
        if (diferencia % 10 === 4) {
            console.log(`Los digitos por separado ${digito11} ${digito12} ${digito21} ${digito22}`);
        }
        switch (diferencia) {
            case 2: case 3: case 5: case 7:
                console.log("El producto de los dos numeros es: " + (num1 * num2));
                break;
        }
        

    } else {
        console.log("Alguno de los numeros ingresados no tiene 2 digitos");
    }
}
console.log("");
dosDigitos(44,42);
dosDigitos(44,40);
dosDigitos(40,44);
dosDigitos(40,43);