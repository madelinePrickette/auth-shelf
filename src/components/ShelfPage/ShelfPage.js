import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
const deleteItem = (id) => {
  dispatch({
      type: 'DELETE_ITEM',
      payload: id
  })
}

  return (
    <div className="container">
      <h2>Shelf</h2>
      {items.map( (item) => (
          <div key={item.id}>
            <img src={item.image_url}></img>
            <p>{item.description}</p>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
         </div>
      ))}
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
