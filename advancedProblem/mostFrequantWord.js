

const mostFrequentWord = (words)=>{
    let obj = {}
    let heighest = "";
    words.split(" ").map(word =>{
        if(obj[word]){
            obj[word]++
        }else{
            obj[word] = 1
        }
    })

    for(let word in obj ){
        if(

            heighest === "" || heighest[word]> obj[word]){
                heighest = word;
            }
        }
    

    return heighest;
}

console.log(mostFrequentWord("apple banana apple apple"))