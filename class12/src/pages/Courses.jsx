import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
        {/* <h1>Courses</h1> */}
        <div className='sale'>
            <p>Sale is LIVE!!!</p>
            <p>Sale is LIVE!!!</p>
            <p>Sale is LIVE!!!</p>
            <p>Sale is LIVE!!!</p>
            <p>Sale is LIVE!!!</p>
            <p>Sale is LIVE!!!</p>
            <p>Sale is LIVE!!!</p>
            <p>Sale is LIVE!!!</p>
            <p>Sale is LIVE!!!</p>
            <p>Sale is LIVE!!!</p>
           
        </div>
        <Outlet />
    </div>
  )
}

export default Courses