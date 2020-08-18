/*

instructions: 

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

starting code: 

function positiveSum(arr) {
  
}

solution below comments: 
*/

let arr = [12, -4, 22, 7];
let arr2 = arr.filter(positiveNums);
let sumPositiveNums = arr2.reduce(addingPositiveNums, sumPositives = 0); // the variable that holds the sum of all of the positive numbers of the original array 

function positiveNums(value) {
    return value > 0; 
}

function addingPositiveNums (total, value) {
    return total + value; 
}

function positiveSum() {
    return sumPositiveNums;
}

function checkZero() {
    if(arr2.length === 0) {
    return 0; 
    }
}



