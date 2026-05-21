import React, { memo } from 'react'

function Child({learning}) {
    console.log("Child mounted")
  return (
    <div>
      
    </div>
  )
}

export default memo(Child)
