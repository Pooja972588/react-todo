import React, { useState } from 'react'
import Logo from './components/Logo'
import AddItems from './components/AddItems'
import './App.css'
// import Items from './components/Items'
import ItemsList from './components/ItemsList'
import Message from './components/Message'
// import { Route, Routes, BrowserRouter } from 'react-router'

const App = () => {
  const [items, setItems] = useState([])
  const addHandler = (name, date) =>{
    const newItems = [{name, date}, ...items]

    setItems(newItems)
  }
  const deleteHandler = (name) =>{
    setItems(items.filter(el => el.name !== name))
    }  
  return (
    <div className='container'>
      <Logo/>
      <AddItems addHandler={addHandler}/>
      {
      items.length === 0 ?  <Message/> : <ItemsList deleteHandler={deleteHandler} items={items}/>
      } 

    </div>
  )
};

export default App
