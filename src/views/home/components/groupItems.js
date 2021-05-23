import React from 'react';
import Item from '../components/item';
import './components.css';

const GroupItems = (props) => {
  const {
    items
  } = props;


  return (
    <div className="group-item">
      {items.map((item, i) => 
        <Item
          key={i}
          dataItem={item}
        />
      )}
    </div>
  )
}


export default GroupItems;