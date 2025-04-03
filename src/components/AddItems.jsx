import React, { useState } from 'react'
import { FcPlus } from "react-icons/fc";

const AddItems = ({ addHandler }) => {
  const [name, setname] = useState('')
  const [date, setdate] = useState('')
  const nameHandler = (e) =>{
    setname(e.target.value);
  }
  const dateHandler = (e) =>{
    setdate(e.target.value);   
  }
  const addBtnHandler = () =>{
    addHandler (name, date)
    setname('')
    setdate('')
  }
  return (
    <div className='add-items'>
         <input onChange={nameHandler} type="text" value={name} placeholder='Add Todo  Items..'></input>
         <input onChange={dateHandler} type="date" value={date} placeholder='Add-date'></input>
         <button onClick={addBtnHandler} className='add-btn fs-4 ms-2'><FcPlus /></button>
    </div>
  )
}

export default AddItems;
