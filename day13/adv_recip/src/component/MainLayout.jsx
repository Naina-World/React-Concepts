import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
    <nav>
      <Link to= '/'>Home</Link>
      <Link to= '/favourite'>Favourite</Link>
      <Link to= '/login'>Login</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default MainLayout
