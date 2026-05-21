import { useState } from 'react'

import './App.css'
import React from 'react'

function App() {

function saveName (prevState,formData){
  console.log(prevState);
   const name = formData.get("Name");
   return `Hello ,${name}`
}

  const [message, formAction, isPending] = React.useActionState(saveName,"");

  return (
    <>
     
      
          <form action={formAction}>
            <input type ="text" name ="Name" placeholder ="Enter your name" />
            <button type ='submit'> Greet </button>
            {/* {message} */}
            {isPending? "loading......." :message }
          </form>
               
      
    </>
  )
}

export default App
