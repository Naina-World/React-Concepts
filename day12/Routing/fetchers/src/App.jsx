import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2>React router fetcher</h2>
     <nav>
    <Link to='post/1'>
    Go to post 1
    </Link>
 
     </nav>
        <Outlet/>
    </>
  )
}

export default App
