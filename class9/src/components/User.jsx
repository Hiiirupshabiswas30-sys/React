import React from 'react'

const User = (props) => {
    const clr1 = Math.floor(Math.random() * 256)
    const clr2 = Math.floor(Math.random() * 256)
    const clr3 = Math.floor(Math.random() * 256)
    return (
        <div style={{ backgroundColor: `rgb(${clr1},${clr2},${clr3})` }} className='user-card'>
            <h1>{props.elem.name}</h1>
            <h5>{props.elem.email}</h5>
            <h4>{props.elem.website}</h4>
                        

        </div>
    )
}

export default User