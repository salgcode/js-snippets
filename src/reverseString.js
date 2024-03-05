//Write a function that takes a string as an argument and reverses it.



function reverseString(n) {

    return n.split("").reverse("").join("");
}

var myString = "How are you soren?"
var reversedString = reverseString(myString);
console.log((reverseString(myString)));

