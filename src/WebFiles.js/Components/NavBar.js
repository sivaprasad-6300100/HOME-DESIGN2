import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../App.css'


const NavBar = () => {
  return (
    <div className='header'>
      <div className=' NavBar'>
        <span className='Nav-text'>HomeDesign</span>
         <NavLink to='/' className='none'>HOME</NavLink>
         <NavLink to='AlluminiumPage' className='none' >ALLUMINIUM</NavLink>
         <NavLink to='UpvcPage'className='none'>UPVC</NavLink>
         <NavLink to='WoodWork' className='none'>WOODWORK</NavLink>
         <NavLink to='SignIn' className='none'>REGISTER</NavLink>
      </div>
    </div>
      
    
  )
}

export default NavBar
