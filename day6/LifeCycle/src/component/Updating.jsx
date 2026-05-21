import React from 'react'
import { useEffect } from 'react'

function Updating({value}) {
    useEffect(()=>{
        console.log("component has been updated")
    },[value])
  return (
    <div>
        {value}
      
    </div>
  )
}

export default Updating
