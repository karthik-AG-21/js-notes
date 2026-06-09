// setInterval(() => {
//   console.log("Hello");
// }, 100);


// setTimeout(()=>{
//     console.log("guys")
// },3000)



// function add (){
//     console.log("2")
// }

// function two (){
//     add()
//     console.log("1")

// }

// two()


// console.log("A")

// setTimeout(()=> {
//     console.log("B")
// },0)

// console.log("C")


// promises


// const task = new promise((resolve)=>{
//     resolve("done")
// });

// task.then(data => console.log(data)) 

 // 

// console.log(a)
// console.log(b)
// console.log(c)

// const a = 10;
// let b = 10;
// var c = 10;

// greet();

// function greet() {
//   console.log("Hello");
// }
                  

// setTimeout(() => {
//   console.log("First");
// }, 2000);

// console.log("Second");


// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 1000);

// console.log(3);

// setTimeout(() => {
//   console.log(4);
// }, 0);


// setTimeout(() => {
//   console.log("Step 1");

//   setTimeout(() => {
//     console.log("Step 2");

//     setTimeout(() => {
//       console.log("Step 3");
//     }, 1000);

//   }, 1000);

// }, 5000);




// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => {
//   console.log(res);
// });




// let obj ={
//     name:"karthik",
//     age: 22,
//     place:"kerala"
// }

// console.log(obj)

// let data  = JSON.stringify(obj)

// console.log(data)

// let newObj = JSON.parse(data)

// console.log(newObj)


// newObj = {name:"karthik", place:"kerala"}

// console.log(newObj)

// let newJson = JSON.stringify(newObj)

// console.log(newJson)

// let convertedJson = JSON.parse(newJson)

// console.log(convertedJson)


// const employee = {
//     id: 1,
//     name: "Karthik",
//     skills: ["HTML", "CSS", "JavaScript"],
//     active: true
// };

// let jsonEmp = JSON.stringify(employee)
// console.log(jsonEmp)

// let newEmp = JSON.parse(jsonEmp)

// console.log(newEmp)

// console.log(employee.skills[1])



//callback hell

// setTimeout(()=>{
//     console.log("login")

//     setTimeout(()=>{
//         console.log("fetch user")

//         setTimeout(()=>{
//             console.log("fetch orders")
//             setTimeout(()=>{
//                 console.log("show orders")
//             },2000)
//         },2000)
//     },2000)
// },2000)

// setTimeout(()=>{
//     console.log("start project")
//     setTimeout(()=>{
//         console.log("connect database")
//         setTimeout(()=>{
//             console.log("fetch users")
//             setTimeout(()=>{
//                 console.log("send emial")
//                 setTimeout(()=>{
//                     console.log("project end ")
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)


// const p = new Promise((resolve , reject)=>{
//     reject('error in finding')

// })

// p.then(data => console.log(data)).catch(error => console.log(error))


// let payment = false;
// const p = new Promise((resolve , reject)=>{
//     if(payment){
//         resolve("payment is success")
//     }else{
//         reject("error in payment")
//     }
// })
// p.then(data => console.log(data)).catch(error => console.log(error))



// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => {
//     console.log(res.status)
//         console.log(res.ok);
//         return res.json();

//     })

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => {
//     console.log(res.status)
//         console.log(res.ok);
//         return res.json()
//         .then(data=> {
//             const  user = data.find(user => user.id === 5);
//             console.log(user)
//         }).catch(error => {console.log('something wrong');
//         console.log(error)})
            

//     })


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json()).then(data=>{const user = data.filter(user => user.id == 11)
//     console.log(user)
// }).catch(error => console.log(error))


// const user = {
//     name: "Karthik",
//     email: "karthik@gmail.com"
// };

// fetch("https://jsonplaceholder.typicode.com/users", {
//     // fill here
//     method: "POST",
//     header:{"Content-Type":"application/json"},
//     body : JSON.stringify(user)
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));


// async function getUsers() {
//     try {
//         const res = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         const data = await res.json();

//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getUsers();

// async function test() {
//     try {
//         await Promise.reject("Something failed");

//         console.log("This won't run");
//     } catch (error) {
//         console.log(error);
//     }
// }

// test();



// async function test() {
//     try{
//         const res  = await fetch("https://jsonplaceholder.typicode.comusers");
//       const data = res.json()
//       console.log(data)  
//     }catch(error){
//         console.log(error)
//     }
// }
// test();


// class Car {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }

// //   drive() {
// //     console.log(this.brand + " is driving");
// //   }
// }

// const car1 = new Car("Toyota", "Red");
// const car2 = new Car("BMW", "Black");

// // car1.drive();
// // car2.drive();



// class Car {
//     constructor(brand, color){
//         this.brand = brand;
//         this.color = color;
//     }

//     drive(){
//         console.log(this.brand + " is driving")
//     }
// }

//    const car1 = new Car('TOYOTA', "red");
//    const car1 = new Car('BMW', "black");


//    car1.drive();
//    car2.drive();



// class bike{
//     constructor(brand, color){
//         this.brand = brand ;
//         this.color = color;
//     }
//     ride(){
//         console.log(this.brand + " is riding")
//     }

//    }

//    const bike1 = new bike("yamaha", "red")
//    const bike2 = new bike("hero", "black")

//    bike1.ride();
//    bike2.ride();

// const a = 10;
// let age = 20;
// console.log(age)

// let name = "karthik"

// if(name === "karthik"){
//     let age = 20
//     console.log(age)
// }
// console.log(age)

// let age = 20;

// {
//     var age = 30;
// }

// console.log(age)