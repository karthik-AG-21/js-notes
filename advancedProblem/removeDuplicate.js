
const removeDuplicates = (array) => {
let empty = [];
    array.forEach(num =>{
        if(!empty.includes(num)){
            empty.push(num)
        }
    })
    return empty
}

console.log(removeDuplicates([1,2,2,3,4,4,5]));