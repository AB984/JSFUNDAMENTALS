function hi(name) {
    console.log(`Hello, ${name}`); //name is a place holder for data that we will eventually receive
}
hi(); // Hello, undefined

hi('AB');


function zach(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`);
}

zach('BLT');


function counter(number, string) {   // this is like saying let number = 0;
    for (number; number <= 10; number++) {
        console.log(number);
    }
  //  for(let i = 0; i <= number; i++) {
   //     console.log(i);
   // }
   console.log(string);
}
counter(0, 'Time is up!');


// CHALLENGE

function name(first, last) {
    let fullName = first + " " + last;
    console.log(`Hello, my name is ${fullName}`);
}
name('AB', 'Wylde');
