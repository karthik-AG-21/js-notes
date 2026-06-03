const sortingWord=(names)=>{
  return names.sort((a,b)=>a.name.localeCompare(b.name))
}

console.log(sortingWord([
 {name:"Sam"},
 {name:"Alex"},
 {name:"John"}
]))