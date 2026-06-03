const countVowels = (words) => {
    let count = 0;
    words.split("").map(char => {
        if ('aeiou'.includes(char)) {
            count++
        }
    })
    return count
}
console.log(countVowels("javascript"))