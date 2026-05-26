import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
    <nav style={{padding: '1rem',display :'flex',gap:"10px", justifyContent:"center"}}>
      <Link to= '/'>Home</Link>
      <Link to= '/favourites'>Favourites</Link>
      <Link to= '/login'>Login</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default MainLayout
