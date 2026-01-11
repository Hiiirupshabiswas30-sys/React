import React from 'react'
import Upper from './Upper.jsx';
import Lower from './Lower.jsx';

const Card = (props) => {

   
    
  return (
    <div className='card'>
        <Upper cardData={props.cardData}/>
        <Lower cardData={props.cardData} />
     
    </div>
  )
}

export default Card