let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let arr = ['blue', 25, true, ['string'], {key: 'value'}];
//console.log(arr.length);   // 5
//console.log(arr.toString()); // blue,25,true,string,[object Object]

//CHALLENGE

let arr = [1, 2, 3, 4, 5];
if (arr instanceof Array === true){
    let revArr = arr.reverse();
    revArr.forEach( num => console.log(num));
} else {
    console.log('not an array');
}

//console.log(typeof arr); //Object
//let flipArr = arr.reverse();
//console.log(flipArr);