import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Test from './component/Test'

function App() {
  const testRef = useRef();
  const btnClicked = (
    () => {
      console.log(testRef.current);
    }
  )

  return (
    <>

      <Test ref={testRef}/>
      <button onClick={btnClicked}>Console</button>
    </>
  )
}

export default App
