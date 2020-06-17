//Function #1: Array Slice//
const foods = [pizza, burger, fingerChips, donuts, springRoll];
let modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);

//Function #2: Array Splice//
foods.splice(2, 1, "noodles", "icecream");
console.log(foods);

//Function #3: Filter//
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

function isEven(numberArray) {
    let evennum = numberArray.filter(function (num) {
        return num % 2 === 0;
    });
    console.log(evennum);
}
isEven(numberArray)


function isprime(num) {
    var flag = true;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            flag = false;
            console.log(flag)
            return flag;
        }
    }
    return flag;
}
let prime = numberArray.filter(function (num) {
    return isprime(num) == true;
});

//#4: Reject//
let nonPrime = numberArray.filter(function (num) {
    return isprime(num) == false;
})

//#5: Lambda//
numberArray.filter(num => num % 2 === 0);


//#6: Map//
const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(myArray) {
    let srt = myArray.map(function (square) {
        return square * square;
    });
    console.log(srt);
}
findSquareOfNumbers(myArray)


// Function #7: Reduce//
const myArray = [2, 3, 5, 10];

function multiply(myArray) {
    let multiplication = myArray.reduce(function (initial, item) {
        return initial * item;
    }, 1);
}
multiply(myArray);