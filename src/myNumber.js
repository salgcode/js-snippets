// Write a function that prints number between 1 and 5.
/*function myNumber() {
    for (let x = 1; x <= 5; x++) {
        console.log(x);
    }
}
myNumber();
*/
function testPrimeNum(n) {
    if (n <= 1) {
        return false;
    }
    else if (n === 2) {
        return true;

    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(testPrimeNum(-2));