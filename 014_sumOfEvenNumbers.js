// Given an array of integers, return the sum of only the even numbers.
function sumEven(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number % 2 == 0) {
            sum += number;
        }
    }

    return sum;
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumEven(numbers));