/*
· Create a few variables with “var”, “let”, and “const”.
· Demonstrate what happens when declaring a variable with “var” in the root 
and then again inside a block statement like foreach or if(true). 
Here is one possible example:
    if (true) {
        var myVar: number = 444;
    }
    console.log('myVar = ' + myVar);
    
· Demonstrate what happens when doing the same with a variable declared with “let”.
    if (true) {
        let myLet: number = 555;
    }
    console.log('myLet = ' + myLet);
 
· Try changing the value of the constant you created earlier. What happens?
*/
// Vamos!
console.log("Vamos!");

var one: number;    //Puede declararse varias veces en el ambito de bloque
let two: number;    //Solo puede declararse una vez en el ambito de bloque
const three: number = 100; //COSNTANTE NO se puede modificar

if (true) {
    var one: number = 444;
}
console.log('myVar = ' + one);

if (true) {
    let two: number = 555;
}
console.log('myLet = ' + two);
