/*
    SCOPE

        - how a computer keeps track of all the variables in the program; defines the visibility
        - scopes can be nested, where there's an outer scope (global), and an inner scope (local)
*/

let x = 12; // globally scoped variable

function scope() {
    let x = 33; // locally scoped variable
    console.log(x);
}

scope();
console.log(x);


// A slightly different example


let y = 12;             // y (global) is changed because let is not used in the function (local scope)
function scope() {
    y = 33;             // no let keyword, so previously defined variable is altered
    console.log(y);
}

scope();
console.log(y);


/*
    - const is a constant that cannot be re-expressed or reinitialized as another value
    - var is scoped to the nearest function block
    - let is scoped to the nearest enclosing block
*/

var x = 12;
function varTest(){
    var x = 33;

    if (1 == 1) {
        var x = 45;   // this keyword allows you to reinitialize, called "scope creep"
        console.log(x);
    }
    console.log(x);
}
varTest();
console.log(x);



//



let x = 12;

function letTest() {
    var x = 33;

    if(true) {
        let x = 45;
        console.log(x);
    }
    console.log(x);
}
letTest();
console.log(x);


//


function constTest() {
    const scope = 1;    // the global const is separate from the local, so there is no error message

    if(true){
        const scope = 2;    // just like let, const is scoped to the nearest enclosing block
        console.log(scope);
    }
    console.log(scope);
}

constTest();