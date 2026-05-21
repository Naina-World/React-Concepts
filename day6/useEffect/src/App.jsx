import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState("")
  const [count, setCount] = useState(0)
  function Inc() {
    setCount(count + 1)
  }
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((resp) => resp.json())
      .then((data) => setData(data));
    console.log("ApI running");
  
  }, [count])

  return (
    <><button onClick={Inc}>Increment</button>
      <br />
      {count}
    </>
  )
}

export default App
