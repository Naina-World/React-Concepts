import { useState } from 'react'
import './App.css'
import Mycomponent from './Component/Mycomponent'
import Array from './Component/Array'

function App() {
  const [count, setCount] = useState(0)
 const  array = [1,3,45]
 function Fun_gen(){
  alert("Button has been clicked");
 }


  return (
    <>
     



      <Mycomponent caption = 'Click Me , I am from app.jsx'/>
      <Array Arr = {array}/>
      <button onClick={Fun_gen}> Click Me </button>
        
           
    </>
  )
}

export default App
