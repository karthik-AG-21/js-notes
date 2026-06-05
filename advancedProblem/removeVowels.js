

const removeVowels =(words)=>{
    return words.split(" ").map(word => word.split("").filter(char => !"aeiouAEIOU".includes(char)).join("")).join(" ")
}
console.log(removeVowels("Hello World"))