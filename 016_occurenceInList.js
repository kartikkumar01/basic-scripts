//Given an array arr and a number target, return how many times target appears in arr.

function countOccurences(numbers, targetNumber) {
    let occurences = 0;

    // for (let i = 0; i != numbers.length; i++) { Risky if i skips the iteration when i=numbers.length
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number == targetNumber) {
            occurences++;
        }
    }

    return occurences;
}

const numbers = [2, 5, 9, 2, 1, 7, 2, 2, 2, 6];
const targetNumber = 2;

console.log(countOccurences(numbers, targetNumber));
