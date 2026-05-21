import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'
import Updating from './component/Updating'
import Unmounting from './component/Unmounting'

function App() {
  const [showchild, setShowchild] = useState(0)
  useEffect(()=>{
    console.log("Parent Mounted")
  },[]);

  useEffect(()=>{
console.log("Parent Updated")
  },[showchild]);
  


  return (
    <>
    <h2>
      Understanding component life cycle (Unmounting)</h2>  
      {/* <button onClick={fxn}> Update the component</button> */}
      <input type="checkbox" onChange={(e)=>setShowchild(e.target.checked)} />
      <br />
     
      {showchild===true? <Unmounting/>:false}

      
           
    </>
  )
}

export default App
