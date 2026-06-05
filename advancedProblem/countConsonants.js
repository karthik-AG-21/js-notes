
let count =0;
const countConsonants = (words) => {
     words.split(" ").map(word => word.split("").filter(char =>{
        if(!'aeiouAEIOU'.includes(char)){
            count++
        }
    } ))

    return count;
}

console.log(countConsonants("hello world"))