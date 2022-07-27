/* Mostrar todos los numeros pares menores o iguales a 100 */

function ciclo() {
    for (let i = 0; i <= 100; i += 2) {
        console.log(i);
    }
}

function ciclo2() {
    for (let j = 0; j <= 100; j++) {
        if (j % 2 === 0) {
            console.log(j);
        }
    }
}
ciclo2();