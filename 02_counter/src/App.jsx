import { useState } from 'react';


import './App.css'

function App() {

useState(15)

 let counter = 15

 const addValue = () => {
  console.log("clicked ", counter);
   counter = counter + 1
 }
  return (
    <>
     <h1>My first project of React</h1>
     <h1>Counter value: {counter}</h1>

     <button
     onClick={addValue}
     >Add Value </button>
     <br />
     <button>Remove Value</button>

    </>
  )
}

export default App
