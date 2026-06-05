
const filterByLength = (Array, min , max) =>{
   return Array.filter((word)=>word.length>min && word.length<max)
}

console.log(filterByLength(["hi","hello","world"],2,6))