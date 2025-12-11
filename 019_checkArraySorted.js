//Given an array of numbers, return true if the array is strictly sorted in ascending order. Otherwise, return false.

function isSorted(numbers){
    let isSortedResult = true;
    for(let i=0; i < numbers.length - 1; i++){
        let prevNumber = numbers[i];
        let nextNumber = numbers[i+1];
        if(prevNumber >= nextNumber){
            isSortedResult = false;
            break;
        }
    }
    return isSortedResult;
}

const numbers = [4,5,8,9];
console.log(isSorted(numbers));