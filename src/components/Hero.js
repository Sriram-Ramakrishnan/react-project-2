import React from 'react'
import herogrid from '../images/hero_img.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={herogrid} alt='heroimg'/>
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
 </p>
    </div>
  )
}

export default Hero
