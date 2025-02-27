import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { increment, reset } from './feature/watch/WatchSlice'

function App() {
  const [isRunning, setIsRunning] = useState(false)
  const timesecond = useSelector((state) => state.stopwatch.second)
  const dispatch = useDispatch();
  const [minute,setMinute]=useState(0)
  if(timesecond>59){

    dispatch(reset())
    setMinute(minute=>minute+1)

  }

  let intervalId = useRef(null)

  function startWatch() {
    setIsRunning(true)
    intervalId.current = setInterval(() => {

      dispatch(increment())

    }, 1000)
  }

  function startFunc() {

    if (!isRunning)
      startWatch()
  }

  function stopFun() {
    clearInterval(intervalId.current)
    intervalId.current = null
    setIsRunning(false)

  }

  function resetFun() {
    stopFun();
    dispatch(reset())
    setIsRunning(false)
    setMinute(0)
  }

  return (
    <>
      <div id='container' className='max-w-7xl mx-auto p-16  h-dvh lg:h-fit lg:mt-10 bg-gradient-to-br from-[#240b36] to-[#c31432] '>
        <div className='flex flex-col items-center p-4 '>
          <h2 className='text-4xl text-white font-bold'>Stop Watch</h2>
          <div className='w-72 m-10 h-32 border-2 rounded-lg border-black flex justify-center items-center'>
            <h2 className='text-5xl text-white font-semibold '><span>{timesecond <= 9 ? "0" : ""}</span>{timesecond}:<span>{ }</span><span>{minute <= 9 ? "0" : ""}</span>{minute}</h2>
          </div>
          <div id='buttons' className='flex flex-col md:flex-row gap-10 mt-8 py-8 justify-center'>

            <button className='border border-gray-300 bg-[#240b36] text-lg px-8 py-2 text-white font-mediu rounded-md hover:bg-opacity-80 ' onClick={startFunc}>Start</button>
            <button className='border border-gray-300 bg-[#240b36] text-lg px-8 py-2 text-white font-mediu rounded-md hover:bg-opacity-80 ' onClick={stopFun} >Pause</button>
            <button className='border border-gray-300 bg-[#240b36] text-lg px-8 py-2 text-white font-mediu rounded-md hover:bg-opacity-80 ' onClick={resetFun}>Reset</button>

          </div>
        </div>

      </div>
    </>
  )
}


export default App
