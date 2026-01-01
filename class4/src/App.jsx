import Navbar from './components/Navbar'
import Men from './components/Men'
import Women from './components/Women'
const App = () => {
  // const user1 = {
  //   name: 'Sarthak',
  //   age: 30,
  //   gender: 'male',
  // }
  // const user2 = {
  //   name: 'Shreya',
  //   age: 20,
  //   gender: 'female',
  // }
  //  const user3 = {
  //   name: 'Bixi',
  //   age: 8,
  //   gender: 'male',
  // }

  function btnclicked (){
    console.log('Button is Clicked!!!');
  }


  return (
    // <div>
    //  <Navbar title='Sarthak'color='red' links={['Home','About','Account','Contact']}/>
    //  <Navbar title='Bixi' color='blue' links={['Home','Services','Courses','Contact','Video']}/>
    //  <Navbar title='Anubhav' color='green' links={['Home','Product','Men']}/>
    //   </div>
    //   <div>
    //     {user1.gender =='male' ? user1.age>10?<Men /> : <Women />: <Women />}

    //   </div>
    <div> <button 
    onClick={btnclicked}
    className='active:scale-95 bg-gray-600 px-5 py-6 m-2 rounded-2xl flex font-bold'>Downlode</button> </div>
  )
}

export default App
