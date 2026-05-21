import { useEffect, useState } from 'react'

import './App.css'
import Timer from './component/Timer'

function App() {
 

  const [timers, setTimers] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addTimer = (() => {

    setTimers((prev) => [...prev, nextId]

    );
    setNextId((prev) => prev + 1);
  });

  const removeTimer = (id)=>{
    setTimers((prev)=> prev.filter((timerid) => timerid !== id ));

  };

  return (
    <>
      <button onClick={addTimer}> Start Timer</button>
      {timers.map((id)=>(
        <Timer  key = {id} id = {id} fxn={removeTimer}/>
      ))}
    </>
  )
}

export default App
