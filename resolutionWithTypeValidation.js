const sortedSquareValues = (array) => {
    let onlyNumbersCheck = array.every(element => {
        return typeof element === 'number';
    });
    
    if (onlyNumbersCheck) {
        let squareValues = array.map((num) => num * num);
        let sortedSquareValues = squareValues.sort(function (a, b) {
            return a - b;
        });

        return sortedSquareValues
    } else {
        return "Error: not all the elements in the array are numbers"
    }

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

let array4 = [-10, -5, "string", 5, 10];
console.log("INPUT: ", array4);
console.log("OUTPUT: ", sortedSquareValues(array4));



