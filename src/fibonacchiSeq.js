/*function fibonacci(num) {
    var num1 = 0;
    var num2 = 1;
    var sum;
    var i = 0;
    for (i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
console.log(fibonacci(2));
console.log(fibonacci(5));*/
function fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(1));
console.log(fibonacci(8));