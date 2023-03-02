import React, { useRef } from "react";
import Child from "./Child";

function Example2() {
  let inputRef = useRef(0);

  function handleClick() {
    inputRef.current.value = "131013";
    inputRef.current.focus();
  }

  const frwdRef = useRef(null);

  function handleFrwdClick() {
    frwdRef.current.value = "5006";
    frwdRef.current.focus();
  }

  return (
    <div className="container mt-5">
      {/* here input handled by useRef it is never use Stet for handle the input field that's why its called Uncontrolled component */}
      <input type="text" ref={inputRef}></input> <br />
      <button onClick={handleClick}>Clicked Here</button>
      <h2>forward Ref</h2>
      <Child ref={frwdRef} />
      <button onClick={handleFrwdClick}>forwardRef button</button>
    </div>
  );
}

export default Example2;
