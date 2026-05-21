import React, { forwardRef } from 'react'

function Test(_ , ref) {
  return (
    <div ref={ref}>
      <h2 >Test component</h2>
      <button >ABCD</button>
    </div>
  )
}

export default forwardRef(Test)
