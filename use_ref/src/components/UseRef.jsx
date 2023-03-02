import React , {useRef} from 'react'

function UseRef() {
    let ref = useRef(0);

    function handleClick(){
        ref.current = ref.current + 1 ;
        alert('You clicked me ' + ref.current +  '  times on button')
    }
  return (
    <div>
      <h2>useRef</h2>
      <button className="btn btn-primary" onClick={handleClick}>Clicked Me</button>
      
    </div>
  )
}

export default UseRef
