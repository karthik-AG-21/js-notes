//  1) uppercase a letter in  a array

// const toUpper = (array)=>{
//     return array.map(name => name.toUpperCase())

// }

// let result =toUpper(["karthik", "jithin"])

// console.log(result)


// 2) add 5 to every number

// const addNum =(numbers)=>{
//    return  numbers.map(number => number+5)
// }

// console.log(addNum([1,2,3,4,5,6]))


// // 3) get even numbers

// const getEven =(numbers)=>{
//     return numbers.filter(num => num%2===0)
// }

// console.log(getEven([2,3,4,5,6,8]))


// 4)get names that letters greater than 4

// const largerWords = (words)=>{
//     return words.filter(name => name.length > 4)
// }

// console.log(largerWords(['karthik', "varun", "riya"]))


// 5) sum of all numbers


// const sum = (numbers)=>{
//    return numbers.reduce((sum,curr)=> sum+curr,0)

// }

// console.log(sum([1,2,3,4,5,6,7,8,9,10]))


// // 6) count total charecters

// const countChar = (word)=>{
//     return word.split(" ").reduce((char,curr)=> char +curr.length,0)
// }

// console.log(countChar('hey guys'))

// 7) square all numbers

// const squareNum =(numbers)=>{
//    return numbers.map(num => num*num)
// }

// console.log(squareNum([1,2,3,4]))


// // 8)remove duplicate numbers


// const duplicate = (...numbers)=>{
//     let unique = []
//     numbers.forEach(num => {
//         if(!unique.includes(num)){
//             unique.push(num)
//         }
//     })
//     return unique;
// }

// console.log(duplicate(2,3,4,5,5,6))


// shallow copy example:


// let obj1 ={
//     name:"karthik",
//     age:22,
//     place:"kerala",
    
// }

// let obj2 = {...obj1}

// console.log(obj2)
// obj1.age = 18;

// console.log(obj2)
// console.log(obj1)



// shallow copy best example and it wont change the inner or nested obj  only chnaging the outer or first  layer only 


// let objA ={
//     name:"karthik",
//     age:22,
//     place:"kerala",
//     address:{
//         place:"kerala",
//         city:"cherupuzha",
//         pin:670511
//     }
// }

// console.log("before copy" , objA)

// let objB = {...objA}

// console.log("new object B", objB)

// objB.address.city = "payyannur"

// console.log("after changing B",objA)
// console.log(objB)


// deep copy 

// let objA ={
//     name:"karthik",
//     age:22,
//     place:"kerala",
//     address:{
//         place:"kerala",
//         city:"cherupuzha",
//         pin:670511
//     }
// }  
// let objB = structuredClone(objA)

// console.log(objB)



// const wm = new WeakSet()

// let user = {
//     name: "karthik"
// }

// wm.set(user, "admin")

// console.log(wm.get(user))



// const wm = new WeakMap();

// let user = {
//     name: "Karthik"
// };

// wm.set(user);

// console.log(wm.get(user.name)); // Admin
