import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex items-center justify-between py-2 px-4 shadow-sm'>
      <Link to='/'><strong className='font-bold text-blue-500 text-2xl'>ShoppyGlobe .</strong></Link>
      <ul>
        <Link to='/'><li>Home</li></Link>
      </ul>
      <Link to='/cart'><p>cartIcon</p></Link>
    </div>
  )
}

export default Header