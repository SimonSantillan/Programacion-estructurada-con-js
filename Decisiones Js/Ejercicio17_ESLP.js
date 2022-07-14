/* Leer un numero entero de tres dígitos y determinar en que posición está el mayor dígito */

function dondeEstaElMayorDigito(num) {
    if (num < 0) {
        num *= (-1);
    }
    if (num > 99 && num < 1000) {
        let digito1 = Math.trunc(num/100);
        let digito2 = Math.trunc((num % 100) / 10);
        let digito3 = num % 10;
        if (digito1 > digito2) {
            if (digito1 > digito3) {
                console.log("El mayor digito está en la posición de las centenas");
            } else {
                if (digito1 === digito3) {
                    console.log("Los digitos de las centenas y unidades son los mayores");
                } else {
                    console.log("El mayor digito está en la posición de las unidades");
                }
            }
        } else {
            if (digito1 === digito2) {
                if (digito1 > digito3) {
                    console.log("Los digitos de las centenas y decenas son los mayores");
                } else {
                    if (digito1 === digito3) {
                        console.log("Los digitos del numero ingresado son iguales");
                    } else {
                        console.log("El mayor dígito está en la posición de las unidades");
                    }
                }
            } else {
                if (digito2 === digito3) {
                    console.log("Los digitos de las decenas y unidades son los mayores");
                } else {
                    if (digito2 > digito3){ 
                        console.log("El mayor dígito está en la posición de las decenas");
                    } else {
                        console.log("El mayor dígito está en la posición de las unidades");
                    }
                }
            }
        }
    } else {
        console.log("El número ingresado no tiene 3 dígitos")
    }
}

console.log("");
dondeEstaElMayorDigito(123); 
dondeEstaElMayorDigito(132); 
dondeEstaElMayorDigito(213); 
dondeEstaElMayorDigito(231); 
dondeEstaElMayorDigito(321); 
dondeEstaElMayorDigito(312); 
dondeEstaElMayorDigito(332); 
dondeEstaElMayorDigito(323); 
dondeEstaElMayorDigito(233); 
dondeEstaElMayorDigito(223); 
dondeEstaElMayorDigito(232); 
dondeEstaElMayorDigito(322); 
dondeEstaElMayorDigito(222); 