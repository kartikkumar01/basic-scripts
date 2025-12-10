//Reverse a string

function reverseString(string) {
    let revString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        revString = revString + string[i];
    }
    return revString;
}

let string = 'kartik';
console.log(reverseString(string));