import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { email, z } from 'zod'

const signupschema = z.object({
  username: z.string().min(1, "username required"),
  email: z.string().email('invalid email'),
  password: z.string().min(6, "password must be at least 6 character"),
  confirmPassword: z.string(),

})

  .refine((data) => data.password === data.confirmPassword, {
    message: "password do not match",
    path: ["confirmPassword"],
  }
  );



function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handlesubmit = (e) => {

    e.preventDefault();

    const result = signupschema.safeParse({
      username, email, password, confirmPassword,
    });
    console.log(result);
    setErrors([])
    if (result.success) {
      alert("signup successful");
      console.log("user has been registered", result.data);

    }
    else {
      const allerrors = result.error.issues.map((err) => err.message );
      setErrors(allerrors);
     

    }

  };


  return (
    <>

      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />

        <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />

        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <input type="password" placeholder='confirmpassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

        <button type='submit'> Signup</button>

        {errors.length > 0 && (
          <div style={{ color: 'red' }}>
            <ul>
              {errors.map((msg, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ul>

          </div>
        )}

      </form>


    </>
  )
}

export default App
