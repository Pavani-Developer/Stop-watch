import React from 'react'
import './Display.css'

const Display = ({time}) => {

  function formatTime(timeInSecs){
    const hours = Math.floor(timeInSecs /3600);
    const minutes = Math.floor(timeInSecs % 3600/60);
    const seconds = timeInSecs % 60 

    return {
      hours,minutes,seconds
    }
  }
  return (
    <div>
      <section className="display">
        <div className="hours">
            <span className="number">{String(formatTime(time).hours).padStart(2,"0")}</span>
                <label>Hours</label>
            
        </div>
        <span>:</span>
        <div className="minutes">
            <span className="number">{String(formatTime(time).minutes).padStart(2,"0")}</span>
            <label>Minutes</label>
        </div>
        <span>:</span>
        <div className="seconds">
            <span className="number">{String(formatTime(time).seconds).padStart(2,"0")}</span>
            <label>Seconds</label>

        </div>
      </section>
    </div>
  )
}

export default Display
