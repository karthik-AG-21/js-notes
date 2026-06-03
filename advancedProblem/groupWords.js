
groupWords = (words)=>{
    let obj = {};

    return words.forEach((word)=>{
        if(obj[word]){
            return obj[word.length] = word;
        }
    })

}


console.log(groupWords(["hi","cat","hello"]))