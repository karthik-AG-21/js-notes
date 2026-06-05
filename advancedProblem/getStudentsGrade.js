const getGradeA = (students) => {

     return students.filter((person)=> person.grade ==="A").map(person => person.name).join("")
}

console.log(getGradeA([
 {name:"John",grade:"A"},
 {name:"Alex",grade:"B"}
]))