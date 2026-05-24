import { useState } from 'react'
import Red from "./components/Red"
import MessageBox from './components/MessageBox'
import useInernetStatus from './hooks/useInternetStatus'


function App() {
  const [count, setCount] = useState(0)
  const internetConnected = useInernetStatus();


  return (
    <>

   
{/* <h2>REnder Function</h2>
         <MessageBox>
          {
            (ishappy)=>(
              <p>{ishappy ? 'I am feeling happy today':'Today is not a good day'}</p>
            
          )
        }
          </MessageBox> */}
         

<header>
  {internetConnected?'Internet is connected':'Internet is not connected'}
</header>


    </>
  )
}

export default App
