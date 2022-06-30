/* Ingresar 3 valores enteros que representen los valores de cada lado de un triángulo
Determinar e informar si el triangulo es equilatero, isosceles o escaleno */

function tipoTriangulo(l1, l2, l3) {

    if (l1 === l2 && l2 === l3) {
        console.log("Segun los lados ingresados el triangulo es Equilatero");
    } else if (l1 !== l2 && l1 !== l3 && l2 !== l3) {
        console.log("Según los lados ingresados el triangulo es Escaleno");
    } else {
        console.log("Segun los lados ingresados el triangulo es Isosceles")
    }

}

console.log("");
tipoTriangulo(7, 7, 7);
tipoTriangulo(7, 7, 5);
tipoTriangulo(4, 7, 5);
tipoTriangulo(4, 7, 7);
tipoTriangulo(4, 7, 9);
console.log("");