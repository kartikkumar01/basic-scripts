const nums = [-3, 5, 7, -1, 4];

let sum = 0;
nums.forEach(num => {
    if(num > 0){
        sum = sum + num;
    }
})

console.log(sum);


// This is exactly the same “Pick → Check → Update” pattern you used for the largest number — you’re noticing these patterns, which is key for strong logic building.