import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { getFrameData } from './api';
import DisplayFrameData from './DisplayFrameData';


function App() {

  return (
    <>
    <DisplayFrameData />
    </>
  );
}

export default App;
