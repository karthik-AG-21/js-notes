const longest = (words)=>{
    // let array = words.split(" ").sort((a,b)=> b.length - a.length);
    // return array[0]
    return words.split(" ").reduce((max,min) => max>min?max:min)
}

console.log(longest("i love javaScript programming language"))