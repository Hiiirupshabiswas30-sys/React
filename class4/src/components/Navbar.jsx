const Navbar = (props) => {

  console.log(props);
   
  return (
    <div style={{backgroundColor:props.color}} className='bg-pink-700 mb-1 text-2xl flex items-center justify-between px-8 py-5 '>
      <h1>{props.title}</h1>
      <div className='flex gap-10'>
       {props.links.map(function(elem,idx){
        return <h4 key={idx}>{elem}</h4>
       })}
      </div>
      </div>
  )
}

export default Navbar