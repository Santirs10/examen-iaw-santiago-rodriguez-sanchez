const sc = require("prompt-sync")({sigint: true});
const capital = sc("¿Cúal es el dinero a invertir -->")
const interes = sc("Ahora dime el interés que quieres aplicar -->")
const anyos = sc("Y dime a cuántos años quieres --> ")
let interesanual=Number(capital)*Number(interes/100);
console.log("Interes anual",interesanual)

let capitaltotal=Number(capital)+Number(interesanual)*Number(anyos)
console.log("Capitaltotal" , capitaltotal)

let aleatoridad =Number((Math.floor(Math.random()*5)+1));
let capitalprevisto=(capitaltotal*aleatoridad/100)+capitaltotal;
console.log("Has invertido " +capital+"€ "+ "Aplicando un interes del " +interes+ "% "+"a los siguientes años: " +anyos);
console.log("El capital previsto es: " +capitalprevisto);
console.log("Se ha aplicado una aleatoriedad del " +aleatoridad+"%");



