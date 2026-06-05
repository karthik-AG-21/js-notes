




const wordFrequency =(words)=>{
    let obj = {}
    words.split(" ").forEach(word => {
        if(obj[word]){
            obj[word]++
        }else{
            obj[word]= 1
        }
    })
    return obj
}

console.log(wordFrequency("apple banana apple"))