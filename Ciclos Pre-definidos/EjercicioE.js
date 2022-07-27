/* Obtener la suma de todos los numeros naturales pares menores o iguales a 100 */

function ciclo() {
    let acum = 0;
    for ( let i = 0; i <= 100; i += 2) {
        acum += i;
    }
    console.log(`La suma de los numeros pares del 1 al 100 es: ${acum}`);
}

console.log("");
ciclo();