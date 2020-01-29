/*
    - a ternary is a shortcut for writing an if/else statement
    - requires the default of catch all (else)
*/

let num = 6;

//TERNARY
(num > 0) ? console.log('yes') : console.log('no'); // GET USED TO THIS SHORTHAND FOR BLUE BADGE



//IF/ELSE
if (num > 0) {
    console.log('yes');
} else {
    console.log('no');
}


let num = 6;

// TERNARY
(num == 0) ? console.log('working') 
: (num < 0) ? console.log('not working') 
: console.log('still not working')


// ELSE/IF
if (num == 0) {
    console.log('working');
} else if (num < 0) {
    console.log('not working');
} else {
    console.log('still not working');
}

//CHALLENGE

let age = 9;
(age >= 25) ? console.log('You can rent a car!')  // can state conditions w/ or w/o ()
    : (age >= 21) ? console.log('You can drink!')
    : (age >= 18) ? console.log('You can vote')
    : console.log('Sorry, you are too young to do anything fun.')