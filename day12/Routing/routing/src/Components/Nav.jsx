import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <>
        This is nav page
        <Link to ="/home">
        <button>
          Home
        </button>
    
        </Link>

             <Link to ="/about">
        <button>
          About
        </button>
    
        </Link>

             <Link to ="/contact">
        <button>
         contact
        </button>
    
        </Link>
    </>
  )
}

export default Nav
