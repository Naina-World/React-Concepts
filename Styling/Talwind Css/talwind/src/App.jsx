import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Profile from './components/Profile'
import Buttons from './components/Buttons'
import Flexbox from './components/Flexbox'
import Grid from './components/Grid'
import Container from './components/Container'
import Arbitory from './components/Arbitory'
import ProductCard from './components/ProductCard'
import Dark from './components/Dark'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='bg-gray-100 flex justify-center items-center min-h-screen p-4'>
        <Profile /> */}
        {/* <Buttons/> */}
        {/* <Flexbox/> */}
        {/* <Grid/> */}
      {/* </div> */}
      {/* <Container/> */}
      {/* <Arbitory/> */}
      {/* <ProductCard/> */}
      <Dark/>
    </>
  )
}

export default App
