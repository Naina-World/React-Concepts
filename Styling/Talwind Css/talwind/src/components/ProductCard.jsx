import React from 'react'

function ProductCard() {
    return (
        <div className='@container  rounded-xl shadow-md bg-white max-w-[700px] mt-[60px] p-3 '>
            <div className='flex flex-col gap-4'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfY9y_HaPXn5z-oAUhLbdyaHDGNRti64H2tA&s" alt="" className='w-full h-[280px] rounded-lg @min-[400px]:h-[400px] @min-[600px]:h-[550px]' />

                <div className='flex-1'>
                    <h2 className='text-lg font-bold @min-[600px]:text-gray-600 '>Premium Wireless headphone</h2>
                    <p className='text-gray-500 text-sm mt-2'>Noise Cancellation , Premimum Sound and 30 hrs battery life</p>
                    <div className='flex justify-between items-center gap-2'>
                        <span className='text-primary font-bold'>$199</span>
                        <button className='bg-blue-500 rounded py-2 px-4 text-white hover:bg-blue-800 border-none cursor-pointer'>Buy Now</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProductCard
