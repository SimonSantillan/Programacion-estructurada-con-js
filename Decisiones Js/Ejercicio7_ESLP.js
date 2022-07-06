/* Leer un numero entero de dos dígitos y determinar si es primo y además si es negativo */

function primoYnegativo(num) {
    console.log(num)
    let negativo = false;
    if (num < 0) {
        num *= (-1);
        negativo = true;
    }
    if (num > 9 && num < 100) {
        if (negativo) {
            switch (num) {
                case 11:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 13:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 17:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 19:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 23:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 29:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 31:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 37:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 41:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 43:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 47:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 53:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 59:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 61:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 67:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 71:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 73:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 79:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 83:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 89:
                    console.log("El número ingresado es primo y negativo");
                    break;
                case 97:
                    console.log("El número ingresado es primo y negativo");
                    break;
                default:
                    console.log("El número ingresado no es primo y negativo")
            }
        } else {
            console.log("El número ingresado tiene 2 dígitos pero es positivo")
        }
    } else {
        console.log("El número ingresado no tiene 2 dígitos")
    }
}
console.log("");
primoYnegativo(9);
primoYnegativo(10);
primoYnegativo(11);
primoYnegativo(12);
console.log("");
primoYnegativo(-9);
primoYnegativo(-10);
primoYnegativo(-11);
primoYnegativo(-12);
primoYnegativo(-13);
primoYnegativo(-17);
primoYnegativo(-18);
primoYnegativo(-19);
primoYnegativo(-20);
primoYnegativo(-21);
primoYnegativo(-22);
primoYnegativo(-23);
primoYnegativo(-24);
primoYnegativo(-29);
primoYnegativo(-30);
primoYnegativo(-31);
primoYnegativo(-32);
primoYnegativo(-37);
primoYnegativo(-41);
primoYnegativo(-42);
primoYnegativo(-43);
primoYnegativo(-47);
primoYnegativo(-48);
primoYnegativo(-49);
primoYnegativo(-50);