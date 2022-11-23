import React from 'react'
import '../CSS/inputcontrols.css'

export default function inputcontrols(props) {
  return (

    <div className='containerinput'>
    {props.label && <label>{props.label}</label>}
    <input type="text"></input>


    </div>

  );
}
