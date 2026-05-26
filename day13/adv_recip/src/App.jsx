import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './component/MainLayout'
import Home from './component/Home'
import Recipe from './component/Recipe'
import Favourites from './component/Favourites'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element ={<MainLayout/>}>
      <Route index element ={<Home/>} />
      <Route path='recipe/:id' element ={<Recipe/>}/>
      <Route path='favourites' element = {<Favourites/>}/>
      </Route>
     </Routes>
     
    </>
  )
}

export default App
