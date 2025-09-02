import React from 'react'

import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full p-4 bg-sky-500 flex justify-between items-center'>
      <div className='text-White font-bold text-2xl'>

      <h1>Test code</h1>
      </div>
      <div className='flex gap-4 text-white  font-bold'>
     <Link to="/"> Home</Link>
     <Link to="/About"> About</Link>
     <Link to="/contact"> Contact</Link>
    
      </div>
    </div>
  )
}

export default Header
