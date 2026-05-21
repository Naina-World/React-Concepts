import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

function Home() {
    const {theme,toggleTheme} = useContext(ThemeContext)
  return (
    <div>
      <h2>
        Current theme  : {theme}
      </h2>
      <button onClick={toggleTheme}> 
        Switch to : { theme === 'light' ? 'Dark': 'Light'}
      </button>
    </div>
  )
}

export default Home
