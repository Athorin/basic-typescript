/*
· Crear una función simple que dados dos atributos numéricos, los sume. Mostrar  el resultado de la llamada por consola.
· Crear una función "anónima" (var variable = function (parametros...) ) que sume dos números. Mostrar el resultado 
de la llamada por consola.
· Crear una función del tipo "arrow"que haga lo mismo que los dos puntos anteriores. Mostrar resultado por consola
var variable = (parametros): tipo => {
  return loquesea;
}
*/
// Vamos!
console.log("Vamos!");

function add(x:number, y:number){
    return x + y;
}

var variable = (x:number, y:number): number => {
    return x + y;
}

console.log(add(5,6));

console.log(variable(5,6));