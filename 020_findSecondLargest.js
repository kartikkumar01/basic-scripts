//Given an array of integers, return the second largest number.
function secondLargest(numbers) {
    if (numbers.length < 2) {
        return null;
    }

    let firstLargestNumber;
    let secondLargestNumber = null;

    if (numbers[0] > numbers[1]) {
        firstLargestNumber = numbers[0];
        secondLargestNumber = numbers[1];
    } else if (numbers[1] > numbers[0]) {
        firstLargestNumber = numbers[1];
        secondLargestNumber = numbers[0];
    } else {
        firstLargestNumber = numbers[0];
        secondLargestNumber = null;
    }

    for (let i = 2; i < numbers.length; i++) {
        let nextNumber = numbers[i];

        if (nextNumber > firstLargestNumber) {
            secondLargestNumber = firstLargestNumber;
            firstLargestNumber = nextNumber;
        } else if (
            nextNumber < firstLargestNumber &&
            (secondLargestNumber === null || nextNumber > secondLargestNumber)
        ) {
            secondLargestNumber = nextNumber;
        }
    }

    return secondLargestNumber;
}


const numbers = [5, 4, 7, 55, 2];

console.log(secondLargest(numbers));