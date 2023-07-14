import { useState } from 'react';
import './App.css';
import Child1 from './components/Child1';

function App() {
  const [val,setValue] = useState(1);
  return (
    <>
    <h1>hello world {val}</h1>
    <Child1 value={val}/>
    </>
  );
}

export default App;
