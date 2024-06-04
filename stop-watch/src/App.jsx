import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './components/Display'
import Controls from './components/Controls'

function App() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  function handleStartStop(){
    setIsRunning(!isRunning);
  }

  function handleReset(){
    setTime(0);
  }

 useEffect(() => {
  let interval;

  if(isRunning){
    interval = setInterval(() => {setTime(time+1)},1000)
  }
  return ()=> clearInterval(interval)

 },[time,isRunning])
  return (
    <>
    <section className="stopwatch">
    <h1>Stop Watch</h1>
    <Display time={time}/>
    <Controls isRunning={isRunning} startStop ={handleStartStop} reset={handleReset}/>
    </section>
    </>
  )
}

export default App
