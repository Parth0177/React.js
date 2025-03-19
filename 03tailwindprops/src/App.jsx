// PROPS COMPONENT KO BNATA HAI REUSABLE
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl mb-8'>Tailwind Test</h1>
      <Card username="Parth" />
      <Card username="Vedanshi"/>
      <Card username="Parthiiiiiii"/>
    </>
  )
}

export default App
