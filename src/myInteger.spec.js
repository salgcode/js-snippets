let myIntegers = require("./myInteger");
let { expect } = require('@jest/globals');

test('check the sorting of negative numbers', function () {
    let output = myIntegers([0, -1, -100]);
    expect(output[0]).toBe(-100);
});

test('check default sort works', function () {
    let input = [9, 1, 5, 7, 3, 22, 12];
    let output = myIntegers(input);
    expect(output[0]).toBe(1);
    expect(output.length).toBe(input.length);
    expect(output[output.length - 1]).toBe(22);
})