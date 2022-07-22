/* Leer un numero entero de 4 digitos y determinar si el primer digito es múltiplo de alguno de los otros dígitos */

function primerDigitoMultiplo(num) {
    let cociente = Math.trunc(num / 10);
    if (cociente < 0) {
        cociente *=(-1);
    } 
    if (cociente >= 100 && cociente <= 999) {
        let d1, d2, d3, d4;
        d1 = Math.trunc(num/1000);
        d2 = Math.trunc((num % 1000) / 100);
        d3 = Math.trunc((num % 100) / 10);
        d4 = num % 10;

        if (d1 % d2 === 0 || d1 % d3 === 0 || d1 % d4 === 0) {
            console.log("El primer digito es multiplo de alguno de los otros digitos");
        } else {
            console.log("El primer digito NO es multiplo de alguno de los otros digitos")
        }
    } else {
        console.log("El numero ingresado no tiene 4 digitos");
    }
}

primerDigitoMultiplo(4561);
primerDigitoMultiplo(1234);
primerDigitoMultiplo(5678);
primerDigitoMultiplo(5178);
primerDigitoMultiplo(-5678);
primerDigitoMultiplo(-9378);
primerDigitoMultiplo(-9687);
primerDigitoMultiplo(100);
primerDigitoMultiplo(1000);
primerDigitoMultiplo(10000);