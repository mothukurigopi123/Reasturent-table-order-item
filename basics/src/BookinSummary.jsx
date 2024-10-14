// src/components/BookingSummary.js
import React from 'react';

const BookingSummary = ({ selectedTable, bookings }) => {
  if (!selectedTable || !bookings[selectedTable] || bookings[selectedTable].length === 0) {
    return <div>No items booked for this table.</div>;
  }

  const bookedItems = bookings[selectedTable];

  return (
    <div>
      <h2>Booking Summary for Table {selectedTable}</h2>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {bookedItems.map((item, index) => (
          <li key={index} style={{ margin: '5px 0', fontSize: '18px' }}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingSummary;
