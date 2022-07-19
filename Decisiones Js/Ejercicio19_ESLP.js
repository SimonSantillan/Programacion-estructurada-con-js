
let num1 = parseInt(prompt(`
    Determinar cual es el mayor de 3 numeros ingresados.
    Escriba el primer número:
`));
let num2 = parseInt(prompt(" Escriba el segundo número: "));
if (num1 > num2) {
    num2 = parseInt(prompt(" Escriba el tercer número: "));
} else {
    num1 = parseInt(prompt(" Escriba el tercer número: "));
}
if ( num1 > num2) {
    alert("El mayor de los números ingresados es: " + num1)       
} else {
    alert("El mayor de los números ingresados es: " + num2) 
}