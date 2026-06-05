let obj = {}
const charFrequency = (word)=>{
  word.split("").forEach(char => {
    if(obj[char]){
        obj[char]++
    }else{
        obj[char] = 1;
    }
  })
  return obj

}

console.log(charFrequency("hello"))