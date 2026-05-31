import { useState } from 'react'


function App() {
  const styling = {
    color: 'red',
    fontWeight: 'bold',
  }
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{backgroundColor:'blue',borderRadius: '40px'}}>
        <h2 style={styling}>Welcome to inline css</h2>
      </div>

    </>
  )
}

export default App
