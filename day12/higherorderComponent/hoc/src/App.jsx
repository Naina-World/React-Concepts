import { useState } from 'react'
import Red from "./components/Red"
import MessageBox from './components/MessageBox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

   
<h2>REnder Function</h2>
         <MessageBox>
          {
            (ishappy)=>(
              <p>{ishappy ? 'I am feeling happy today':'Today is not a good day'}</p>
            
          )
        }
          </MessageBox>
         




    </>
  )
}

export default App
