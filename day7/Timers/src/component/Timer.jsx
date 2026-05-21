import React, { useEffect, useState } from 'react'

function Timer({id,fxn}) {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        console.log(`Timers ${id} starts`);
        const Interval = setInterval(()=>{
            setSeconds((prev) => prev + 1 );
        },1000);

        return() =>{
          clearInterval(Interval);
          console.clear(`timer ${id} cleared`);
        }
    },[id]);

  return (
    <div style={{margin : "10px" , padding : "10px", border: " 1px solid white"}}>
      Timer {id} : {seconds} second(s)
      <button onClick={()=> fxn(id)}> Remove Timer</button>
    </div>
  )
}

export default Timer
