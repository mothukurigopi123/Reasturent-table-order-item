import React, { useState } from 'react';

function Menu1({ tableNumber, setOrder }) {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Pizza', price: 10, quantity: 0 },
    { id: 2, name: 'Burger', price: 5, quantity: 0 },
    { id: 3, name: 'Pasta', price: 8, quantity: 0 }
  ]);

  const addItem = (id) => {
    setMenuItems(
      menuItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };

  const removeItem = (id) => {
    setMenuItems(
      menuItems.map(item => item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item)
    );
  };

  const handleOrder = () => {
    const selectedItems = menuItems.filter(item => item.quantity > 0);
    setOrder(selectedItems);  // Send order to parent component
  };

  return (
    <div>
      <h2>Menu for Table {tableNumber}</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} 
            <button onClick={() => addItem(item.id)}>Add</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
            <span> Quantity: {item.quantity}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleOrder}>Confirm Order</button>
    </div>
  );
}

export default Menu1;
