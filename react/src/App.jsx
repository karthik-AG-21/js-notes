import React from "react";


function App(){

const element = <h2>hello guys</h2>
  const  text=  React.createElement(
    "h1",
    {className:"text"},
    "hello world"
  )

  return (
  <div>
    <h1>Hello React</h1>
    {element}
    {text}
  </div>
  )

  
}
export default App