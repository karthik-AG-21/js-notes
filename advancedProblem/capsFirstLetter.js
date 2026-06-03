const capitalizeFirstLetter = (words) =>{

    return   words.split(" ").map(word => word[0].toUpperCase()+ word.slice(1,word.length))

    
}


console.log(capitalizeFirstLetter("hello world"))