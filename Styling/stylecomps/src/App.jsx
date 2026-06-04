import { useState } from 'react'

import './App.css'
import styled from 'styled-components';

const Naina = styled.button`
background-color: ${(props)=>(props.primary?'blue':'gray')};
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

      <Naina primary = "true">
        Click Me
      </Naina>
      <Naina>Click me 2</Naina>
    </>
  )
}

export default App
