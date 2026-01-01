//form handaling----1
// import React, { useState } from 'react'

// const App = () => {

//   const submitHandler = (e)=>{
//     e.preventDefault()
//     console.log('from submitted');
//   }

//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//         <input type="text" placeholder='Enter name' />
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//twoway binding ---2
import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('')

  const [allUsers, setallUsers] = useState(['harsh'])

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(username);

    const newAllUsers =[...allUsers]
    newAllUsers.push(username)

    console.log(newAllUsers);

    setallUsers(newAllUsers);



    setUsername('')
  }

   

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" placeholder='Emter your number'
          // onChange={(e)=>{
          //   console.log(e.target.value);
          // }}
          //value='rups'
            value={username}
          onChange={(e)=>{
          //console.log(e.target.value);
        setUsername(e.target.value)
        }}
        />
        <button>Submit</button>
      </form>

        {allUsers.map(function(elem){
          return<h4>{elem}</h4>
        })}


    </div>
  )
}

export default App