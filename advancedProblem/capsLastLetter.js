const lastLetter = (words) => {

    return words.split(" ").map(word => word.slice(0,-1) + word.at(-1).toUpperCase())
}

console.log(lastLetter('hello world javascript'))