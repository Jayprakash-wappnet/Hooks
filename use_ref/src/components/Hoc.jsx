import React from 'react'
//Hoc take Parent component as input and return with adding background color
function Hoc(props) {
  return (
    <div>
      <p style={{backgroundColor:'red',width:300}}><props.cmp /></p>
      <p style={{backgroundColor:'green',width:300}}><props.cmp /></p>

    </div>
  )
}

export default Hoc
