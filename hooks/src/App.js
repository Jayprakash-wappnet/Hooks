import './App.css';
import UseEffectProps from './UseEffectProps';
import UseEffect1 from './components/UseEffect1';
import UseState from './components/UseState';
import React,{useState} from 'react';


function App() {  
  const [count,setCount] = useState(0);
  const [data,setData] = useState(0);

  return (
    <div className="App">
    <UseState/>
    <UseEffectProps count = {count} data = {data}/>
    <button onClick={() => setCount(count +1)}>Increment count</button>
    <button onClick={() => setData(data +1)}>Increment Data</button>

    <div className='container'>
      <UseEffect1/>
    </div>

    </div>
  );
}

export default App;
