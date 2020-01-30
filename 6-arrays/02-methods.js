let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];
console.log('original array:', food);

food.push('pizza'); //appends or 'pushes' an item into the array .. always appends item to the end of the array 
console.log('push:', food);

food.splice(1, 1, 'bananas'); // (position / how many to delete / what to add in its place(any # of items))
console.log('splice:', food);

food.splice(2, 0, 'sweet potato pie'); // (position / how many to delete (0) / what to add in its place)
console.log('splice (addition):', food);

food.pop();             // removes (pops off) the last item of the array
console.log('pop:', food);

food.shift();          // removes the first item in an array
console.log('shift:', food);

food.unshift('popcorn', 'steak'); // adds one or more items to the beginning of the array
console.log('unshift:', food);

console.log('original array:', food);