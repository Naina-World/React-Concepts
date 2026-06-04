import React from 'react'

function Buttons() {
  return (
    <div>
      <h1 className='text-6xl font-bold text-center'>Cool Talwind Buttons</h1>
      <div className='ml-20 mt-4'>
        <button className='bg-primary hover:bg-blue-300 text-white py-2 px-6 text-semibold rounded cursor-pointer'>Primary button</button>
      </div>
      <div className='ml-20 mt-4'>
        <button className='border border-blue-500 hover:bg-blue-200 rounded py-2 px-6 cursor-pointer'>Outline</button>
      </div>
      <div className='ml-20 mt-4'>
        <button className='bg-radial from-pink-400 from-40% to-blue-700 py-2 px-6 rounded cursor-pointer'>Gradient</button>

      </div>
      <div className='ml-20 mt-4'>
        <button disabled className='bg-gray-600 cursor-not-allowed py-2 px-6 rounded'> Disabled</button>
      </div>
    </div>

  )
}

export default Buttons
