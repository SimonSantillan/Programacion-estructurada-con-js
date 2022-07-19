/* Leer un numero entero menor que mil y determinar cuantos digitos tiene */

function menorAmil(num) {
    if (num > -1000 && num < 1000) {
        let cociente = Math.trunc(num/10);
        if (cociente < 0) {
            cociente *= -1
        }
        if (cociente >= 100 && cociente <= 999) {
            console.log("El numero ingresado tiene 4 digitos");
        } else if (cociente >= 10 && cociente <= 99) {
            console.log("El numero ingresado tiene 3 digitos");
        } else if (cociente >= 1 && cociente <= 9) {
            console.log("El número ingresado tiene 2 digitos");
        } else {
            console.log("El numero ingresado tiene 1 digito");
        }
    } else {
        console.log("El numero ingresado no es mayor que -1000 o menor que 1000.");
    }
}

console.log("");
menorAmil(45612);
menorAmil(9999);
menorAmil(1000);
menorAmil(999);
menorAmil(100);
menorAmil(99);
menorAmil(10);
menorAmil(9);
menorAmil(1);
menorAmil(0);
menorAmil(-1);
menorAmil(-9);
menorAmil(-10);
menorAmil(-99);
menorAmil(-100);
menorAmil(-999);
menorAmil(-1000);
menorAmil(-9999);
menorAmil(-45612);