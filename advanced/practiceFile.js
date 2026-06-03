// const arr = ["a", "b", "c"];

// for (let i in arr) {
//   console.log(i);
// }
// // 0 1 2 
// //  in not for array and in is for objects suites better 

// for (let value of arr) {
//   console.log(value);
// }
// // a b c  
// // of is better for array so display each element one after another



// let a = 10;

// function test() {
//   let b = 20;

//   if (true) {
//     let c = 30;
//     console.log(c);
//   }

//   console.log(b);
// }

// test()


// // 


// {
//   let y = 10;
// }
// console.log(y);



//reverse an array

// let arr = [1,2,3,4];

// let  num = arr.reverse();
// console.log(num)


//Find largest number
//must use spread operator ...


// let arr = [1,2,3,4];

// let larger = Math.max(...arr)

// console.log(larger)



//vowels in an array 

// without the method manual

// let text = "education";

// let count = 0;

// for(let char of text){
//     if(char === "a"||char === "e"||char === "i"||char === "o"||char === "u"){
//         count++
//     }
// }

// console.log(count)



// let text = "education";

// let vowels = 'aeiou'

// let count = 0;

// for(let char of text){
//     if(vowels.includes(char)){
//         count++
//     }
// }

// console.log(count)


// let fruits = ["apple", "mango", "orange"];

// MAP

// let nums = [1, 2, 3, 4, 5];

// let result = nums.map(num => num*num)

// console.log(result)



// let names = ["john", "alex", "sam"];

// let array = names.map(name => name.charAt(0).toUpperCase() + name.slice(1))

// console.log(array)


// filter

// find numbers that greater than 25
// let nums = [10,20,30,40,50];

// let great = nums.filter(num => num >= 25);

// console.log(great)


// let nums = [1,2,3,4,5,6,7,8];

// let odd = nums.filter(num => num%2 ===1)

// console.log(odd)


// //REDUCE
// let nums = [1,2,3,4];

// let result = nums.reduce((sum , num)=> sum+num,0)

// console.log(result)


// // largest number in a largest 

// let number = [20,30,50,100,150];


// let largest = number.reduce((larger, num)=> num>larger?num:larger)
// console.log(largest);



// forEach


// let arr = ['laptop', 'mobile', 'tv']


// arr.forEach(items =>{
//     console.log(items)
// })


// let number = [10,20,30,40];

// number.forEach(num =>{
//     console.log(num+"is  the number")
// })


// string methods

// 1) split

// let str = "hello world hello-world";

// let newStr = str.split("");
// console.log(newStr)


//  2) slice

// let str = "javaScript";

// console.log(str.slice(4,10))           

// console.log(str.slice(4))

// console.log(str.slice(-6))


// console.log(str)

// 3) substring

// console.log(str.substring(0,4))
// console.log(str.substring(-6))
// console.log(str.substring(4,0))
// console.log(str.substring(4))



// 4)  replace

// let str = "apple mango";

// console.log(str.replace('mango', "apple"))

// let word = "cat cat cat";

// console.log(word.replace("cat", "dog"))

// console.log(word.replaceAll("cat", "dog"))


// arrow function 






// iife
// (function(){
//     let sum =10+5;
//     console.log(sum)
// })()

// ((name)=>{
//     console.log("hello "+name)
// })("karthik")


// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const counter = outer();
// counter()

//  currying

// function add(a){
//     return function(b){
//     return a+b;
//     }
// }


// console.log(add(2)(3))


// const greet =(a)=>(b)=>a*b

// let value = greet(2);

// console.log(value(5))




// function longestWord(sentance){
//    let  array =sentance.split(" ");


//    let largest = array[0]


//    for(let i=1; i<array.length;i++){
//     if(largest.length < array[i].length){
//          largest = array[i]
//     }
//    }
//    return largest;

// }

// console.log(longestWord('i  love  programming  with  javaScript'))



// 2.	Create a function getStudentsWithoutGradeA(students) 
// that takes an array of student objects, where each student has a name and grade.
// The function should return an array 
// containing only the names of students whose grade is NOT "A". (3 score) 


// map always return a array ----

// let students = [{name:'karthik', grade:"A"},
//     {name:'karthik', grade:"B"},
//     {name:'Jithin', grade:"A"},
//     {name:'Ashwin', grade:"A"},
//     {name:'Abhi', grade:"B"} ]

// const getStudentsWithoutGradeA = (students) => {


//      return students.filter(person => person.grade !== "A").map(student => student.name);



// }

