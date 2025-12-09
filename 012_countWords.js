//Count the words which are greater than 4 characters
const words = ["apple", "banana", "kiwi", "mango"];
let wordCount = 0;
//Clever Code
// words.forEach(word => word.length > 4 ? wordCount++ : null);

//Cleaner Code
words.forEach(word => {
    if(word.length > 4){
        wordCount++;
    }
})
console.log(wordCount);

// clear code > clever code every time.