//Given an array arr and a value target, return the index of the first time target appears. If it does not appear at all, return -1.
//occurence found : index number
//occurence not found : -1

function findIndex(numbers, targetNumber) {
    let occurenceIndex = -1;
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number == targetNumber) {
            occurenceIndex = i;
            break;
        }
    }
    return occurenceIndex;
}

const numbers = [2, 5, 6, 7, 5, 20];
const targetNumber = 5;

console.log(findIndex(numbers, targetNumber));
