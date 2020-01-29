/*
for loops take in 3 parameters:
1. initial expression (variable that we are declaring)
2. condition (when the loop should stop running)
3. increment expression (what happens to the variable each loop) (i++ == i=i+1)
*/

//        (1)      (2)   (3)
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let x = 0; x < 21; x=x+2) { // x += 2 also works for the increment expression
    console.log(x);
}

for(let y = 10; y >-1; y--) {
    console.log(y);
}

for(let u = 0; u >= -24; u -= 2) {
    console.log(u);
}

let name = 'ileana';
for(let x = 0; x < name.length; x++) {
    console.log(name[x]);
}

let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum = sum + i;
}
console.log(sum);