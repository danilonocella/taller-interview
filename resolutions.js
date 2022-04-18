//1 - Non-Constructible Change
//Given an array of positive integers representing the values of coins in your possession, 
//write a function that returns the minimum amount of change (the minimum sum of money) 
//that you CANNOT create. The given coins can have any positive integer value and aren't 
//necessarily unique (i.e., you can have multiple coins of the same value).
//
//Sample Input
//  coins = [5, 7, 1, 1, 2, 3, 22]
//Sample Output
// 20


const checkChange = (coins) => {
    //Sort the array
    let sortedCoins = coins.sort(function (a, b) {
        return a - b;
    });

    let smallestChange = 1;

    //Summ the coin values and check against the sorted array
    for (let i = 0; i < sortedCoins.length && sortedCoins[i] <= smallestChange; i++) {
        smallestChange += sortedCoins[i];
    };

    return smallestChange

};
console.log("****************************");
console.log("1 - Non-Constructible Change: ");
console.log("****************************");
let coins = [5, 7, 1, 1, 2, 3, 22];
console.log("INPUT: ", coins);
console.log("OUTPUT: ", checkChange(coins));

let coins2 = [1, 1, 1, 1, 1];
console.log("INPUT: ", coins2);
console.log("OUTPUT: ", checkChange(coins2));

let coins3 = [1, 5, 1, 1, 1, 10, 15, 20, 100];
console.log("INPUT: ", coins3);
console.log("OUTPUT: ", checkChange(coins3));




// 2 - Sorted Squared Array
// Write a function that takes in a non-empty array of integers that are sorted in 
// ascending order and returns a new array of the same length with the squares of the 
// original integers also sorted in ascending order.

// Sample Input
//   array = [1, 2, 3, 5, 6, 8, 9]
// Sample Output
//    [1, 4, 9, 25, 36, 64, 81]


const sortedSquareValues = (array) => {
    let squareValues = array.map((num) => num * num);
    let sortedSquareValues = squareValues.sort(function (a, b) {
        return a - b;
    });

    return sortedSquareValues

};

console.log("****************************");
console.log("2 - Sorted Squared Array: ");
console.log("****************************");
let array = [1, 2, 3, 5, 6, 8, 9];
console.log("INPUT: ", array);
console.log("OUTPUT: ", sortedSquareValues(array));

let array2 = [-2, -1];
console.log("INPUT: ", array2);
console.log("OUTPUT: ", sortedSquareValues(array2));

let array3 = [-10, -5, 0, 5, 10];
console.log("INPUT: ", array3);
console.log("OUTPUT: ", sortedSquareValues(array3));



