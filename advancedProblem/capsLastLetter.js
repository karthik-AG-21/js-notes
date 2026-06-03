const lastLetter = (words) => {
    return words.split(" ").map(word => word.slice(0,word.length-1) + word[word.length-1].toUpperCase()).join(" ")
}

console.log(lastLetter('hello world javascript'))