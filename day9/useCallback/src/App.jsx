import { useCallback, useState } from 'react'

import './App.css'
import Child from './component/Child'

function App() {
  const [add , setAdd] = useState(0)
  const [count, setCount] = useState(0)
const learning = useCallback(()=>{

},[count]

);

  return (
    <>
      <button onClick={()=>setAdd(add+1)}>Add: {add}</button>
      <button onClick={()=>setCount(count+1)}> Count: {count}</button>
      <Child learning = {learning }/>
     
    </>
  )
}

export default App
