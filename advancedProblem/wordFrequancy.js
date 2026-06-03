




const wordFrequency =(words)=>{
    
    let empty = {}
    words.split(" ").map(word =>{
        if(empty[word]){
            empty[word]++
        }else{
            empty[word] = 1;
        }
    })
    return empty;
}

console.log(wordFrequency("apple banana apple"))