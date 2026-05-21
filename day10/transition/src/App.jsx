import { useState, useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const names = [...Array(100000)].map((_, i) => `person ${i+1}`);

function App() {
  const [input, setInput] = useState("");
  const [filteredlist, setFilteredlist] = useState(names);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    e.preventDefault();
    const value = e.target.value;
    setInput(value)
    startTransition(() => {
      const filtered = names.filter((name) => name.toLowerCase().includes(value.toLowerCase()));
      setFilteredlist(filtered);
    })

  }


  return (
    <>
      <h2>Search Name</h2>
      <input type="text" onChange={handleChange} value={input} placeholder='search' />
      {isPending && <p style={{color: "orange"}}> Filtering List.....</p>}
      <ul>
        {filteredlist.slice(0,50).map((name,idx)=>(
          <li key={idx}>{name}</li>
        ))}
      </ul>

    </>
  )
}

export default App
