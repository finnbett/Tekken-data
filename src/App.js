import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { getFrameData } from './api';
import DisplayFrameData from './DisplayFrameData';


function App() {
  const [frameData, setFrameData] = useState([])
  console.log(Object.values(frameData))
  

  useEffect(() => {
    getFrameData()
    .then((res) => {
      setFrameData(res)
      return null
    })
    .catch(err => {
      console.log(err.message)
    })
  },[])
  return (
    <>
    <DisplayFrameData frameData={frameData}/>
    </>
  );
}

export default App;
