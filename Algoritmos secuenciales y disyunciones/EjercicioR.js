function creciente (n1, n2, n3) {

    if (n1 > n2 && n1 > n3) {
        if (n2 > n3) {
            console.log( n1 + "" + n2 + "" + n3)
        } else {
            console.log( n1 + "" + n3 + "" + n2)
        }
    } else if (n2 > n1 && n2 > n3) {
        if (n1 > n3) {
            console.log(n2 + "" + n1 + "" + n3)
        } else {
            console.log(n2 + "" + n3 + "" + n1)
        }
    } else if (n3 > n1 && n3 > n2) {
        if (n1 > n2) {
            console.log(n3 + "" + n1 + "" + n2);
        } else {
            console.log(n3 + "" + n2 + "" + n1);
        }
    } else {
        console.log("Los numeros ingresados son iguales");
    }

}

console.log("");
creciente(1,2,3);
creciente(1,2,2);
creciente(1,3,2);
creciente(3,2,1);
creciente(3,3,1);
creciente(3,1,2);
creciente(2,1,3);
creciente(2,3,1);
creciente(3,3,3);
console.log("");