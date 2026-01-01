import React from 'react'
import Card from './components/Card'
import Button from './components/button'
const App = () => {

  const users = ['Apple', 'Cat', 'Dog','Fish']


  return (
    // <div className='p-3 h-screen bg-black' >

    //   <Card user='RUP' age='19' />
    //   <Card user='RUSA' age='20' />
    //   <Button  text='Buy Now'/>
    //   <Button  text='Clik'/>
    <div className='p-3 h-screen text-amber-50 bg-black'>
      {users.map(function (elem) {
        return <Card user={elem}/>
        
      })}
      
    </div>
  )
}

export default App