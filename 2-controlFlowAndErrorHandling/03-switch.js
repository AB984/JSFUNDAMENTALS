/*
    - switch statements execute a block of code depending on different cases
    - switch statements often use the break or default keywords ( or both together )
         - both keywords are optional

         - break keyword breaks out of the current condition & switch statement
         - default keyword specifies code to run if there is no case match
*/

let officeCharacter = 'Pam';
switch(officeCharacter) {
    case 'Michael':
        console.log('My mind is going a mile an hour');
        break;
    case 'Dwight':
        console.log('perfectenschlag');
        break;
    case 'Jim':
        console.log('Bears. Beets. Battlestar Galactica');
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`)
}

//CHALLENGE

let dessert = 'pie'; // this is case sensitive by default
switch (dessert) {
    case 'pie':
        console.log('Pie, pie, me oh my!');
        break;
    case 'cake':
        console.log('Cake is great!');
        break;
    case 'ice cream':
        console.log('I scream for ice cream!');
        break;
    default:
        console.log('Not on the menu.');
}