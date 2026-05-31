import { useState } from 'react'

import './App.css'
import styled from 'styled-components';

const Naina = styled.button`
background-color: blue;
padding: 10px;
border-radius: 10px;
&:hover{
background-color: darkblue
}


`;


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Naina>
        Click Me
      </Naina>
    </>
  )
}

export default App
