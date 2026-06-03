
const charFrequency = (word)=>{
    let empty = {}
   word.split("").forEach(char =>{
        if(empty[char]){
              empty[char]++
        }else{
             empty[char]=1;
        }
    })
    return empty
}

console.log(charFrequency("hello"))