>= // greater than or equal to
=> // fat arrow function

//  (1)     (2)
let hi = () => {  // arrow functions are not HOISTED
    console.log('hello');
}

/*
    -1. all fat arrow functions need to be set to a variable
        - there are some edge cases where we can write anonymous arrow functions MORE ON THIS LATER
    -2. the fat arrow signifies that this is a function
    - arrow functions are the shorthand way of writing a function expresssion - not declaration
        - fat arrow functions do not get hoisted since they are function expressions
    
*/


// CONCISE BODY

let hi = () => console.log('hello');    // the return is implicit and happens by default
hi();

// BLOCK BODY

let hi = () => {
    console.log('hello');          // need to use return keyword inside of block body arrow functions
}
hi();

// Concise VS Block

let apples = num => console.log(`There are ${num} apples.`)
apples(2);

let counting = num => {
    for(let i = 0; i <= num; i++){
        console.log(i);
    }
}
counting(4);

/*
    - if there are no parameters, we have to have the parens ()
    - if there is a single parameter, parens are optional
    - if there is more than one parameter, must use parens ()
*/
