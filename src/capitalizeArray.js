function capitalizeArrays2(words) {
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== undefined && words[i].length > 0) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
        }
    }
    return words;

}

function capitalizeArrays(words) {
    let capitalizedArrays = [];
    for (let i = 0; i < words.length; i++) {
        let currentString = words[i];
        let capitalizedString;
        if (currentString === '' || currentString === undefined) {
            capitalizedString = currentString;
        } else {
            capitalizedString = currentString.charAt(0).toUpperCase() + currentString.slice(1).toLowerCase();
        }


        capitalizedArrays.push(capitalizedString);
    }
    return capitalizedArrays;

}

let input = ['soren', 'sailen', 'menaka', 'CRYUS', 'CyRuS', 'Cyrus', ' ', '', undefined];
console.log("Original input", input);
console.log(capitalizeArrays(input));
console.log("The original input after first call", input);
console.log(capitalizeArrays2(input));
console.log("The original input after second call", input)
