import React from 'react'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='text-center '>
      <Header />
      <Outlet />
    </div>
  )
}

export default App