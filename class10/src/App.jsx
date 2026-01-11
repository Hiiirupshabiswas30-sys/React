import React, { useEffect, useState } from 'react'

const App = () =>{

  const [counter, setCounter] = useState(0)
const [title, settitle] = useState('')
  useEffect(function(){
    console.log("useEffect called");
  },[])
  return (
    // <div>
    //   <h1>{counter}</h1>
    //   <button onClick={()=>{
    //     setCounter(counter + 1)
    //     }}> Increase</button>
    // </div>
<div>
  <p>Input</p>
  <input value={title} onChange={(e)=>{
settitle(e.target.value)
}} type="text" placeholder='Enter name'  /> 

 <h1>{counter}</h1>
       <button onClick={()=>{
         setCounter(counter + 1)
        }}> Increase</button>
</div>

  )
}

export default App