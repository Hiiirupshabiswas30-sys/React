import React, { useState } from 'react'

const App = () => {

  // 1 //  const [num, setNum] = useState(0)

  //2 // const arr = ['sarthak', 'harsh', 'ajay', 'ankit', 'hitesh']

  // const [num, setnum] = useState(0)

  const [marks, setmarks] = useState([20, 55, 98, 12, 29])
  function graceStudent() {

    const newMarks = marks.map(function (elem) {
      if (elem > 95) {
        return elem
      } else {
        return elem + 5
      }
      })
    setmarks(newMarks)

  }
  return (
    //1// <div>
    //   <div className='box'>
    //     {num}
    //   </div>
    //   <button onClick ={() => {
    //     const rdm = Math.floor(Math.random()*100)
    //     setNum(rdm)
    //   }}>Click here</button>
    // </div>

    //  2 // <div>
    //   <h1>{arr[num]}</h1>
    //   <button onClick={() => {
    //     if (num < arr.length - 1) {
    //       console.log(num)
    //       setnum(num + 1)
    //     }
    //   }}>Change user</button>
    // </div>

    <div>
      {marks.map(function (elem, idx) {
        return <h1 key={idx}>student {idx + 1} = {elem} ({elem > 33 ? 'P' : 'F'})</h1>

      })}
      <button onClick={graceStudent}> Give them grace</button>

    </div>
  )
}

export default App