import { useState , useCallback ,useEffect } from 'react'

function App() {
  const [lenght, setLenght] = useState(6)
  const [isnumeric, setisnumeric] = useState(false)
  const [ischar, setischar] = useState(false)
  const [password , setpassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="qwertyuioplkjhgfdsazxcvbnmZXCVBNMLKJHGFDSAQWERTYUIOP"
    if(isnumeric) str+="0123456789"
    if(ischar) str+= "!@#$%^&*_+-="

    for (let index = 1; index <= lenght; index++) {
      let element = Math.floor(Math.random() * str.length + 1)
      // console.log(str.charAt(element))
      pass+=str.charAt(element)
    }
    console.log(pass)
    setpassword(pass)
  },[lenght,ischar,isnumeric,setpassword])
  useEffect(() => {
    passwordGenerator()
  }, [lenght,isnumeric,ischar,passwordGenerator])
  
  return (
    <>
      <div className=' text-center text-white bg-slate-900 mx-auto my-8 shadow-md rounded-2xl max-w-md px-4 py-8'>
        <div className='p-5 text-4xl'>Password Generator</div>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} readOnly className='bg-white w-full py-1 px-3 text-gray-950'/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={30}
              value={lenght}
              className='cursor-pointer'
              onChange={(e)=>{
                setLenght(e.target.value)
              }}
              />
              <label >Length:{lenght}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                type="checkbox" 
                defaultChecked={isnumeric}
                id="numberInput" 
                onClick={()=>{
                  setisnumeric((prev) => !prev)
                }}
              />
              <label htmlFor="numberInput">Numbers</label>

              <input 
                type="checkbox" 
                defaultChecked={ischar}
                id="charInput" 
                onClick={()=>{
                  setischar((prev) => !prev)
                }}
              />
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>
          
      </div>
    </>
  )
}

export default App
