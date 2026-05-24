import { useState } from 'react'

import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'


function App() {
 

  return (
    <>
    <Nav />

      <Routes>
        <Route path='/' element={<h2> Home page</h2>} />
      
        <Route path='/page1' element={<Page1 />} />
        
        <Route path='/page2' element={<Page2 />} />
      
        <Route path='/page3' element={<Page3 />} />


      </Routes>


    </>
  )
}

export default App
