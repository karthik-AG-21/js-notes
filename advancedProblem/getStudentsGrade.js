const getGradeA = (students) => {
     return students.filter(student => student.grade === 'A').map(person => person.name)
}

console.log(getGradeA([
 {name:"John",grade:"A"},
 {name:"Alex",grade:"B"}
]))