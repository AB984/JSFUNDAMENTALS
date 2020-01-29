let name = () => {
    return 'AB';
}

let myNameIs = name();  // functions and invocations happen immediately
console.log(myNameIs);


// CHALLENGE

let calc = price => {
    let tip = price * .3;
    return tip.toFixed(2);
}
let totalTips= calc(34.33)
console.log(totalTips);

//

let tipCalc = bill => (bill * .25).toFixed(2);
let totalTip = tipCalc(19.33);
console.log(totalTip);

//

function calc(price) {
    let tip = price*.25;
    return tip.toFixed(2);
}
let totalTip = calc(23.88);
console.log(totalTip);

