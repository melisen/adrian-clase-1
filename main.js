//barra diagonal son comentarios
/*
esta es otra forma de escribir comentario
*/

// Variables
//se declaran conlas palabras reservadas let o const y el nombre que le pongamos a la variable
//mediante el  signo igual le asignamos un valor
//ejemplo:
let persona = "Adrián"


//string o cadena de caracteres entre comillas dobles "" o simples ''
let nombre = "Juan "
let apellido = "Perez"

//concatenar: unir 2 cadenas de caracteres mediante signo +
let nombreCompleto = nombre + apellido;
console.log(nombreCompleto);
//resultado en la terminal --> Juan Perez

//number
//operadores aritmeticos + - *  /
 let a = 1;
 let b = 6;
 let resultadoSuma = a + b;
 let resultadoDivision;

 resultadoDivision = a / b;

console.log("resultado de la division" + resultadoDivision)

//Una variable let se puede reasignar dentro de la aplicación. 
//Ej donde partimos con una variable numérica y luego la reasignamos con un valor de string:
let miVariable = 1;
miVariable = "Hola mundo"
//igualmente no es recomendable reasignar variablesasí como así porque es confuso de entender al escribir un programa
//Una variable de tipo const no se puede reasignar. 
const otraVariable = "Melina"
//otraVariable = 3 --> no se puede hacer


