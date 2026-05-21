import React, { useEffect } from 'react'

function Unmounting() {
    const fetchApi = async()=>{
      const response = await fetch("https://dummyjson.com/products");
      const data =  await response.json();
      console.log(data);
        
    };
    useEffect(()=>{
      console.log("child2 has been mounting")
    },[])

    useEffect(()=>{
      const Inetervalid = setInterval(fetchApi,2000);

      const cleanup = (()=>{
        console.log('child2 has been unmounting');
        clearInterval(Inetervalid)

      })
      return cleanup;
    },[])

  return (
    <div>
      <h1>this is child two</h1>
    </div>
  )
}

export default Unmounting
