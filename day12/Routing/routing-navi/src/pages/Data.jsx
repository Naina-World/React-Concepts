import React from 'react'
import { useParams } from 'react-router-dom'

function Data() {
    const {UserId }= useParams();
    
  return (
    <div>
        <h2>
            Data loading
        </h2>
        <h2>
           {UserId ? `The  user id is  : ${UserId}`: `No userId`} 
        </h2>
      
    </div>
  )
}

export default Data
