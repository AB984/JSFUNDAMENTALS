/*
    - the forEach() method executes a provided function once for each element in an array
    - the forEach() method does the same thing as a for Loop or for of loop - both iterate over properties in an array
*/

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];
for (let i = 0; i < food.length; i++){
    console.log(food[i]);
}

food.forEach(foodItem => console.log(foodItem));
food.forEach((foodItem, index) => console.log(foodItem));

food.forEach(individualFoodItem => {
    console.log(individualFoodItem);
})

food.forEach(function(foodItem, index) {
    console.log(foodItem);
    console.log(index);
    console.log(foodItem, index);
})

//CHALLENGE

let movies = ['American Astronaut', 'Parasite', 'Fando y Liz'];
movies.forEach(oneFilm => console.log(oneFilm));
movies.push('What They Do In The Shadows');
console.log(movies);
movies.splice(3,1, 'Young Frankenstein');
console.log(movies);
movies.forEach(oneFilm => console.log(oneFilm));
