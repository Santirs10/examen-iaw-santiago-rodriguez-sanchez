const sc = require("prompt-sync")({sigint: true});
const texto= sc("Escribe una cadena de texto y te diré el número total de digitos que hayan dentro -->")
const numeros= "0123456789";
let cadena="";
let numDigitos=0;
while(true){
    let texto= sc("Escribe una cadena de texto y te diré el número total de digitos que hayan dentro -->")
if (texto==="salir"){
console.log("Las cadenas son las siguientes: "+ cadena)
break;
}else{
    for (let i= 0; i < texto.length; i++) {
        for (let j = 0; j < numeros.length; j++) {
             if(texto.charAt(i)==numeros.charAt(j)){
             numDigitos=numDigitos+1;
             }
         }
     }
}
cadena+=texto+"--"

console.log("El número total de dígitos es: " +numDigitos);  
}
