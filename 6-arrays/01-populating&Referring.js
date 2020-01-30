/*
    - arrays are containers that hold a list of items
    - denoted by []
    - can hold multiple datatypes
    - each item, regardless of datatype, is separated by a comma
*/

let list = ['orange', 'banana', 'apple'];
console.log(list[1]);

/*
    - SQUARE BRACKET NOTATION 
       - When calling an array, we can append square brackets onto the end of our array with the index number we want to reference. 
       - javascript starts counting at 0
*/

console.log(typeof students);           // OBJECT
console.log(students instanceof Array); // TRUE   instanceof operator is used to check the type of variable we are working with
console.log(students[2]);  // Jeff
let students = ['Matt', 'Bob', 'Jeff', 'AB', 23, true, ['Kris', 'Taylor', 'Will']];
// CHALLENGE
// let student3 = students[6];
// console.log(`Hello ${student3[2]}!`)

// let name = students[6][2];
// console.log(`Hello ${name}!`)

console.log(`Hello ${students[6][2]}!`)