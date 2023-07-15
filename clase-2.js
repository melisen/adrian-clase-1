
/*
autorizacion de inicio de sesión
 si coincide nombre de usuario con la contraseña -- > condición es verdadera

CONDICIONALES
estructura if
if --> "si..."


if(condicion){
    bloque de codigo que se ejecuta si la condicion es verdadera
}
*/
/*
(valor numérico igual a 1 que es caracter) 1 == "1" --> verdadero
1 === "1" --> falso
*/

//ejemplo

let usuarioIngresado = "José Martínez";
let contrasenaIngresada = "1234";
let edadIngresada = 19;

//valores fijos:
let usuarioReal = "José Martínez";
let contrasenaReal = "1234";
let edadNecesaria = 13;


if( (usuarioIngresado == usuarioReal) && (contrasenaIngresada == contrasenaReal) 
&& (edadIngresada >= edadNecesaria ) ){
    console.log("sesión iniciada")
} else {
    console.log("Error, respondé nuestro acertijo para ver si podés ingresar")
}



