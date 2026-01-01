import React, { useState } from 'react'

const App = () => {

const [num, setNum] = useState(0)

// const [king, setking] = useState('Hitesh')
// const [queen, setQueen] = useState('Sonu')
//     const changeKing = ()=>{
//        setking('Satya')
//     }
//     const changeQueen= ()=>{
//         setQueen('lali')
//     }

   
    return (
        // <div>
        //     <h1>{king} & {queen}</h1>
        //      <button onClick={changeKing}>ChangeKing</button>
        //     <button onClick={changeQueen}>ChangQueen</button>
        // </div>
        <div>
            <h1>{num}</h1>
            <button onClick={()=>{
               setNum(num+1)
            }}>Increase</button>

            <button onClick={()=>{
               setNum(num-1)
            }}>Decrease</button>

            <button onClick={()=>{
               setNum(num+5)
            }}>Jump by 5</button>

        </div>
    )
}

export default App