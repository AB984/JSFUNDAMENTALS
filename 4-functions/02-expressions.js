/*
    -hey variable is hoisted, but not the function following the operator
    - function declarations DO get hoisted, but function expressions DO NOT get hoisted
   
*/

hi() // cannot call the function before 

let hey = function hi() {
    console.log('hello');
}

console.log(hey); // returns [Function: hi]
