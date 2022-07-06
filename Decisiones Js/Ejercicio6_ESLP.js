/* Leer un número entero de dos dígitos menor que 20 y determinar si es primo */

function menorA20yPrimo(num) {
    if (num < 0) {
        num *= (-1);
    }
    if (num > 9 && num < 20) {
        switch(num) {
            case 11:
                console.log("El número ingresado es menor que 20 y es primo");
                break;
            case 13:
                console.log("El número ingresado es menor que 20 y es primo");
                break;
            case 17:
                console.log("El número ingresado es menor que 20 y es primo");
                break;
            case 19:
                console.log("El número ingresado es menor que 20 y es primo");
                break;
            default:
                console.log("El número ingresado es menor que 20 y NO es primo");
        }
    } else {
        console.log("El numero ingresado no es menor que 20 o no tiene 2 dígitos");
    }
}
console.log("");
menorA20yPrimo(0);
menorA20yPrimo(1);
menorA20yPrimo(2);
menorA20yPrimo(3);
menorA20yPrimo(4);
menorA20yPrimo(5);
menorA20yPrimo(6);
menorA20yPrimo(7);
menorA20yPrimo(8);
menorA20yPrimo(9);
menorA20yPrimo(10);
menorA20yPrimo(11);
menorA20yPrimo(12);
menorA20yPrimo(13);
menorA20yPrimo(14);
menorA20yPrimo(15);
menorA20yPrimo(16);
menorA20yPrimo(17);
menorA20yPrimo(18);
menorA20yPrimo(19);
menorA20yPrimo(20);
menorA20yPrimo(21);
console.log("");