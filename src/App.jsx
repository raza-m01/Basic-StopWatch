import { useEffect, useRef, useState } from 'react'
import watchRing from './assets/watchRing.png'

function App() {
  const [second, setSecond] = useState(0)
  const [minute,setMinute]=useState(0)


  if(second>60){

    setSecond(0)
    setMinute(minute=>minute+1)

  }

  const intervalId=useRef(null);

  function startFunc(){

    intervalId.current=setInterval(()=>{
      setSecond(second=>second+1)
    },1000)
    
  }

  function stopFunc(){
    clearInterval(intervalId.current)
    intervalId.current=null
  }
  function reseFun(){
    stopFunc()
    setSecond(0)
    setMinute(0)
  }

  return (
    <>
      <div id='container' className='max-w-7xl mx-auto p-16  h-dvh lg:h-fit lg:mt-10 bg-gradient-to-br from-[#240b36] to-[#c31432] '>
         <div className='flex flex-col items-center p-4 '>

          <h2 className='text-4xl text-white font-bold'>Stop Watch</h2>

          

            <div className='w-72 m-10 h-32 border-2 rounded-lg border-black flex justify-center items-center'>
              <h2 className='text-5xl text-white font-semibold '><span>{second <= 9 ? "0" : ""}{second}</span>:<span>{minute <= 9 ? "0" : ""}{minute}</span></h2>

            </div>

            


            <div id='buttons' className='flex flex-col md:flex-row gap-10 mt-8 py-8 justify-center'>

              <button className='border border-gray-300 bg-[#240b36] text-lg px-8 py-2 text-white font-mediu rounded-md hover:bg-opacity-80 ' onClick={startFunc}>Start</button>
              <button className='border border-gray-300 bg-[#240b36] text-lg px-8 py-2 text-white font-mediu rounded-md hover:bg-opacity-80 ' onClick={stopFunc}>Pause</button>
              <button className='border border-gray-300 bg-[#240b36] text-lg px-8 py-2 text-white font-mediu rounded-md hover:bg-opacity-80 'onClick={reseFun}>Reset</button>
              

            </div>

              
    
          
         

         </div>

      </div>
    </>
  )
}

export default App
