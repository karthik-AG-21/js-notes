

const countConsonants = (word) => {
    let count = 0;
    word.split("").map(char => {
        if(!"aeiou".includes(char)){
            count++;
        }
    })
    return count
}

console.log(countConsonants("helloworld"))