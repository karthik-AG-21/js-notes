
// const secondLargest = (numbers) =>{
    
//     let secondLargest = numbers.reduce((smallest, largest,second)=>{
//        if(second<largest && second>smallest){
//         return second
//        }
//     })
//     return secondLargest;


// }
// console.log(secondLargest([5,10,20,8]))



// let secondLargest = 0;


// let array = [10,20,1,2,50,44,3]
// let largest = array[0];

// for(let i =0; i<array.length;i++){
//     if(array[i]>largest){
//         secondLargest = largest;
//         largest = array[i]
//     }else if(array[i]>secondLargest && array[i]!==secondLargest){
//         secondLargest = array[i]
//     }

// }
// console.log(secondLargest)



// const secondLargest = (numbers)=>{
//    let odered = numbers.sort((a,b)=> a-b)
//    return odered[odered.length-2]
// }

// console.log(secondLargest([10,2,3,55,8,45,63]))

const secondSmallest = (number)=>{
   number.sort((a,b)=> a-b )
   return   number[1]
   
}

console.log(secondSmallest([10,2,3,55,8,45,63]))