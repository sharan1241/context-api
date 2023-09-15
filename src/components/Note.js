import React from 'react'
import '../styles/note.css'
import { useContext } from 'react';
import { MyContext } from '../MyContext';

function Note() {
    const {  value2,value3 } = useContext(MyContext);
  
  const [stateValue2, setStateValue2] = value2;
  const [stateValue3, setStateValue3] = value3;
  return (
    <div id='note'>
        <div id='one'>
        <div id='state1'>{stateValue2}</div>
        <div id='state2'>{stateValue3}</div>
        </div>
    </div>
  )
}

export default Note