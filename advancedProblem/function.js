// const add = (...numbers)=>{
    
//     return numbers.reduce((sum,curr)=> sum+curr,0)
// }

// console.log(add(2,3,4,5,6,))(1)(2)





// obj ={
//     place:"kerala"
// }

// function greet(name){
    
//     console.log(name+" is come from "+ this.place )

// }

// greet.apply(obj, ['karthik'])


// function greet(name){
//     console.log("hello "+name)
// }


// function add(callback){
//     callback('karthik');
// }



// add(greet)



const products = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 25000,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    category: "Accessories",
  },
  {
    id: 4,
    name: "Keyboard",
    price: 1500,
    category: "Accessories",
  },
  {
    id: 5,
    name: "Mouse",
    price: 800,
    category: "Accessories",
  },
  {
    id: 6,
    name: "Monitor",
    price: 12000,
    category: "Electronics",
  },
  {
    id: 7,
    name: "Backpack",
    price: 1200,
    category: "Bags",
  },
  {
    id: 8,
    name: "Water Bottle",
    price: 300,
    category: "Lifestyle",
  },
  {
    id: 9,
    name: "Smart Watch",
    price: 5000,
    category: "Wearables",
  },
  {
    id: 10,
    name: "Gaming Chair",
    price: 10000,
    category: "Furniture",
  },
];


const totalPrice =(products)=>{
    return products.filter(product => product.category === "Electronics").reduce((sum ,curr)=>{
      sum+curr,0
    })

}

console.log(totalPrice(products))