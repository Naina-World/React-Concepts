import React from 'react'


function Profile() {
    return (
        <div className='mx-auto text-center  '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXuM2b4djVbMt63hftHrWFFMeQmccyytKlQ&s" className="w-30 h-30 m-auto rounded-full border-4 border-blue-500" />

            <h2 className='mt-4 text-2xl font-bold text-gray-700'>
                Naina Kumari
            </h2>
            <p className='text-gray-500'>Frontend Developer</p>
            <p className='mt-2 text-gray-500'>Passionate in doing nothing</p>

            <div className='flex justify-center gap-4 mt-4'>
                <button className='bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700'>Follow</button>
                <button className='bg-secondary text-white px-4 py-2 rounded-lg hover:bg-gray-400'>Message</button>
            </div>
            <input type="text" placeholder='Enter you input' className = "border-black p-4 rounded-2xl focus:outline-amber-500 focus:bg-blue-800" />

            <div className="group hover:bg-green-500"> 
                <p className='text-lg group-hover:text-9xl'>
                    Profile Name
                </p>
                <p className='text-sm text-red-600'>photo</p>
            </div>
            <button className='bg-amber-700 disabled:bg-fuchsia-800 disabled:cursor-not-allowed' disabled>
                submit
            </button>

        </div>
    )
}

export default Profile
