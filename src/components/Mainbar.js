import React from 'react'
import '../styles/mainbar.css'
import { useContext } from 'react';
import { MyContext } from '../MyContext';
import { Link, Route, Routes } from 'react-router-dom';
import Note from './Note';

function Mainbar() {
    const { value2,value3 } = useContext(MyContext);
  const [stateValue2, setStateValue2] = value2;
  const [stateValue3, setStateValue3] = value3;
  function handleCick(e){
    e.preventDefault()
  }
  return (
    <div id='main'>
        <textarea id='title' placeholder='title' rows='2' onChange={(e)=>setStateValue2(e.target.value)}></textarea>
        <textarea id='take' placeholder='take a note...' rows='4' onChange={(e)=>setStateValue3(e.target.value)}></textarea>
        <button onClick={handleCick}>submit</button>
        
    </div>
  )
}

export default Mainbar