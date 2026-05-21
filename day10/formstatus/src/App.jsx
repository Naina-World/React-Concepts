import { useState } from 'react'

import './App.css'
import { useFormStatus } from 'react-dom'

async function saveData(formData) {
  await new Promise((resolve)=>setTimeout(resolve,2000));
  console.log("saved data", formData.get("name"));
  
   
  
}

function App() {
  
  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <button type ="submit" disabled={pending}>
        {pending ? "submitting..." : "submit"}
      </button>
    );

  }

  return (
    <>
      <form action={saveData}>
        <input type="text" name="name" placeholder="Ener your name" required />
        <SubmitButton />
      </form>




    </>
  )
}

export default App
