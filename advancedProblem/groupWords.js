
groupWords = (words)=>{
    let obj = {};

    words.forEach((word)=>{
        if(!obj[word.length]){
            obj[word.length] = word;
        }
        else{
            obj[word.length]=obj[word.length]+","+word
        }
    })
return obj
}


console.log(groupWords(["hi","cat","hello", "rat"]))