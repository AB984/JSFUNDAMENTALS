/*
    HOISTING

- javascript is interpreted line by line (read top to bottom), and performs 2 passes of our code.
        - the 1st pass recognizes any declared variables and stores them in memory
            - looks at anything on the left side of the assignment operator (=)
        the 2nd pass of the code assigns values to the previously declared variables through initialization
 - NOTE: functions are also hoisted and stored in memory with the variables
*/

console.log(name); // Error: value has not been intialized, though the variable 'name' has been stored in memory
let name = 'AB';

b();                // the function is stored in memory before the second pass calls the b function

function b() {
    console.log('I have been hoisted.');
}