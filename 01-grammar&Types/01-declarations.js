/*
 - a variable is a named container for storing data
 - we name variables so that we can refer to them again
*/

let a = 2;

    let     b       =      1;
/*  (1)     (2)     (3)     (4)

    1. javascript keyword
    2. variable name
    3. assignment operater (initialization)
    4. value of the variable

*/

console.log(a + b);

/*
    notes on variables:
        - a variable name must begin with a letter, underscore, or dollar sign
        - numbers may follow the above characters, but they cannot come first
        - JavaScript is Case Sensitive = 'hello' and 'Hello' are two separate variables
        - no spaces allowed in variable names
        - camelCase is the best practice for naming variables with multiple words
            -this helps with readibility
        
*/

/*
    var, let, const:

        -var: 'old' keyword for variables in javascript

        -let: 'new' keyword introduced for variables in ES6 (2017 version of JS)

        -const: unchangeable variable once declared
*/

/*
    declarations vs initialization:

        - declarations are on the LEFT SIDE of a variable
            - let x 
            - declarations are on the left side of the assignment operator (=)
        - initializations are on the RIGHT Side of the variable
            - it sets the value of the variable
            - the value can be any data type
            - the value we initialize our variable as is what is on the right side of the assignment operator (=)

*/

let x;
console.log('Declaration:', x); // Declaration: undefined

x = 10;
console.log('Initialization:', x); // Initialization: 10

x = 100;
console.log('Reinitialization:', x); 

let y = 'hello';
console.log(x, y);

const today = 'Great';
console.log(today);

today = 'Wonderful!';
console.log(today); //cannot reassign a constant variable