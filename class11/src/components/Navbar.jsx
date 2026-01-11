import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-4 bg-pink-900 md-10'>
    <h2>Navbar</h2>
    <div className='flex gap-6'>
      <Link to="/">Home Page</Link>
      <Link to="/product" >Product Page</Link>
      <Link to="/about">About Page</Link>
      <Link to="/courses">Courses</Link>
    </div>
   </div>
  )
}

export default Navbar