import React from 'react'
import Card from './components/Card'

const App = () => {

const cardData1 ={
  userrname: 'Anubhav',
  role:'Engineer',
  email:'anu@gmail.com',
  profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1AKF7LelsXtbK8YAYYdiPrDMZdFd74ZTgkQ&s',
}
 const cardData2 = {
    username:'Danish',
    role:'Mentor',
    email:'danish@gmail.com',
    profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwTTe6vHiR2cG4aFIfVFAsE-GPx8DVVzKU7g&s'
  }



  return (
    <>
 <Card cardData={cardData1}/>
 <Card cardData={cardData2}/>
 </>

  )
}

export default App