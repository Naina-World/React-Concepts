import React from 'react'

function MessageBox({children}) {
    const ishappy = true;
  return (
    <div>
        Message Box
      {children(ishappy)}
    </div>
  )
}

export default MessageBox
