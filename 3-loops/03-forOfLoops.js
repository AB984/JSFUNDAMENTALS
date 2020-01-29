/*
    - forOf loops look at iterable properties in an array
    - objects do not have iterable properties! cannot use forOf loops because objects are enumerable
*/

/* let student = {   // Error: student is not iterable
    name: 'Peter',
    awesome: true,
    degree: 'JavaScript',
    week: 1
}
for (let item of student) {
    console.log(item);
}
*/

let dogArray = ['great dane', 'husky', 'border collie', 'dalmation', 'pug'];

for (let dog of dogArray) {
    console.log(dog, 'goes bark');
}

console.log(dogArray[4] + ' goes bark');