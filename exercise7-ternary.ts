/*
· Recreate the logic below with the ternary operator (?). 
The ternary operator can be used to look for null but what it’s really doing is 
creating conditional logic based on a true/false response. If null then false is returned.
    var myVal: number = null;
    var result: number = null;
    // using an if statement
    if (myVal == null) {
        result = 0;
    }
    else {
        result = myVal;
    }
· Now change the “myVal” variable to equal 5 and execute operation again. Result is now set equal to “myVal” because “myVal” is not null.
*/
// Vamos!
console.log("Vamos!");

var myVal: number = 5;
var result: number = null;

if (myVal == null) {
    result = 0;
}
else {
    result = myVal;
}
console.log(result);

console.log(myVal ? result = myVal : result  = 0);