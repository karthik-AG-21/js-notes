const capitalizeFirstLetter = (words) =>{

   return words.split(" ").map(word => word.charAt(0).toUpperCase()+word.slice(1))

    
}


console.log(capitalizeFirstLetter("hello world"))