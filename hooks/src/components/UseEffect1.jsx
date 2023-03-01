import React , {useState , useEffect}from 'react'

function UseEffect1() { 
    const [resourse,setResource] = useState('Post')

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourse}`)
      .then(response => response.json())
      .then(json => console.log(json))
    })
  return (
    <div>
      <button onClick={() => setResource('Posts')} className='mt-5 btn btn-success'>Posts</button>
      <button onClick={() => setResource('Users')} className='mt-5 mx-3 btn btn-warning'>Users</button>
      <button  onClick={() => setResource('Likes & Comments')} className='mt-5 btn btn-info'>L + c</button>
      <h2>{resourse}</h2>
    </div>
  )
}

export default UseEffect1
