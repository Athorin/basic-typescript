/*
· Create an array named “list1” with the values 1, 2, 3. Send result to the console.
· Create an array named “list2” with values 1,2,3. This time use a generic array. Send result to the console.
· Create an array named “anyList” with values 1,true,”three”. This time use type any to create the array. Send result to the console.
· Create an array named “list3” of type “string” and set its length to 10. Send result to the console.
*/
// Vamos!
console.log("Vamos!");

var list1: number[] = [1,2,3];
var list2: Array<number> = [1,2,3];
var anyList: any = [1,true,"three"];
var list3: string[10];

console.log(list1);
console.log(list2);
console.log(anyList);
console.log(list3);