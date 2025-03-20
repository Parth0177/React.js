import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setcolor]= useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200 p-0'
        style={{backgroundColor:color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white px-2 py-2 rounded-2xl'>
            <button onClick={()=>setcolor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:'red'}}>Red</button>
            <button onClick={()=>setcolor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:'green'}}>Green</button>
            <button onClick={()=>setcolor('yellow')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:'yellow'}}>Yellow</button>
            <button onClick={()=>setcolor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:'blue'}}>Blue</button>
            <button onClick={()=>setcolor('brown')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:'brown'}}>Brown</button>
            <button onClick={()=>setcolor('black')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:'black'}}>black</button>
            <button onClick={()=>setcolor('olive')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:'olive'}}>olive</button>
            <button onClick={()=>setcolor('cyan')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:'cyan'}}>cyan</button>
            <button onClick={()=>setcolor('violet')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:'violet'}}>violet</button>
            <button onClick={()=>setcolor('orange')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:'orange'}}>orange</button>
            <button onClick={()=>setcolor('indigo')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:'indigo'}}>indigo</button>
            <button onClick={()=>setcolor('grey')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:'grey'}}>grey</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
