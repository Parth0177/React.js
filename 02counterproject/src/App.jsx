import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)

  //let counter=15

  const addvalue=()=>{
    if(counter===20){
      setCounter(counter=20)
    }else{
    
    //counter=counter+1
    setCounter(counter+1)
    }
  }
  const subValue=()=>{
    if(counter===0){
      setCounter(counter=0)
    }else{
    
    //counter=counter-1
    setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addvalue}>Add Value</button>
      <br></br>
      <button 
      onClick={subValue}>Subtract Value</button>
    </>
  )
}

export default App
