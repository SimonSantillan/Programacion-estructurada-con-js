/* Leer un numero de tres digitos y determinar si algún digito es múltiplo de los otros */

function esMultiplo(num) {
    if(num < 0){
        num *= (-1);
    }
    if(num > 99 && num < 1000){
        let digito1 = Math.trunc(num/100);
        let digito2 = Math.trunc((num % 100) / 10);
        let digito3 = num % 10;
        console.log(digito1, digito2, digito3)
        if (digito1 % digito2 === 0 || digito1 % digito3 === 0) {
            console.log("El primer digito es múltiplo de alguno de los otros dos dígitos")
        } else if (digito2 % digito1 === 0 || digito2 % digito3 === 0) {
            console.log("El segundo dígito es múltiplo de alguno de los otros dos dígitos");
        } else if (digito3 % digito1 === 0 || digito3 % digito2 === 0) {
            console.log("El tercer dígito es múltiplo de alguno de los otros dos dígitos");
        } else {
            console.log("Ningun dígito es multiplo de alguno de los otros digitos");
        }
    } else {
        console.log("El numero ingresado no tiene 3 digitos");
    }
} 

esMultiplo(123); 
esMultiplo(132); 
esMultiplo(213); 
esMultiplo(231); 
esMultiplo(321); 
esMultiplo(312); 
esMultiplo(332); 
esMultiplo(323); 
esMultiplo(233); 
esMultiplo(223); 
esMultiplo(232); 
esMultiplo(322); 
esMultiplo(235); 