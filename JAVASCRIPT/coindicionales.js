/**
 *  if-else  - if - else - switch
 * operador ternario
 */

// verificando si la persona es mayor de edad

let edad = prompt("Ingrese su edad"); //con el prompt solicitamos datos desde el navegador

if(edad >= 18){
    //imprimiento un mensaje en html
    document.write("Sos mayor de edad");
}else{
    document.write("Sos menor de edad :)");
}


//operador ternario => a manera mas optimizaa para trrabajar el if-else

//verificar siel numero estan en el rango entre 50 y 150
let numero = prompt("ingrese un numero");
//if
document.write(numero >= 50 && numero <= 150 ? "estsas en el rango" : "no estas en el rango")


