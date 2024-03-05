//Write a function that takes an argument and determines whether the argument is a prime number.
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
console.log(testPrimeNum(14));