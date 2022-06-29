/* Determinar la parte entera */

function parteEntera(num1, num2) {

    let resultado = Math.trunc(num1 / num2 );

    console.log(num1 / num2);
    console.log("La parte entera de " + num1 + "/" + num2 + " es " + resultado)
    console.log("")
}

console.log("");
parteEntera(9,3);
parteEntera(10,3);
parteEntera(9,2);
parteEntera(10,2);
console.log("");