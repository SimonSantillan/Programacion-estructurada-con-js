let a = parseInt(prompt("Ingrese un valor entero para la variable a"));

let b = parseInt(prompt("Ingrese un valor entero para la variable b"));

let c = parseInt(prompt("Ingrese un valor entero para la variable c"));

console.log("");
console.log("El contenido de la variable a es " + a);
console.log("El contenido de la variable b es " + b);
console.log("El contenido de la variable c es " + c);

let aux = c;
let aux2 = b;
b = a;
c = aux2;
a = aux;

console.log("");
console.log("El contenido de la variable a es " + a);
console.log("El contenido de la variable b es " + b);
console.log("El contenido de la variable c es " + c);
console.log("");