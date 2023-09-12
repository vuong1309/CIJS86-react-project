import React from 'react'
import { ReactComponent as NetflixIcon } from '../assets/logo/Netflix-Logo.wine.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full absolute flex-col sm:block'>
    <div className='flex items-center justify-between relative p-4 z-[100] max-w-[1375px] mx-auto'>
        <div>

        <Link to='/'>
        <NetflixIcon />
        </Link>
        </div>
        <div className='flex-col sm:block text-center'>
          <Link to='/signup'>
          <button className='text-white pr-4 px-6 py-2 border-solid border rounded cursor-pointer mr-2'>Sign Up</button>
            
          </Link>
          <Link to='/login'>
          <button className='text-white bg-red-600 border-red-600 border px-6 py-2 rounded cursor-pointer'>Sign In</button>
            
          </Link>
        </div>
    </div>
    </div>
  )
}

export default Navbar
