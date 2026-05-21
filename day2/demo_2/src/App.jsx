import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const array = ['Naina', 'Anjali', 'Dolly'];

  return (
    <>
      {array.map((Elem,ind) => {
        return (
          <ul>
            <li key={ind}>
              {Elem}
            </li>
          </ul>

        );

      }
      )}

    </>
  )
}

export default App
