import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { email, setErrorMap, z } from "zod";

const schema = z.object(
  {
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid Email"),
    phone: z.string().regex(/^\d{10}$/, " Phone number has to be of 10 digit")

  }

);



function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [error, setError] = useState({});

  function handleclick(e) {
    e.preventDefault();
    const result = schema.safeParse({ name, email, phone });
    console.log(result);
    if (result.success) {
      alert("form has been submitted")
      console.log(result);
    }
    else {
      const fielderror = {}
      result.error.issues.forEach((err) => {
        fielderror[err.path[0]] = err.message
      });
      setError(fielderror)
    }
  }

  return (
    <>
      <form onSubmit={handleclick}>
        <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        {error.name && <p style={{ color: 'blue' }}>{error.name}</p>}

        <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        {error.email && <p style={{ color: 'blue' }}>{error.email}</p>}


        <input type="number" placeholder='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
        {error.phone && <p style={{ color: 'blue' }}>{error.phone}</p>}


        <button type='submit'>submit</button>
      </form>


    </>
  )
}

export default App
