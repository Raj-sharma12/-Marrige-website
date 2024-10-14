import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='fixed z-30 flex items-center justify-around w-full h-20'>
       <div className='w-auto '><h1 className='text-3xl font-bold text-red-500 underline'>Mandapam</h1></div>
      
            
        <Link to='/marriage-gardens'>    <button className='px-6 py-3 mx-2 text-sm font-semibold text-white hover:text-black bg-gradient-to-r from-cyan-500 to-blue-800 rounded-3xl'>BOOK NOW</button> </Link>
        

    </div>
  )
}

export default Header