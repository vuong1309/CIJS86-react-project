import React from 'react'
import { ReactComponent as NetflixIcon } from '../assets/logo/Netflix-Logo.wine.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between absolute p-4 z-[100] max-w-[1375px] mx-auto'>
        <Link to='/'>
        <NetflixIcon />
        </Link>
        <div>
        <Link to='/signup'>
        <button className='text-white pr-4 px-6'>Sign Up</button>
          
        </Link>
        <Link to='/login'>
        <button className='text-white bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign In</button>
          
        </Link>
        </div>
    </div>
  )
}

export default Navbar
