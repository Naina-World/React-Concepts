import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './component/MainLayout'
import Home from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element ={<MainLayout/>}/>
      <Route index element ={<Home/>} />
     </Routes>
     
    </>
  )
}

export default App
