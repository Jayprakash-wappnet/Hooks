import React from 'react'
import { useState } from 'react'

function UseState() {
    const [name,setName] = useState('Jayprakash');
    const [branch,setBranch] = useState('C.S.E');

   const handleClick = () => {

        setName('Aryan');
        setBranch('Electrical')
    }

  return (
    <div>
      <p>Student name is {name} and He is In branch {branch}</p>
      <button onClick={ handleClick }>Click Here</button>
    </div>
  )
}

export default UseState
