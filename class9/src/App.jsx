import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './components/User'
const App = () => {

  // async function getData(){

  const [allData, setAllData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setAllData(response.data);

  }

  // const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
  // console.log(response.data);

useEffect(()=>{
  getData()
},[])
  return (
    <div>
      {/* <button onClick={getData}>Get Data</button> */}

      <div className='all-cards'>
        {allData.map(function (elem, idx) {
          return <div key={idx}>
             <User elem={elem} />
             </div>
        })}

      </div>
    </div>
  )
}

export default App