import React from 'react'

const members = [
    {
        Name: 'Naina Kumari',
        Role: 'Frontend Engineer',
        img: 'https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=EqR2Lffp4tkIYzpqYh8aYIPRr-gmZliRHRxcQC5yylY='

    },

    {
        Name: 'Dolly Kumari',
        Role: 'Backend Engineer',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpPwgTuOf8U4SmlWlv4P9s5aU4wBYYuiaAgQ&s'

    },
    {
        Name: 'Anjali Kumari',
        Role: 'full stack engineer',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0K0X8fq3LNuM2l2mm4kGu4e1kSC8goYwryQ&s'

    },
]

function Flexbox() {
    return (
        <div className='p-10 bg-gray-200 min-h-screen'>
            <h1 className='text-3xl font-bold text-center'> Meet Our Team</h1>

            <div className=' flex justify-around items-center m-10 gap-4 sm:flex-col '>
                {members.map((member, index) => (
                    <div key={index} className='bg-white  shadow-md rounded-lg p-6 w-60 text-center hover:shadow-lg transition duration-300 flex items-center flex-col gap-2'>
                        <img src={member.img}
                            alt={member.Name}
                            className='w-20 h-20 rounded-full' />

                        <h2 className='text-xl font-semibold'>{member.Name}</h2>
                        <p className='text-gray-500'>{member.Role}</p>
                        <button className='bg-blue-500 rounded py-2 px-4 text-white hover:bg-blue-800 cursor-pointer'>View Profile</button>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Flexbox

