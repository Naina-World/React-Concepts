import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Nav from './Components/Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/home' element={<Home />}> </Route>
        <Route path='about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
         <Route path='/' element={<Home />}></Route>
        


      </Routes>


    </>
  )
}

export default App
