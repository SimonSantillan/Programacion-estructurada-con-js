/*Leer tres numeros enteros de dos digitos cada uno y determinar en cuál de ellos se encuentra el mayor dígito */

function dondeEstaElMayorDigito(num1, num2, num3) {
    let cocienteNum1, cocienteNum2, cocienteNum3;
    cocienteNum1 = Math.trunc(num1/10);
    cocienteNum2 = Math.trunc(num2/10);
    cocienteNum3 = Math.trunc(num3/10);
    if (cocienteNum1 < 0) {
        cocienteNum1 *= (-1);
    }
    if (cocienteNum2 < 0) {
        cocienteNum2 *= (-1);
    }
    if (cocienteNum3 < 0) {
        cocienteNum3 *= (-1);
    }
    if ((cocienteNum1 >= 1 && cocienteNum1 <= 9) && (cocienteNum2 >= 1 && cocienteNum2 <= 9) && (cocienteNum3 >= 1 && cocienteNum3 <= 9)) {
        let digito11, digito12, digito21, digito22, digito31, digito32; /* Almaceno dígitos */
        let mayor1, mayor2, mayor3; /* Almaceno el mayor de cada digito */

        digito11 = Math.trunc(num1/10);
        digito12 = num1 % 10;
        digito21 = Math.trunc(num2/10);
        digito22 = num2 % 10;
        digito31 = Math.trunc(num3/10);
        digito32 = num3 % 10;

        if (digito11 > digito12) {
            mayor1 = digito11;
        } else {
            mayor1 = digito12;
        }

        if (digito21 > digito22) {
            mayor2 = digito21;
        } else {
            mayor2 = digito22;
        }

        if (digito31 > digito32) {
            mayor3 = digito31;
        } else {
            mayor3 = digito32;
        }

        if (mayor1 === mayor2 && mayor2 === mayor3) {
            console.log("Los mayores digitos de los tres numeros ingresados son iguales");
        } else {
            if (mayor1 > mayor2) {
                if (mayor1 > mayor3) {
                    console.log("El mayor digito esta en el primer numero: " + num1);
                } else {
                    if (mayor1 === mayor3) {
                        console.log("El mayor digito está tanto en el primer como tercer número: " + num1 + " " + num3);
                    } else {
                        console.log("El mayor dígito está en el tercer numero: " + num3);
                    }
                }
            } else {
                if (mayor1 === mayor2) {
                    if (mayor2 > mayor3) {
                        console.log("El mayor digito está tanto en el primer como segundo numero: " + num1 + " " + num2);
                    } else {
                        console.log("El mayor digito está en el tercer numero: " + num3);
                    }
                } else {
                    if (mayor2 > mayor3) {
                        console.log("El mayor digito está en el segundo numero ingresado: " + num2);
                    } else {
                        if (mayor2 === mayor3) {
                            console.log("El mayor digito está tanto en el segundo como el tercer numero: " + num2 + " " + num3);
                        } else {
                            console.log("El mayor digito esta en el tercer numero: " + num3);
                        }
                    }
                }
            }
        }

    } else {
        console.log("Alguno de los numeros ingresados no tiene 2 digitos")
    }
}
console.log("")
dondeEstaElMayorDigito(10,99,50);
dondeEstaElMayorDigito(10,99,50);
dondeEstaElMayorDigito(100,99,50);
dondeEstaElMayorDigito(10,999,50);
dondeEstaElMayorDigito(10,99,500);
dondeEstaElMayorDigito(10,34,00);
dondeEstaElMayorDigito(10,34,60);
dondeEstaElMayorDigito(34,22,14);
console.log("")
dondeEstaElMayorDigito(10,-99,-50);
dondeEstaElMayorDigito(10,99,50);
dondeEstaElMayorDigito(100,99,50);
dondeEstaElMayorDigito(10,-999,50);
dondeEstaElMayorDigito(10,99,-500);
dondeEstaElMayorDigito(10,34,00);
dondeEstaElMayorDigito(-10,34,60);
