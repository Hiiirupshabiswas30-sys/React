import React, { useState } from 'react'


const App = () => {

  const [userName, setuserName] = useState('')
  const [userRole, setuserRole] = useState('')
  const [imageURL, setimageURL] = useState('')
  const [userDesc, setuserDesc] = useState('')

  const [allUsers, setAllUsers] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()
    console.log(userName, userRole, imageURL, userDesc);

    // const oldUsers = [...allUsers]
    // oldUsers.push({ userName, userRole, imageURL, userDesc })
    // console.log(oldUsers);

    setAllUsers([...allUsers,{userName, userRole, imageURL, userDesc}])


    setuserName('')
    setimageURL('')
    setuserRole('')
    setuserDesc('')

}

const deleteHandler = (idx)=>{
  const copyUsers = [...allUsers]
  copyUsers.splice(idx,1)
  
  setAllUsers(copyUsers)
  
  
}


  return (
    <div className=' h-screen bg-black text-white '>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex flex-wrap py-2 px-2'>

        <input
          value={userName}
          onChange={(e) => {
            setuserName(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-3 lg:w-[48%]'
          type="text"
          placeholder='Enter your name' />

        <input
          value={imageURL}
          onChange={(e) => {
            setimageURL(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-3 lg:w-[48%]'
          type="text"
          placeholder='Image URL' />

        <input
          value={userRole}
          onChange={(e) => {
            setuserRole(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-3 lg:w-[48%]'
          type="text"
          placeholder='Enter role' />

        <input
          value={userDesc}
          onChange={(e) => {
            setuserDesc(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-3 lg:w-[48%]'
          type="text"
          placeholder='Enter Description' />


        <button className='px-170 py-2 text-xl font-semibold bg-emerald-600 rounded m-5 '>Create User</button>
      </form>

      <div className='flex gap-4 flex-wrap px-10 py-10'>
           {allUsers.map(function(elem,idx){
            return<div key={idx} className='lg:w-[23vw] md:w-[30vw] sm:w-[45vw] px-8 py-8 flex-col flex items-center  bg-white text-black rounded-xl'>
          <img className='h-24 w-24 rounded-full' src={elem.imageURL}alt="" />
          <h1 className='text-2xl mt-2 font-bold'>{elem.userName}</h1>
          <h5 className=' text-blue-600 text-lg font-semibold my-2'>{elem.userRole}</h5>
          <p className='text-sm font-medium leading-tight'>{elem.userDesc}</p>
          <button onClick={()=>{
            deleteHandler(idx)
          }} className='px-2 py-1 rounded bg-red-700 text-white font-semibold mt-8 items-center cursor-pointer active:scale-95'>Remove</button>
       </div>
           })}
        </div>
    
      </div>
    
  )
}

export default App
