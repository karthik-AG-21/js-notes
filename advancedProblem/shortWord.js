const findShortestWord = (words) => words.split(" ").reduce((largest , shorter)=> largest.length < shorter.length ? largest:shorter)

console.log(findShortestWord("I love programming"))



// const names =(array)=>{
//     return array.filter(person => person.grade === 'A').map(person => person.name).join("")

// }

// console.log(names([
//  {name:"John",grade:"A"},
//  {name:"Alex",grade:"B"}
// ]))