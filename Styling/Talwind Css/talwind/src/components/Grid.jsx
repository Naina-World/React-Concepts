import React from 'react'
import { prerenderToNodeStream } from 'react-dom/static';

const products = [
    {
        name: 'Wireless headphone',
        price: '$2499',
        img: 'https://vlebazaar.in/image/cache/catalog/B0856HNMR7/boAt-Rockerz-370-Wireless-Headphone-with-Bluetooth-50-Immersive-Audio-Lightweight-Ergonomic-Design-Cosy-Padded-Earcups-and-Up-to-12H-Playback-Bliss-Buoyant-Black-B0856HNMR7-1500x1500.jpg',
    },
    {
        name: 'Smart Watch',
        price: '$3499',
        img: 'https://m.media-amazon.com/images/I/61EclBYcocL._AC_UF1000,1000_QL80_.jpg',
    },
    {
        name: 'Bluetooth Speaker',
        price: '$5499',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cYWSaBNIhOPF2gguIun1olGtIYrHAlOO7w&s',
    },
    {
        name: 'Gaming Mouse',
        price: '$499',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplhQGunv0FOLtcer079ihE40Q_6IDx4j4Mw&s',
    },
    {
        name: 'Portable Charger',
        price: '$1499',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtPj30Rfj_OAkkdDz1oFVXTNbMlzHVbDZjw&s',
    },
    {
        name: 'DSLR Camera',
        price: '$7499',
        img: 'https://poojaelectronics.in/storage/2023/08/Nikon-D7500-DSLR-Camera-with-18-140mm-Lens-Online-Buy-India_01.jpg',
    },
];

function Grid() {
    return (
        <div className='p-10 bg-gray-200 min-h-screen'>
            <h1 className='text-3xl text-bold text-center mb-6'>Our Products</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {products.map((product,index)=>(
                    <div key={index} className='bg-white  shadow-md rounded-lg p-6 w-60 text-center hover:shadow-lg transition duration-300 '>
                        <img src = {product.img} className='w-full h-40 rounded mb-4'/>
                        <h2 className='text-2xl text-semibold'>{product.name}</h2>
                        <h2 className='text-gray-600 mb-2'>{product.price}</h2>
                        <button className='bg-blue-500 rounded py-2 px-4 text-white hover:bg-blue-800 cursor-pointer'>Buy Now</button>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Grid
