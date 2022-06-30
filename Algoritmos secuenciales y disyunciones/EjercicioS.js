
function tiene3crifras(num) {
    if (num < 0) {
        num = (-1) * num;
    }
    if (num > 99 && num < 1000 ) {
        console.log("El numero ingresado tiene 3 cifras");
    } else {
        console.log("El numero ingresado NO tiene 3 cifras");
    }
}

console.log("");
tiene3crifras(-1);
tiene3crifras(-10);
tiene3crifras(-99);
tiene3crifras(-100);
tiene3crifras(-999);
tiene3crifras(-1000);
tiene3crifras(-1001);
console.log("");
