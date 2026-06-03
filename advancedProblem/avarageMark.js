const avarage = (students)=>{
   return students.map(student => student.mark).reduce((sum,score)=> sum+score/2,0)
}

console.log(avarage([{name:"John",mark:80},{name:"Alex",mark:90}]))
