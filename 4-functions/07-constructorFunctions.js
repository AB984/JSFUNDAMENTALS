

// (1)      (2)         (3)           
function Person(name, age, canVote){
    //(4) (5)    (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

//              (7)  (8)
let person4 = new Person("Arlo", 27, true);
let person5 = new Person('james', 88, true)

console.log(person4);


/*
    1. function keyword
    2. function name     Constructor Functions start with a CAPITAL LETTER
    3. parameters        These will be the values for the keys in our object once a new 'Person' is created
    4. the 'this' keyword refers back to whatever called, or whatever activates it. In this case, '.this' refers back to 'Person'
    5. the keys of the new object we are creating.
    6. the argument we pass through our function call will resolve as the values
    7 & 8. the new keyword creates a new instance of our 'Person' function/object, with the values we pass into that function when invoking it.
*/
