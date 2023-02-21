import React from 'react'
import logo from '../images/airbnb.png'

const Navbar = () => {
  return (
    <div>
      <nav>
        <img src={logo} className='logo' alt='airbnblogo'/>
      </nav>
    </div>
  )
}

export default Navbar
