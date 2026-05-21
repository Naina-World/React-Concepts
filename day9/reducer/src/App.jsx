import { useReducer, useState } from 'react'

import './App.css'

function reducer (state,action){
  switch(action.type)
  {
    case "increment":
      return state + 1;

      case "decrement":
        return state - 1;
  }
}

function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer,0)

  function increment (){
    dispatch({type : "increment"})
  }
  function decrement (){
    dispatch ({type : "decrement"})
  }

  return (
    <>
    
<button onClick={increment}> Add</button>
{state}
<button onClick={decrement}> Sub</button>
     
       
               
    </>
  )
}

export default App
