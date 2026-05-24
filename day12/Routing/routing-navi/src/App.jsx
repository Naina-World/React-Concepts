import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Footer from './components/Footer'
import MainLayout from './components/MainLayout'
import Home from './components/Home'
import Data from './pages/Data'
import GreetUser from './components/GreetUser'



function App() {


  return (
    <>


      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path='/page1' element={<Page1 />} />

          <Route path='/page2' element={<Page2 />} />

          <Route path='/page3' element={<Page3 />} />
          <Route path='data/:UserId?' element = {<Data/>}/>
          <Route path='/greet' element = {<GreetUser/>}/>
          <Route path='*' element = {<h2> 404 page not found </h2>}/>

       


        </Route>

      </Routes>



    </>
  )
}

export default App
