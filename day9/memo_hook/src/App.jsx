import { useState,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

 const multiply = useMemo(
  function multiply() {
    console.log("multiply invoked");

    return add * 10;
  },
  [add]
 );




  return (
    <>
      <button onClick={() => setAdd(add + 1)}>Click to add : {add}</button>
      <br />
      <hr />
      {multiply}

      <br />
      <hr />
      <button onClick={() => setMinus(minus - 1)}>Click to subtract : {minus}</button>

    </>
  )
}

export default App