// console.log(getStudentsWithoutGradeA(students))


// 3.	Create a function named capitalizeWords that capitalizes 
// the last letter of each word.The input will be a string made up of multiple words separated by a single space.
//  Make sure the order of the words remains unchanged in the output. (2 score) 





function capitalizedWords  (word){
   let array = word.split(" ");

  let newArray =  array.map(last => last.slice(0,-1) + last.charAt(last.length-1).toUpperCase())


  return newArray
}


console.log(capitalizedWords("hello world"))



// //"hello world javascript"
// //capitalizing every word

const capital = (word) => {
  let array = word.split(" ");
  return array.map(item => item.charAt(0).toUpperCase().concat(item.slice(1)))


}

console.log(capital("hello world javascript"))



//capitalize the last letter

// const lastCap = (word) => {
//   let array = word.split(" ");
//   return array.map(item => item.slice(0,item.length-1)+item.charAt(item.length-1).toUpperCase())
// }

// console.log(lastCap("hello world javaScript"))


//every letter caps


// const capital = (word) =>{
//   let array = word.split(" ")

//   return array.map(item => item.toUpperCase())
// }

// console.log(capital("hello world javascript"))




// Return only the first letter of every word.



// const firstLetter = (word) =>{
//   let array = word.split(" ");

//   return array.map(item => item.charAt(0))

// } 

// console.log(firstLetter("hello word javascript"))


// // Capitalize the second letter of every word.


const secondLetter =  (word) =>{
  let array = word.split(" ")

  return array.map(item => item. slice(0,1)+ item.charAt(1).toUpperCase().concat(item.slice(2,item.length)))

}

console.log(secondLetter("hello world javascript"))


// capitalize the last letter




// const lastLetter = (word) =>{
//   let array = word.split(" ");

//  return array.map(item => item.slice(0,item.length-1) + item.charAt(item.length-1).toUpperCase())
// }

// console.log(lastLetter("hello world javaScript"))




// const letter = (word) => {
//  let array = word.split(" ");

//  return array.map(item => item.charAt(0).toUpperCase()+ item.slice(1,item.length-1)+ item.charAt(item.length-1).toUpperCase())

// }

// console.log(letter("hello world javaScript"))

//  let array =["mango", "apple","orange"]

//  for(items of array){
//   console.log(items)
//  }


// let numbers = [10,20,30,40,50];


// for(num of numbers){
//   console.log(num)
// }



// let numbers = [10,20,30,40,50];
// let sum = 0;
// for(num of numbers){
//    sum += num;

// }

//    console.log(sum)

// // Count how many properties exist in:


// let obj = {

//  name:"John",
//  age:20,
//  city:"TVM"
// }
//   let count =0;
// for(item in obj){
//   count++
// }
// console.log(count)

// Print only object values using for...in.

// let obj = {

//  name:"John",
//  age:20,
//  city:"TVM"
// }

// for(item in obj){
//   console.log(obj[item])
// }


// largest number


// let number = [5,9,12,3, -25];
// let largestNum = number[0]
// for(let num of number){
//   if(num>largestNum){
//     largestNum = num;
//   }

// }

// console.log(largestNum)

//find total characters

// let words = ["hi","hello","javascript"];
// let count = 0;
// for(let word of words){
//   count += word.length;
// }
// console.log(count)
// console.log(words.length); // 3


// let x = 10;

// {
//  let x = 20;
//  console.log(x);
// }

// console.log(x);

// output
// 10 
// 20

// create a function that return total properties
// countProperties(obj)


// const countProperties = (obj) =>{
//   let count = 0;
//   for(let keys in obj){
//     count++
//   }
// return count
// }

// console.log(countProperties({name:"karthik",age:21,place:"kerala",edu:"diploma"}))



// const countEvenNumbers = (arr) =>{

//   let count = 0;
//   for(let num of arr ){
//     if(num%2 === 0){
//       count++;
//     }else {
//       continue;
//     }
//   }
//   return count

// }

// console.log(countEvenNumbers([1,2,3,4,5,6,7,8,9]))


//upercase and lower case


// let string = "javascript";

// let newWord = string.toUpperCase()
// console.log(newWord)

// console.log(newWord.toLowerCase())


// splitinng the word and returning the array

// let string = "hello javaScript"

// console.log(string.split(" "))


// find the first characters 

// let string = "hello";

// console.log(string.charAt(0))
// console.log(string[0])


// replace the word java to javaScript


// let string = "i love java";


//  console.log( string.replace("java", "javaScript"))



