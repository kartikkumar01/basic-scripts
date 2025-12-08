//Find the Largest number in array
const nums = [3, 7, 2, 9];

let assumedLargestNumber = nums[0];

nums.forEach(number => {
    if(number > assumedLargestNumber){
        assumedLargestNumber = number;
    }
});

const largestNumber = assumedLargestNumber;
console.log(largestNumber);

// The trick is to assume the first number to be the largest number and compare it with the next consecutive number.