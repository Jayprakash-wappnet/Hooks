// this is child component
//useEffect hook calledd based on state or props
import React, { useState, useEffect ,useMemo} from "react";

function UseStateChild() {
  //there are two state count and data which is initially set at 0
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [show, setShow] = useState(true);

  //Below useEffect for state :count
  useEffect(() => {
    console.log("useEffect fire in child component for count state");
  }, [count]); //In the [] is condition this useEffect hook for state:count only

  //Below useEffect for state :data
  useEffect(() => {
    console.log("useEffect fire for Data state");
  }, [data]); //In the [] is condition this useEffect hook for state:data only

  //below function for increment in count
  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  //below function contain loop that might slow the execution of the code so resopnse was delayed
  const countNumber = (num) => {
    console.log("load everytime");
    for (let i = 0; i <= 90000000; i++) {}
    console.log(count);
    return num;
  };

  const checkData = useMemo(() => {
    return countNumber(count);
  },[count]);

  //below function for Decrement in count
  function handleDecrement() {
    setCount((prevCount) => prevCount - 1);
  }

  //below function for set 0
  function handleReset() {
    setCount((prevCount) => 0);
  }

  /* below function useed for if value is eithr greater than or less than 0 than 
  evalute its double else show  alert "Count is zero so Not able to Doble it" */

  function handleDouble() {
    if (count > 0 || count < 0) {
      setCount((prevCount) => prevCount * 2);
    } else {
      alert("Count is zero so Not able to Doble it");
    }
  }

  return (
    <div>
      <div className="conatainer mt-5">
        <h2>Count:{checkData}</h2>
        <button className="btn btn-primary my-3 mx-3" onClick={handleIncrement}>
          +
        </button>
        <button className="btn btn-danger mx-3" onClick={handleDecrement}>
          -
        </button>
        {/* below button is not related with the increment but if you used without memo than 
        its take more time to give result so we use useMemo hook*/}
        <button onClick={() => setShow(!show)}>
          {show ? "you clicked me" : "Click here"}
        </button>
        <button className="btn btn-secondary mx-3" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn-warning mx-3" onClick={handleDouble}>
          Double
        </button>{" "}
        <br />
        <h3>Data : {data}</h3>
        <button
          className="btn btn-success mx-3"
          onClick={() => setData(data + 1)}
        >
          Update Data
        </button>
      </div>
    </div>
  );
}

export default UseStateChild;