// let string = "javascript";

// console.log(string.includes("script"))


// let string = "hello world";

// console.log(string.startsWith("h"))


// reversing string  and finding the tottal length or(words) of the string

// let words = "hello world javascript";

// let array = words.split(" ")
// console.log(array.length)



// console.log(array.reverse().join(" "))


// count vowels in a string

// let string = "education";

// let count = 0;
// for(let char of string){

//   if(char === "a" ||char ===  "e" || char ===  "i" || char === "o" ||char ===  "u"){
//      count++;
//   }
// }

// console.log(count)


// better options


//  let string = "education";
// let count = 0;

//  for(let char of string){
//   if("aeiou".includes(char)){
//     count++;
//   }
//  }
//  console.log(count)

// longest word in the  string

// const findLongestWord = (string) => {
//  let array = string.split(" ")
//  let longestWord = array[0]
//  for(let items of array){
//   if(longestWord.length < items.length){
//     longestWord = items;
//   }
//  }

//  return longestWord
// }

// console.log(findLongestWord("hello world javaScript programming"))



// capitalizeLastLetter(sentence)

// const capitalizeLastLetter = (words) => {
//   const array = words.split(" ");

// let  final = array.map(word => word.slice(0,-1) + word.charAt(word.length-1).toUpperCase())

// console.log(typeof final)
// return final.join(" ")
// }

// console.log(capitalizeLastLetter('hello world javascript'))


// let array = [1,2,3,4,5]

// push and unshift can pass argument that need to add in the string 

// pop and shift cant pass the arguments 

// unshift(0) --- first adding
// shift() --- first removing
// pop() ---- last removing 
// push(5) --- last adding

// array.push(6)
// console.log(array)
// array.pop()
// console.log(array)
// array.unshift(0)

// console.log(array)

// array.shift()

// console.log(array)


// let array = ["a","b","c"];

// let newStr = array.join("-")
// console.log(newStr)

// let collection =["names", "place", "age", "education"]

// removing a part but the original stay same 

// console.log(collection.slice(0,3))

// adding and removing happening at same time

// collection.splice(1,1,"language")

// console.log(collection)


// const array =[1,2,3,7,5]
// let biggestNum =array[0];
// for(num of array){
//   if(biggestNum < num ){
//     biggestNum = num;
//   }

// }

// console.log(biggestNum)


// const array =[1,2,3,7,5,0]
// let biggestNum =array[0];
// for(num of array){
//   if(biggestNum > num ){
//     biggestNum = num;
//   }
// }
// console.log(biggestNum)

//  console.log(Math.max(...array))

//  console.log(Math.min(...array))


// sort acsending


// let arr = ["banana", "apple", "Mango"];

// arr.sort((a,b)=> b.localeCompare(a ));

// console.log(arr);

// acending and decending 

// let number = [1,2,3,4,7,6];
// let words = ['mango', "apple", "Orange"];

// console.log(number.sort((a,b) => b-a))

// console.log(words.sort((a,b)=> b.localeCompare(a)))

// remove duplicate values

// let result = []
// const duplicate = (arr) => {
//     for(let item of arr){
//         if(!result.includes(item)){
//             result.push(item)
//         }
//     }
//     return result;

// }

// console.log(duplicate([1,2,3,2,3,4,5]))


// let largest = 0;

// let second = null;

// const secondLargest =(arr)=>{
//     largest = arr[0]
// for(let item of arr){
//     if(largest<item){
//         second = largest
//         largest = item;

//     }else if(largest > item && item > second){
//         second = item
//     }
// }
// return second;

// }

// console.log(secondLargest([-1,-7,-10,-100,-90]))




// //  map
// // double the value

// let arr =[1,2,3];

// arr.splice(1,1,4)
// arr.splice(1,1)

// console.log(arr)

// console.log(Math.max(...arr))
// console.log(Math.min(...arr))


// let array = [1,2,3,4,5,6]

// console.log(arr.sort((a,b)=> b - a))


// //remove duplicate values


// let number =[1,2,3,3,4,5,6];

// let newArray = [];

// for(let num of number){
//     if(!newArray.includes(num)){
//         newArray.push(num);
//     }
// }
// console.log(newArray)




// let values = [1,2,3,4];

// console.log(values.map( num => num*2))

// console.log(values)


// let names = ["john","alex"];
// console.log(names.map(name => name.toUpperCase()))
// console.log(names)

// let numbers = [1,2,3,4,5,6,50,70,30,2,11];

// console.log(numbers.filter(num => num%2 === 0))

