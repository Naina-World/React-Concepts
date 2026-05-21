import { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState("")
  function handleSubmit(e){
    e.preventDefault();
    alert(` form submitted ${name}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text"
        value={name}
        onChange={(e)=>{
          setName(e.target.value)
        }} />

        <button type='submit'>Submit</button>

      </form>
      
             
              
            
    </>
  )
}

export default App
