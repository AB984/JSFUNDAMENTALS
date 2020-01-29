/*
    - great for counting key/value pairs in an object. Properties in an object are what is called enumerable
        - for in loops will iterate over an object's enumerable properties

*/

let student = {
    name: 'Patricia',
    awesome: true,
    degree: 'JavaScript',
    week: 1
}
console.log(student.degree)   // dot notation grabs one value from the object

for (let item in student) { 
  //  console.log(item);        // item grabs each key in the object
    console.log(student[item]); // object bracket notation grabs the value of all the keys, usually in an array
}

let dogArray = ['great dane', 'husky', 'border collie', 'dalmation', 'pug'];
console.log(dogArray[1]);

for (dog in dogArray) {
  //   console.log(dog); this will return the array index numbers (key of the object)
  console.log(dogArray[dog]);
}

// CHALLENGE

/*
let name = 'aRlEn';
let lowerName;
for (let letter in name) {
    lowerName = name[letter].toLowerCase();
}
console.log(name[0].toUpperCase() + lowerName.slice(-4));
*/

let name = 'zACH';
let capName;
for(let i in name) {
    // console.log(i);  prints the index of 0 1 2 3
    //console.log(name); prints the name variable as is
   if (i == 0){
       capName = name[i].toUpperCase();
   } else {
       capName += name[i].toLowerCase();
   }
}

console.log(capName);