/* Obtener la suma de todos los numeros naturales del 1 al 100 */

function sumaCiclo() {
    let acum = 0;
    for (let i = 1; i <= 100; i++) {
        acum += i;
    }
    console.log(`La suma de los numeros naturales del 1 al 100 es: ${acum}`);
}
sumaCiclo();