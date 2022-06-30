let a = parseInt(prompt("Ingrese un valor entero para la variable a"));

let b = parseInt(prompt("Ingrese un valor entero para la variable b"));

console.log("");
console.log("El contenido de la variable a es " + a);
console.log("El contenido de la variable b es " + b);

let aux = a;
a = b;
b = aux;

console.log("");
console.log("El contenido de la variable a es " + a);
console.log("El contenido de la variable b es " + b);
console.log("");