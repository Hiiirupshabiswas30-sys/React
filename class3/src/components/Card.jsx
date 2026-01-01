import React from 'react'

const Card = (props) => {

console.log(props)
    // const age = 29 ;
    // const user = 'Sarthak';
    // const arr = [10 ,20,30,40]
    // const user = 'Html'
    // const arr = ['his','him']
    return (
        // <div>
        //     <h1>{arr.map(function(){
        //          return 'he'
        //     })}</h1> 
        // </div>
        // <div>
        //     {arr.map(function(elem){
        //         return <h1>{elem} is female</h1>
        //     })}
        // </div>
        //     <div className='bg-amber-200 m-2 border-2 border-red-800 rounded px-5 py-3 w-fit'>
        //         <h1 className='text-2xl font-semibold'> 
        //             {props.user},{props.age}</h1>

        //     </div>
        <div className='bg-amber-200 m-2 border-2 border-red-800 rounded px-5 py-3 w-60 h-60 flex justify-center items-center'>
            <h1 className='text-2xl text-blue-950'>
            {props.user}
            </h1>

        </div>

    )
}

export default Card