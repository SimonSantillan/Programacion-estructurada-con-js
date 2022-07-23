/* Leer un numero entero y si es menor que 100 determinar si es primo */

function esPrimo(num) {
    if (num < 100) {
        switch (num) {
            case 2: case 3: case 5: case 7: case 11: case 13: case 17: case 19: case 23: case 29: case 31: case 37: case 41: case 43: case 47: case 53: case 59: case 61: case 67: case 71: case 73: case 79: case 83: case 89: case 97:
                console.log("El numero ingresado es menor que 100 y primo");
                break;
            default:
                console.log("El numero ingresado es menor que 100 y no primo");
        }
    } else {
        console.log("El numero ingresado no es menor que 100");
    }
}

console.log("");
esPrimo(-50);
esPrimo(0);
esPrimo(1);
esPrimo(2);
esPrimo(56);
esPrimo(53);
esPrimo(99);
esPrimo(97);
esPrimo(100);
esPrimo(1001);