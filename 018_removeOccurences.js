// Given an array arr and a number target, return a new array that contains all elements except the ones equal to target.

function removeOccurences(numbers, target){
    const newNumbers = [];
    for(let i =0; i<numbers.length; i++){
        let number = numbers[i];
        if(target!=number){
            newNumbers.push(number);
        }
    }
    return newNumbers;
}

const numbers = [2,4,8,2,6,5,2];
const target = 2;
console.log(removeOccurences(numbers, target));