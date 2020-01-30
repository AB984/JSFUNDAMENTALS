let FB = (x) => {
    for (let i = 0; i<=x; i++){
        if (i % 15 == 0) {
            console.log("fizzbuzz");
        } else if (i % 5 == 0) {
        console.log("Buzz");
        } else if (i % 3 == 0) {
        console.log("Fizz");
        } else {
        console.log(i);
     }
    }
}

FB(4);