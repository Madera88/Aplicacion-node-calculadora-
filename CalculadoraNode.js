/* Para arrancar en la aplicacion en NODE, dirigite en la consola de comandos a la ruta donde este ubicado el archivo CalculadoraNode.js
a continuacion introducir el comando ->  node CalculadoraNode.js valor1 valor2  */

'use Strict'

// recogemos de la consola a partir del la posicion 2, en las anteriores estan las rutas,en el array estan valor1 y 2,  las guardo en la variable números.
var numeros = process.argv.slice(2);

var numero1=parseFloat(numeros[0]);
var numero2=parseFloat(numeros[1]);


console.log("los números introducidos por la consola han sido "+numero1 +" "+numero2);

//generamos una plantilla , ${variable}
var calculadora= `
    La suma de estos numeros es : ${numero1 + numero2}
    La resta de estos numeros es : ${numero1 - numero2}
    La multiplicación de estos numeros es : ${numero1 * numero2}
    La división de estos numeros es : ${numero1 / numero2}
    El resto de la division de estos numeros es : ${numero1 % numero2}
    `;
console.log(calculadora);

//¿que número es mayor?
if(numero1<numero2){
   console.log("El número "+numero2 +" es mayor que "+numero1);
}
if(numero1>numero2){
    console.log("El número "+numero1 +" es mayor que "+numero2);
 }
if(numero1==numero2){
    console.log("Los números son iguales ("+numero1 +"="+numero2+")");
 }


// ¿son pares o impares?
if(numero1 % 2 == 0){
    console.log("El "+numero1+" es un número par");
}else{
    console.log("El "+numero1+" es un número impar")
}
if(numero2 % 2 == 0){
    console.log("El "+numero2+" es un número par");
}else{
    console.log("El "+numero2+" es un número impar")
}

//Divisores
//Los divisores del número 1, excluyendo el 1
var divisores1=[];
for(var i=2;i<=numero1;i++){
    if(numero1 % i==0 ){
        let aux=divisores1.length;
        divisores1[aux]=i;
    }
}
console.log("los divisores del "+numero1+" exluyendo el 1, son : "+divisores1);

//Los divisores del número 2, excluyendo el 1
var divisores2=[];
for(var i=2;i<=numero2;i++){
    if(numero2 % i==0 ){
        let aux=divisores2.length;
        divisores2[aux]=i;
    }
}
console.log("los divisores del "+numero2+" exluyendo el 1, son : "+divisores2);

