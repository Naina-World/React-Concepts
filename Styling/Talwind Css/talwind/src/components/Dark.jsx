import React, { useEffect, useState } from 'react'

function Dark() {

    const [isDark , setIsDark] = useState(false)
    const root = document.documentElement;

    useEffect(()=>{
         if(isDark){
        root.classList.add('dark')
    }
    else{
        root.classList.remove("dark")
    }

    },[isDark])
   

  return (
    <div>
      <button onClick={()=>setIsDark((prev)=>!prev)} className='bg-indigo-500 py-2 px-4 text-white m-10'  >Toogle Dark</button>

      <div className='m-10 bg-white dark:bg-gray-800 text-black dark:text-white p-3 rounded border dark:p-10'>

        <h3 className='text-2xl mb-5 '> Enabling Dark/Light Mode</h3>
        <p className='font-serif dark:text-gray-300 text-sm' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugiat dicta dolore placeat, aspernatur provident unde repellendus numquam, nesciunt, vitae laborum illo quibusdam! In culpa facilis cumque, quos at natus.</p>

      </div>
    </div>
  )
}

export default Dark

