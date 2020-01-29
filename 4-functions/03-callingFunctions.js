function hi() {
    console.log('hello')
}

hi; // does not call the function
hi(); // hello
console.log(hi); // [Function: hi]
console.log(hi()); // hello undefined   runs the function, and then the second console.log is left empty

// as soon as our parser sees that there is a function invocation, that happens immediately.

// CHALLENGE

function numbers() {
    for (let i = 1; i < 11; i++) {
        console.log(i);       
    } 
}
numbers();


let arr = ['This', 'is', 'really', 'cool'];

function lists() {              // forOf is better for ARRAYS
    for (let i of arr) {
        console.log(i);
    }
    /*
function lists() {              // forIn is better for OBJECTS
    for (let i in arr) {
        console.log(arr[i]);
    }
    */
}
lists();

