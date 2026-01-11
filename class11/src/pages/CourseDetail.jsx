import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

  const params = useParams()
  console.log();
  

  return (
    <div>
     <h1 className='capitalize text-5xl font-semibold underline'>
    {params.courseid}Course Detail Page
      </h1>
      </div>
  )
}

export default CourseDetail