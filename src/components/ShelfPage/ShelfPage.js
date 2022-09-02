import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Item from '../Item/Item';

function ShelfPage() {

  useEffect( () => {
    getItems();
  }, [])
  
  const dispatch = useDispatch();
  
  const items = useSelector(store => store.item);
  
  const getItems = () => {
    dispatch({
      type: 'FETCH_ITEM',
    })
  }

  //DELETE


  return (
    <div className="container">
      <h2>Shelf</h2>
      {items.map( (item) => (
          <Item item={item}/>
      ))}
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
