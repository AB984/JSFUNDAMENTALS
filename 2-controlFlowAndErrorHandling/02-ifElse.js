let name = 'AB'
if (name == 'A') {
    console.log('Hello, my name is ' + name + '.');  // string interpolation is ${variable} with back tics ``, so you don't need to use this +
} else {
    console.log(`Hello, is your name ${name}?`);  // USE THIS INSTEAD, but it only works with ES6 compatible browsers
}


// CHALLENGE


let nameCase = 'zAchARy';
let firstLetter = nameCase.charAt(0); //you could also isolate the first letter with nameCase[0]
//BRONZE
/*if (firstLetter == 'Z') {             // another option! nameCase[0] == nameCase[0].toUpperCase()
    console.log(nameCase)
} else {
    console.log("Hey, this isn't written correctly.")
    
}

//SILVER
if (firstLetter == 'Z') {
    console.log(nameCase.charAt(0));
} else {
    let newString = nameCase.toLowerCase();
    console.log(newString.slice(-6));    // slice starts counting at 1 instead of 0 // slice(1) would also return w/o first letter
}
*/
//GOLD
if (firstLetter == 'Z') {
    let newString = nameCase.toLowerCase();
    let newestString = newString.slice(-6);
    console.log(nameCase.charAt(0) + newestString);
} 
else {
    let newestString = nameCase.toLowerCase().slice(-6);
    console.log(firstLetter.toUpperCase() + newestString.toLowerCase());
}

//CHALLENGE

let age = 23;

if (age <= 17) {
   console.log('Sorry, you are too young to do anything.');
} else if (age >= 18 &&  age < 21){
    console.log('You can vote!')
} else if (age >= 21 &&  age < 25) {
    console.log('You can drink!')
} else if (age >= 25) {
    console.log('You can rent a car!')
}


// ANOTHER WAY TO DO IT

let age2 = 30;

if (age2 >= 25) {
    console.log('You can rent a car!')
} else if (age2 >= 21) {
    console.log('You can drink!')
} else if (age2 >= 18) {
    console.log('You can vote!')
} else {
    console.log('Sorry, you are too young to do anything.')
}