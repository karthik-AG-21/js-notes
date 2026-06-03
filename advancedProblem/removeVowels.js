

const removeVowels =(words)=>{
    return words.split("").map((char)=>{
        if("aeiouAEIOU".includes(char)){
            return ""
        }else{
            return char
        }
    }).join("")
}
console.log(removeVowels("Hello World"))