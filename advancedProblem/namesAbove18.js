const names = (students)=>{
    return students.filter(person => person.age>=18).map(person => person.name)
}



console.log(names([
 {name:"John",age:20},
 {name:"Alex",age:15}
]))