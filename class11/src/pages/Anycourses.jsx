import React from 'react'
import { useParams } from 'react-router-dom'

const Anycourses = () => {

const params = useParams()
console.log();


  return (
    <div>
         <h1 className='capitalize text-5xl whitespace-nowrap font-semibold fixed underline left-[50vw] -translate-x-1/2'>
      {params.courseid} Some course Page
      </h1>
    </div>
  )
}

export default Anycourses