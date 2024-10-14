// src/components/Menu.js
import React from 'react';

const Menu = ({ selectedTable, bookings, setBookings }) => {
  const menuItems = [
    { id: 1, name: 'Pasta', price: 10 },
    { id: 2, name: 'Pizza', price: 12 },
    { id: 3, name: 'Salad', price: 8 },
  ];

  const addItemToBooking = (item) => {
    const updatedBookings = { ...bookings };
    if (!updatedBookings[selectedTable]) {
      updatedBookings[selectedTable] = [];
    }
    updatedBookings[selectedTable].push(item);
    setBookings(updatedBookings);
  };

  return (
    <div>
      <h2>Menu</h2>
      {menuItems.map(item => (
        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '18px' }}>{item.name} - ${item.price}</span>
          <button
            onClick={() => addItemToBooking(item)}
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 15px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
