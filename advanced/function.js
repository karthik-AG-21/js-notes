





// console.log(exicution(10,20))

//can't access the function cuz it is function expresion 
// also called as anonymous function and function literals


// let exicution = function(a,b){
//     let c = a+b;
//     return c

// }

// console.log(exicution(10,20)) //only calling after the function declaration

// function can be assign to other variable let name = function


// function can be passed as arguments   




let a = 10

function outer() {
  let b = 20

  function inner() {
    let c = 30

    console.log(a) // accessible
    console.log(b) // accessible
    console.log(c) // accessible
  }

  inner()
}

outer()