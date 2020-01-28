/*  BOOLEANS
    - a boolean has two possible valuse of either True or False
 */

 let on = true;
 console.log(on);

 let off= false;
 console.log(off);
 
 /*
    NULL
    - null is an empty value. Think of it like an empty container: nothing is in it, but it still exists as a space to fill
 */

 let empty = null;
 console.log(empty);

 /*
    UNDEFINED
    - no value has been assigned/initialized
    - does not act as an empty container, whereas null does
 */

 let undef = undefined;
 console.log(undef);

 let correct;
 console.log(correct);

 /*
    NULL VS UNDEFINED
    - null is like a container with nothing in it
    - undefined is when a variable has never been set, or hasn't been created yet
 */

 /*
    NUMBERS
    - numbers are literally just numbers
    - don't need anything special to write them
 */

 let degrees = 33;
 console.log(degrees);

 let precise = 999999999999999;  // 15 9's
 console.log(precise);

 let rounded = 9999999999999999; // 16 9's
 console.log(rounded);

 let decimal = 0.2 + 0.1;  // JS works much better with whole numbers
 console.log(decimal);

 /*
    STRINGS
    - strings are datatypes used to represent text and are wrapped in either single or double quotes
 */

 let stringOne = "double quotes";
 let stringTwo = 'single quotes';
 console.log(stringOne, stringTwo);

 // numbers vs strings

let first = 1050 + 100; 
let second = '1050' + '100'; // if one data type is a string, and the other is a number, the compiler will assume you are trying to work with strings and convert the number to a string
console.log(first);
console.log(second);

console.log(typeof first); // typeof checks the data type being used
console.log(typeof second);

/*
    OBJECTS
    - stores many values instead of a singular value
    - holds what are known as key/value pairs
*/

let frodo = {
    race: 'hobbit',
    rings: '1',
    cloak: true
}

console.log(frodo);
console.log(typeof frodo);

/*
    ARRAYS
    - arrays are containers that hold a list of items
    
    let list = [  'item1', 'item2', 'item3'  ];
        (1)    (2)      (3)

        1. variable name, in this case, name of the array
        2. square brackets denote that this variable is an array
        3. each item regardless of datatype is always separated by a comma

*/

let burritos = ['large', 4, true]; // this data type is also an OBJECT because there is an index(0, 1, 2)
console.log(burritos); 

let firstName = 'AB';
let lastName = 'Wylde';
let houseNumber = 1501;
let street = 'English Ave.';
let city = 'Indianapolis';
let state = 'Indiana';
let zipcode = 40404;

console.log(firstName, lastName+ ",", houseNumber, street+ ",", city+ ",", state, zipcode)

/*
    STRING: PROPERTIES
        - properties are qualities associated with a specific datatype
        - strings have properties, or qualities that are associated specifically with strings
*/

let myNames = 'AB';
console.log(myNames.length);  // length will not start counting at 0

/*
    STRING: METHODS
        - methods are tools that can help us manipulate certain data
        - .property vs .method()
        - no parenthesis for properties
*/

let myNameIs = 'AB';
console.log(myNameIs.toLowerCase()) //toUpperCase() is a method that changes a string to all uppercase

let home = 'My home is Bedford.';
console.log(home.includes('Greenwood'));

let sent = 'this sentence will be split into individual parts';
let splits = sent.split(' ')
console.log(splits)
