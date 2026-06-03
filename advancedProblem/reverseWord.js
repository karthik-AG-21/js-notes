const reverse = (words) =>{
    let array = words.split(" ")
    return array.map(word=>word.split("").reverse().join("")).join(" ")
}

console.log(reverse('i love javaScript'))