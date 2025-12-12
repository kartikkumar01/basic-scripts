// Given an array of integers, return the second largest number. If the array has fewer than 2 distinct(unique) numbers, return null.

// function secondLargest(){}

//assuming all the numbers are unique
let numbers = [2,4,5,8,9];

let firstLargestNumber = numbers[0];
let secondLargetNumber = numbers[1];
for(let i = 2; i<numbers.length; i++){
    let nextNumber = numbers[i];
    if(nextNumber > firstLargestNumber){
        secondLargetNumber = firstLargestNumber;
        firstLargestNumber = nextNumber;
    }else if(nextNumber > secondLargetNumber){
        secondLargetNumber = nextNumber;
    }
}