// console.log(numbers.filter(num => num > 10))

// let names = ["john","alex", "karthik", "jerin"];

// console.log(names.filter(name => name.length>4))


// let values = [1,2,3,4]

// console.log(values.reduce((sum,num)=> sum +num , 0))


// let names = [
//  {name:"John",age:20},
//  {name:"Alex",age:25},
//  {name:"arun",age:17},
//  {name:"ashik",age:22}
// ]

// console.log(names.map(name => name.name)) // all names only

// console.log(names.filter((a)=> a.age>=18)) // full obj with  whos age is above 18

// // the person name only  who is greater than 18 yers old

// console.log(names.filter((a) => a.age>17).map(name => name.name))

// let students = [
//   { name: "karthik", grade: "A", marks: 85 },
//   { name: "arun", grade: "B", marks: 60 },
//   { name: "jithin", grade: "A", marks: 90 },
//   { name: "aswin", grade: "B", marks: 70 }
// ];

// const getStudentsWithoutGradeA = (students)=>{
// return (students.filter((a)=> a.grade !== 'A'))
// }

// console.log(getStudentsWithoutGradeA(students))


// const filterByLength = (students) => {
//     return  students.filter((person)=> person.name.length<5 )
// }

// let result = filterByLength(students);

// console.log(result)



// let students = [
//   { name: "karthik", grade: "A", marks: 85 },
//   { name: "arun", grade: "B", marks: 60 },
//   { name: "jithin", grade: "A", marks: 90 },
//   { name: "aswin", grade: "B", marks: 70 }
// ];


// const totalMarksOfA = (students)=>{
//    return  students.filter((person)=> person.grade === "A").map(person => person.marks).reduce((total, marks) => total + marks)
// }

// let result = totalMarksOfA(students);

// console.log(result)


// callback

// function add(a,b,callback){
//  let result = a+b;
//  console.log(callback());
//  return result;
// }

// function minimum(){
//     return  10+20;
// }





// console.log(add(10,20,minimum));



// iife function

// (function add(){
//     let sum = 10+10;
//     console.log(sum)
// })()


// // Create counter using closure.

// function outer(){
//     console.log("hello world");
//     let count = 10;

//     function inner(){
//          count++;
//          return count
//     }
//     return inner
// }

// const fn = outer()
// console.log(fn())
// console.log(fn())


// // function add(a){
// //     return function(b){
// //         return a+b
// //     }
// // }

// // console.log(add(10)(20))


// //rest parameter

// // const sum = (...nums)=>{
// //     return nums.reduce((sum,num)=> sum + num,0)
// // }

// // let result = sum(10,20,30,40)

// // console.log(result)

// // // spread operator


// // let num1 = [1,2,3,4,5];
// // let num2 = [6,7,8,9,10];

// // let total = [0, ...num1, ...num2]

// // console.log(total)

// // // copying a object using spred operator

// let user = { name: "Karthik", age: 20 };

// let copied = { ...user}

// console.log(copied)

// Array destructuring.


// let {name , age} = user;

// console.log(name)

// let [a,b,...c] = num1;

// console.log(a)
// console.log(b);
// console.log(c)



// this refers to the object that is calling the function.

// const user = {
//   name: "Karthik",
//   greet: function () {
//     console.log(this.name);
//   }
// };

// user.greet(); 


// call()


// function greet() {
//   console.log(this.name);
// }

// const user = { name: "Karthik" };

// greet.call(user);



// // apply()

// function add(a, b) {
//   console.log(this.name);
// //   console.log(a + b);
// }

// const user = { name: "Karthik" };

// add.apply(user);



// // bind()

// function greet() {
//   console.log(this.name);
// }

// const user = { name: "Karthik" };

// const boundFunc = greet.bind(user);

// boundFunc();


// findLongestWord(sentence)


// const findLongestWord = (sentence) => {
//     let group = sentence.split(" ");
//     let largest = group[0];
//     for (let word of group) {
//         if (word.length > largest.length) {
//             largest = word
//         }
//     }
//     return largest
// }
// console.log(findLongestWord("hello world world javaScript programming"))

const getStudentsWithoutGradeA=(data)=>{
    return data.filter(std => std.grade!='A')

}
console.log(getStudentsWithoutGradeA([{ name: "karthik", grade: "A", marks: 85 },
  { name: "arun", grade: "B", marks: 60 },
  { name: "jithin", grade: "A", marks: 90 },
  { name: "aswin", grade: "B", marks: 70 }]))


