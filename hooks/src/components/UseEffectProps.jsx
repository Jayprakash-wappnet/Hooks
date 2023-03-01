import React, { useEffect } from "react";

export default function UseEffectProps(props) {
  //this useEffect called for props.data
  useEffect(() => {
    console.log("useEffect Fire for passed props.count"); //when Increment for count useEffectcalled its show in console
  }, [props.count]);

  //this useEffect called for props.data
  useEffect(() => {
    console.log("useEffect Fire for passed props.data"); //when Increment for data useEffectcalled its show in console
  }, [props.data]);

  return (
    <div>
      <h1>useEffect using props : {props.count}</h1>

      <h1>useEffect using props : {props.data}</h1>
    </div>
  );
}
