import React from 'react'
import './Controls.css'

const Controls = ({startStop,isRunning,reset}) => {
  return (
    <div>
      <section className="control">
        <button 
        className="reset"
        onClick={reset}
        >
          Reset
          </button>
        <button  
        onClick ={startStop}
        className={`start-stop ${isRunning ? 'red' :"" }`}>
          {isRunning ? 'Stop' : 'Start'}
          
          </button>
      </section>
    </div>
  )
}

export default Controls
