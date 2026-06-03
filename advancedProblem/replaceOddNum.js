const replace = (nums) =>{
    return  nums.map(num=>{
        if(num%2===1){
           return "odd"
        }else{
            return num;
        }
    })
  
}

console.log(replace([1,2,3,4,5]))

// const replace = (nums) =>{
//     nums.forEach((num, index)=>{
//         if(num%2===1){
//             nums[index] = "odd"
//         }
//     })
//     return nums;
// }
// console.log(replace([1,2,3,4,5,6]))