//Write a function that prints a given array.

let comparator = function (a, b) {
    return a - b;
};

function myIntegers(arr) {
    arr.sort(comparator);
    return arr;
}

module.exports = myIntegers;
