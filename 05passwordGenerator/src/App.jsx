import { useState , useCallback ,useEffect , useRef} from 'react'

function App() {
  const[length,setlength] = useState(8)
  const[numberAllowed,setnumberAllowed]=useState(false)
  const[specialAllowed,setspecialAllowed]=useState(false)
  const[password,setpassword]=useState('')

  // USE REF HOOK

  const passwordref=useRef(null)

  const passwordGenerator= useCallback(()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str+='0123456789'
    if (specialAllowed) str+='!@#$%^&*()_+'
    for(let i=1;i<=length;i++){
      pass+=str.charAt(Math.floor(Math.random()*str.length+1))
    }
    setpassword(pass)

  },[length,numberAllowed,specialAllowed,setpassword])

  const copypasswordtoClipboard=useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,9999)
    window.navigator.clipboard.writeText(password)
  },[password]) 

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,specialAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-900'>
        <h1 className='text-white text-center my-3 text-xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text'value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordref}/>
          <button onClick={copypasswordtoClipboard}className='bg-orange-500 text-white px-4'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={30} value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}}></input>
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' checked={numberAllowed} id="numberInput" onChange={()=>{setnumberAllowed((prev)=>!prev)}}></input>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' checked={specialAllowed} id="specialInput" onChange={()=>{setspecialAllowed((prev)=>!prev)}}></input>
            <label htmlFor="specialInput">Characters</label>
          </div>
          
        </div>
      </div>
      

    </>
  )
}

export default App
