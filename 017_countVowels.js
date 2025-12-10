//Find the number of vowels in a word

function countVowels(word) {
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        for (let x = 0; x < vowels.length; x++) {
            let vowel = vowels[x];
            if (letter == vowel) {
                vowelCount++;
                break;
            }
        }
    }

    return vowelCount;
}

console.log(countVowels('kartik'));