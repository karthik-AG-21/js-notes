
findSmallest = (numbers) =>{
    return numbers.reduce((max,min)=> max>min?min:max)
}

console.log(findSmallest([5,10,20,8]))