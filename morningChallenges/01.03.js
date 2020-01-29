/*  
Fizz Buzz whiteboarding challenge
*/

// ELSE IF

let FB = 3;
if (FB % 5 === 0 && FB % 3 === 0) {  // or FB % 15 === 0
    console.log("FIZZ BUZZ");
} else if (FB % 5 === 0) {
    console.log('BUZZ');
} else if (FB % 3 === 0) {
    console.log("FIZZ");
} else {
    console.log(FB);
}

// SWITCH

let x = 5;

switch (true) {
    case (x % 15 == 0) :
        console.log('fizzbuzz');
        break;
    case (x % 5 == 0) :
        console.log('buzz');
        break;
    case (x % 3 == 0) :
        console.log('fizz');
        break;
    default: console.log(x);
}

// TERNARY

let FB = 30;  

(FB % 15 == 0) ? console.log('fizzbuzz')
: (FB % 5 == 0) ? console.log('buzz')
:(FB % 3 == 0)?console.log('fizz')
:console.log(FB)  // must have a default at the end. could write use null or return 