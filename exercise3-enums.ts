/*
· Create an Enum using “Red”, “Green”, and “Blue”. 
· Create a variable and set it equal to the “Green” enum value.
· Create another variable and set it equal to the enum in 0 (zero) position. By default, enums are zero based. 
*/
// Vamos!
console.log("Vamos!");

enum Color{
    Red,
    Green,
    Blue
}

var c1: Color = Color.Green;
var c2: string = Color[0];


console.log(c1 + " " + c2);