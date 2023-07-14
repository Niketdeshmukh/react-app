import { useState } from 'react';
import './App.css';
import Child1 from './components/Child1';
import { useSelector } from 'react-redux';

function App() {
  const data = useSelector((c)=> c.show.value);
  return (
    <>
    <h1>hello world {data}</h1>
    <Child1/>
    </>
  );
}

export default App;
