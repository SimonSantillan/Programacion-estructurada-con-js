/* Para que tres valores se correspondan con los lados de un triangulo, se debe cumplir que la suma
de dos valores sea mayor al restante, ingresar 3 valores enteros que representan los
valores de cada lado de un triangulo y verificar si corresponden a un triangulo o no. */


function esTriangulo(l1, l2, l3) {

    if (l1 + l2 > l3) {
        console.log("Los valores ingresados se corresponden a un triangulo");
    } else {
        console.log("Los valores ingresados NO se corresponden a un triangulo");
    }

}

console.log("");
esTriangulo(2,4,5);
esTriangulo(5,4,2);
esTriangulo(5,4,10);
console.log("");