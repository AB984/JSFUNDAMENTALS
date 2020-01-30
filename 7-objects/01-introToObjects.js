/*
    - an object is a container that stores multiple sets of data
        - stores data as key:value pairs
    - objects are denoted by {}
*/

// let netflix = {
//     id: 1,
//     showName: 'The Office',
//     season1: {
//         seasonInfo: {
//             episodeInfo: [{
//                 episode: 1,
//                 episodeName: 'Pilot'
//             }, {
//                 episode: 2,
//                 episodeName: 'Diversity Day'
//             }, {
//                 episode: 3,
//                 episodeName: 'Health Care'
//             }, {
//                 episode: 4,
//                 episodeName: 'The Alliance'
//             }, {
//                 episode: 5,
//                 episodeName: 'Basketball'
//             }, {
//                 episode: 6,
//                 episodeName: 'Hot Girl'
//             }]
//         }
//     },
//     season2: {},
//     season3: {},
//     season4: {}
// }

// to access data inside of an object, or to dive into an object, we use dot notation

// console.log('all data:', netflix);
// console.log('season info:', netflix.season1.seasonInfo);
//console.log('specific episode name:', netflix.season1.seasonInfo.episodeInfo[1].episodeName);

// CHALLENGE

// console.log('episode:', netflix.season1.seasonInfo.episodeInfo[5].episode + ', ' + 'name:', netflix.season1.seasonInfo.episodeInfo[5].episodeName);
// console.log(`episode number: ${netflix.season1.seasonInfo.episodeInfo[5].episode} - episode name: ${netflix.season1.seasonInfo.episodeInfo[5].episodeName}`);

/*
    - JSON stands for JavaScript Object Notation
    - JSON syntax is derived from JavaScript object syntax, but JSON data is in a text only format
    - JSON exists as a string, and needs to be converted to a native JavaScript object if we want to access the data
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

// console.log(Object.keys(spaceJam.toonSquad)); // prints an array of the keys
// console.log(Object.keys(spaceJam.toonSquad.duck)); // prints the string's index listed as an array
// console.log(Object.keys(spaceJam.toonSquad).toString());  // human,rabbit1,rabbit2,duck,tDevil,bird,cat,pig
console.log(Object.values(spaceJam.nbaPlayers)); // prints an array of the string values


/*
    - object bracket notation
        - just like dot notation, allows us to find a value in an object
        - allows us to set the key of an object
        - also handy if we want to store keys of an object as a variable

        - object bracket notation works because all keys inside of an object are strings, even though they're not wrapped in single or double quotes
*/



let test = Object.keys(garden); // returns an array of all the keys in object
console.log(test);
console.log(typeof test[0]);  // keys inside of objects are STRINGS

let zucchini = garden['vegetable'];
console.log(zucchini);        // prints the value of zucchini


let garden ={
    vegetable: 'zucchini',
    flower: 'sunflower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}
let baking = {};
baking['zucchini'] = 'better make some bread';
console.log(baking);

console.log(baking[garden['vegetable']]);

let testObj = {
    'spaces Here': true,
    noSpaces: true
}

console.log(testObj.noSpaces);
console.log(testObj["spaces Here"]); //must use [] (instead of dot notation) if there are spaces in the key
