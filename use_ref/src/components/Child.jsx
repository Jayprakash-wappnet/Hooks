// this component's Input box change its value on click the button which situated in parent component
import React , {forwardRef} from 'react'

function Child(props,ref) {
  return (
    <div>
      <input type='text' ref={ref}></input>
    </div>
  )
}

export default forwardRef(Child)
