import React from 'react'
import { useSearchParams } from 'react-router-dom'

function GreetUser() {
    const [SearchParam , setSearchParam] = useSearchParams();
    const name = SearchParam.get('name' || 'Guest')
    const handleSubmit = () =>{
        setSearchParam({name :'Naina'})

    }

  return (
    <div>
         <h2>Hello, {name}</h2>
         <button onClick={handleSubmit}> set name to Naina</button>
      
    </div>
  )
}

export default GreetUser
