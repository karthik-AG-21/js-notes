const reverse = (words) =>{
    return words.split(" ").map(word=>word.split("").reverse().join("")).join(" ")
}

console.log(reverse('i love javaScript'))