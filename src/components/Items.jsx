import React from 'react'
import { FcFullTrash } from "react-icons/fc";

const Items = ({name, date, deleteHandler}) => {
  return (
    <div className="todo-items">
      <h5>{name}</h5>
      <h5>{date}</h5>
      <button onClick={()=>{deleteHandler(name)}} className="delete-btn fs-4"><FcFullTrash /></button>
    </div>
  )
};

export default Items
