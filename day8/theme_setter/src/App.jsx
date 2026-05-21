import { useState } from 'react'
import './App.css'
import { ThemeContext } from './ThemeContext'
import Home from './component/Home'

function App() {
  // const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const toggleTheme  = () => {
    setTheme((prev)=>(prev === "light" ? "dark" : "light"));
  };

  return (
    <>

      <ThemeContext.Provider value={{theme,toggleTheme}}>
        <div className= {theme === "dark" ? "dark-mode" : "light-mode"}>

         <Home/>

        </div>
      </ThemeContext.Provider>

    </>
  )
}

export default App
