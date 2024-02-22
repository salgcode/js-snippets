let { expect } = require('@jest/globals');
let findMax = require("./myMaxNumber");
test('returns a max positive number from array', function () {
    let output = findMax([1, 7, 9, 2]);
    expect(output).toBe(9);
});

test('returns a negative max number in an array', function () {
    let output = findMax([-11, -7, -9, -2]);
    expect(output).toBe(-2);
});

test('returns 0 when array is empty', function () {
    let output = findMax([]);
    expect(output).toBe(0);

    let output2 = findMax();
    expect(output2).toBe(0);
});

test('returns max still when all numbers are equal', function () {
    let output = findMax([5, 5, 5, 5, 5]);
    expect(output).toBe(5);
});
