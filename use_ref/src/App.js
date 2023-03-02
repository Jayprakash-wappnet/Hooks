import './App.css';
import Parent from './components/Parent';
import UseRef from './components/UseRef';
import Hoc from './components/Hoc';

function App() {
  return (
    <div className="App">
      <UseRef />
      <Parent />
      {/* HOC used for return same component with adding some in the component*/}
      <Hoc cmp={Parent} /> 

    </div>
  );
}

export default App;
