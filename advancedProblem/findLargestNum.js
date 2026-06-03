const findLargest =(numbers)=>{
   return  numbers.reduce((max , min)=>max>min ? max:min)
}

console.log(findLargest([5,10,20,8]))