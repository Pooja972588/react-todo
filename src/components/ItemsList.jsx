import React from 'react'
import Items from'./Items'

const ItemsList = (props) => {
  return (
    <>
    {props.items.map((el) => <Items deleteHandler={props.deleteHandler}
     key={el.date} name={el.name} date={el.date}/>)}
    </>
  )
};

export default ItemsList;