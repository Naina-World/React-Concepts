import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import DashComp from './Component/dashComp'
import LoginComp from './Component/loginComp'


function App() {
  const [Isloggedin, setIsloggedin] = useState(false)
  function toggleLogin(){
    setIsloggedin(!Isloggedin)
  }

  return (
    <>
     <h1>Conditional Rendering</h1>
     <button onClick={toggleLogin}>{Isloggedin?"Logout":"Login" }</button>
  {
    Isloggedin ? <DashComp/> : <LoginComp/>
  }          
  

    </>
  )
}

export default App
