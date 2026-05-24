import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Nav() {

  const navigate = useNavigate();

  const clicked = ()=>{
    navigate('/page2');
  }
  return (
    <div>
      <Link to='/page1'>
      Page1
      </Link>
        <Link to='/page2'>
      Page2
      </Link>
        <Link to='/page3'>
      Page3
      </Link>

      <button onClick={clicked}>
        Page2

      </button>
      
    </div>
  )
}

export default Nav
