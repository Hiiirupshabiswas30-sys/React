import React from 'react'

const Button = (props) => {
    console.log(props)
  return (
    <div className='bg-green-600 w-fit font-bold text-2xl px-4 py-2 rounded m-2 text-white' >{props.text}</div>
  )
}

export default Button