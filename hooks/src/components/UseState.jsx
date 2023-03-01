// this is parent component 
import React,{ useState, useEffect } from "react";
import UseStateChild from "./UseStateChild"; //child component imported

/*below function is basic of useState on onClick event we set the setState as differen property*/
function UseState() {
  const [name, setName] = useState("Jayprakash");
  const [branch, setBranch] = useState("C.S.E");


  //useEffect hook this called every=time when page render

  useEffect(() => {
    console.log("useEffect fire in Parent component");
  });


  // onClick event this function set new property 
  const handleClick = () => {
    setName("Aryan");
    setBranch("Electrical");
  };

  return (
    <div>
      <h1 className="heading">Hooks</h1>
      <h2 className="subtitle1">useState()</h2>
      <p>
        Student name is {name} and He is In branch {branch}
      </p>
      <button className="btn btn-info" onClick={handleClick}>
        Click Here
      </button>{" "}
      <br />
      <UseStateChild />
    </div>
  );
}

export default UseState;
