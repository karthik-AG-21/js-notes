const avarage = (students)=>{
  return students.map(person => person.mark).reduce((sum,mark)=> sum+mark/2,0)
}

console.log(avarage([{name:"John",mark:80},{name:"Alex",mark:90}]))
