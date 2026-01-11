import React from 'react'

const Lower = (props) => {
  return (
       <div className='lower'>
            <h2>{props.cardData.userrname}</h2>
            <h3>{props.cardData.email}</h3>
            <h4>{props.cardData.role}</h4>
        </div>
  )
}

export default Lower