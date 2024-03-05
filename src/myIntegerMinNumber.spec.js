
let findMin = require("./myMinNumber");
let { expect } = require('@jest/globals');

test('returns a min positive number from array', function () {
    let output = findMin([1, 7, 9, 2]);
    expect(output).toBe(1);
});

test('returns a negative min number in an array', function () {
    let output = findMin([-11, -7, -9, -2]);
    expect(output).toBe(-11);
});

test('returns 0 when array is empty', function () {
    let output = findMin([]);
    expect(output).toBe(0);

    let output2 = findMin();
    expect(output2).toBe(0);
});

test('returns min still when all numbers are equal', function () {
    let output = findMin([5, 5, 5, 5, 5]);
    expect(output).toBe(5);
});

test('negative and positive with min at the end', function () {
    let output = findMin([5, 5, 5, 5, -5]);
    expect(output).toBe(-5);
});
