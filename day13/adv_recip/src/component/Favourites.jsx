import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Favourites() {
    const [favs,setFavs] = useState([])
    useEffect(()=>{
        const stored = JSON.parse(localStorage.getItem("favs"))
        setFavs(stored)

    },[])
  return (
    <div>
        <h2> Favourite recipe </h2>
        {favs.length === 0 && <p> No Favourites</p>}
        {favs.map((id)=>(
            <li key={id}>
            <Link to={`/recipe/${id}`}>
                View Recipe {id}
            </Link>
            </li>
   ) )}
      
    </div>
  )
}

export default Favourites
